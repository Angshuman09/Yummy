import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const ImageSection = () => {
    const { control, watch } = useFormContext();

    const existingImageUrl = watch("imageUrl");

    return (
        <div className="space-y-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></span>
                    Image
                </h2>
                <FormDescription className="text-gray-500 mt-2 ml-3">
                    Add an image that will be displayed on your restaurant listing in the
                    search results. Adding a new image will overwrite the existing one.
                </FormDescription>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Image Preview */}
                {existingImageUrl && (
                    <div className="md:w-1/2">
                        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-xl shadow-lg border border-gray-200">
                            <img
                                src={existingImageUrl}
                                alt="Restaurant preview"
                                className="rounded-xl object-cover h-full w-full"
                            />
                        </AspectRatio>
                    </div>
                )}

                {/* Upload Area */}
                <div className={existingImageUrl ? "md:w-1/2" : "md:w-2/3"}>
                    <FormField
                        control={control}
                        name="imageFile"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <label className="flex flex-col items-center justify-center w-full h-48 bg-white border-2 border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 hover:border-orange-400 transition-all duration-300 group">
                                        {/* Upload Icon */}
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                className="w-12 h-12 mb-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1.5}
                                                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500">
                                                <span className="font-semibold text-orange-500">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-400">PNG, JPG or JPEG</p>
                                        </div>
                                        <Input
                                            className="hidden"
                                            type="file"
                                            accept=".jpg, .jpeg, .png"
                                            onChange={(event) =>
                                                field.onChange(
                                                    event.target.files ? event.target.files[0] : null
                                                )
                                            }
                                        />
                                    </label>
                                </FormControl>
                                <FormMessage className="text-red-500 text-sm mt-2" />
                            </FormItem>
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageSection;