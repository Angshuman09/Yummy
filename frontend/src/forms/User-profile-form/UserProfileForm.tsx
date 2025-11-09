import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoadingButton } from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import type { User } from "@/types";
import { useEffect } from "react";
import { User as UserIcon, Mail, MapPin, Globe } from "lucide-react";

const formSchema = z.object({
    email: z.string().optional(),
    name: z.string().min(1, "Name is required").trim(),
    addressLine1: z.string().min(1, "Address Line 1 is required").trim(),
    city: z.string().min(1, "City is required").trim(),
    country: z.string().min(1, "Country is required").trim(),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
    // currentUser: User;
    onSave: (userProfileData: UserFormData) => void;
    isLoading: boolean;
    title?: string;
    buttonText?: string;
};

const UserProfileForm = ({
    onSave,
    isLoading,
    // currentUser,
    title = "User Profile",
    buttonText = "Submit",
}: Props) => {
    //  console.log("currentUser prop:", currentUser);
    // console.log("currentUser type:", typeof currentUser);
    // console.log("currentUser keys:", Object.keys(currentUser || {}));
    const form = useForm<UserFormData>({
        resolver: zodResolver(formSchema),
        // defaultValues: currentUser,
    });

    console.log("Form values:", form.getValues());
console.log("Form errors:", form.formState.errors);

    // useEffect(() => {
    //      console.log("Current user data:", currentUser);
    //     form.reset(currentUser);
    // }, [currentUser, form]);

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 p-4 sm:p-6 lg:p-8 mt-20">
            <div className="w-full max-w-3xl">
                {/* Main card */}
                <div className="w-full relative bg-amber-100/90 backdrop-blur-lg shadow-2xl rounded-3xl p-8 sm:p-10 border border-orange-100 transition-all duration-300 hover:shadow-3xl">
                    {/* Header with icon */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mb-4 shadow-lg">
                            <UserIcon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-600 bg-clip-text text-transparent">
                            {title}
                        </h2>
                        <p className="text-gray-600 text-sm mt-2 max-w-md mx-auto">
                            Keep your profile information up to date for a personalized experience
                        </p>
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSave)} className="space-y-6">
                            {/* Email field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-orange-500" />
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled
                                                className="bg-gray-100 border-2 border-gray-200 rounded-xl h-12 px-4 text-gray-500 !cursor-not-allowed opacity-70"
                                                placeholder="Email cannot be changed"
                                            />

                                        </FormControl>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Your email cannot be changed
                                        </p>
                                    </FormItem>
                                )}
                            />

                            {/* Name field */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-700 font-semibold flex items-center gap-2">
                                            <UserIcon className="w-4 h-4 text-orange-500" />
                                            Full Name
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Enter your full name"
                                                className="bg-slate-50 border-2 border-gray-200 rounded-xl h-12 px-4 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200"
                                            />
                                        </FormControl>
                                        <FormMessage className="text-rose-500" />
                                    </FormItem>
                                )}
                            />

                            {/* Address section */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 text-gray-700 font-semibold mb-4">
                                    <MapPin className="w-5 h-5 text-orange-500" />
                                    <span>Location Details</span>
                                </div>

                                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="addressLine1"
                                        render={({ field }) => (
                                            <FormItem className="md:col-span-3">
                                                <FormLabel className="text-gray-700 font-medium">
                                                    Street Address
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="123 Main Street"
                                                        className="bg-slate-50 hover:bg-white border-2 border-gray-200 rounded-xl h-12 px-4 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-rose-500" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="city"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-gray-700 font-medium">
                                                    City
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Hyderabad"
                                                        className="bg-slate-50 hover:bg-white border-2 border-gray-200 rounded-xl h-12 px-4 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-rose-500" />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={form.control}
                                        name="country"
                                        render={({ field }) => (
                                            <FormItem className="md:col-span-2">
                                                <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                                                    <Globe className="w-4 h-4 text-orange-500" />
                                                    Country
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="India"
                                                        className="bg-slate-50 hover:bg-white border-2 border-gray-200 rounded-xl h-12 px-4 focus:border-amber-400 focus:ring-4 focus:ring-amber-100 transition-all duration-200"
                                                    />
                                                </FormControl>
                                                <FormMessage className="text-rose-500" />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </div>

                            {/* Submit button */}
                            <div className="pt-6">
                                {isLoading ? (
                                    <LoadingButton />
                                ) : (
                                    <Button
                                        type="submit"
                                        className="w-full bg-amber-500 hover:bg-orange-400 text-white font-semibold rounded-xl h-12"
                                    >
                                        {buttonText}
                                    </Button>
                                )}
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserProfileForm;

// import React from 'react'

// const UserProfileForm = () => {
//   return (
//     <div className='w-full h-screen flex justify-center items-center text-5xl text-black bg-red-500 mt-64'>div</div>
//   )
// }

// export default UserProfileForm