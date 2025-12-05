export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-black">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Mbit Finland</h1>
          <p className="text-xl text-gray-400 font-mono">FI28178724</p>
          <p className="text-lg text-gray-300">Mikko Kohtala</p>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm">
          <a
            href="https://github.com/mikko-kohtala"
            target="_blank"
            rel="noreferrer external"
            className="text-gray-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            GitHub
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://www.linkedin.com/in/mikko-kohtala/"
            target="_blank"
            rel="noreferrer external"
            className="text-gray-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            LinkedIn
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="https://twitter.com/mikko_kohtala"
            target="_blank"
            rel="noreferrer external"
            className="text-gray-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            X
          </a>
        </div>
      </div>
    </main>
  );
}
