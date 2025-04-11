import SEO from "../../components/common/SEO";
import BaseLayout from "./BaseLayout";
import ContactSection from "../../components/common/ContactSection";

function Contact() {
 return (
  <BaseLayout>
   <SEO
    title="Put this in the global SEO config file"
    description="Put this in the global SEO config file"
    url="Put this in the global SEO config file"
   />
   <ContactSection />
  </BaseLayout>
 );
}

export default Contact;
