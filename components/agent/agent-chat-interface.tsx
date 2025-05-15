"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Package, Send } from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "customer" | "agent"
  timestamp: string
}

interface ChatContact {
  id: string
  name: string
  orderId: string
  lastMessage: string
  unread: boolean
  avatar: string
}

const contacts: ChatContact[] = [
  {
    id: "contact1",
    name: "Jackson Miller",
    orderId: "ORD-001",
    lastMessage: "Are you close to the delivery location?",
    unread: true,
    avatar: "JM",
  },
  {
    id: "contact2",
    name: "Sophia Anderson",
    orderId: "ORD-002",
    lastMessage: "Thanks for the update!",
    unread: false,
    avatar: "SA",
  },
  {
    id: "contact3",
    name: "William Kim",
    orderId: "ORD-003",
    lastMessage: "Please be careful with the package.",
    unread: false,
    avatar: "WK",
  },
]

const initialMessages: Record<string, Message[]> = {
  contact1: [
    {
      id: "msg1",
      content: "Hi, I'm on my way to deliver your package.",
      sender: "agent",
      timestamp: "2:30 PM",
    },
    {
      id: "msg2",
      content: "Great! How long do you think it will take?",
      sender: "customer",
      timestamp: "2:32 PM",
    },
    {
      id: "msg3",
      content: "I should be there in about 15 minutes.",
      sender: "agent",
      timestamp: "2:33 PM",
    },
    {
      id: "msg4",
      content: "Are you close to the delivery location?",
      sender: "customer",
      timestamp: "2:45 PM",
    },
  ],
  contact2: [
    {
      id: "msg1",
      content: "Hello, I'll be delivering your package today.",
      sender: "agent",
      timestamp: "1:15 PM",
    },
    {
      id: "msg2",
      content: "I'm running about 10 minutes behind schedule due to traffic.",
      sender: "agent",
      timestamp: "1:30 PM",
    },
    {
      id: "msg3",
      content: "No problem, thanks for letting me know!",
      sender: "customer",
      timestamp: "1:32 PM",
    },
    {
      id: "msg4",
      content: "I've arrived at the pickup location and will be on my way shortly.",
      sender: "agent",
      timestamp: "1:45 PM",
    },
    {
      id: "msg5",
      content: "Thanks for the update!",
      sender: "customer",
      timestamp: "1:46 PM",
    },
  ],
  contact3: [
    {
      id: "msg1",
      content: "Hi, I'll be picking up your package soon.",
      sender: "agent",
      timestamp: "11:20 AM",
    },
    {
      id: "msg2",
      content: "Great! The package contains fragile items.",
      sender: "customer",
      timestamp: "11:22 AM",
    },
    {
      id: "msg3",
      content: "Please be careful with the package.",
      sender: "customer",
      timestamp: "11:23 AM",
    },
    {
      id: "msg4",
      content: "I'll handle it with care, don't worry.",
      sender: "agent",
      timestamp: "11:25 AM",
    },
  ],
}

export function AgentChatInterface() {
  const [activeContact, setActiveContact] = useState<ChatContact | null>(contacts[0])
  const [messages, setMessages] = useState<Record<string, Message[]>>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [contactList, setContactList] = useState(contacts)

  const handleSendMessage = () => {
    if (!activeContact || !newMessage.trim()) return

    const message: Message = {
      id: `msg${Date.now()}`,
      content: newMessage,
      sender: "agent",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setMessages((prev) => ({
      ...prev,
      [activeContact.id]: [...prev[activeContact.id], message],
    }))
    setNewMessage("")
  }

  const handleContactClick = (contact: ChatContact) => {
    if (contact.unread) {
      setContactList((prev) => prev.map((c) => (c.id === contact.id ? { ...c, unread: false } : c)))
    }
    setActiveContact(contact)
  }

  return (
    <div className="flex h-full">
      <div className="w-1/3 border-r">
        <div className="p-4 border-b">
          <Input placeholder="Search conversations..." />
        </div>
        <ScrollArea className="h-[calc(100vh-14rem)]">
          <div className="space-y-1 p-2">
            {contactList.map((contact) => (
              <button
                key={contact.id}
                className={`w-full flex items-start space-x-2 p-3 text-left rounded-lg transition-colors ${
                  activeContact?.id === contact.id ? "bg-muted" : "hover:bg-muted/50"
                }`}
                onClick={() => handleContactClick(contact)}
              >
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt={contact.name} />
                  <AvatarFallback>{contact.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{contact.name}</p>
                    <div className="flex items-center">
                      {contact.unread && <div className="h-2 w-2 rounded-full bg-primary"></div>}
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Package className="h-3 w-3 mr-1" />
                    <span>{contact.orderId}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{contact.lastMessage}</p>
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex-1 flex flex-col">
        {activeContact ? (
          <>
            <div className="p-4 border-b flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt={activeContact.name} />
                <AvatarFallback>{activeContact.avatar}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{activeContact.name}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <Package className="h-3 w-3 mr-1" />
                  <span>{activeContact.orderId}</span>
                </div>
              </div>
            </div>

            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages[activeContact.id].map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "agent" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        message.sender === "agent" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p>{message.content}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "agent" ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage()
                }}
                className="flex space-x-2"
              >
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select a conversation to start chatting
          </div>
        )}
      </div>
    </div>
  )
}
