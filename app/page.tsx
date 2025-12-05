export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black p-8">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="font-bold text-4xl text-white">Mbit Finland</h1>
          <p className="font-mono text-gray-400 text-xl">FI28178724</p>
          <p className="text-gray-300 text-lg">Mikko Kohtala</p>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm">
          <a
            className="text-gray-400 underline underline-offset-4 transition-colors duration-200 hover:text-white"
            href="https://github.com/mikko-kohtala"
            rel="noreferrer external"
            target="_blank"
          >
            GitHub
          </a>
          <span className="text-gray-600">|</span>
          <a
            className="text-gray-400 underline underline-offset-4 transition-colors duration-200 hover:text-white"
            href="https://www.linkedin.com/in/mikko-kohtala/"
            rel="noreferrer external"
            target="_blank"
          >
            LinkedIn
          </a>
          <span className="text-gray-600">|</span>
          <a
            className="text-gray-400 underline underline-offset-4 transition-colors duration-200 hover:text-white"
            href="https://twitter.com/mikko_kohtala"
            rel="noreferrer external"
            target="_blank"
          >
            X
          </a>
        </div>
      </div>
    </main>
  );
}
