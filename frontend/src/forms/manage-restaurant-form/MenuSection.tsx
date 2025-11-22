import { FormDescription, FormField } from '@/components/ui/form';
import { useFormContext, useFieldArray } from 'react-hook-form'

const MenuSection = () => {
    const {control} = useFormContext();
    const {fields, append, remove} = useFieldArray({
        control,
        name: "menuItems",
    });

  return (
    <div>
        <div>
            <h2>Menu</h2>
            <FormDescription>
                 Create your menu and give each item a name and a price
            </FormDescription>
        </div>
        <FormField
        control={control}
        name='menuItems'
        render={()=>{
            
        }}
        />
    </div>
  )
}

export default MenuSection