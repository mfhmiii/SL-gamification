import React from "react";

export function ProfilePicture() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
        <img
          src="/placeholder-user.png"
          alt="User"
          className="w-full h-full rounded-full"
        />
      </div>
      <span className="text-gray-700 font-semibold mt-2">User</span>
      <span className="text-gray-500 text-sm">Username</span>
    </div>
  );
}
