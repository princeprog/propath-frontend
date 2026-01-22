import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Auth() {
  const [searchParams] = useSearchParams()
  const [mode, setMode] = useState('login')

  const urlMode = searchParams.get('mode')

  useEffect(() => {
    if (urlMode === 'login' || urlMode === 'signup') {
      setMode(urlMode)
    }
  }, [urlMode])

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative flex items-center justify-center w-full px-4">
        <section className="bg-white rounded-xl shadow-lg border border-slate-100 px-10 py-10 max-w-md w-full">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-9 w-9 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl font-semibold">
              🧳
            </div>
            <span className="text-lg font-semibold text-slate-900">
              Work<span className="text-indigo-600">Connect</span>
            </span>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex rounded-md bg-slate-100 overflow-hidden text-sm font-medium">
            <button
              type="button"
              onClick={() => setMode('login')}
              className={`flex-1 px-4 py-2 border border-slate-200 border-r-0 ${
                mode === 'login'
                  ? 'bg-white text-slate-900'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`flex-1 px-4 py-2 border border-slate-200 border-l-0 ${
                mode === 'signup'
                  ? 'bg-white text-slate-900'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              Sign Up
            </button>
          </div>

          {mode === 'login' ? (
            <div>
              <h1 className="text-xl font-semibold text-slate-900 text-center">
                Welcome Back!
              </h1>
              <p className="mt-1 text-xs text-slate-500 text-center">
                Login to access your WorkConnect account.
              </p>

              <form className="mt-6 space-y-4">
                <div className="text-left">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="text-left">
                  <div className="flex items-center justify-between mb-1">
                    <label className="block text-xs font-medium text-slate-700">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-[11px] text-indigo-600 hover:underline"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <input
                    type="password"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    defaultValue="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Login
                </button>
              </form>

              <p className="mt-4 text-[11px] text-center text-slate-400">
                By continuing, you agree to WorkConnect&apos;s{' '}
                <button type="button" className="text-indigo-500 hover:underline">
                  Terms of Service
                </button>{' '}
                and{' '}
                <button type="button" className="text-indigo-500 hover:underline">
                  Privacy Policy
                </button>
                .
              </p>
            </div>
          ) : (
            <div>
              <h1 className="text-xl font-semibold text-slate-900 text-center">
                Create your account
              </h1>
              <p className="mt-1 text-xs text-slate-500 text-center">
                Sign up to start using WorkConnect.
              </p>

              <form className="mt-6 space-y-4">
                <div className="text-left">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Create account
                </button>
              </form>
            </div>
          )}
        </section>
      </div>
    </main>
  )
}

export default Auth
