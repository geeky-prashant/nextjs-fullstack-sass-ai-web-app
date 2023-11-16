import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <div>
      <p>Dashbaord Page</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default DashboardPage;