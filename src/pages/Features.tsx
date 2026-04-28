
import Features from "@/components/meecrogate/Features";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Seo
        title="Fonctionnalités — API Gateway, orchestration & low-code"
        description="Découvrez les fonctionnalités Meecrogate : API Gateway, orchestration de processus, identité, configuration JSON auditable et déploiement cloud-agnostique."
      />
      <Navigation />
      <div className="pt-16">
        <Features />
      </div>
      <Footer />
    </div>
  );
};

export default FeaturesPage;
