import { FormDescription, FormField, FormMessage, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form"
import { cuisineList } from "@/config/restaurant-options-config";
import CuisineCheckbox from "./CuisineCheckbox";
const CusinesSection = () => {
    const {control} = useFormContext();
  return (
    <div>
      <div>
        <h2>Cuisines</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
      control={control}
      name="cuisines"
      render={({field})=> (
        <FormItem>
          <div>
            {cuisineList.map((cuisineItem) =>(
              <CuisineCheckbox cuisine={cuisineItem} field={field}/>
            ))}
          </div>
          <FormMessage/>
        </FormItem>
      )}
      />
    </div>
  )
}

export default CusinesSection