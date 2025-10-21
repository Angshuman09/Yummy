import { useAuth0 } from "@auth0/auth0-react"
import { Pizza } from "lucide-react"
function Header() {
  const {loginWithRedirect} = useAuth0();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pizza className="w-8 h-8 text-amber-500" />
            <span className="text-2xl font-bold text-gray-800">Yummy</span>
          </div>
          <button className="px-6 py-2 bg-amber-500 text-white rounded-full font-medium hover:bg-amber-600 transition-all duration-300 shadow-md hover:shadow-lg"
          onClick={async ()=> await loginWithRedirect()}     
          >
            Login
          </button>
        </div>
      </header>
  )
}

export default Header