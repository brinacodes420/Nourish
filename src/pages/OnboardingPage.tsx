
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Leaf } from 'lucide-react'

interface OnboardingPageProps {
  onBack: () => void
  onComplete: () => void
}

export default function OnboardingPage({ onBack, onComplete }: OnboardingPageProps) {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [goal, setGoal] = useState('')
  const [diet, setDiet] = useState('')
  const [allergies, setAllergies] = useState('')

  const next = () => setStep(current => Math.min(current + 1, 3))
  const back = () => setStep(current => Math.max(current - 1, 1))

  return (
    <main className="min-h-screen bg-[#F8F6EF] flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-[2rem] p-8 shadow-xl shadow-[#193D30]/5">

        <div className="flex items-center gap-2 justify-center mb-8">
          <Leaf className="text-[#176B4A]" size={25} />
          <span className="text-xl font-bold tracking-[0.18em] text-[#176B4A]">NOURISH</span>
        </div>

        <div className="flex justify-between mb-8">
          {[1, 2, 3].map(number => (
            <div key={number} className={`h-1.5 flex-1 mx-1 rounded-full ${step >= number ? 'bg-[#176B4A]' : 'bg-[#E8EAE4]'}`} />
          ))}
        </div>

        {step === 1 && (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-[#63816F] mb-3">STEP 01 · GETTING STARTED</p>
            <h1 className="text-3xl font-semibold text-[#193D30] mb-3">Let's get to know you.</h1>
            <p className="text-[#737D75] mb-8">First, what should we call you?</p>

            <label className="block text-sm font-medium text-[#193D30] mb-2">Your name</label>
            <input value={name} onChange={event => setName(event.target.value)} placeholder="Enter your name" className="w-full border border-[#E2E8E1] rounded-xl p-4 outline-none focus:border-[#176B4A]" />
          </>
        )}

        {step === 2 && (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-[#63816F] mb-3">STEP 02 · YOUR GOALS</p>
            <h1 className="text-3xl font-semibold text-[#193D30] mb-3">What would you like to achieve?</h1>
            <p className="text-[#737D75] mb-8">Choose the goal that matters most to you.</p>

            <div className="space-y-3">
              {['Eat a more balanced diet', 'Manage my weight', 'Improve my energy', 'Support my overall health', 'Build healthier eating habits'].map(option => (
                <button key={option} onClick={() => setGoal(option)} className={`w-full text-left p-4 rounded-xl border transition ${goal === option ? 'border-[#176B4A] bg-[#EFF6F0] text-[#176B4A]' : 'border-[#E2E8E1] text-[#53645A]'}`}>
                  {option}
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-[#63816F] mb-3">STEP 03 · FOOD PREFERENCES</p>
            <h1 className="text-3xl font-semibold text-[#193D30] mb-3">Let's personalize your plate.</h1>
            <p className="text-[#737D75] mb-8">Tell us a little about the food you enjoy.</p>

            <label className="block text-sm font-medium text-[#193D30] mb-2">Eating preference</label>
            <select value={diet} onChange={event => setDiet(event.target.value)} className="w-full border border-[#E2E8E1] rounded-xl p-4 mb-6 outline-none focus:border-[#176B4A] bg-white">
              <option value="">Select a preference</option>
              <option>Balanced</option>
              <option>Vegetarian</option>
              <option>Vegan</option>
              <option>High protein</option>
              <option>No specific preference</option>
            </select>

            <label className="block text-sm font-medium text-[#193D30] mb-2">Food allergies or restrictions</label>
            <textarea value={allergies} onChange={event => setAllergies(event.target.value)} placeholder="Tell us about any allergies or foods you avoid..." className="w-full border border-[#E2E8E1] rounded-xl p-4 outline-none focus:border-[#176B4A] min-h-28 resize-none" />
          </>
        )}

        <div className="flex gap-3 mt-9">
          {step === 1 ? (
            <button onClick={onBack} className="p-4 rounded-full border border-[#E2E8E1] text-[#53645A]">
              <ArrowLeft size={20} />
            </button>
          ) : (
            <button onClick={back} className="p-4 rounded-full border border-[#E2E8E1] text-[#53645A]">
              <ArrowLeft size={20} />
            </button>
          )}

          <button
            onClick={step === 3 ? onComplete : next}
            disabled={(step === 1 && !name.trim()) || (step === 2 && !goal)}
            className="flex-1 bg-[#176B4A] hover:bg-[#12563B] disabled:opacity-40 text-white rounded-full py-4 font-semibold flex items-center justify-center gap-2 transition"
          >
            {step === 3 ? 'Complete profile' : 'Continue'}
            <ArrowRight size={18} />
          </button>
        </div>

        <p className="text-center text-xs text-[#A0A69F] mt-7">Your nutrition journey starts here.</p>
      </div>
    </main>
  )
}
