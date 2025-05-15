import { AgentHeader } from "@/components/agent-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AgentChatInterface } from "@/components/agent/agent-chat-interface"

export default function ChatPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AgentHeader title="Chat" />

      <Card className="h-[calc(100vh-10rem)]">
        <CardHeader>
          <CardTitle>Customer Communications</CardTitle>
          <CardDescription>Chat with customers about their deliveries</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <AgentChatInterface />
        </CardContent>
      </Card>
    </div>
  )
}
