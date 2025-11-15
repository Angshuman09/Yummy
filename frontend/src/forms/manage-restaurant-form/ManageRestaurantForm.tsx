import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from 'react-hook-form';
import type { Restaurant } from "@/types";
import {z} from "zod";
const formSchema = z.object({
    restaurantName: z.string( {error : "restaurant name is required"}),
city: z.string({error: "city is required"}),
country: z.string({error: "Country is required"}),
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
imageFile: z.instanceof(File, {message: "image is required"}).optional(),
})

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
    restaurant?: Restaurant;
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
}
const ManageRestaurantForm = () => {
  return (
    <div>ManageRestaurantForm</div>
  )
}

export default ManageRestaurantForm