import Head from 'next/head';
import React from 'react';
import { Layout } from 'antd';
import styled from '@emotion/styled';
import Link from 'next/link';

const { Content } = Layout;

interface MainLayoutProps {
  children: any;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>IA Exercise - Inaproduct</title>
        <meta name="description" content="Attachment test privy" />
      </Head>
      <HeaderContainer>
        <Link href="/">
          <HeaderTitle>IA - Exercise InaProduct</HeaderTitle>
        </Link>
      </HeaderContainer>

      <MainContainer>{children}</MainContainer>
    </Container>
  );
};

export default MainLayout;

const Container = styled(Layout)`
  padding: 0 2rem;
  background-color: #eeeee4;
`;

const MainContainer = styled(Content)`
  padding: 1rem;
  height: 100%;
`;

const HeaderContainer = styled.header`
  padding: 1rem;
`;

const HeaderTitle = styled.h2`
  cursor: pointer;
`;
