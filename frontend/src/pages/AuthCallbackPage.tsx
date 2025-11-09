import { useCreateMyUser } from "@/api/MyUsrApi";
import { Spinner } from "@/components/ui/spinner";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom";

function AuthCallbackPage() {
    const navigate = useNavigate();
    const hasCreatedUser = useRef(false);
    const {user} = useAuth0();
    const {createMyUser} = useCreateMyUser();

    useEffect(() => {
     const hashUserCreation = async () => {
        if(user?.sub && user?.email && !hasCreatedUser.current){
            try {
                await createMyUser({
                    auth0Id: user.sub,
                    email: user.email
                })
                hasCreatedUser.current = true;
            } catch (error) {
                console.error("Error in creating user:", error);
            }
      }
      navigate('/');
    }

      hashUserCreation();
    }, [navigate, user, createMyUser])
    
  return <div className="w-full h-screen bg-orange-200 flex justify-center items-center"><Spinner className="size-20 text-amber-700"/></div>
}

export default AuthCallbackPage