import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={
        {
          /* base variables */
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",

          /* ✅ success toast colors */
          "--success-bg": "#bbf7d0",      // light green background
          "--success-text": "#14532d",    // dark green text
          "--success-border": "#86efac",  // green border

          /* ✅ error toast colors */
          "--error-bg": "#fecaca",        // light red background
          "--error-text": "#7f1d1d",      // dark red text
          "--error-border": "#fca5a5",    // red border
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
