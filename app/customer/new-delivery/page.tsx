"use client"

import type React from "react"

import { useState } from "react"
import { CustomerHeader } from "@/components/customer-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function NewDeliveryPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would submit the form data here
    router.push("/customer/dashboard")
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <CustomerHeader title="New Delivery Request" />

      <Card>
        <CardHeader>
          <CardTitle>Create a Delivery Request</CardTitle>
          <CardDescription>Fill out the form below to request a new delivery.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Pickup Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the address where the package will be picked up.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="pickup-address">Street Address</Label>
                    <Input id="pickup-address" placeholder="123 Main St" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="pickup-city">City</Label>
                      <Input id="pickup-city" placeholder="Anytown" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="pickup-state">State</Label>
                      <Input id="pickup-state" placeholder="CA" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="pickup-zip">ZIP Code</Label>
                      <Input id="pickup-zip" placeholder="12345" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="pickup-country">Country</Label>
                      <Input id="pickup-country" placeholder="USA" required />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="pickup-instructions">Special Instructions (Optional)</Label>
                    <Textarea id="pickup-instructions" placeholder="E.g., Ring doorbell, call upon arrival, etc." />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Delivery Information</h3>
                  <p className="text-sm text-muted-foreground">
                    Enter the address where the package will be delivered.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="delivery-address">Street Address</Label>
                    <Input id="delivery-address" placeholder="456 Oak Ave" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="delivery-city">City</Label>
                      <Input id="delivery-city" placeholder="Somewhere" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="delivery-state">State</Label>
                      <Input id="delivery-state" placeholder="CA" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="delivery-zip">ZIP Code</Label>
                      <Input id="delivery-zip" placeholder="67890" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="delivery-country">Country</Label>
                      <Input id="delivery-country" placeholder="USA" required />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="recipient-name">Recipient Name</Label>
                    <Input id="recipient-name" placeholder="John Doe" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="recipient-phone">Recipient Phone</Label>
                    <Input id="recipient-phone" placeholder="(555) 123-4567" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="delivery-instructions">Special Instructions (Optional)</Label>
                    <Textarea id="delivery-instructions" placeholder="E.g., Leave at door, signature required, etc." />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Package Information</h3>
                  <p className="text-sm text-muted-foreground">Provide details about the package you want to send.</p>
                </div>

                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="package-type">Package Type</Label>
                    <Select defaultValue="small">
                      <SelectTrigger id="package-type">
                        <SelectValue placeholder="Select package type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (up to 5 lbs)</SelectItem>
                        <SelectItem value="medium">Medium (5-15 lbs)</SelectItem>
                        <SelectItem value="large">Large (15-30 lbs)</SelectItem>
                        <SelectItem value="extra-large">Extra Large (30+ lbs)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-2">
                    <Label>Package Category</Label>
                    <RadioGroup defaultValue="light">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="light" id="light" />
                        <Label htmlFor="light">Light</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium">Medium</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="heavy" id="heavy" />
                        <Label htmlFor="heavy">Heavy</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="fragile" id="fragile" />
                        <Label htmlFor="fragile">Fragile</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="package-weight">Weight (lbs)</Label>
                      <Input id="package-weight" type="number" placeholder="5" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="package-value">Declared Value ($)</Label>
                      <Input id="package-value" type="number" placeholder="100" required />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="package-description">Package Description</Label>
                    <Textarea
                      id="package-description"
                      placeholder="Briefly describe the contents of your package"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            <Separator />

            <div className="flex justify-between">
              {step > 1 ? (
                <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                  Previous
                </Button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <Button type="button" onClick={() => setStep(step + 1)}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit Request</Button>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <div className="flex space-x-2">
            <div className={`h-2 w-2 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}></div>
            <div className={`h-2 w-2 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
            <div className={`h-2 w-2 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
          </div>
          <div className="text-sm text-muted-foreground">Step {step} of 3</div>
        </CardFooter>
      </Card>
    </div>
  )
}
