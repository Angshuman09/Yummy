import { useForm } from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";  

import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../../components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "name is required"),
    addressLine1: z.string().min(1, "addressLine1 is required"),
    city: z.string().min(1, "city is required"),
    country: z.string().min(1, "country is required")
})

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
    currentUser?: User;
    onSave: (UserProfileData: UserFormData) => void;
    isLoading: boolean,
    title?: string,
    buttonText?: string
}

const UserProfileForm = ({
onSave, isLoading, currentUser, title = "User Profile", buttonText= "Submit",
}: Props) =>{
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser
})

useEffect(()=>{
    form.reset(currentUser);
},[currentUser, form])

return (
    <div>form</div>
)
}

export default UserProfileForm;