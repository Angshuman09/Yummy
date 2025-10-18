import React from "react";
import { Button } from "@/components/ui/button";
import pizza from '../assets/20251018_1350_Realistic_Pepperoni_Pizza_Slice_simple_compose_01k7v6ffnmesf9j1c320ev1hbq-removebg-preview.png'
function Home() {
  return (
    <div className="w-full h-screen bg-amber-200 rounded-t-2xl">
      <h1 className="relative left-[10%] top-[20%] text-5xl font-bold w-fit">
        Craving? We’re on the Way!
      </h1>
      <form className="w-fit relative left-[10%] top-[30%] flex justify-center items-center gap-3">
        <input type="text" placeholder="Enter your address" className="w-2xl h-10 bg-amber-300"/>
        <Button className="bg-amber-400 hover:bg-amber-500 h-10">Search</Button>
      </form>

      <img src={pizza} alt="pizza img" className="relative left-[90%]"/>

    </div>
  );
}

export default Home;
