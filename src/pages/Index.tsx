
import Navigation from "@/components/Navigation";
import Hero from "@/components/meecrogate/Hero";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Seo
        title="Meecrogate — Plateforme API Cloud souveraine & low-code"
        description="Meecrogate : plateforme API cloud-agnostique, lean et souveraine. API Gateway, orchestration, identité et exécution de processus en JSON auditable."
      />
      <Navigation />
      <div className="pt-16">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
