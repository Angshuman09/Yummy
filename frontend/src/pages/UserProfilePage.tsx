import { useGetMyUser, useUpdateMyUser } from "@/api/MyUsrApi"
import UserProfileForm from "@/forms/User-profile-form/UserProfileForm"
import { Spinner } from "@/components/ui/spinner";
const UserProfilePage = () => {
  const {currentUser, isPending: isGetLoading} = useGetMyUser();
  const {updateUser, isPending: isUpdateLoading}= useUpdateMyUser()

  if(isGetLoading){
    return <div className="w-full h-screen bg-orange-200 flex justify-center items-center opacity-100"><Spinner className="size-20 text-amber-700"/></div>

  }

  if(!currentUser){
    return <span className="w-full h-screen flex justify-center items-center">Unable to load the user</span>
  }
  return (
    <div className="w-full h-screen">
      <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
    </div>
  )
}

export default UserProfilePage