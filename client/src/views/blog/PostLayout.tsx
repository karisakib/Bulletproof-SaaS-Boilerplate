interface PostLayoutProps {
 children: React.ReactNode;
}

const PostLayout: React.FC<PostLayoutProps> = ({ children }) => {
 return (
   <main>
    {children}
   </main>
 );
};

export default PostLayout;