import { Outlet, Link } from "react-router";
import { MDXProvider } from "@mdx-js/react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { legalMarkdownComponents } from "../../config/legal.constant";

const Legal: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 border-r border-gray-300">
          <h2 className="text-xl font-bold mb-4">Legal Pages</h2>
          <nav>
            <ul className="space-y-2">
              {legalMarkdownComponents.map(({ title, route }) => (
                <li key={title}>
                  <Link
                    to={`/legal/${route}`}
                    className="block px-4 py-2 rounded hover:bg-gray-200 transition"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-4">
          <MDXProvider>
            <Outlet />
          </MDXProvider>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Legal;
