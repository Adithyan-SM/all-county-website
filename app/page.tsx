export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/multilevel-cedar-deck.jpg"
          alt="Deck Builder"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <p className="uppercase tracking-[0.3em] text-gray-300 mb-5">
            Premium Deck Builders
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Premium Deck
            <br />
            Building Across
            <br />
            Toronto & GTA
          </h1>

          <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-10">
            Custom decks, siding, railings, and exterior renovations trusted by
            homeowners across the GTA.
          </p>

          <div className="flex flex-wrap gap-5 justify-center">
            <a
              href="/quote"
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition inline-block"
            >
              Get Free Estimate
            </a>

            <button className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <h2 className="text-5xl font-bold">20+</h2>
            <p className="text-gray-400 mt-3">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">286+</h2>
            <p className="text-gray-400 mt-3">5-Star Reviews</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">1000+</h2>
            <p className="text-gray-400 mt-3">Projects Completed</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">24h</h2>
            <p className="text-gray-400 mt-3">Quote Response</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <p className="uppercase tracking-[0.3em] text-gray-500 mb-5">
              Services
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Exterior Renovation Services Built To Last
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Modern exterior solutions that increase property value, improve
              curb appeal, and create premium outdoor spaces.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Custom Deck Building",
              "Aluminum & Vinyl Siding",
              "Railings & Fencing",
            ].map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition duration-300"
              >
                <div className="w-16 h-16 bg-black rounded-2xl mb-7" />

                <h3 className="text-2xl font-bold mb-4">{service}</h3>

                <p className="text-gray-600 leading-relaxed">
                  Premium craftsmanship designed for long-term durability and a
                  modern aesthetic.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-gray-100 py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <div className="max-w-3xl">
              <p className="uppercase tracking-[0.3em] text-gray-500 mb-5">
                Featured Projects
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Real Transformations.
                <br />
                Real Homes.
              </h2>
            </div>

            <button className="bg-black text-white px-6 py-4 rounded-2xl font-semibold">
              View Portfolio
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop"
                  alt="Project"
                  className="h-72 w-full object-cover"
                />

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Modern Backyard Upgrade
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    Composite deck installation with modern aluminum railings
                    and premium exterior finishing.
                  </p>

                  <button className="font-semibold underline underline-offset-4">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="uppercase tracking-[0.3em] text-gray-500 mb-5">
              Reviews
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Trusted By Hundreds
              <br />
              Of Homeowners
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Professional crew and incredible craftsmanship.",
              "Our backyard looks completely transformed.",
              "Fast communication and extremely high quality work.",
            ].map((review, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-10 shadow-sm"
              >
                <div className="text-2xl mb-6">⭐⭐⭐⭐⭐</div>

                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  “{review}”
                </p>

                <h4 className="font-bold text-lg">Verified Homeowner</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Ready To Upgrade
            <br />
            Your Home Exterior?
          </h2>

          <p className="text-xl text-gray-300 leading-relaxed mb-10">
            Get a fast, no-pressure estimate from a trusted renovation team.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition">
            Request Free Estimate
          </button>
        </div>
      </section>
    </main>
  );
}