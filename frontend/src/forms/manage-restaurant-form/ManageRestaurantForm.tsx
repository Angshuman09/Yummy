import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import type { Restaurant } from "@/types";
import { z } from "zod";
import DetailSection from "./DetailSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CusinesSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/LoadingButton";

// this is formSchema
const formSchema = z.object({
    restaurantName: z.string({ error: "restaurant name is required" }),
    city: z.string({ error: "city is required" }),
    country: z.string({ error: "Country is required" }),
    deliveryPrice: z.coerce.number({
        error: (issue) => issue.input === undefined
            ? "Delivery price is requried" : "Must be a valid number"
    }),
    estimatedDeliveryTime: z.coerce.number({
        error: (issue) => issue.input === undefined
            ? "Estimated delivery time is required" : "Must be a valid number",
    }),
    cuisines: z.array(z.string()).nonempty({
        message: "Please select at least one item"
    }),
    menuItems: z.array(
        z.object({
            name: z.string().min(1, "name is required"),
            price: z.coerce.number().min(1, "price is required"),
        })
    ),
    imageUrl: z.string().optional(),
    imageFile: z.instanceof(File, { message: "image is required" }).optional(),
})


type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
    // restaurant?: Restaurant;
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
}
const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
    const form = useForm<RestaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cuisines: [],
            menuItems: [{ name: "", price: 0 }],
        },
    });

    const onSubmit = (formDataJson: RestaurantFormData) => {

    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
                <DetailSection />
                <Separator className="my-8" />
                <CuisinesSection />
                <Separator className="my-8" />
                <MenuSection />
                <Separator className="my-8" />
                <ImageSection />
                <div className="flex justify-end pt-6">
                    {isLoading ? (
                        <LoadingButton />
                    ) : (
                        <Button
                            type="submit"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        >
                            Submit
                        </Button>
                    )}
                </div>
            </form>
        </Form>
    )
}

export default ManageRestaurantForm