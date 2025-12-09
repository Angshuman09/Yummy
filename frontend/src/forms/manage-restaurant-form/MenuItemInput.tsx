import { Button } from "@/components/ui/button";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
    index: number;
    removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
    const { control } = useFormContext();

    return (
        <div className="flex flex-row items-end gap-4 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
            <FormField
                control={control}
                name={`menuItems.${index}.name`}
                render={({ field }) => (
                    <FormItem className="flex-1">
                        <FormLabel className="flex items-center gap-1 text-sm font-medium text-gray-700">
                            Name <FormMessage className="text-red-500 text-xs" />
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="Cheese Pizza"
                                className="bg-gray-50 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200"
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            <FormField
                control={control}
                name={`menuItems.${index}.price`}
                render={({ field }) => (
                    <FormItem className="w-32">
                        <FormLabel className="flex items-center gap-1 text-sm font-medium text-gray-700">
                            Price ($) <FormMessage className="text-red-500 text-xs" />
                        </FormLabel>
                        <FormControl>
                            <Input
                                {...field}
                                placeholder="8.00"
                                className="bg-gray-50 border-gray-200 focus:border-orange-500 focus:ring-orange-500 rounded-lg transition-all duration-200"
                            />
                        </FormControl>
                    </FormItem>
                )}
            />
            <Button
                type="button"
                onClick={removeMenuItem}
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
                Remove
            </Button>
        </div>
    );
};

export default MenuItemInput;