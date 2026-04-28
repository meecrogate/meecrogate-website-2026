
import UseCases from "@/components/meecrogate/UseCases";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Seo
        title="Cas d'usage — Solutions API par métier"
        description="Portails API, intégration rapide, processus métiers, orchestration, déploiement hybride : explorez les cas d'usage Meecrogate."
      />
      <Navigation />
      <div className="pt-16">
        <UseCases />
      </div>
      <Footer />
    </div>
  );
};

export default UseCasesPage;
