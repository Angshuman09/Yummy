import { Button } from "./ui/button"
function Header() {
  return (
    <div className="mx-auto container py-3">
        <div className="flex justify-between">
            <div className="text-3xl font-bold ">Yummy</div>
            <Button className="bg-amber-300 hover:bg-amber-400 rounded-2xl" size='lg'>Login</Button>
        </div>
    </div>
  )
}

export default Header