import React from 'react';
import MainLayout from '@/components/mainlayout';
import Users from '@/components/users';

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Users />
    </MainLayout>
  );
};

export default Home;
