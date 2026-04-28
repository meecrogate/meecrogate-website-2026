
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import Seo from "@/components/Seo";

const Pricing = () => {
  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      <Seo
        title="Tarifs — Plans Meecrogate"
        description="Découvrez les offres Meecrogate : tarifs transparents pour démarrer rapidement et passer à l'échelle, sans lock-in cloud."
      />
      <Navigation />
      <main className="flex-1 pt-16">
        <PricingHero />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
