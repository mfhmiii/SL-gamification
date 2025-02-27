import React from "react";

export function Badges() {
  return (
    <div className="flex gap-2">
      <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
        Developer
      </span>
      <span className="px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
        Contributor
      </span>
      <span className="px-3 py-1 text-xs font-semibold text-white bg-yellow-500 rounded-full">
        Early Adopter
      </span>
    </div>
  );
}
