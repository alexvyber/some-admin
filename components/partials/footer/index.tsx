// import useFooterType from "@/hooks/useFooterType"
import Link from "next/link"
import { cx } from "cvax"

const Footer = ({ className = "custom-class" }) => {
  const [footerType] = "sticky" //useFooterType()

  const footerclassName = () => {
    switch (footerType) {
      case "sticky":
        return "sticky bottom-0 z-[999]"
      case "static":
        return "static"
      case "hidden":
        return "hidden"
      default:
        return ""
    }
  }

  return (
    <footer className={cx(footerclassName(), className)}>
      <div className="site-footer bg-white px-6 py-4 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
          <div className="text-center text-sm ltr:md:text-start rtl:md:text-right">
            Copyright &copy; 2023 Some Admin, All rights Reserved
          </div>
          <div className="text-center text-sm ltr:md:text-right rtl:md:text-end">
            Hand-crafted & Made by{" "}
            <Link href="#" target="_blank" className="font-semibold text-primary-500">
              Alex Vyber
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
