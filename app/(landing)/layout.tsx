import LandingNavbar from "@/components/landing-navbar"

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#0B1121] overflow-auto">
      <LandingNavbar />
      <div className="mx-auto max-w-screen-xl h-full">
        {children}
      </div>
    </main>
  )
}

export default LandingLayout