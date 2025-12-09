import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

const DetailSection = () => {
    const { control } = useFormContext();
    return (
        <div className='space-y-6'>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
                    Details
                </h2>
                <FormDescription className="text-gray-500 mt-2 ml-3">
                    Enter the details about your restaurant
                </FormDescription>
            </div>

            <FormField control={control} name="restaurantName" render={({ field }) => (
                <FormItem className="space-y-2">
                    <FormLabel className="text-sm font-medium text-gray-700">Restaurant Name</FormLabel>
                    <FormControl>
                        <Input
                            {...field}
                            placeholder="Enter your restaurant name"
                            className="bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200 hover:border-orange-300"
                        />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                </FormItem>
            )} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={control} name="city" render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">City</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Enter city"
                                className="bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200 hover:border-orange-300"
                            />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                )} />

                <FormField control={control} name="country" render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">Country</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Enter country"
                                className="bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200 hover:border-orange-300"
                            />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                )} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField control={control} name="deliveryPrice" render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">Delivery Price ($)</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder='1.50'
                                className="bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200 hover:border-orange-300"
                            />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                )} />

                <FormField control={control} name="estimatedDeliveryTime" render={({ field }) => (
                    <FormItem className="space-y-2">
                        <FormLabel className="text-sm font-medium text-gray-700">Estimated Delivery Time (minutes)</FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder='20'
                                className="bg-white border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200 hover:border-orange-300"
                            />
                        </FormControl>
                        <FormMessage className="text-red-500 text-sm" />
                    </FormItem>
                )} />
            </div>
        </div>
    )
}

export default DetailSection