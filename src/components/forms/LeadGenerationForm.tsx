'use client';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";

export default function LeadGenerationForm() {
  // State for form fields and error messages
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const validateName = () => {
    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: 'Name is required.' }));
    } else {
      setErrors((prev) => ({ ...prev, name: '' }));
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setErrors((prev) => ({ ...prev, email: 'This field is required.' }));
    } else if (!emailRegex.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: 'Please input a valid email.' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  const validatePhone = () => {
    // Assuming valid international phone numbers are 10+ digits
    const phoneRegex = /^\+?[1-9]\d{9,14}$/;
    if (!formData.phone.trim()) {
      setErrors((prev) => ({ ...prev, phone: 'This field is required.' }));
    } else if (!phoneRegex.test(formData.phone)) {
      setErrors((prev) => ({ ...prev, phone: 'Please input a valid international phone number.' }));
    } else {
      setErrors((prev) => ({ ...prev, phone: '' }));
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Trigger all validations on form submit
    validateName();
    validateEmail();
    validatePhone();

    // Submit if no errors
    if (!errors.name && !errors.email && !errors.phone) {
      console.log('Form submitted successfully:', formData);
      // Handle form submission logic here
    }
  };

  const onDrop = (acceptedFiles: any) => {
    console.log('Files dropped:', acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'], 'image/*': ['.jpg', '.jpeg', '.png'] },
  });

  return (
    <div className="lg:absolute top-24 right-28 max-w-md mx-auto p-6 border border-pink-300 rounded-3xl shadow-lg bg-white sm:max-w-lg lg:max-w-2xl">
      <h2 className="text-2xl font-bold text-pink-600 mb-6">Need Help? Let's Talk!</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="E.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onBlur={validateName}
              required
              className="bg-[#efefef]"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <Label htmlFor="location">Preferred Treatment Location</Label>
            <Input id="location" type="text" placeholder="Bengaluru" className="bg-[#efefef]"/>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="E.g. john@doe.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onBlur={validateEmail}
              required
              className="bg-[#efefef]"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="flex-1 mt-4 sm:mt-0">
            <Label htmlFor="phone">Phone *</Label>
            <PhoneInput
              id="phone"
              defaultCountry="IN"
              className="w-full bg-[#efefef]"
              value={formData.phone}
              onChange={(value) => setFormData({ ...formData, phone: value })}
              onBlur={validatePhone}
              required
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid w-full gap-1.5">
          <Label htmlFor="message-2">Your Message</Label>
          <Textarea placeholder="Medical Issue." id="message-2" className='bg-[#efefef] h-32'/>
              
        </div>

        <div>
          <Label htmlFor="reports">Reports</Label>
          <div
            {...getRootProps()}
            className={`flex items-center justify-center rounded-lg bg-[#efefef] h-28 p-4 text-gray-500 border-tranparent border-1 ${
              isDragActive ? 'border-rose-600' : 'border-gray-300'
            }`}
          >
            <input {...getInputProps()} id="reports" />
            {isDragActive ? (
              <p className="text-rose-600">Drop the files here...</p>
            ) : (
              <p>Drag and Drop (or <span className="text-sky-400 hover:underline cursor-pointer">Choose Files</span>)</p>
            )}
          </div>
        </div>

        <Button type="submit" className="w-40 bg-rose-600 hover:bg-rose-700 text-white">
          Consult Now for Free
        </Button>
      </form>
    </div>
  );
}
