import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[48vh] min-h-[360px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient scrim for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950" />

      <div className="relative z-10 h-full flex items-end">
        <div className="max-w-6xl mx-auto px-6 w-full pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
            Interactive 3D cover • Dark fintech aesthetic
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
            Create your account
          </h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-white/70">
            Join in seconds. Minimal, distraction-free signup designed for speed.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
