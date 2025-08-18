export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 text-center text-white max-w-md">
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-white/80 mb-6">The page you're looking for doesn't exist.</p>
        <a 
          href="/" 
          className="inline-block bg-white/20 backdrop-blur-md border border-white/20 text-white hover:bg-white/30 transition-all duration-300 px-6 py-2 rounded-lg"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
