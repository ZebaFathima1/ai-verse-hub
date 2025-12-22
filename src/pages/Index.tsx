import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsTimeline from "@/components/EventsTimeline";
import UpcomingEvent from "@/components/UpcomingEvent";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CSE (AML) - Artificial Intelligence & Machine Learning Department</title>
        <meta 
          name="description" 
          content="Welcome to CSE (AML) Department - Innovating the future with Artificial Intelligence and Machine Learning. Register for AI Verse 4.0, our flagship event." 
        />
        <meta name="keywords" content="CSE, AML, Artificial Intelligence, Machine Learning, AI Verse, College Events, Tech Events" />
      </Helmet>
      
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <EventsTimeline />
          <UpcomingEvent />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
