import React from "react";
import Parent from "./components/Parent";

export default function Home(){
  return(
    <main className="bg-black min-h-screen">
      <h1 className="text-4xl text-white text-center font-bold py-6">Car Showroom</h1>
      <Parent/>
    </main>
  )
};