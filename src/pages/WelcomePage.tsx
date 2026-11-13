
import { ArrowRight, Leaf } from "lucide-react";

interface WelcomePageProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export default function WelcomePage({
  onGetStarted,
  onLogin,
}: WelcomePageProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#FBFAF5] via-[#F8F6EF] to-[#EDEFE5] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md text-center">

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="w-11 h-11 rounded-2xl bg-[#176B4A] flex items-center justify-center shadow-lg shadow-[#176B4A]/20">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-[0.2em] text-[#176B4A]">
            NOURISH
          </span>
        </div>

        {/* Food Image */}
        <div className="relative w-full h-72 rounded-[2rem] overflow-hidden mb-10 shadow-xl shadow-[#193D30]/10">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200"
            alt="A colourful, balanced and nutritious meal"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#193D30]/30 to-transparent" />
          <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md rounded-full px-4 py-2 text-xs font-medium text-[#193D30]">
            Simple. Wholesome. Balanced.
          </div>
        </div>

        {/* Introduction */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#63816F] mb-5">
          YOUR HEALTH, YOUR JOURNEY
        </p>

        <h1 className="text-[2.65rem] font-semibold leading-[1.15] tracking-tight text-[#193D30] mb-6">
          Eat better.
          <br />
          Understand your body.
          <br />
          <span className="text-[#27845C]">Live healthier.</span>
        </h1>

        <p className="text-[15px] text-[#737D75] leading-7 max-w-sm mx-auto mb-9">
          Nutrition is personal. Discover what your body needs,
          make informed food choices and build healthier habits
          with Nourish.
        </p>

        {/* Get Started */}
        <button
          type="button"
          onClick={onGetStarted}
          className="w-full bg-[#176B4A] hover:bg-[#12563B] text-white rounded-full py-[17px] font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#176B4A]/20 hover:-translate-y-0.5"
        >
          Get Started
          <ArrowRight size={19} />
        </button>

        {/* Login */}
        <p className="text-sm text-[#7B857D] mt-7">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onLogin}
            className="text-[#176B4A] font-semibold hover:text-[#12563B] transition-colors"
          >
            Log in
          </button>
        </p>

        {/* Footer */}
        <p className="text-xs text-[#A0A69F] mt-12 tracking-wide">
          Nourish · A healthier relationship with food.
        </p>

      </div>
    </main>
  );
}
