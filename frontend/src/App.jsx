import { useEffect, useState } from "react";
import { fetchImpact, fetchInitiatives } from "./api";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const FALLBACK_INITIATIVES = [
  {
    id: "heritage",
    title: "Adopt-a-Heritage Project",
    icon: "🏛",
    description:
      "Fund structural restoration of historic temples under CSR mandate of Protection of National Heritage.",
    category: "Heritage",
  },
  {
    id: "mobility",
    title: "Gift of Mobility Drive",
    icon: "🦿",
    description: "Sponsor prosthetic limbs or wheelchairs for physically disabled children.",
    category: "Healthcare",
  },
  {
    id: "mothers",
    title: "Dignity for Mothers Initiative",
    icon: "👩‍🦳",
    description:
      "Vocational training for elderly widows in Vrindavan focusing on crafts and sustainable livelihood.",
    category: "Livelihood",
  },
  {
    id: "ghat",
    title: "Ghat Hygiene Initiative",
    icon: "🧹",
    description:
      "Corporate support for cleanliness, waste management and sanitation around Varanasi ghats.",
    category: "Environment",
  },
  {
    id: "water",
    title: "Safe Drinking Water Stations",
    icon: "🚰",
    description:
      'Sponsor "Piyaao" drinking water stations near Sangam in Prayagraj or Girivalam path in Tiruvannamalai.',
    category: "Water & Sanitation",
  },
  {
    id: "fodder",
    title: "Sustainable Fodder Banks",
    icon: "🌾",
    description:
      "Partner to create supply chains for high-quality subsidized fodder for Goshalas.",
    category: "Agriculture",
  },
];

const FALLBACK_IMPACT = {
  stats: [
    { label: "Years of Service", value: "8+", suffix: "" },
    { label: "CSR Initiatives", value: "6", suffix: "" },
    { label: "States Reached", value: "12", suffix: "+" },
    { label: "Lives Impacted", value: "50K", suffix: "+" },
  ],
  testimonials: [
    {
      quote:
        "Charanvandan delivered transparent reporting and visible on-ground impact for our heritage restoration CSR.",
      author: "CSR Head",
      company: "National Manufacturing Co.",
    },
    {
      quote:
        "Their Gift of Mobility program aligned perfectly with our Schedule VII healthcare mandate.",
      author: "Director, Sustainability",
      company: "TechBridge India Pvt. Ltd.",
    },
    {
      quote:
        "We received regular photo updates and documentation—exactly what our board needed for compliance.",
      author: "VP Corporate Affairs",
      company: "GreenLeaf Agri Solutions",
    },
  ],
};

export default function App() {
  const [initiatives, setInitiatives] = useState([]);
  const [impact, setImpact] = useState({ stats: [], testimonials: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [initData, impactData] = await Promise.all([
          fetchInitiatives(),
          fetchImpact(),
        ]);
        setInitiatives(initData);
        setImpact(impactData);
      } catch {
        setInitiatives(FALLBACK_INITIATIVES);
        setImpact(FALLBACK_IMPACT);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const displayInitiatives = initiatives.length ? initiatives : FALLBACK_INITIATIVES;
  const displayImpact = impact.testimonials?.length ? impact : FALLBACK_IMPACT;

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services initiatives={displayInitiatives} loading={loading} />
        <Impact stats={displayImpact.stats} testimonials={displayImpact.testimonials} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
