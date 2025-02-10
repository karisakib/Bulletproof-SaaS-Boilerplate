"use server";

import { ReactNode } from "react";
import SEO from "../../components/common/SEO";
import BaseLayout from "./BaseLayout";

function About(): ReactNode {
 return (
  <BaseLayout>
   <SEO
    title="Bulletproof SaaS | About"
    description="Put this in the global SEO config file"
    url="Put this in the global SEO config file"
   />
   <h1>
    About route from Client-side
   </h1>
  </BaseLayout>
 );
}

export default About;
