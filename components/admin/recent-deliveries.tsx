import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentDeliveries() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>JM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Miller</p>
          <p className="text-sm text-muted-foreground">123 Main St → 456 Oak Ave</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Progress
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>SA</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sophia Anderson</p>
          <p className="text-sm text-muted-foreground">789 Pine St → 321 Maple Dr</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            Delivered
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">555 Cedar Ln → 777 Birch Rd</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            Pending
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>EM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Emma Martinez</p>
          <p className="text-sm text-muted-foreground">888 Elm St → 999 Walnut Ave</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            Delivered
          </Badge>
        </div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>LJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Liam Johnson</p>
          <p className="text-sm text-muted-foreground">444 Spruce St → 222 Fir Ln</p>
        </div>
        <div className="ml-auto font-medium">
          <Badge className="ml-auto" variant="outline">
            In Progress
          </Badge>
        </div>
      </div>
    </div>
  )
}
