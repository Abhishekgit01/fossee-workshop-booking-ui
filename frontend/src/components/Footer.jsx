export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-sm text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} FOSSEE, IIT Bombay. All rights reserved.</p>
      <p className="mt-1">
        <a href="https://fossee.in" className="hover:text-white transition">fossee.in</a>
      </p>
    </footer>
  );
}
