import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createUserRequest = {
    auth0Id: string;
    email: string;
}

export const useCreateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyUserRequest = async (user: createUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("error in creating user");
        }
    };

    const {
        mutateAsync: createMyUser, //renamed to createMyUser, this is the function you call in your component when you want to create a user
        isPending,
        isError,
        isSuccess
    } = useMutation({
        mutationFn: createMyUserRequest, //the function that actually performs the API call (createMyUserRequest)
    });

    return {
        createMyUser,
        isPending,
        isError,
        isSuccess
    }
};

type updateUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
}

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    const updateMyUserRequest = async (formData: updateUserRequest) => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/user`, { //getting error here can't figuring out where the exactly the error
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        return response.json();
    }

    const { mutateAsync: updateUser,
        isPending,
        isError,
        error,
        isSuccess } = useMutation({
            mutationFn: updateMyUserRequest
        });

        if(isSuccess){
            toast.success("user profile updated!")
        }
        if(error){
            toast.error(error.toString());
        }

    return { updateUser, isPending };
}

export const useGetMyUser = ()=>{
    const {getAccessTokenSilently}= useAuth0();

    const getMyUserRequest = async ()=>{
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        })
        if(!response.ok){
            throw new Error("Failed to get the User") 
        }
        return response.json();
    }

    const {data: currentUser, isPending, error} = useQuery({
        queryKey:["fetchCurrentUser"],
        queryFn: getMyUserRequest
    });

    if(error){
        toast.error(error.toString());
    }
    return {currentUser, isPending}
}