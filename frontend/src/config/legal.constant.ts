import TermsOfService from "../views/legal/terms-of-service.mdx";
import EndUserLicenseAgreement from "../views/legal/end-user-license-agreement.mdx";
import PrivacyPolicy from "../views/legal/privacy-policy.mdx";
import CookiePolicy from "../views/legal/cookie-policy.mdx";
import DataRetentionPolicy from "../views/legal/data-retention-policy.mdx";
import AffiliateDisclosure from "../views/legal/affiliate-disclousure.mdx";
import RefundPolicy from "../views/legal/refund-policy.mdx";
import BillingPolicy from "../views/legal/billing-policy.mdx";


export const legalMarkdownComponents = [
 {
   title: "Terms of Service",
   route: "terms",
   element: TermsOfService,
 },
 {
   title: "End User License Agreement",
   route: "eula",
   element: EndUserLicenseAgreement,
 },
 {
   title: "Privacy Policy",
   route: "privacy-policy",
   element: PrivacyPolicy,
 },
 {
   title: "Cookie Policy",
   route: "cookie-policy",
   element: CookiePolicy,
 },
 {
   title: "Data Retention Policy",
   route: "data-retention",
   element: DataRetentionPolicy,
 },
 {
   title: "Affiliate Disclosure",
   route: "affiliate-disclosure",
   element: AffiliateDisclosure,
 },
 {
   title: "Billing Policy",
   route: "billing-policy",
   element: BillingPolicy,
 },
 {
   title: "Refund Policy",
   route: "refund-policy",
   element: RefundPolicy,
 },
];