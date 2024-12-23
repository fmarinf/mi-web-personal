"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Dashboard() {
  const chartBarRef = useRef(null);
  const chartTimelineRef = useRef(null);
  const chartInstances = useRef([]);

  useEffect(() => {
    const destroyCharts = () => {
      chartInstances.current.forEach((chart) => chart.destroy());
    };
    destroyCharts();

    // Gráfico de Barras (Habilidades)
    chartInstances.current.push(
      new Chart(chartBarRef.current.getContext("2d"), {
        type: "bar",
        data: {
          labels: [
            "Big Data Engineering",
            "Cloud Computing",
            "AI & ML",
            "Leadership",
            "CI/CD",
            "Data Modeling",
          ],
          datasets: [
            {
              label: "Skill Level",
              data: [90, 85, 80, 70, 60, 75],
              backgroundColor: [
                "rgba(220, 220, 220, 0.9)",
                "rgba(200, 200, 200, 0.9)",
                "rgba(180, 180, 180, 0.9)",
                "rgba(160, 160, 160, 0.9)",
                "rgba(140, 140, 140, 0.9)",
                "rgba(120, 120, 120, 0.9)",
              ],
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 6000,
            loop: true, 
          },
          scales: {
            x: {
              ticks: { color: "#ddd", font: { size: 14 } },
            },
            y: {
              ticks: { color: "#ddd" },
              beginAtZero: true,
            },
          },
        },
      })
    );

     // Gráfico de Línea (Timeline y Forecast 2025)
     const forecastOffset = { value: 0 };

     const animateForecast = () => {
       if (chartInstances.current[1]) {
         forecastOffset.value -= 1;
         if (forecastOffset.value > 100) {
           forecastOffset.value = 0;  // Reinicia la animación cuando llega al final
         }
         chartInstances.current[1].data.datasets.forEach((dataset) => {
           if (dataset.borderDash) {
             dataset.borderDashOffset = forecastOffset.value;
           }
         });
         chartInstances.current[1].update();
         requestAnimationFrame(animateForecast);  // Bucle de animación infinita
       }
     };
 
     chartInstances.current.push(
       new Chart(chartTimelineRef.current.getContext("2d"), {
         type: "line",
         data: {
           labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
           datasets: [
             {
               label: "Data Analyst",
               data: [1, 2, null, null, null, null, null],
               borderColor: "rgba(200, 200, 200, 1)",
               tension: 0.4,
               pointRadius: 6,
               pointBackgroundColor: "rgba(220, 220, 220, 1)",
             },
             {
               label: "Data Scientist",
               data: [null, 2, 3, 5, null, null, null],
               borderColor: "rgba(200, 200, 200, 1)",
               tension: 0.4,
               pointRadius: 6,
               pointBackgroundColor: "rgba(220, 220, 220, 1)",
             },
             {
               label: "Data Engineer",
               data: [null, null, 3, 5, 8, null, null],
               borderColor: "rgba(200, 200, 200, 1)",
               tension: 0.4,
               pointRadius: 6,
               pointBackgroundColor: "rgba(220, 220, 220, 1)",
             },
             {
               label: "SaaS Developer",
               data: [null, null, null, null, 8, 12, 18],
               borderColor: "rgba(255, 255, 255, 0.8)",
               borderDash: [5, 7],
               borderDashOffset: forecastOffset.value,
               pointRadius: 6,
               pointBackgroundColor: "rgba(255, 255, 255, 1)",
             },
             {
               label: "Algo Trader",
               data: [null, null, null, null, 8, 12, 18],
               borderColor: "rgba(255, 255, 255, 0.8)",
               borderDash: [5, 7],
               borderDashOffset: forecastOffset.value,
               pointRadius: 6,
               pointBackgroundColor: "rgba(255, 255, 255, 1)",
             },
           ],
         },
         options: {
           responsive: true,
           maintainAspectRatio: false,
           animation: {
             duration: 2000,
             loop: true,
             onComplete: () => {
               requestAnimationFrame(animateForecast);  // Llama a la animación infinita
             },
           },
           scales: {
             x: {
               ticks: {
                 color: "#ddd",
                 font: { size: 14 },
               },
             },
             y: { display: false },
           },
           plugins: {
             legend: { display: false },
           },
           elements: {
             line: {
               borderWidth: 2,
             },
             point: {
               radius: 6,
               borderWidth: 2,
               hoverRadius: 8,
               hoverBorderWidth: 3,
             },
           },
         },
       })
     );
 
     requestAnimationFrame(animateForecast);  // Iniciar la animación infinita
 
     return () => destroyCharts();
   }, []);
 
   return (
     <div className="flex flex-col items-center my-24 md:my-48">
       <h2 className="text-2xl text-gray-300 font-light mb-20">
         a little about me 📊
       </h2>
 
       {/* Gráficos con Mayor Ancho */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[90%] max-w-[1200px] mx-auto">
         <div className="h-[450px]">
           <canvas ref={chartBarRef}></canvas>
         </div>
 
         <div className="h-[450px]">
           <canvas ref={chartTimelineRef}></canvas>
         </div>
       </div>
     </div>
   );
 }