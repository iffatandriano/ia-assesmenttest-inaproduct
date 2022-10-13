import styled from '@emotion/styled';
import React from 'react';

interface CommentsProps {
  datas: any;
}

const Comments: React.FC<CommentsProps> = (props) => {
  const { datas } = props;

  return (
    <div>
      <h2>Comments</h2>
      {datas.length > 0 ? (
        <>
          {datas.map((comment) => (
            <CommentContainer key={comment.id}>
              <CommentContent>
                <section>
                  <h2>{comment.name}</h2>
                  <h5>{comment.email}</h5>
                </section>
                <span style={{ marginTop: '15px', marginBottom: '15px' }}>
                  Comments : {comment.body}
                </span>
              </CommentContent>
            </CommentContainer>
          ))}
        </>
      ) : (
        <p>Data not found.</p>
      )}
    </div>
  );
};

export default Comments;

const CommentContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;
