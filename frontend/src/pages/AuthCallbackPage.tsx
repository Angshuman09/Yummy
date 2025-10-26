import { useCreateMyUser } from "@/api/MyUsrApi";
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
    
  return <div>Loading...</div>
}

export default AuthCallbackPage