import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import { ReactNode } from "react";

interface BaseLayoutProps {
 children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
 return (
  <div>
   <Navbar />
   <main>{children}</main>
   <Footer />
  </div>
 );
};

export default BaseLayout;
