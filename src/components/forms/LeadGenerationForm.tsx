'use client';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { PhoneInput } from "@/components/ui/phoneInput" 

export default function LeadGenerationForm() {
  return (
    <div className="max-w-md mx-auto p-6 border border-pink-300 rounded-lg shadow-lg bg-white sm:max-w-lg lg:max-w-2xl">
      <h2 className="text-2xl font-bold text-pink-600 mb-6">Need Help? Let's Talk!</h2>
      <form className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <Label htmlFor="name">Name *</Label>
            <Input id="name" type="text" placeholder="E.g. John Doe" required />
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <Label htmlFor="location">Preferred Treatment Location</Label>
            <Input id="location" type="text" placeholder="Bengaluru" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" type="email" placeholder="E.g. john@doe.com" required />
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <Label htmlFor="phone">Phone *</Label>
            <PhoneInput
              id="phone"
              defaultCountry="IN" 
              className="w-full"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="medicalIssue">Medical Issue</Label>
          <Textarea id="medicalIssue" placeholder="Medical Issue" className="h-32 bg-gray-200"/>
        </div>

        <div>
          <Label htmlFor="reports">Reports</Label>
          <div className="flex items-center justify-center border-transparent rounded-md bg-gray-200 h-28 p-4 text-gray-500">
            <span className="mr-2">Drag and Drop (or)</span>
            <a href="#" className="text-sky-400 hover:underline">Choose Files</a>
          </div>
        </div>

        <Button type="submit" className="w-40 bg-rose-600 hover:bg-rose-700 text-white">
          Consult Now for Free
        </Button>
      </form>
    </div>
  )
}
