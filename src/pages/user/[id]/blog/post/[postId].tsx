import Comments from '@/components/comments';
import MainLayout from '@/components/mainlayout';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getAllComments, getPostById } from 'services';

const PostDetailWithId: React.FC = () => {
  const router = useRouter();
  const postId = router?.query?.postId;
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const getPostDetailById = async () => {
    try {
      const { data } = await getPostById(postId);

      setData(data);

      let postDetail = [];
      postDetail.push(data.id);

      const response = await getAllComments();

      const filterByPostId = response.data.filter((data) =>
        postDetail.includes(data.postId)
      );

      setComments(filterByPostId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostDetailById();
  }, []);

  return (
    <MainLayout>
      <PostContainer>
        {data !== 'undefined' ? (
          <>
            <PostTitle>{data?.title}</PostTitle>
            <p>{data?.body}</p>
          </>
        ) : (
          <p>No Found data</p>
        )}
        <Comments datas={comments} />
      </PostContainer>
    </MainLayout>
  );
};

export default PostDetailWithId;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h2`
  font-weight: bold;
`;
