import { useUser } from "@clerk/nextjs";

export const UserAvatar = () => {
  const { user } = useUser();

  return (
    <div>UserAvatar</div>
  )
}