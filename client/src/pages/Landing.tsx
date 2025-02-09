import SEO from "../components/SEO";
import BaseLayout from "../layouts/BaseLayout";

function Landing() {
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
