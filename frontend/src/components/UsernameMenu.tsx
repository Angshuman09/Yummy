import { useAuth0 } from '@auth0/auth0-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

function UsernameMenu() {
  const { user, logout } = useAuth0()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer px-3 py-2 hover:bg-amber-100 rounded-md transition focus-visible:ring-0 focus-visible:outline-none">
        <CircleUserRound />
        {user?.given_name}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="bg-amber-200 border-none">
        <DropdownMenuItem asChild className='hover:bg-amber-300'>
          <Link to="/manage-restaurant">My restaurant</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className='hover:bg-amber-300'>
          <Link to="/user-profile">User Profile</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Button
            variant="ghost"
            onClick={() => logout()}
            className='w-full text-left bg-orange-400 hover:bg-orange-500 border-none' 
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UsernameMenu
