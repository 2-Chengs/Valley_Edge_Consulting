import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="bg-[#426A56] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="w-12 h-12 mr-2">
              <Logo />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Valley Edge Consulting</h3>
              <p className="text-sm mt-2">Elevating businesses with innovative solutions</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-300 transition duration-300">
              Facebook
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Valley Edge Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

