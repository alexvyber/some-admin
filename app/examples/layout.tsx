import { Metadata } from "next"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExamplesNav } from "@/components/templates/examples-nav"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/templates/page-header"

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="container relative pb-10">
        <PageHeader className="page-header">
          <Link
            href="/docs/forms/react-hook-form"
            className="inline-flex items-center py-1 px-3 text-sm font-medium rounded-lg bg-muted"
          >
            🎉 <Separator className="mx-2 h-4" orientation="vertical" />{" "}
            Building forms with React Hook Form and Zod
            <ChevronRight className="ml-1 w-4 h-4" />
          </Link>
          <PageHeaderHeading className="hidden md:block">
            Check out some examples.
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">Examples</PageHeaderHeading>
          <PageHeaderDescription>
            Dashboard, cards, authentication. Some examples built using the
            components. Use this as a guide to build your own.
          </PageHeaderDescription>
          <section className="flex items-center pt-4 pb-8 space-x-4 w-full md:pb-10">
            <Link
              href="/docs"
              className={cn(buttonVariants(), "rounded-[6px]")}
            >
              Get Started
            </Link>
            <Link
              href="/components"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-[6px]"
              )}
            >
              Components
            </Link>
          </section>
        </PageHeader>
        <section>
          <ExamplesNav />
          <div className="overflow-hidden border shadow-xl rounded-[0.5rem] bg-background">
            {children}
          </div>
        </section>
      </div>
    </>
  )
}
