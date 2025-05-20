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
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { toast } from "@/components/ui/use-toast"

export default function NewDeliveryPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    pickupCountry: "USA",
    pickupInstructions: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryZip: "",
    deliveryCountry: "USA",
    recipientName: "",
    recipientPhone: "",
    deliveryInstructions: "",
    packageType: "small",
    packageCategory: "light",
    packageWeight: "5",
    packageValue: "100",
    packageDescription: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, packageCategory: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const supabase = getSupabaseBrowserClient()

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to create a delivery",
          variant: "destructive",
        })
        router.push("/login")
        return
      }

      // Format addresses
      const pickupAddress = `${formData.pickupAddress}, ${formData.pickupCity}, ${formData.pickupState} ${formData.pickupZip}, ${formData.pickupCountry}`
      const dropoffAddress = `${formData.deliveryAddress}, ${formData.deliveryCity}, ${formData.deliveryState} ${formData.deliveryZip}, ${formData.deliveryCountry}`

      // Create order
      const { data: order, error: orderError } = await supabase
        .from("deli_orders")
        .insert({
          customer_id: user.id,
          status: "pending",
          total_amount: Number.parseFloat(formData.packageValue) + 10, // Base fee + package value
          items_count: 1,
          pickup_address: pickupAddress,
          dropoff_address: dropoffAddress,
          notes: `Package Type: ${formData.packageType}, Category: ${formData.packageCategory}, Weight: ${formData.packageWeight}lbs, Description: ${formData.packageDescription}, Pickup Instructions: ${formData.pickupInstructions}, Delivery Instructions: ${formData.deliveryInstructions}, Recipient: ${formData.recipientName}, Recipient Phone: ${formData.recipientPhone}`,
        })
        .select()
        .single()

      if (orderError) {
        throw orderError
      }

      // Create delivery
      const { error: deliveryError } = await supabase.from("deli_deliveries").insert({
        order_id: order.id,
        status: "pending",
        estimated_delivery_time: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
      })

      if (deliveryError) {
        throw deliveryError
      }

      // Create payment record
      const { error: paymentError } = await supabase.from("deli_payments").insert({
        order_id: order.id,
        customer_id: user.id,
        amount: Number.parseFloat(formData.packageValue) + 10,
        status: "pending",
        payment_method: "credit_card",
      })

      if (paymentError) {
        throw paymentError
      }

      toast({
        title: "Success",
        description: "Your delivery request has been created",
      })

      router.push("/customer/dashboard")
    } catch (error: any) {
      console.error("Error creating delivery:", error)
      toast({
        title: "Error",
        description: error.message || "An error occurred while creating your delivery",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
                    <Label htmlFor="pickupAddress">Street Address</Label>
                    <Input
                      id="pickupAddress"
                      placeholder="123 Main St"
                      required
                      value={formData.pickupAddress}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="pickupCity">City</Label>
                      <Input
                        id="pickupCity"
                        placeholder="Anytown"
                        required
                        value={formData.pickupCity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="pickupState">State</Label>
                      <Input
                        id="pickupState"
                        placeholder="CA"
                        required
                        value={formData.pickupState}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="pickupZip">ZIP Code</Label>
                      <Input
                        id="pickupZip"
                        placeholder="12345"
                        required
                        value={formData.pickupZip}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="pickupCountry">Country</Label>
                      <Input
                        id="pickupCountry"
                        placeholder="USA"
                        required
                        value={formData.pickupCountry}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="pickupInstructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="pickupInstructions"
                      placeholder="E.g., Ring doorbell, call upon arrival, etc."
                      value={formData.pickupInstructions}
                      onChange={handleChange}
                    />
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
                    <Label htmlFor="deliveryAddress">Street Address</Label>
                    <Input
                      id="deliveryAddress"
                      placeholder="456 Oak Ave"
                      required
                      value={formData.deliveryAddress}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="deliveryCity">City</Label>
                      <Input
                        id="deliveryCity"
                        placeholder="Somewhere"
                        required
                        value={formData.deliveryCity}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="deliveryState">State</Label>
                      <Input
                        id="deliveryState"
                        placeholder="CA"
                        required
                        value={formData.deliveryState}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="deliveryZip">ZIP Code</Label>
                      <Input
                        id="deliveryZip"
                        placeholder="67890"
                        required
                        value={formData.deliveryZip}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="deliveryCountry">Country</Label>
                      <Input
                        id="deliveryCountry"
                        placeholder="USA"
                        required
                        value={formData.deliveryCountry}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="recipientName">Recipient Name</Label>
                    <Input
                      id="recipientName"
                      placeholder="John Doe"
                      required
                      value={formData.recipientName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="recipientPhone">Recipient Phone</Label>
                    <Input
                      id="recipientPhone"
                      placeholder="(555) 123-4567"
                      required
                      value={formData.recipientPhone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="deliveryInstructions">Special Instructions (Optional)</Label>
                    <Textarea
                      id="deliveryInstructions"
                      placeholder="E.g., Leave at door, signature required, etc."
                      value={formData.deliveryInstructions}
                      onChange={handleChange}
                    />
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
                    <Label htmlFor="packageType">Package Type</Label>
                    <Select
                      value={formData.packageType}
                      onValueChange={(value) => handleSelectChange("packageType", value)}
                    >
                      <SelectTrigger id="packageType">
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
                    <RadioGroup value={formData.packageCategory} onValueChange={handleRadioChange}>
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
                      <Label htmlFor="packageWeight">Weight (lbs)</Label>
                      <Input
                        id="packageWeight"
                        type="number"
                        placeholder="5"
                        required
                        value={formData.packageWeight}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="packageValue">Declared Value ($)</Label>
                      <Input
                        id="packageValue"
                        type="number"
                        placeholder="100"
                        required
                        value={formData.packageValue}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="packageDescription">Package Description</Label>
                    <Textarea
                      id="packageDescription"
                      placeholder="Briefly describe the contents of your package"
                      required
                      value={formData.packageDescription}
                      onChange={handleChange}
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
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
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
