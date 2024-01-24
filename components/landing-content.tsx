"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    id: 1,
    name: "Jane D",
    avatar: "J",
    title: "Marketing Manager",
    description: "Our team has been using this AI SaaS App for a few months now, and it has completely transformed our workflow. The chatbot feature has streamlined customer interactions, the image generation tool has made our social media posts more engaging, and the music and video generation capabilities have added a creative touch to our marketing campaigns. It's a game-changer for any marketing team looking to stay ahead of the curve!"
  },
  {
    id: 2,
    name: "Alex M",
    avatar: "A",
    title: "Software Developer",
    description: "As a developer, I've been impressed by the code generation feature of this AI SaaS App. It not only accelerates the coding process but also helps in maintaining clean and efficient code. The chatbot integration has been a huge time-saver for customer support within our applications. This is a must-have tool for any development team."
  },
  {
    id: 3,
    name: "Emily W",
    avatar: "E",
    title: "Content Creator",
    description: "I can't express how much I love using this AI SaaS App for content creation. The image generation tool has sparked my creativity, allowing me to produce eye-catching visuals effortlessly. The music and video generation features have brought a whole new dimension to my content. It's like having a team of creative assistants at my fingertips!"
  },
  {
    id: 4,
    name: "David P",
    avatar: "D",
    title: "IT Manager",
    description: "Implementing this AI SaaS App has significantly improved our internal processes. The chatbot has reduced the burden on our IT support team, providing quick and accurate responses to common queries. The code generation feature has expedited project timelines, and the image, music, and video generation tools have added a layer of innovation to our projects. It's a versatile solution that caters to multiple aspects of our business."
  },
  {
    id: 5,
    name: "Sarah L",
    avatar: "S",
    title: "Startup Founder",
    description: "Running a startup demands efficiency and innovation, and this AI SaaS App delivers on both fronts. The chatbot has been instrumental in handling customer inquiries, while the image, music, and video generation tools have given our brand a unique and memorable identity. The code generation feature has accelerated our development cycles. It's a powerful toolkit for any startup looking to scale rapidly."
  },
  {
    id: 6,
    name: "Michael H",
    avatar: "M",
    title: "Sales Representative",
    description: "In the fast-paced world of sales, responsiveness is key. The chatbot feature in this AI SaaS App has revolutionized our customer interactions, providing instant answers and nurturing leads effectively. The image, music, and video generation tools have enhanced our presentations, leaving a lasting impression on clients. It's a salesperson's secret weapon!"
  },
  {
    id: 7,
    name: "Sophie R",
    avatar: "S",
    title: "E-learning Instructor",
    description: "Teaching online has its challenges, but this AI SaaS App has been a game-changer for me. The chatbot facilitates seamless communication with students, answering queries and providing additional resources. The code generation feature has simplified the creation of interactive exercises, and the image, music, and video generation tools have brought a new level of engagement to my courses. A must-have for educators!"
  },
  {
    id: 8,
    name: "Daniel K",
    avatar: "D",
    title: "Creative Director",
    description: "Creativity knows no bounds with this AI SaaS App. The image generation tool has elevated our design concepts, and the music and video generation features have added a dynamic edge to our multimedia projects. The chatbot ensures smooth collaboration within our creative team. It's become an indispensable tool in our quest for cutting-edge design and content."
  },
  {
    id: 9,
    name: "Olivia B",
    avatar: "O",
    title: "Event Planner",
    description: "As an event planner, details matter, and this AI SaaS App has become my go-to assistant. The chatbot handles event inquiries seamlessly, freeing up my time to focus on intricate event planning. The image generation tool helps in creating visually stunning invitations, and the music and video generation features add a unique touch to our events. It's the perfect companion for any event professional."
  },
  {
    id: 10,
    name: "Ryan S",
    avatar: "R",
    title: "IT Security Analyst",
    description: "Security is paramount in our industry, and this AI SaaS App has impressed me with its capabilities. The chatbot ensures swift response to security incidents, and the code generation feature aids in implementing secure coding practices. The image, music, and video generation tools add an extra layer of innovation without compromising on security. A reliable tool for any IT security team."
  },
]

const LandingContent = () => {
  const [readMoreStates, setReadMoreStates] = useState(testimonials.map(() => false));

  const handleReadMoreClick = (index: number) => {
    const newReadMoreStates = [...readMoreStates];
    newReadMoreStates[index] = !newReadMoreStates[index];
    setReadMoreStates(newReadMoreStates);
  };

  return (
    <div className="px-4 pb-20">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold mb-10">
        Testimonials
      </h2>

      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="bg-[#192339] border-none text-white">
                <CardHeader>
                  <CardTitle className="flex items-start gap-x-2">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-base">
                        {item.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="text-lg">{item.name}</p>
                      <p className="text-zinc-400 text-sm">{item.title}</p>
                    </div>
                  </CardTitle>
                  <CardContent className="pt-4 px-0">
                    {readMoreStates[index] ? item.description : `${item.description.substring(0, 100)}...`}
                    <br />
                    <button className="pt-2 md:pt-3 flex items-center gap-0.5 text-[#5EF4EE] text-sm md:text-base font-semibold" onClick={() => handleReadMoreClick(index)}>
                      {readMoreStates[index] ? "show less" : "show more"}
                      {readMoreStates[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                  </CardContent>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </div>
  )
}

export default LandingContent