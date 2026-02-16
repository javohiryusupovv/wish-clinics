import Hero from "@/src/components/sections/Hero";
import Services from "./our-service/page";
import Specialists from "@/src/components/sections/Hero-Team";
import Reviews from "@/src/components/sections/Otziv";
import Contact from "@/src/components/sections/Contact";

export default function page() {
  return (
    <div>
        <Hero/>
        <Services/>
        <Specialists/>
        <Reviews/>
        <Contact/>
    </div>
  )
}
