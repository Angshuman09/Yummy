import { useGetMyUser, useUpdateMyUser } from "@/api/MyUsrApi"
import UserProfileForm from "@/forms/User-profile-form/UserProfileForm"
import { Spinner } from "@/components/ui/spinner";
const UserProfilePage = () => {
  const {currentUser, isPending: isGetLoading} = useGetMyUser();
  const {updateUser, isPending: isUpdateLoading}= useUpdateMyUser()

  if(isGetLoading){
    <div className="w-full h-screen bg-orange-200 flex justify-center items-center opacity-100"><Spinner className="size-20 text-amber-700"/></div>

  }
  return (
    <div className="w-full h-screen">
      <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading}/>
    </div>
  )
}

export default UserProfilePage