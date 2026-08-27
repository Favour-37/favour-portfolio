import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center px-6">
      <div className="glow glow-blue w-[400px] h-[400px] top-1/4 left-1/2 -translate-x-1/2" />
      <div className="relative text-center">
        <p className="text-sm text-blue-400 font-mono mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6">
          This page doesn&apos;t exist.
        </h1>
        <p className="text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
          The link might be broken, or the page may have moved.
        </p>
        <Link href="/" className="btn-pill inline-block px-7 py-3 bg-blue-600 hover:bg-blue-500 text-sm font-medium">
          Back to home
        </Link>
      </div>
    </div>
  );
}

