export default function QuotePage() {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl w-full bg-zinc-900 rounded-3xl p-10">
          <h1 className="text-5xl font-bold mb-6">
            Get Your Free Estimate
          </h1>
  
          <p className="text-gray-400 mb-10">
            Fill out the form below and our team will contact you within 24 hours.
          </p>
  
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-2xl bg-black border border-zinc-700"
            />
  
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-2xl bg-black border border-zinc-700"
            />
  
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-2xl bg-black border border-zinc-700"
            />
  
            <textarea
              placeholder="Tell us about your project"
              rows={5}
              className="w-full p-4 rounded-2xl bg-black border border-zinc-700"
            />
  
            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:bg-gray-200 transition"
            >
              Submit Estimate Request
            </button>
          </form>
        </div>
      </main>
    );
  }