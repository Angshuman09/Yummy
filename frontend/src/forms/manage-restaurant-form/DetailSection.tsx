import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'

const DetailSection = () => {
    const {control} = useFormContext();
  return (
    <div className=''>
        <div>
            <h2>Details</h2>
            <FormDescription>
                Enter the details about your restaurant
            </FormDescription>
        </div>
        <FormField control={control} name="restaurantName" render={({field})=>(
            <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>

        <div>
            <FormField control={control} name="city" render={({field})=>(
            <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>

          <FormField control={control} name="country" render={({field})=>(
            <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                    <Input {...field}/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>
        </div>

          <FormField control={control} name="deliveryPrice" render={({field})=>(
            <FormItem>
                <FormLabel>Estimated Delivery Time ($) </FormLabel>
                <FormControl>
                    <Input {...field} placeholder='1.5'/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>

          <FormField control={control} name="estimatedDeliveryTime" render={({field})=>(
            <FormItem>
                <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
                <FormControl>
                    <Input {...field} placeholder='20'/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>
    </div>
  )
}

export default DetailSection