import { FormDescription, FormField, FormMessage, FormItem } from "@/components/ui/form";
import { useFormContext } from "react-hook-form"
import { cuisineList } from "@/config/restaurant-options-config";
import CuisineCheckbox from "./CuisineCheckbox";
const CusinesSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
          Cuisines
        </h2>
        <FormDescription className="text-gray-500 mt-2 ml-3">
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => (
          <FormItem>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckbox key={cuisineItem} cuisine={cuisineItem} field={field} />
              ))}
            </div>
            <FormMessage className="text-red-500 text-sm mt-4" />
          </FormItem>
        )}
      />
    </div>
  )
}

export default CusinesSection