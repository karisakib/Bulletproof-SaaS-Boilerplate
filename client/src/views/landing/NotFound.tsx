import SEO from "../../components/common/SEO";
import BaseLayout from "./BaseLayout";

function NotFound() {
 return (
  <BaseLayout>
   <SEO
    title="Put this in the global SEO config file"
    description="Put this in the global SEO config file"
    url="Put this in the global SEO config file"
   />
<h1>404 Not Found from Client-side</h1>
  </BaseLayout>
 );
}

export default NotFound;
