interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string
}

const SEO = ({ title, description, url="" }: SEOProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
    </>
  );
};

export default SEO;
