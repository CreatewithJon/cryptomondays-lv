import Nav from "@/components/Nav";
import HeroCarousel from "@/components/HeroCarousel";
import StatsBar from "@/components/StatsBar";
import TheRoom from "@/components/TheRoom";
import WhyAttend from "@/components/WhyAttend";
import VenueShowcase from "@/components/VenueShowcase";
import CommunitySection from "@/components/CommunitySection";
import Testimonials from "@/components/Testimonials";
import EventDetails from "@/components/EventDetails";
import PreviousEvents from "@/components/PreviousEvents";
import SponsorSection from "@/components/SponsorSection";
import EcosystemTeaser from "@/components/EcosystemTeaser";
import NewsletterBar from "@/components/NewsletterBar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#060c1a] text-[#f0ead8]">
      <Nav />

      {/* 1. Hero — venue imagery + floating attendee cards */}
      <HeroCarousel />

      {/* 2. Proof metrics */}
      <StatsBar />

      {/* 3. THE ROOM — social proof photo gallery */}
      <TheRoom />

      {/* 4. Why attend */}
      <WhyAttend />

      {/* 5. Venue showcase */}
      <VenueShowcase />

      {/* 6. Community categories */}
      <CommunitySection />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Event logistics */}
      <EventDetails />

      {/* 9. Previous events archive */}
      <PreviousEvents />

      {/* 10. Sponsors */}
      <SponsorSection />

      {/* 11. Ecosystem */}
      <EcosystemTeaser />

      {/* 12. Newsletter */}
      <NewsletterBar />

      <Footer />
    </div>
  );
}
