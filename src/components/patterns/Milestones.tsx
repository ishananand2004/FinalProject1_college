// src/Stat.js
import React from "react";

interface MilestoneProps {
  value: string | number;
  label: string;
}

export const Milestone = ({ value, label }: MilestoneProps) => (
  <div className="flex flex-col justify-between p-6">
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-left flex flex-row gap-2 items-end">
      {value}
      {/* <span className="text-sm text-muted-foreground tracking-normal">
        {percentage}
      </span> */}
    </h2>
    <p className="text-base leading-relaxed text-muted-foreground text-left">
      {label}
    </p>
  </div>
);

const milestonesData = [
  { value: "300+", label: "Hospitals" },
  { value: "5000+", label: "Happy Patients" },
  { value: "20000+", label: "Doctors" },
];
export const Milestones = ({}) => {
  return (
    <div className="mb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="col-span-1">
            <p className="text-sm text-muted-foreground mb-2">
              CAREMEDICO ECOSYSTEM
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-left">
              Milestones Achieved
            </h2>
          </div>
          <div className="col-span-1 md:col-span-3 flex flex-wrap flex-col md:flex-row md:justify-end gap-2 md:gap-12 lg:gap-20">
            {milestonesData.map((milestone, index) => (
              <Milestone key={index} {...milestone} />
              // <div key={index} className="text-center">
              //   <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              //     {milestone.value}
              //   </h3>
              //   <p className="text-base leading-relaxed text-muted-foreground">
              //     {milestone.label}
              //   </p>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
