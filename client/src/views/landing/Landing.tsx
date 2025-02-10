import { ReactNode } from "react";
import SEO from "../../components/common/SEO";
import BaseLayout from "./BaseLayout";

function Landing(): ReactNode {
 return (
  <BaseLayout>
   <SEO
    title="Put this in the global SEO config file"
    description="Put this in the global SEO config file"
    url="Put this in the global SEO config file"
   />
   <h1 className="text-3xl font-bold underline">
    Landing route from Client-side
   </h1>
  </BaseLayout>
 );
}

export default Landing;
