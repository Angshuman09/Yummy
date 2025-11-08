import Footer from "@/components/Footer";
import Header from "@/components/Header"
type Props ={
    children: React.ReactNode;
}

function Layout({children}: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 overflow-hidden selection:bg-yellow-300 selection:text-black">
        <Header/>
        <div className="container mx-auto flex-1 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 border-l-1 border-r-1 border-amber-200">{children}</div>
        <Footer/>
    </div>
  )
}
 
export default Layout