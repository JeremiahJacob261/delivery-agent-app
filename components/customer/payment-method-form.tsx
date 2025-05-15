"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Plus } from "lucide-react"

export function PaymentMethodForm() {
  const [showForm, setShowForm] = useState(false)
  const [paymentType, setPaymentType] = useState("credit")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would process the form data here
    setShowForm(false)
  }

  if (!showForm) {
    return (
      <Button variant="outline" className="w-full" onClick={() => setShowForm(true)}>
        <Plus className="mr-2 h-4 w-4" />
        Add Payment Method
      </Button>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Payment Method</CardTitle>
        <CardDescription>Add a new payment method to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label>Payment Type</Label>
            <RadioGroup
              defaultValue="credit"
              value={paymentType}
              onValueChange={setPaymentType}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debit" id="debit" />
                <Label htmlFor="debit">Debit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paypal" id="paypal" />
                <Label htmlFor="paypal">PayPal</Label>
              </div>
            </RadioGroup>
          </div>

          {(paymentType === "credit" || paymentType === "debit") && (
            <>
              <div className="space-y-2">
                <Label htmlFor="card-name">Name on Card</Label>
                <Input id="card-name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <div className="relative">
                  <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                  <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-muted-foreground" />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-2">
                  <Label htmlFor="expiry-month">Month</Label>
                  <Input id="expiry-month" placeholder="MM" required />
                </div>
                <div className="col-span-1 space-y-2">
                  <Label htmlFor="expiry-year">Year</Label>
                  <Input id="expiry-year" placeholder="YY" required />
                </div>
                <div className="col-span-1 space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" required />
                </div>
              </div>
            </>
          )}

          {paymentType === "paypal" && (
            <div className="space-y-2">
              <Label htmlFor="paypal-email">PayPal Email</Label>
              <Input id="paypal-email" type="email" placeholder="your.email@example.com" required />
            </div>
          )}

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="default-payment" className="h-4 w-4 rounded border-gray-300" />
            <Label htmlFor="default-payment">Set as default payment method</Label>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => setShowForm(false)}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save Payment Method</Button>
      </CardFooter>
    </Card>
  )
}
