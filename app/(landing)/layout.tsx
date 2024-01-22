import LandingNavbar from "@/components/landing-navbar"

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 overflow-auto">
      <LandingNavbar />
      <div className="mx-auto max-w-screen-xl h-full">
        {children}
      </div>
    </main>
  )
}

export default LandingLayout