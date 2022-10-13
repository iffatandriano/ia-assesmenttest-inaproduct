import MainLayout from '@/components/mainlayout';
import Posts from '@/components/posts';
import { useRouter } from 'next/router';
import React from 'react';

const BlogUser: React.FC = () => {
  const router = useRouter();
  const id = router?.query?.id;

  return (
    <MainLayout>
      <Posts userId={id} />
    </MainLayout>
  );
};

export default BlogUser;
