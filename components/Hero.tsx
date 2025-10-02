export default function Hero() {
  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/burj-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 -z-10"></div>

      {/* Fixed Content (Mobile + Desktop same look) */}
      {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
        <h1 className="text-5xl font-bold mb-4">Burj Al Arab</h1>
        <p className="text-lg mb-6">The world’s most luxurious hotel experience</p>
        <a
          href="#suites"
          className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition"
        >
          Explore Suites
        </a> */}
      {/* </div> */}
    </header>
  )
}
