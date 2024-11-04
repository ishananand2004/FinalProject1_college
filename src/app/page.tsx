import { HeroMain } from "@/components/patterns/HeroMain";
import  LeadGenerationForm  from "@/components/forms/LeadGenerationForm";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <HeroMain />
        
        <LeadGenerationForm/>
        
      </section>
    </>
  );
}
