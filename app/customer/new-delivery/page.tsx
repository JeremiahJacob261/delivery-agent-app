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
import { toast } from "@/components/ui/use-toast"

export default function NewDeliveryPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    packageType: "",
    packageWeight: "",
    packageValue: "",
    pickupName: "",
    pickupPhone: "",
    pickupAddress: "",
    pickupCity: "",
    pickupState: "",
    pickupZip: "",
    pickupCountry: "",
    deliveryName: "",
    deliveryPhone: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "",
    deliveryZip: "",
    deliveryCountry: "",
    urgency: "standard",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      toast({
        title: "Success",
        description: "Your delivery request has been created",
      })

      router.push("/customer/dashboard")
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to create delivery request",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const quickFill = () => {
    setFormData({
      packageType: "Documents",
      packageWeight: "0.5",
      packageValue: "5000",
      pickupName: "Adebayo Okonkwo",
      pickupPhone: "+234-801-234-5678",
      pickupAddress: "123 Victoria Island Street",
      pickupCity: "Lagos",
      pickupState: "Lagos State",
      pickupZip: "100001",
      pickupCountry: "Nigeria",
      deliveryName: "Fatima Abdullahi",
      deliveryPhone: "+234-802-345-6789",
      deliveryAddress: "456 Ikeja Avenue",
      deliveryCity: "Ikeja",
      deliveryState: "Lagos State",
      deliveryZip: "100002",
      deliveryCountry: "Nigeria",
      urgency: "standard",
      notes: "Handle with care - important documents",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CustomerHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Create New Delivery</h1>
            <p className="text-gray-600 mt-2">Fill in the details for your delivery request</p>
            <Button 
              type="button" 
              variant="outline" 
              onClick={quickFill}
              className="mt-2"
            >
              Quick Fill (Demo)
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Package Information */}
            <Card>
              <CardHeader>
                <CardTitle>Package Information</CardTitle>
                <CardDescription>Tell us about what you're sending</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="packageType">Package Type</Label>
                    <Select onValueChange={(value) => handleSelectChange("packageType", value)} value={formData.packageType}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Documents">Documents</SelectItem>
                        <SelectItem value="Electronics">Electronics</SelectItem>
                        <SelectItem value="Clothing">Clothing</SelectItem>
                        <SelectItem value="Food">Food</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="packageWeight">Weight (kg)</Label>
                    <Input
                      id="packageWeight"
                      name="packageWeight"
                      type="number"
                      step="0.1"
                      placeholder="0.5"
                      value={formData.packageWeight}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="packageValue">Value (₦)</Label>
                    <Input
                      id="packageValue"
                      name="packageValue"
                      type="number"
                      placeholder="5000"
                      value={formData.packageValue}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pickup Information */}
            <Card>
              <CardHeader>
                <CardTitle>Pickup Information</CardTitle>
                <CardDescription>Where should we collect the package?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="pickupName">Contact Name</Label>
                    <Input
                      id="pickupName"
                      name="pickupName"
                      placeholder="Adebayo Okonkwo"
                      value={formData.pickupName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="pickupPhone">Phone Number</Label>
                    <Input
                      id="pickupPhone"
                      name="pickupPhone"
                      type="tel"
                      placeholder="+234-801-234-5678"
                      value={formData.pickupPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="pickupAddress">Street Address</Label>
                  <Input
                    id="pickupAddress"
                    name="pickupAddress"
                    placeholder="123 Victoria Island Street"
                    value={formData.pickupAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="pickupCity">City</Label>
                    <Input
                      id="pickupCity"
                      name="pickupCity"
                      placeholder="Lagos"
                      value={formData.pickupCity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="pickupState">State</Label>
                    <Input
                      id="pickupState"
                      name="pickupState"
                      placeholder="Lagos State"
                      value={formData.pickupState}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="pickupZip">Postal Code</Label>
                    <Input
                      id="pickupZip"
                      name="pickupZip"
                      placeholder="100001"
                      value={formData.pickupZip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="pickupCountry">Country</Label>
                    <Input
                      id="pickupCountry"
                      name="pickupCountry"
                      placeholder="Nigeria"
                      value={formData.pickupCountry}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
                <CardDescription>Where should we deliver the package?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="deliveryName">Contact Name</Label>
                    <Input
                      id="deliveryName"
                      name="deliveryName"
                      placeholder="Fatima Abdullahi"
                      value={formData.deliveryName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="deliveryPhone">Phone Number</Label>
                    <Input
                      id="deliveryPhone"
                      name="deliveryPhone"
                      type="tel"
                      placeholder="+234-802-345-6789"
                      value={formData.deliveryPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="deliveryAddress">Street Address</Label>
                  <Input
                    id="deliveryAddress"
                    name="deliveryAddress"
                    placeholder="456 Ikeja Avenue"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="deliveryCity">City</Label>
                    <Input
                      id="deliveryCity"
                      name="deliveryCity"
                      placeholder="Ikeja"
                      value={formData.deliveryCity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="deliveryState">State</Label>
                    <Input
                      id="deliveryState"
                      name="deliveryState"
                      placeholder="Lagos State"
                      value={formData.deliveryState}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="deliveryZip">Postal Code</Label>
                    <Input
                      id="deliveryZip"
                      name="deliveryZip"
                      placeholder="100002"
                      value={formData.deliveryZip}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="deliveryCountry">Country</Label>
                    <Input
                      id="deliveryCountry"
                      name="deliveryCountry"
                      placeholder="Nigeria"
                      value={formData.deliveryCountry}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Options */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Options</CardTitle>
                <CardDescription>Choose your delivery preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <Label>Delivery Speed</Label>
                  <RadioGroup value={formData.urgency} onValueChange={(value) => handleSelectChange("urgency", value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="standard" id="standard" />
                      <Label htmlFor="standard">Standard (2-3 days) - ₦1,500</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="express" id="express" />
                      <Label htmlFor="express">Express (1-2 days) - ₦3,000</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="urgent" id="urgent" />
                      <Label htmlFor="urgent">Same Day - ₦5,000</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="notes">Special Instructions</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Any special handling instructions..."
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total Cost:</span>
                  <span className="text-2xl font-bold text-green-600">
                    ₦{formData.urgency === "urgent" ? "5,000" : formData.urgency === "express" ? "3,000" : "1,500"}
                  </span>
                </div>
                <Separator className="my-4" />
                <div className="flex gap-4">
                  <Button type="button" variant="outline" className="flex-1" onClick={() => router.back()}>
                    Cancel
                  </Button>
                  <Button type="submit" className="flex-1" disabled={isSubmitting}>
                    {isSubmitting ? "Creating..." : "Create Delivery"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </div>
    </div>
  )
}
