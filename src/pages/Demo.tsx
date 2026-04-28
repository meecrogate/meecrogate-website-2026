
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const DemoPage = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Seo
        title="Demander une démo Meecrogate"
        description="Réservez une démonstration personnalisée de la plateforme API Meecrogate avec nos experts."
      />
      <Navigation />
      <div className="pt-16">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPage;
