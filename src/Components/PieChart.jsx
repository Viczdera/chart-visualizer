import React, { useEffect, useRef } from "react";

const PieChart = ({data}) => {
  const canvaRef = useRef(null);

  //random color generator
  const randomColor = () => {
    return "#" + Math.random().toString(16).slice(2, 8);
  };
  console.log(randomColor());

  

  useEffect(() => {
    const canva = canvaRef.current;
    const context = canva.getContext("2d");

    const draw = (ctx, canva) => {
      let startAngle = 0;
      let radius = 180;
      canva.width = 450;
      canva.height = 450;
      let total = data.reduce((n, i) => {
        return n + i.view;
      }, 0);
  
      let cx = canva.width / 2;
      let cy = canva.height / 2;
      data.forEach((d) => {
        ctx.fillStyle = d.color;
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#fff";
        ctx.beginPath();
  
        console.log(total, d.view, d.view / total);
  
        let endAngle = (d.view / total) * Math.PI * 2 + startAngle;
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, radius, startAngle, endAngle, false);
        ctx.lineTo(cx, cy);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
  
        //labels
        ctx.beginPath();
        ctx.fontSize = "20px";
        ctx.fillStyle = "rgb(42, 60, 85)";
  
        let angle = (startAngle + endAngle) / 2;
        let deltaX = Math.cos(angle) * 1.2 * radius;
        let deltaY = Math.sin(angle) * 1.1 * radius;
        ctx.fillText(d.view, deltaX + cx, deltaY + cy);
        startAngle = endAngle;
      });
    };

    const render = () => {
      draw(context, canva);
    };
    render();
  }, [data]);

  

  return (
    <div>
      <canvas
        ref={canvaRef}
        id="canvas"
        style={{maxWidth:"100%",}}
        
      />
    </div>
  );
};

export default PieChart;
