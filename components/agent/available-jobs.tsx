"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, MapPin, Package, Weight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const jobs = [
  {
    id: "JOB-001",
    customer: "Jackson Miller",
    pickup: "123 Main St, Anytown, USA",
    dropoff: "456 Oak Ave, Somewhere, USA",
    distance: "3.2 miles",
    time: "~15 min",
    pay: "$12.50",
    packageType: "Small",
    weight: "2.5 lbs",
    category: "light",
  },
  {
    id: "JOB-002",
    customer: "Sophia Anderson",
    pickup: "789 Pine St, Nowhere, USA",
    dropoff: "321 Maple Dr, Everywhere, USA",
    distance: "5.7 miles",
    time: "~25 min",
    pay: "$18.75",
    packageType: "Medium",
    weight: "8.3 lbs",
    category: "light",
  },
  {
    id: "JOB-003",
    customer: "William Kim",
    pickup: "555 Cedar Ln, Anywhere, USA",
    dropoff: "777 Birch Rd, Someplace, USA",
    distance: "7.1 miles",
    time: "~30 min",
    pay: "$22.00",
    packageType: "Large",
    weight: "15.6 lbs",
    category: "medium",
  },
  {
    id: "JOB-004",
    customer: "Emma Martinez",
    pickup: "888 Elm St, Othertown, USA",
    dropoff: "999 Walnut Ave, Elsewhere, USA",
    distance: "4.5 miles",
    time: "~20 min",
    pay: "$15.25",
    packageType: "Medium",
    weight: "7.2 lbs",
    category: "light",
  },
  {
    id: "JOB-005",
    customer: "Liam Johnson",
    pickup: "444 Spruce St, Noplace, USA",
    dropoff: "222 Fir Ln, Somewhereelse, USA",
    distance: "9.3 miles",
    time: "~40 min",
    pay: "$27.50",
    packageType: "Extra Large",
    weight: "32.1 lbs",
    category: "heavy",
  },
]

const categoryColorMap: Record<string, string> = {
  light: "bg-green-100 text-green-800 hover:bg-green-100/80",
  medium: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80",
  heavy: "bg-red-100 text-red-800 hover:bg-red-100/80",
  fragile: "bg-blue-100 text-blue-800 hover:bg-blue-100/80",
}

export function AvailableJobs() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[0] | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleAccept = () => {
    // In a real app, we would accept the job here
    setDialogOpen(false)
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <Card key={job.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="p-4 pb-0">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{job.customer}</h3>
                  <Badge className={categoryColorMap[job.category]}>
                    {job.category.charAt(0).toUpperCase() + job.category.slice(1)}
                  </Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Pickup</p>
                      <p className="text-sm text-muted-foreground">{job.pickup}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Dropoff</p>
                      <p className="text-sm text-muted-foreground">{job.dropoff}</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                    <DollarSign className="h-4 w-4 mb-1 text-muted-foreground" />
                    <span className="text-sm font-medium">{job.pay}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                    <Clock className="h-4 w-4 mb-1 text-muted-foreground" />
                    <span className="text-sm font-medium">{job.time}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-2 bg-muted rounded-md">
                    <Weight className="h-4 w-4 mb-1 text-muted-foreground" />
                    <span className="text-sm font-medium">{job.weight}</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-muted/50 p-4">
              <Button
                className="w-full"
                onClick={() => {
                  setSelectedJob(job)
                  setDialogOpen(true)
                }}
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        {selectedJob && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Job Details</DialogTitle>
              <DialogDescription>Review the details before accepting this delivery job.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{selectedJob.customer}</h3>
                <Badge className={categoryColorMap[selectedJob.category]}>
                  {selectedJob.category.charAt(0).toUpperCase() + selectedJob.category.slice(1)}
                </Badge>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Pickup</p>
                    <p className="text-sm text-muted-foreground">{selectedJob.pickup}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Dropoff</p>
                    <p className="text-sm text-muted-foreground">{selectedJob.dropoff}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Package className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Package</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedJob.packageType} - {selectedJob.weight}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Estimated Time</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedJob.distance} ({selectedJob.time})
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <DollarSign className="h-4 w-4 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Payment</p>
                    <p className="text-sm text-muted-foreground">{selectedJob.pay}</p>
                  </div>
                </div>
              </div>
            </div>
            <DialogFooter className="sm:justify-between">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAccept}>Accept Job</Button>
            </DialogFooter>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}
