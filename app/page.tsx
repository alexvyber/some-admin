import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExamplesNav } from "@/components/templates/examples-nav"
import { Icons } from "@/components/templates/icons"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/templates/page-header"
import { StyleSwitcher } from "@/components/templates/style-switcher"
import DashboardPage from "@/app/examples/dashboard/page"

export default function IndexPage() {
  return (
    <div className="container relative pb-10">
      {/* <StyleSwitcher />
      <PageHeader>
        <Link
          href="/docs/forms/react-hook-form"
          className="inline-flex items-center py-1 px-3 text-sm font-medium rounded-lg bg-muted"
        >
          🎉 <Separator className="mx-2 h-4" orientation="vertical" /> Building
          forms with React Hook Form and Zod
          <ChevronRight className="ml-1 w-4 h-4" />
        </Link>
        <PageHeaderHeading>Build your component library.</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </PageHeaderDescription>
        <div className="flex items-center pt-4 pb-8 space-x-4 w-full md:pb-10">
          <Link href="/docs" className={cn(buttonVariants())}>
            Get Started
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            <Icons.gitHub className="mr-2 w-4 h-4" />
            GitHub
          </Link>
        </div>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="overflow-hidden space-y-8 rounded-lg border-2 md:hidden border-primary dark:border-muted">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden rounded-lg border shadow-xl bg-background">
          <DashboardPage />
        </div>
      </section> */}
    </div>
  )
}
