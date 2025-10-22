import Header from "@/components/Header"
type Props ={
    children: React.ReactNode;
}

function Layout({children}: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 overflow-hidden">
        <Header/>
        <div className="container mx-auto flex-1 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">{children}</div>
    </div>
  )
}

export default Layout