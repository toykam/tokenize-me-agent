export default function Footer() {
    return (
      <footer className="bg-blue-900 py-6">
        <div className="container mx-auto text-center">
          <div className="space-x-4 mb-4">
            <a href="#" className="hover:text-green-400">About</a>
            <a href="#" className="hover:text-green-400">FAQ</a>
            <a href="#" className="hover:text-green-400">Blog</a>
            <a href="#" className="hover:text-green-400">Contact</a>
          </div>
          <div className="space-x-4 mb-4">
            <a href="#" className="hover:text-green-400">Twitter</a>
            <a href="#" className="hover:text-green-400">Discord</a>
          </div>
          <p className="text-gray-500">© 2025 ProfileToken Platform</p>
        </div>
      </footer>
    );
  }