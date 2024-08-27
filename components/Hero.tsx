import TestimonialsAvatars from "./TestimonialsAvatars";
import Google from "@/icons/google";
import Bottle from "@/components/Bottle";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-28 axiom">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center z-10">
        <h1 className="font-extrabold text-xl lg:text-6xl tracking-tight md:-mb-4">
          {/* Capture Inspiration on The Fly */}
          Capture Lightning In a Bottle
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          {/* The NextJS boilerplate with all you need to build your SaaS, AI tool,
          or any other web app. From idea to production in 5 minutes. */}
          Build, brainstorm, and save your next $10k+ MRR idea all in once place.
        </p>
        <div className="flex gap-2">
          <button className="btn btn-primary btn-wide">
            Start with 3 free ideas
          </button>
          <button className="btn btn-wide">
            <Google className="w-8 h-8"/>
            Start free with Google
          </button>
        </div>
        <TestimonialsAvatars priority={true} />
      </div>
      {/* <Bottle /> */}
    </section>
  );
};

export default Hero;
