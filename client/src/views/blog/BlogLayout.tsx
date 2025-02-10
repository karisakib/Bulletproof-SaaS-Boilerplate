import React from 'react';

const BlogLayout: React.FC = ({ children }) => {
 return (
  <div>
   <header>
    <h1>Blog</h1>
   </header>
   <main>
    {children}
   </main>
   <footer>
    <p>© 2023 Blog. All rights reserved.</p>
   </footer>
  </div>
 );
};

export default BlogLayout;