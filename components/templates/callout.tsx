// import { cn } from "@/lib/utils"

// interface CalloutProps {
//   icon?: string
//   children?: React.ReactNode
//   type?: "default" | "warning" | "danger"
// }

// export function Callout({
//   children,
//   icon,
//   type = "default",
//   ...props
// }: CalloutProps) {
//   return (
//     <div
//       className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
//         "border-red-900 bg-red-50": type === "danger",
//         "border-yellow-900 bg-yellow-50": type === "warning",
//       })}
//       {...props}
//     >
//       {icon && <span className="mr-4 text-2xl">{icon}</span>}
//       <div>{children}</div>
//     </div>
//   )
// }

// import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface CalloutProps {
  icon?: string
  title?: string
  children?: React.ReactNode
}

export function Callout({ title, children, icon, ...props }: CalloutProps) {
  return (
    <Alert {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}
