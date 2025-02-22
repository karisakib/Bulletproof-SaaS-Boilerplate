import Banner from "../../components/common/Banner";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Banner */}
      <Banner />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Main Content (Centered) */}
      <main className="flex-grow flex items-center justify-center px-6">
        {children}
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default BaseLayout;
