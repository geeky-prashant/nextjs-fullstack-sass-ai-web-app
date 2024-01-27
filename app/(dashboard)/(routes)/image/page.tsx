"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import * as z from "zod"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { ImageIcon } from "lucide-react"
import { Heading } from "@/components/heading"
import { BotAvatar } from "@/components/bot-avatar"
import { UserAvatar } from "@/components/user-avatar"
import { formSchema } from "./constants"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Empty } from "@/components/empty"
import { Loader } from "@/components/loader"

type ChatCompletionMessage = {
  role: "user" | "assistant";
  content: string;
};

const ImagePage = () => {
  const router = useRouter()
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: ""
    }
  })

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessage = {
        role: "user",
        content: values.prompt
      };

      const newMessages = [...messages, userMessage]

      const response = await axios.post("/api/conversation", {
        messages: newMessages
      })

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: any) {
      //TODO: Open Pro Model
      console.log(error)
    } finally {
      router.refresh()
    }
  }

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Our most advanced image generation model"
        icon={ImageIcon}
        iconColor="text-pink-700"
        bgColor="bg-pink-700/10"
      />

      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                control={form.control}
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        placeholder="Generate image..."
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >Generate</Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 py-4">
          {
            isLoading && (
              <div className="p-8 rounded-lg w-full flex items-start justify-center bg-muted">
                <Loader />
              </div>
            )
          }
          {
            messages.length === 0 && !isLoading && (
              <Empty label="No image generated" />
            )
          }
          <div className="flex flex-col-reverse gap-y-4">
            {
              messages.map((message) => (
                <div
                  key={message.content}
                  className={cn("p-8 w-full flex items-start gap-x-8 rounded-lg",
                    message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                  )}
                >
                  {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                  <p className="text-sm">
                    {message.content}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePage