import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {LoadingButton} from '@/components/LoadingButton'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";

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
    onSave, isLoading, currentUser, title = "User Profile", buttonText = "Submit",
}: Props) => {
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentUser
    })

    useEffect(() => {
        form.reset(currentUser);
    }, [currentUser, form])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSave)}>
                <div>
                    <h2>{title}</h2>
                    <FormDescription>
                        View and change profile information here
                    </FormDescription>
                </div>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} disabled />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                control={form.control}
                name="name"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} disabled />
                        </FormControl>
                    </FormItem>
                )}
                />

                <div>
                <FormField
                control={form.control}
                name="name"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Adress Line 1</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="name"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="name"
                render={({field})=>(
                    <FormItem>
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                    </FormItem>
                )}
                />
                </div>
              {
                isLoading ? (
                    <LoadingButton/>
                ) :
                (
                    <Button type="submit" className="bg-black text-white">{buttonText}</Button>
                )
              }  
            </form>
        </Form>
    )
}

export default UserProfileForm;