import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const PokemonStats = ({ pokemonStat }) => {
  const statName = [];
  const statValue = [];

  pokemonStat.forEach((stat) => {
    statName.push(stat.stat.name.toUpperCase());
    statValue.push(stat.base_stat);
  });
  //   return <List dense={true}>{makeStats()}</List>;
  return (
    <>
      <HorizontalBar
        data={{
          labels: statName,
          datasets: [
            {
              data: statValue,
              backgroundColor: [
                "rgb(255,89,89)",
                "rgb(240,128,48,)",
                "rgb(248,208,48)",
                "rgb(104,144,240)",
                "rgb(120,200,80)",
                "rgb(248,88,136)",
              ],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 120,
            },
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  mirror: true,
                  padding: 120,
                  fontColor: "black",
                  fontSize: 14,
                  fontFamily: "Segoe UI",
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
    </>
  );
};

export default PokemonStats;
