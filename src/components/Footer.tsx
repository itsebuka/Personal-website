export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="shrink-0 border-t border-[#1a1a1a] py-3">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <p className="font-sans text-xs text-zinc-600">
          &copy; {currentYear} Ebuka Eleogu. All rights reserved.
        </p>
        <span className="font-sans text-xs text-zinc-700">v1.0.4</span>
      </div>
    </footer>
  );
}
