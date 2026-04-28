
import Architecture from "@/components/meecrogate/Architecture";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const ArchitecturePage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Seo
        title="Architecture — Plateforme API modulaire et souveraine"
        description="L'architecture Meecrogate : composants découplés (Gateway, Identité, Orchestrateur, Process Executor), déploiement VM, Kubernetes ou Cloud."
      />
      <Navigation />
      <div className="pt-16">
        <Architecture />
      </div>
      <Footer />
    </div>
  );
};

export default ArchitecturePage;
