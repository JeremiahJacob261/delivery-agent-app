import { CustomerHeader } from "@/components/customer-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CustomerChatInterface } from "@/components/customer/customer-chat-interface"

export default function ChatPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <CustomerHeader title="Chat" />

      <Card className="h-[calc(100vh-10rem)]">
        <CardHeader>
          <CardTitle>Delivery Communications</CardTitle>
          <CardDescription>Chat with your delivery agents</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <CustomerChatInterface />
        </CardContent>
      </Card>
    </div>
  )
}
