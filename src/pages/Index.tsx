import { Helmet } from "react-helmet-async";
import ComingSoon from "@/components/ComingSoon";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Kalyan Basnet | Coming Soon</title>
        <meta 
          name="description" 
          content="Something extraordinary is coming. Stay tuned for the launch of Kalyan Basnet's new website." 
        />
        <meta name="keywords" content="Kalyan Basnet, Coming Soon, Nepal" />
        <link rel="canonical" href="https://www.kalyanbasnet.com.np" />
      </Helmet>

      <ComingSoon />
    </>
  );
};

export default Index;
