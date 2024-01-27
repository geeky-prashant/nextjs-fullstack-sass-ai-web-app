import { Avatar, AvatarImage } from "@/components/ui/avatar"

export const BotAvatar = () => {
  return (
    <Avatar className="bg-yellow-100 rounded-full h-8 w-8">
      <AvatarImage className="p-1" src="/chatbot.svg" />
    </Avatar>
  )
}