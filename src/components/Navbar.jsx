import { FaCartPlus } from "react-icons/fa";

export function Navbar() {
  return (
    <header className="w-full bg-white shadow-xl h-16 flex items-center sticky top-0 px-4">
        <div className="container mx-auto flex justify-between items-center">
            <nav className="flex items-center gap-5">
                <a href="#" className="bg-blue-400 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition-all">Home</a>
                <a href="#" className="bg-blue-400 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition-all">Store</a>
                <a href="#" className="bg-blue-400 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition-all">About</a>
            </nav>
            <div className="">
              <FaCartPlus />
            </div>
        </div>
    </header>
  )
}
