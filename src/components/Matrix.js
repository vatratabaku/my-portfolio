import React, { useEffect, useState } from 'react';
import styles from "./css/Canvas.module.css";

const Matrix = () => {
    const [showMatrix, setShowMatrix] = useState(true);

  useEffect(() => {
    if(showMatrix){
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const myDiv = document.querySelector(".myDiv")
    context.globalCompositeOperation = 'lighter';
    canvas.width =  180;
    canvas.height = 803;
   myDiv.appendChild(canvas);

    const textStrip = ['1', '0', '1', '1', '1', '0', '1', '1', '1', '0', '1', '0', '1'];

    const stripCount = 60;
    const stripX = new Array();
    const stripY = new Array();
    const dY = new Array();
    const stripFontSize = new Array();

    for (let i = 0; i < stripCount; i++) {
      stripX[i] = Math.floor(Math.random() * 1265);
      stripY[i] = -100;
      dY[i] = Math.floor(Math.random() * 7) + 3;
      stripFontSize[i] = Math.floor(Math.random() * 16) + 8;
    }

    const theColors = ['rgb(255, 4, 251)', '#fd8effd7', '#fd8effd7', '#fd8effd7', '#FB4BFF', 'rgb(255, 4, 251)'];
    

    const drawStrip = (x, y) => {
      for (let k = 0; k <= 20; k++) {
        const randChar = textStrip[Math.floor(Math.random() * textStrip.length)];
        switch (k) {
          case 0:
            context.fillStyle = theColors[0];
            break;
          case 1:
            context.fillStyle = theColors[1];
            break;
          case 3:
            context.fillStyle = theColors[2];
            break;
          case 7:
            context.fillStyle = theColors[3];
            break;
          case 13:
            context.fillStyle = theColors[4];
            break;
          case 17:
            context.fillStyle = theColors[5];
            break;
          default:
            break;
        }
        context.fillText(randChar, x, y);
        y -= stripFontSize[k];
      }
    };

    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.shadowOffsetX = context.shadowOffsetY = 0;
      context.shadowBlur = 8;
      context.shadowColor = 'rgb(255, 4, 251)';

      for (let j = 0; j < stripCount; j++) {
        context.font = stripFontSize[j] + 'px MatrixCode';
        context.textBaseline = 'top';
        context.textAlign = 'center';

        if (stripY[j] > 1358) {
          stripX[j] = Math.floor(Math.random() * canvas.width);
          stripY[j] = -100;
          dY[j] = Math.floor(Math.random() * 7) + 3;
          stripFontSize[j] = Math.floor(Math.random() * 16) + 8;
          drawStrip(stripX[j], stripY[j]);
        } else drawStrip(stripX[j], stripY[j]);

        stripY[j] += dY[j]  * 0.5;
      }

      setTimeout(draw, 50);
    };

    draw();
}
  }, [showMatrix]);

  return <div></div>;
};

export default Matrix;
