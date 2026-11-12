
import { ArrowRight, Leaf } from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-[#F8F6EF] flex items-center justify-center p-6">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <Leaf className="w-7 h-7 text-[#176B4A]" />
          <span className="text-2xl font-bold tracking-[0.18em] text-[#176B4A]">
            NOURISH
          </span>
        </div>

        {/* Food Image */}
        <div className="w-full h-64 rounded-[2rem] overflow-hidden mb-9">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1000"
            alt="A fresh, balanced and nutritious meal"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Introduction */}
        <p className="text-sm uppercase tracking-[0.2em] text-[#63816F] mb-4">
          Your health, your journey
        </p>

        <h1 className="text-4xl font-semibold leading-tight text-[#193D30] mb-5">
          Eat better.
          <br />
          Understand your body.
          <br />
          <span className="text-[#27845C]">Live healthier.</span>
        </h1>

        <p className="text-[#737D75] leading-relaxed mb-9">
          Nutrition is personal. Discover what your body needs,
          make informed food choices and build healthier habits
          with Nourish.
        </p>

        {/* Get Started */}
        <button className="w-full bg-[#176B4A] hover:bg-[#12563B] text-white rounded-full py-4 font-medium flex items-center justify-center gap-3 transition">
          Get Started
          <ArrowRight size={19} />
        </button>

        <p className="text-sm text-[#7B857D] mt-6">
          Already have an account?{" "}
          <button className="text-[#176B4A] font-semibold">
            Log in
          </button>
        </p>

        <p className="text-xs text-[#A0A69F] mt-12">
          Nourish · A healthier relationship with food.
        </p>

      </div>
    </main>
  );
}
