import { MDXProvider } from "@mdx-js/react";
import LegalLayout from "./LegalLayout";
import TermsOfService from "./md/terms-of-service.mdx";

const Legal: React.FC = () => {
 return (
  <LegalLayout>
   <MDXProvider>
    <TermsOfService />
   </MDXProvider>
  </LegalLayout>
 );
};

export default Legal;
