import { Checkbox } from "@/components/ui/checkbox"
import { FormControl, FormItem, FormLabel } from "@/components/ui/form"
import type { ControllerRenderProps, FieldValues } from "react-hook-form"

type Props = {
    cuisine: string,
    field: ControllerRenderProps<FieldValues, "cuisines">;
};

const CuisineCheckbox = ({ cuisine, field }: Props) => {
    const isSelected = field.value.includes(cuisine);

    return (
        <FormItem
            className={`
                flex flex-row items-center space-x-3 space-y-0 
                rounded-full px-4 py-2.5 cursor-pointer 
                border-2 transition-all duration-300 ease-in-out
                ${isSelected
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 border-orange-500 shadow-md shadow-orange-200'
                    : 'bg-white border-gray-200 hover:border-orange-300 hover:bg-orange-50'
                }
            `}
            onClick={() => {
                if (isSelected) {
                    field.onChange(field.value.filter((value: string) => value !== cuisine));
                } else {
                    field.onChange([...field.value, cuisine]);
                }
            }}
        >
            <FormControl>
                <Checkbox
                    checked={isSelected}
                    className={`
                        hidden
                    `}
                    onCheckedChange={(checked) => {
                        if (checked) {
                            field.onChange([...field.value, cuisine]);
                        } else {
                            field.onChange(
                                field.value.filter((value: string) => value !== cuisine)
                            );
                        }
                    }}
                />
            </FormControl>
            <FormLabel
                className={`
                    text-sm font-medium cursor-pointer select-none
                    ${isSelected ? 'text-white' : 'text-gray-600'}
                `}
            >
                {cuisine}
            </FormLabel>
        </FormItem>
    )
}

export default CuisineCheckbox