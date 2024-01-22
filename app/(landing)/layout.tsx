import LandingNavbar from "@/components/landing-navbar"

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full w-full bg-slate-950 overflow-auto">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
      </div>
      <LandingNavbar />
      <div className="mx-auto max-w-screen-xl h-full">
        {children}
      </div>
    </main>
  )
}

export default LandingLayout