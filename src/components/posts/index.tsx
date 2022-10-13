import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { getAllBlogPost } from 'services';
import { Button, Skeleton } from 'antd';
import ModalAddPost from './ModalAddPost';
import { useRouter } from 'next/router';

interface PostsProps {
  userId: any;
}

const Posts: React.FC<PostsProps> = (props) => {
  const { userId } = props;
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading } = useQuery('post', getAllBlogPost);

  const handleToPostDetail = (postId: number) => {
    router.push(`/user/${userId}/blog/post/${postId}`);
  };

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <PostContainer>
            <Button type="primary" onClick={() => setOpenModal(true)}>
              Add New Post
            </Button>
            {data?.data
              ?.filter((data) => userId.includes(data.userId))
              .map((post) => (
                <ListPost
                  key={post.id}
                  onClick={() => handleToPostDetail(post.id)}
                >
                  <PostTitle>{post.title}</PostTitle>
                </ListPost>
              ))}
          </PostContainer>
          <ModalAddPost
            userId={userId}
            openModal={openModal}
            setOpenModal={setOpenModal}
          />
        </>
      )}
    </>
  );
};

export default Posts;

const PostContainer = styled.div`
  padding: 0 2rem;
`;

const ListPost = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const PostTitle = styled.p`
  padding: 1rem;
  font-weight: bold;
`;
