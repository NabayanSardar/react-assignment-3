import React from "react";
import type { SummaryProps } from "../types/type/components.type";

const Summary: React.FC<SummaryProps> = React.memo(({ summaryText }) => {
  console.log("Rendering Summary");

  return (
    <div className="p-4 bg-green-100 rounded-md text-sm">
      <h2 className="font-semibold">Form Summary:</h2>
      <p>{summaryText}</p>
    </div>
  );
});

export default Summary;