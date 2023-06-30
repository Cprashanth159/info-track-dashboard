import React from "react";
import ReactECharts from "echarts-for-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function BarChartComponent() {
  
  const options = {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ["product", "2015", "2016"],
        ["Matcha Latte", 43.3, 85.8],
        ["Milk Tea", 83.1, 73.4],
        ["Cheese Cocoa", 86.4, 65.2],
      ],
    },
    xAxis: { type: "category" },
    yAxis: {},
    series: [{ type: "bar" }, { type: "bar" }],
  };

  return (
    <Card style={{ height: 400 }}>
    <CardContent>
      <ReactECharts option={options} style={{ height: 400 }}/>
    </CardContent>
    </Card>
  );
}
