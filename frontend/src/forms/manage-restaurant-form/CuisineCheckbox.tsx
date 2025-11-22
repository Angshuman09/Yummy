import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormItem, FormLabel } from "@/components/ui/form"
import type { ControllerRenderProps, FieldValues } from "react-hook-form"

type Props = {
    cuisine: string,
    field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox = ({cuisine, field}: Props) => {
  return (
    <FormItem>
        <FormControl>
            <Checkbox 
            checked={field.value.includes(cuisine)}
            onCheckedChange={(checked) =>{
                if(checked){
                    field.onChange([...field.value, cuisine]);
                }else{
                    field.onChange(
                        field.value.filter((value: string) => value !== cuisine)
                    );
                }
            }}
            />
        </FormControl>
        <FormLabel>{cuisine}</FormLabel>
    </FormItem>
  )
}

export default CuisineCheckbox