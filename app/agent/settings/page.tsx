import { AgentHeader } from "@/components/agent-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <AgentHeader title="Settings" />

      <Tabs defaultValue="preferences" className="space-y-4">
        <TabsList>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
          <TabsTrigger value="app">App Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="preferences" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Delivery Preferences</CardTitle>
              <CardDescription>Customize your delivery experience and job preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="delivery-radius">Delivery Radius (miles)</Label>
                <div className="flex items-center space-x-4">
                  <Slider defaultValue={[10]} max={50} step={1} className="flex-1" />
                  <span className="w-12 text-center">10</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Maximum distance you&apos;re willing to travel for deliveries.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Job Types</Label>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="light-packages" defaultChecked />
                    <Label htmlFor="light-packages">Light Packages</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="medium-packages" defaultChecked />
                    <Label htmlFor="medium-packages">Medium Packages</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="heavy-packages" defaultChecked />
                    <Label htmlFor="heavy-packages">Heavy Packages</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="fragile-packages" defaultChecked />
                    <Label htmlFor="fragile-packages">Fragile Packages</Label>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="navigation-app">Preferred Navigation App</Label>
                <Select defaultValue="google-maps">
                  <SelectTrigger id="navigation-app">
                    <SelectValue placeholder="Select navigation app" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google-maps">Google Maps</SelectItem>
                    <SelectItem value="waze">Waze</SelectItem>
                    <SelectItem value="apple-maps">Apple Maps</SelectItem>
                    <SelectItem value="in-app">In-App Navigation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="availability">Availability Schedule</Label>
                <Button variant="outline" className="w-full">
                  Manage Schedule
                </Button>
                <p className="text-sm text-muted-foreground">Set your regular working hours and availability.</p>
              </div>

              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Control how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notification Channels</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <Switch id="push-notifications" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">Receive notifications on your device.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">Receive notifications via email.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-notifications">SMS Notifications</Label>
                      <Switch id="sms-notifications" />
                    </div>
                    <p className="text-xs text-muted-foreground">Receive notifications via SMS.</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="in-app-notifications">In-App Notifications</Label>
                      <Switch id="in-app-notifications" defaultChecked />
                    </div>
                    <p className="text-xs text-muted-foreground">Receive notifications within the app.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Notification Types</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="new-job-notifications">New Job Opportunities</Label>
                      <Switch id="new-job-notifications" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="delivery-updates">Delivery Updates</Label>
                      <Switch id="delivery-updates" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="payment-notifications">Payment Notifications</Label>
                      <Switch id="payment-notifications" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="customer-messages">Customer Messages</Label>
                      <Switch id="customer-messages" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="system-notifications">System Announcements</Label>
                      <Switch id="system-notifications" defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="rating-notifications">Rating & Feedback</Label>
                      <Switch id="rating-notifications" defaultChecked />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quiet-hours">Quiet Hours</Label>
                <div className="flex items-center space-x-2">
                  <Switch id="quiet-hours" />
                  <span className="text-sm">Enable quiet hours</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="quiet-start">Start Time</Label>
                    <Select disabled defaultValue="22:00">
                      <SelectTrigger id="quiet-start">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="22:00">10:00 PM</SelectItem>
                        <SelectItem value="23:00">11:00 PM</SelectItem>
                        <SelectItem value="00:00">12:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quiet-end">End Time</Label>
                    <Select disabled defaultValue="07:00">
                      <SelectTrigger id="quiet-end">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="06:00">6:00 AM</SelectItem>
                        <SelectItem value="07:00">7:00 AM</SelectItem>
                        <SelectItem value="08:00">8:00 AM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <Button>Save Notification Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Privacy & Security</CardTitle>
              <CardDescription>Manage your account security and privacy settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Password Management</h3>
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <Button variant="outline">Change Password</Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Two-Factor Authentication</h3>
                <div className="flex items-center space-x-2">
                  <Switch id="enable-2fa" />
                  <Label htmlFor="enable-2fa">Enable Two-Factor Authentication</Label>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add an extra layer of security to your account by requiring a verification code in addition to your
                  password.
                </p>
                <Button variant="outline" disabled>
                  Set Up Two-Factor Authentication
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Location Sharing</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="location-active-delivery" defaultChecked />
                    <Label htmlFor="location-active-delivery">Share location during active deliveries</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your location will be shared with customers only when you&apos;re on an active delivery.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="location-background" />
                    <Label htmlFor="location-background">Allow background location tracking</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    The app can access your location even when it&apos;s not open to provide better job matches.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Data Privacy</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="data-analytics" defaultChecked />
                    <Label htmlFor="data-analytics">Share anonymous usage data</Label>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Help us improve the app by sharing anonymous usage statistics.
                  </p>
                </div>
                <Button variant="outline">Download My Data</Button>
              </div>

              <div className="pt-4">
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="app" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>App Settings</CardTitle>
              <CardDescription>Customize your app experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <RadioGroup defaultValue="system" id="theme" className="grid grid-cols-3 gap-4">
                  <div>
                    <RadioGroupItem value="light" id="light" className="sr-only" />
                    <Label
                      htmlFor="light"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mb-3 h-6 w-6"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                      <span className="block w-full text-center">Light</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="dark" id="dark" className="sr-only" />
                    <Label
                      htmlFor="dark"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mb-3 h-6 w-6"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                      <span className="block w-full text-center">Dark</span>
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="system" id="system" className="sr-only" />
                    <Label
                      htmlFor="system"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mb-3 h-6 w-6"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" x2="16" y1="21" y2="21" />
                        <line x1="12" x2="12" y1="17" y2="21" />
                      </svg>
                      <span className="block w-full text-center">System</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="zh">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="distance-unit">Distance Unit</Label>
                <Select defaultValue="miles">
                  <SelectTrigger id="distance-unit">
                    <SelectValue placeholder="Select unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="miles">Miles</SelectItem>
                    <SelectItem value="kilometers">Kilometers</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="sound-effects">Sound Effects</Label>
                  <Switch id="sound-effects" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Play sounds for notifications and actions.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="haptic-feedback">Haptic Feedback</Label>
                  <Switch id="haptic-feedback" defaultChecked />
                </div>
                <p className="text-sm text-muted-foreground">Enable vibration for notifications and actions.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="app-version">App Version</Label>
                <p className="text-sm text-muted-foreground">v1.0.0</p>
              </div>

              <Button>Save App Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
