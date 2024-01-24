"use client"

import axios from "axios"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageSquare } from "lucide-react"
import { useRouter } from "next/navigation"
import { ChatCompletionMessage } from "openai/resources/index.mjs";

import { Heading } from "@/components/heading"
import { formSchema } from "./constants"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Empty } from "@/components/empty"

const ConversationPage = () => {
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
        role: "assistant",
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
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
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
                        placeholder="Ask anything..."
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
        <div className="space-y-4 mt-4">
          {
            messages.length === 0 && !isLoading && (
              <Empty />
            )
          }
          <div className="flex flex-col-reverse gap-y-4">
            {
              messages.map((message) => (
                <div key={message.content}>
                  {message.content}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationPage