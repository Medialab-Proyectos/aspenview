import Hero from "@/components/home/Hero";
import Commitments from "@/components/home/Commitments";
import AiJourney from "@/components/home/AiJourney";
import Services from "@/components/home/Services";
import Talent from "@/components/home/Talent";
import Nearshore from "@/components/home/Nearshore";
import Delivery from "@/components/home/Delivery";
import Closing from "@/components/home/Closing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Commitments />
      <AiJourney />
      <Services />
      <Talent />
      <Nearshore />
      <Delivery />
      <Closing />
    </>
  );
}
