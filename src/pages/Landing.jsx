import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
      {/* Background image covering full page */}
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/landing-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-white/55" />
      </div>

      {/* Center card */}
      <div className="relative flex items-center justify-center w-full px-4">
        <section className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-10 py-10 max-w-md w-full text-center">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900">
              Streamline Your
              <br />
              Hiring Process
            </h1>

            <p className="mt-5 text-sm text-slate-500 leading-relaxed">
              WorkConnect empowers companies to efficiently manage employee profiles and
              job postings from one central hub.
            </p>

            <div className="mt-8 space-y-3">
              <button
                onClick={() => navigate('/auth?mode=login')}
                className="w-full rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Login as Employee
              </button>
              <button
                onClick={() => navigate('/auth?mode=signup')}
                className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                Sign Up as Employee
              </button>
            </div>
          </section>
      </div>
    </main>
  )
}

export default Landing
