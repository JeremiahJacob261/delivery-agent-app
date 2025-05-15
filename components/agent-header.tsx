import { MobileSidebar } from "@/components/mobile-sidebar"
import { UserNav } from "@/components/user-nav"

interface AgentHeaderProps {
  title: string
}

export function AgentHeader({ title }: AgentHeaderProps) {
  return (
    <div className="flex h-16 items-center px-4 border-b bg-white dark:bg-slate-950">
      <MobileSidebar role="agent" />
      <h1 className="text-xl font-bold ml-4 md:ml-0">{title}</h1>
      <div className="ml-auto flex items-center space-x-4">
        <UserNav />
      </div>
    </div>
  )
}
