import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
export function LoadingButton() {
  return (
    <Button size="sm" variant="outline" disabled className="w-full bg-amber-500 hover:bg-orange-400 text-white font-semibold rounded-xl h-12">
      <Spinner/>
      Submit
    </Button>
  )
}
