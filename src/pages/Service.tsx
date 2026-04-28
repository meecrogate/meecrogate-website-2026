import Service from "@/components/meecrogate/Service";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      <Seo
        title="Services — Accompagnement & expertise API"
        description="Conseil, intégration et support Meecrogate : nos experts vous accompagnent du POC au déploiement en production de votre plateforme API souveraine."
      />
      <Navigation />
      <div className="pt-16">
        <Service />
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
