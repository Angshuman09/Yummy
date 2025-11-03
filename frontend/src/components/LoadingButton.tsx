import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
export function LoadingButton() {
  return (
    <Button size="sm" variant="outline" disabled>
      <Spinner />
      Submit
    </Button>
  )
}
