import React from 'react';
import BaseLayout from '../../layouts/BaseLayout';
import SEO from '../../components/common/SEO';

interface PostLayoutProps {
 children: React.ReactNode;
 title: string;
 description: string;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children, title, description }) => {
 return (
  <BaseLayout>
   <SEO title={title} description={description} />
   <main>
    {children}
   </main>
  </BaseLayout>
 );
};

export default PostLayout;