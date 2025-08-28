"use client";

import React from "react";

export default function PartOne() {
  // One handler for all buttons
  const handleClick = (event) => {
    // Check if the clicked element is a button
    if (event.target.tagName === "BUTTON") {
      alert(`You clicked Button ${event.target.innerText}`);
    }
  };

  return (
    <div>
      {/* event bubbling */}
      {/* when cliked any one button it will bubble up to parent where add a single listener */}
      <div>
        <h1>Event Bubbling</h1>
        <div
          className="max-w-3xl flex flex-wrap gap-2"
          onClick={handleClick} // single listener
        >
          <button className="bg-sky-300 text-black py-3 px-4 rounded-full cursor-pointer">
            01
          </button>
          <button className="bg-sky-300 text-black py-3 px-4 rounded-full cursor-pointer">
            02
          </button>
          <button className="bg-sky-300 text-black py-3 px-4 rounded-full cursor-pointer">
            03
          </button>
        </div>
      </div>
    </div>
  );
}
