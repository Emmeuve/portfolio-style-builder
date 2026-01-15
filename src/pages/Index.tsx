import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedGallery from "@/components/FeaturedGallery";
import ProjectList from "@/components/ProjectList";
import Services from "@/components/Services";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <FeaturedGallery />
        <ProjectList />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
