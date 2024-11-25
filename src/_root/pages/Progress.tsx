import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, doughnut, Line } from "react-chartjs-2";

const Progress = () => {
  return (
    <div className="data_visualize ">
      <div className="data_visualize w-full">
        <div className="dataCard revenueCard hover:bg-red transition">Chart data</div>

        <div className="dataCard report_card  hover:bg-red transition">Chart report</div>

        <div className="dataCard customerCard  hover:bg-red transition">Chart2 stub</div>
        <div className="dataCard categoryCard  hover:bg-red transition">chart 3 Medicines</div>
      <div className="flex flex-col gap-3 ">
      <div className="flex flex-rom gap-3">

      <div className="dataCard quadcard  hover:bg-red transition">Chart quad</div>
      <div className="dataCard quadcard hover:bg-red transition">Chart quad</div>
      <div className="dataCard quadcard hover:bg-red transition">Upcomming</div>

      </div>
      <div className="flex flex-rom gap-3">
      <div className="dataCard quadcard hover:bg-red transition">Upcomming</div>

      <div className="dataCard quadcard hover:bg-red transition">suggestions </div>
      <div className="dataCard quadcard hover:bg-red transition">Upcomming</div>
      </div>
      
      </div>

          <div className=" dataCard aisuggestion  hover:bg-red transitionsmall-regular text-2xl font-sans"> <i>Code is like humor. When you have to explain it, it’s bad." – Cory House </i> </div>


      </div>
    </div>
  );
};

export default Progress;
