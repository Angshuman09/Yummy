import { useAuth0 } from '@auth0/auth0-react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
function UsernameMenu() {
    const {user, logout} = useAuth0();
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <CircleUserRound>
                {user?.email}
            </CircleUserRound>
        </DropdownMenuTrigger>
        <DropdownMenuItem>
            <Link to='/manage-restaurant'>My restaurant</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link to='/user-profile'>User Profile</Link>
        </DropdownMenuItem>
        <Separator/>
        <DropdownMenuItem>
            <Button onClick={()=>logout()}>Logout</Button>
        </DropdownMenuItem>
    </DropdownMenu>
  )
}

export default UsernameMenu
