import { AgentHeader } from "@/components/agent-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

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
              <CardDescription>Customize your delivery experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="delivery-radius">Maximum Delivery Radius (miles)</Label>
                <Input id="delivery-radius" type="number" defaultValue="15" />
                <p className="text-sm text-muted-foreground">
                  You'll only be shown delivery jobs within this radius from your location.
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-types">Preferred Job Types</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="job-types">
                    <SelectValue placeholder="Select job types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="light">Light Packages Only</SelectItem>
                    <SelectItem value="medium">Medium & Light Packages</SelectItem>
                    <SelectItem value="heavy">Including Heavy Packages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-accept">Auto-Accept Preferred Jobs</Label>
                  <Switch id="auto-accept" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Automatically accept jobs that match your preferences when you're available.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="navigation">Default Navigation App</Label>
                  <Select defaultValue="google">
                    <SelectTrigger id="navigation" className="w-[180px]">
                      <SelectValue placeholder="Select app" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Maps</SelectItem>
                      <SelectItem value="apple">Apple Maps</SelectItem>
                      <SelectItem value="waze">Waze</SelectItem>
                    </SelectContent>
                  </Select>
                </div>\
