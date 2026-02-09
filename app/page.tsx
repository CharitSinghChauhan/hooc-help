import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Impact } from "@/components/sections/impact";
import { Team } from "@/components/sections/team";
import { DonationImpact } from "@/components/sections/donation-impact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Impact />
      <Team />
      <DonationImpact />
    </main>
  );
}
