import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { getAllUsersAccount } from 'services';
import styled from '@emotion/styled';
import { Skeleton } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Users: React.FC = () => {
  const router = useRouter();
  const { data, isLoading } = useQuery('user', getAllUsersAccount);

  const onClickToPosts = (userId: string) => {
    router.push(`/user/${userId}/blog`);
  };

  return (
    <Container>
      {!isLoading ? (
        <UserContainer>
          {data?.data?.map((user) => (
            <ListUser onClick={() => onClickToPosts(user.id)} key={user.id}>
              <ImageUser>
                <UserOutlined
                  style={{
                    textAlign: 'center',
                    height: 40,
                    width: 40,
                    marginTop: 10,
                  }}
                />
              </ImageUser>
              <p>{user.name}</p>
            </ListUser>
          ))}
        </UserContainer>
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default Users;

const Container = styled.div`
  padding-top: 20px;
`;

const UserContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto;
  grid-gap: 1.2rem;
`;

const ListUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  height: 80px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
`;

const ImageUser = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 2rem;
  background-color: #eeeee4;
  margin-top: 10px;
`;
