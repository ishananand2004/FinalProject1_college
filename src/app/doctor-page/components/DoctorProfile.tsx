import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SetStateAction, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { LeadGenerationForm } from "@/components/forms/LeadGenerationForm";

export default function DoctorProfile() {
  const [activeSection, setActiveSection] = useState("WorkExperience");

  const handleSectionClick = (section: SetStateAction<string>) => {
    setActiveSection(section);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row lg:flex-row w-full lg:w-2/3 items-left lg:items-start">
          {/* Image */}
          <img 
            src="/images/image.webp" 
            alt="Dr. Devi Prasad Shetty" 
            className="w-24 h-24 sm:w-32 sm:h-32 lg:w-56 lg:h-56 rounded-md object-cover mb-4 lg:mb-0 lg:mr-4" 
          />
          
          {/* Profile Info */}
          <div className="text-left sm:text-left px-4 sm:px-6 lg:px-8">
            <div className="space-y-2 lg:space-y-2">
              <h2 className="text-lg sm:text-xl font-semibold flex items-center justify-left sm:justify-start space-x-2 sm:space-x-3">
                <span>Dr. Devi Prasad Shetty</span>
                <Icon provider="lucide" name="BadgeCheck" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" /> 
              </h2>
              <Badge variant="outline">Cardiac Surgeon</Badge>
              <p className="text-gray-600 text-sm sm:text-base">Chairman</p>
              <p className="text-gray-600 text-sm sm:text-base">MBBS, MS, FRCS</p>
              
              {/* Rating */}
              <div className="flex items-center justify-left sm:justify-start space-x-1 sm:space-x-2 text-yellow-500 mt-1 sm:mt-2">
                <Icon provider="lucide" name="Star" className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <span className="text-sm sm:text-base font-semibold">4.2</span>
                <span className="text-xs sm:text-sm text-gray-500">(54 Ratings)</span>
              </div>
              
              {/* Experience Details */}
              <div className="text-gray-700 mt-2 sm:mt-3 text-sm sm:text-base">
                <p>52 years of overall experience</p>
                <p>Surgeries Performed: 15000+</p>
              </div>
            </div>
          </div>
        </div>  

        {/* Action Buttons */}
        <div className="flex flex-col w-full lg:w-1/3 lg:items-end space-y-2">
          <Button variant="default" className="flex-1 w-full lg:w-[300px] py-3 mt-10">Book Appointment</Button>
          <Button variant="outline" className="flex-1 w-full lg:w-[300px] py-3 mt-10">
            <Icon provider="phosphor" name="WhatsappLogo" className="text-success mr-2" />
            WhatsApp us
          </Button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-6 w-full">
        <Card>
          <CardHeader>
            <CardTitle>About Dr. Devi Prasad Shetty</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 text-gray-700">
              {[
                "Dr. Devi Prasad Shetty is one of the most renowned Cardiothoracic Surgeon in Bangalore.",
                "Dr. Shetty has been awarded 'Padma Shri', the fourth highest civilian award in India and 'Padma Bhushan', the third-highest civilian award by the Government of India for his contribution to healthcare.",
                "With an experience of over 45+ years, Dr Devi Prasad Shetty has performed over 15,000 heart operations among which 5000 were performed on kids.",
                "Dr. Shetty has completed his MBBS & MS from the eminent Kasturba Medical College. Following this, he did his FRCS from the West Midlands Cardio-Thoracic Rotation Program between Walsgrave Hospital, Coventry and East Birmingham Hospital.",
                "Dr. Shetty has performed Asia’s first dynamic cardiomyoplasty operation to strengthen the weak heart muscle using the chest wall muscle.",
                "He is one of the few surgeons in the world to use a microchip camera to perform a keyhole heart surgery.",
                "For the first time in India, he has used a left ventricular assist device to temporarily support a failing heart.",
                "Dr. Devi Prasad Shetty is counted among one of the most experienced doctors in the world in performing a bypass-grafting operation on a beating heart.",
                "In 1990, he became the first surgeon in India to venture into Neonatal open heart surgery by performing open-heart surgery on a 9-day-old baby.",
                "Dr. Shetty has won several awards for his contribution to both Medical Science and Public Welfare.",
                "Dr. Devi Prasad Shetty is the founder of the multi-speciality hospital Narayana Hrudayalaya, Bangalore and Rabindranath Tagore International Institute of Cardiac Sciences (RTIICS) Kolkata.",
                "Dr. Devi Prasad Shetty has expertise in Paediatric Cardiac Surgery."
              ].map((text, index) => (
                <li key={index} className="flex items-start">
                  <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-green-500 mr-2" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            {/* Special Interests Section */}
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Special Interests</h3>
              <p>Dr. Devi Prasad Shetty Specializes in the following:</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <Badge variant="default">Cardiothoracic Surgery</Badge>
                <Badge variant="default">Pediatric Cardiac Surgery</Badge>
                <Badge variant="default">Cardiovascular Surgery</Badge>
                <Badge variant="default">CABG</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 w-full">
        <Card>
          <CardContent>
            <div className="mt-6">
            <Button className="text-sm cursor-pointer hover:scale-95 font-semibold text-white inline-block px-3 py-1">
                  Skilled At
                </Button>
              <hr className="mt-2 bg-[#9e9e9e]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-gray-700">
              {[
                "ASD (Atrial Septal Defect) Closure",
                "AICD",
                "Heart Bypass Surgery (CABG)",
                "FRCS",
                "PPI - Permanent Pacemaker Implant - Double Chamber",
                "CRT- D Implant (Cardiac Resynchronization Therapy)",
                "Valve Replacement"
              ].map((skill, index) => (
                <div key={index} className="flex items-start">
                  <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-green-500 mr-2" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
            </div>
          
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 w-full">
        <Card>
          <CardContent>
            <div className="mt-6">
            <Button className="text-sm cursor-pointer hover:scale-95 font-semibold text-white inline-block px-3 py-1">
                  Location
                </Button>
              <hr className="mt-2 bg-[#9e9e9e]" />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mt-4">
              {/* Hospital Image */}
              <img 
                src="/images/Narayana.webp" 
                alt="Narayana Multispeciality Hospital" 
                className="w-full md:w-1/2 lg:w-1/3 rounded-md object-cover" 
              />
              {/* Location Details */}
              <a 
                href="https://www.google.com/maps/place/Narayana+Multispeciality+Hospital+Bangalore" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-start"
              >
                <div className="text-blue-700 text-lg font-semibold flex items-center">
                  <Icon provider="lucide" name="MapPin" className="w-5 h-5 text-blue-500 mr-2" />
                  Narayana Multispeciality Hospital, Bangalore
                </div>
                <p className="text-gray-600 ml-10 mt-6">Bangalore, India</p>
              </a>
            </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* About Section */}
      <div className="mt-6 w-full">
          <Card>
            <CardHeader>
              <CardTitle>About Dr. Devi Prasad Shetty</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Section Buttons */}
              <div className="flex flex-wrap space-x-0 space-y-3 sm:space-y-0 sm:space-x-4">
                <Button
                  className={`w-full sm:w-auto py-2 px-4 text-sm font-semibold rounded-md ${activeSection === "Education" ? "text-white" : "text-white"} hover:scale-95`}
                  onClick={() => handleSectionClick("Education")}
                >
                  Education & Training
                </Button>
                <Button
                  className={`w-full sm:w-auto py-2 px-4 text-sm font-semibold rounded-md ${activeSection === "Honours" ? "text-white" : "text-white"} hover:scale-95`}
                  onClick={() => handleSectionClick("Honours")}
                >
                  Honours & Awards
                </Button>
                <Button
                  className={`w-full sm:w-auto py-2 px-4 text-sm font-semibold rounded-md ${activeSection === "WorkExperience" ? "text-white" : "text-white"} hover:scale-95`}
                  onClick={() => handleSectionClick("WorkExperience")}
                >
                  Work Experience
                </Button>
                
              </div>
              

              {/* Conditional Content Rendering */}
              <div className="mt-4 space-y-3">
                {activeSection === "Education" && (
                  <div className="space-y-4">
                    {/* Education & Training Content */}
                    <div className="flex items-start">
                      <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-green-500 mr-2" />
                      <p className="ml-3 text-gray-900 text-sm">MBBS, Kasturba Medical College, Mangalore</p>
                    </div>
                    <div className="flex items-start">
                      <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-green-500 mr-2" />
                      <p className="ml-3 text-gray-900 text-sm">MS, Kasturba Medical College, Mangalore</p>
                    </div>
                    <div className="flex items-start">
                      <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-green-500 mr-2" />
                      <p className="ml-3 text-gray-900 text-sm">FRCS</p>
                    </div>
                  </div>
                )}

                {activeSection === "Honours" && (
                  <div>
                    {/* Honours & Awards Content */}
                    <p className="text-gray-900 text-sm">
                      Padma Bhushan, 2012. Padma Shri Award for Medicine in 2004. Karnataka Ratna Award in 2001. Rajyotsava Award in 2002.
                      Sir M. Visvesvaraya Memorial Award in 2003. Ernst & Young Entrepreneur of the Year in 2003. Dr. B.C. Roy Award for 2003.
                      Schwab Foundation's award in 2005.
                    </p>
                  </div>
                )}

                {activeSection === "WorkExperience" && (
                  <div className="space-y-4">
                    {/* Work Experience Content */}
                    <div className="flex items-start">
                      <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-green-500 mr-2" />
                      <p className="ml-3 text-gray-900 text-sm">
                        Chairman,{" "}
                        <a href="#" className="text-blue-500">
                          Narayana Multispeciality Hospital, Bangalore
                        </a>
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Icon provider="lucide" name="CircleCheckBig" className="w-5 h-5 text-green-500 mr-2" />
                      <p className="ml-3 text-gray-900 text-sm">
                        Chairman, Rabindranath Tagore International Institute of Cardiac Sciences (RTIICS), Kolkata
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

      <div className="mt-6 w-full">
        <Card>
          <CardHeader>
          <CardTitle className="text-2xl">For Any Enquiry!Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <LeadGenerationForm/>
          </CardContent>
        </Card>
      </div>
    </div>
 
  );
}

