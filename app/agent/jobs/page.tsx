import { AgentHeader } from "@/components/agent-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AvailableJobs } from "@/components/agent/available-jobs"

export default function JobsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AgentHeader title="Available Jobs" />

      <Card>
        <CardHeader>
          <CardTitle>Job Board</CardTitle>
          <CardDescription>Browse and accept delivery jobs in your area.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search jobs..." className="w-full pl-8" />
            </div>
            <div className="flex items-center space-x-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="heavy">Heavy</SelectItem>
                  <SelectItem value="fragile">Fragile</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="distance">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="pay">Highest Pay</SelectItem>
                  <SelectItem value="time">Shortest Time</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <AvailableJobs />
        </CardContent>
      </Card>
    </div>
  )
}
