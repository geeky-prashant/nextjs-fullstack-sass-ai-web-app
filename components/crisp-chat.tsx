"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("963a5567-b692-4514-82a1-eee132866526")
  }, [])

  return null;
}