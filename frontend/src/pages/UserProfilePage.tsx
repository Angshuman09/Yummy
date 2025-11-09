import { useUpdateMyUser } from "@/api/MyUsrApi"
import UserProfileForm from "@/forms/User-profile-form/UserProfileForm"
const UserProfilePage = () => {
  const {updateUser, isPending}= useUpdateMyUser()
  return (
    <div className="w-full h-screen">
      <UserProfileForm onSave={updateUser} isLoading={isPending}/>
    </div>
  )
}

export default UserProfilePage