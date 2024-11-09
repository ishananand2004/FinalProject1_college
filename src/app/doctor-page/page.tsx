"use client";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DoctorProfile from "./components/DoctorProfile";
// import { Icon } from "@/components/ui/icon";

export default function NewPage() {
  const [isMounted, setIsMounted] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="w-full z-30 py-24 lg:py-32 bg-no-repeat bg-bottom relative overflow-hidden bg-[#FDFCFE]">
        <DoctorProfile />
      </div>

      {/* <div className="flex justify-center mb-10">
              <Button onClick={() => router.push("/")}>
              <Icon provider="phosphor" name="House" className="w-5 h-5 mr-2" />
                Go Back Home</Button>
          </div> */}
    </>
  );
}
