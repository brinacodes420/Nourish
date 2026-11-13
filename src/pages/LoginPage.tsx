
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Leaf, Eye, EyeOff } from 'lucide-react'

interface LoginPageProps {
  onBack: () => void
}

export default function LoginPage({ onBack }: LoginPageProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    alert('Login will be connected when we implement account authentication.')
  }

  return (
    <main className="min-h-screen bg-[#F8F6EF] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[2rem] p-8 shadow-xl shadow-[#193D30]/5">

        <div className="flex justify-center items-center gap-2 mb-10">
          <Leaf className="text-[#176B4A]" size={27} />
          <span className="text-2xl font-bold tracking-[0.18em] text-[#176B4A]">
            NOURISH
          </span>
        </div>

        <button onClick={onBack} className="flex items-center gap-2 text-sm text-[#63816F] hover:text-[#176B4A] mb-8 transition-colors">
          <ArrowLeft size={17} />
          Back
        </button>

        <p className="text-xs uppercase tracking-[0.2em] text-[#63816F] mb-3">
          WELCOME BACK
        </p>

        <h1 className="text-3xl font-semibold text-[#193D30] mb-3">
          Good to see you again.
        </h1>

        <p className="text-[#737D75] leading-relaxed mb-8">
          Sign in to continue your journey towards healthier habits.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-[#193D30] mb-2">
              Email address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full border border-[#E2E8E1] rounded-xl p-4 outline-none focus:border-[#176B4A] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#193D30] mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder="Enter your password"
                className="w-full border border-[#E2E8E1] rounded-xl p-4 pr-12 outline-none focus:border-[#176B4A] transition-colors"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#829087] hover:text-[#176B4A]"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#176B4A] hover:bg-[#12563B] text-white rounded-full py-4 font-semibold flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#176B4A]/20"
          >
            Log in
            <ArrowRight size={18} />
          </button>

        </form>

        <p className="text-xs text-center text-[#A0A69F] mt-9">
          Nourish · A healthier relationship with food.
        </p>

      </div>
    </main>
  )
}
