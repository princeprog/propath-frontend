function Landing() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="relative w-full h-[90vh] border-[18px] border-black max-w-6xl mx-auto bg-white">
        {/* Canvas area intentionally empty */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[10px] text-slate-500">
          <span>Made with</span>
          <span className="inline-flex items-center gap-1 font-semibold">
            <span className="inline-block h-3 w-3 bg-black [clip-path:polygon(0_0,100%_50%,0_100%)]" />
            <span>Vercel</span>
          </span>
        </div>
      </div>
    </main>
  )
}

export default Landing
