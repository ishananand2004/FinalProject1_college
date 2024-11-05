import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function DoctorProfile() {
  return (
    <div className="container mx-auto p-4">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Profile Section */}
        <div className="flex flex-row w-full lg:w-2/3 items-start">
          {/* Image */}
          <img 
            src="/images/image.webp" 
            alt="Dr. Devi Prasad Shetty" 
            className="w-30 h-24 lg:w-56 lg:h-56 rounded-md object-cover mr-4" 
          />
          {/* Profile Info */}
          <div>
            <h2 className="text-xl font-semibold flex items-center">
              Dr. Devi Prasad Shetty 
              <Badge variant="outline" className="ml-2 bg-blue-100 text-blue-600">Cardiac Surgeon</Badge>
            </h2>
            <p className="text-gray-600">Chairman</p>
            <p className="text-gray-600">MBBS, MS, FRCS</p>
            <div className="flex items-center space-x-2 text-yellow-500 mt-1">
              <Star className="w-4 h-4" />
              <span className="text-sm font-semibold">4.2</span>
              <span className="text-sm text-gray-500">(54 Ratings)</span>
            </div>
            <div className="text-gray-700 mt-2">
              <p>52 years of overall experience</p>
              <p>Surgeries Performed: 15000+</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col w-full lg:w-1/3 lg:items-end space-y-2">
          <Button className="flex-1 bg-red-500 hover:bg-red-600 w-full lg:w-[20vw] py-3 mt-10">Book Appointment</Button>
          <Button className="flex-1 w-full lg:w-[20vw] bg-green-500 hover:bg-green-600 py-3 mt-10"><FaWhatsapp /> WhatsApp us </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6 w-full">
        <Card>
          <CardHeader>
            <CardTitle>About Dr. Devi Prasad Shetty</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-gray-700">
              {[
                "Dr. Devi Prasad Shetty is one of the most renowned Cardiothoracic Surgeon in Bangalore.",
                "Dr. Shetty has been awarded 'Padma Shri', the fourth highest civilian award in India and 'Padma Bhushan', the third-highest civilian award by the Government of India for his contribution to healthcare.",
                "With an experience of over 45+ years, Dr Devi Prasad Shetty has performed over 15,000 heart operations among which 5000 were performed on kids.",
                "Dr. Shetty has completed his MBBS & MS from the eminent Kasturba Medical College. Following this, he did his FRCS from the West Midlands Cardio-Thoracic Rotation Program between Walsgrave Hospital, Coventry and East Birmingham Hospital.",
                "Dr. Shetty has performed Asia’s first dynamic cardiomyoplasty operation to strengthen the weak heart muscle using the chest wall muscle.",
                "He is one of the few surgeons in the world to use a microchip camera to perform a keyhole heart surgery.",
                "For the first time in India, he has used a left ventricular assist device to temporarily support a failing heart.",
                "Dr. Devi Prasad Shetty is counted among one of the most experienced doctors in the world in performing a bypass-grafting operation on a beating heart."
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
