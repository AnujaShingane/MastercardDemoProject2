import Hero from "../components/Hero";
import FeatureGrid from "../components/FeatureGrid";
import features from "../data/features";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Card from "../components/Card";

export default function Landing() {
  return (
    <div>
      <Hero>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          Build fast. <span className="text-brand-accent">Help faster.</span>
        </h1>

        <p className="mt-3 text-lg text-slate-700/90 max-w-2xl">
          A beautiful React + Tailwind base for NGO hackathons—landing, forms,
          events, donations, and a friendly chatbot. Swap content at the
          end-time and ship.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <Link to="/donate" className="btn-primary">Donate</Link>
          <Link to="/volunteers" className="btn-ghost">Volunteer</Link>
        </div>
      </Hero>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 -mt-16 pb-16">
        <Section className="reveal-show">
          <Card className="p-6">
            <h2 className="text-xl font-semibold">Why this base?</h2>
            <p className="text-slate-600 mt-1">
              It’s opinionated but flexible. Replace data in <code>/src/data</code>,
              connect real APIs in <code>/src/lib/api.js</code>, and rebrand via{" "}
              <code>tailwind.config.js</code>.
            </p>
          </Card>
        </Section>

        <Section className="mt-10">
          <FeatureGrid features={features} />
        </Section>

        <Section className="mt-10">
          <div className="grid md:grid-cols-2 gap-5">
            <Card>
              <h3 className="font-semibold">Projects &amp; Causes</h3>
              <p className="text-slate-600">Curated cards with progress bars and tags.</p>
              <Link to="/projects" className="link mt-2 inline-block">See projects →</Link>
            </Card>
            <Card>
              <h3 className="font-semibold">Upcoming Events</h3>
              <p className="text-slate-600">Volunteers can register in one click.</p>
              <Link to="/events" className="link mt-2 inline-block">See events →</Link>
            </Card>
          </div>
        </Section>
      </main>
    </div>
  );
}
