import { Navbar } from "@/components/navigation/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { MenuSection } from "@/components/sections/menu-section";
import { ReservationSection } from "@/components/sections/reservation-section";
import { LocationSection } from "@/components/sections/location-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <ReservationSection />
        <LocationSection />
        <FooterSection />
      </main>
    </>
  );
}
