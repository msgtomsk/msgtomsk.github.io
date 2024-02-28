import { useEffect } from "react";

import "./Button.less";

function Button({ onClick }: { onClick: any }) {
  const initMagneticCursor = () => {
    console.log("called");
    const button: HTMLElement = document.querySelector(".button")!;
    let {
      width,
      height,
      x: buttonX,
      y: buttonY,
    } = button.getBoundingClientRect(); // gives you width, height, left-X,top-y of the button

    buttonX = buttonX + width / 2; //  center point of button on x-axis
    buttonY = buttonY + height / 2; //  center point of button on y-axis

    // console.log("btnx", buttonX, "btny", buttonY);

    /*************** Functions ***************/

    let distance = width;
    let mouseHasEntered = true;
    let mouseIsInButtonTerritory;

    function mouseMove(e: { x: any; y: any }) {
      const x = e.x; // current x of cursor
      const y = e.y; // current y of cursor

      console.log(x, y, distance, "btnx", buttonX, "btny", buttonY);

      const leftBorderLine = buttonX - distance;
      const rightBorderLine = buttonX + distance;
      const topBorderLine = buttonY - distance;
      const bottomBorderline = buttonY + distance;
      const xWalk = (x - buttonX) / 2; // the distance to move the button when mouse moves on X axis
      const yWalk = (y - buttonY) / 2; // the distance to move the button when mouse moves on Y axis

      mouseIsInButtonTerritory =
        x > leftBorderLine &&
        x < rightBorderLine &&
        y > topBorderLine &&
        y < bottomBorderline; // becomes true if  mouse is inside all of these border-line

      if (mouseIsInButtonTerritory) {
        if (mouseHasEntered) {
          // this must happen only once to create outside borderline
          //creating another level borderline by incresing distance;
          // while cursor is returing the button comes out of nearest border-line and return from this borderline
          distance = distance + distance;
          mouseHasEntered = false;
        }
        catchCursor(xWalk, yWalk); // call the function when mouse in in the button's territory
      } else {
        resetPositon();
      }
    }

    function catchCursor(xWalk: number, yWalk: number) {
      // translates the button in the direction where cursor is.
      button.style.transform = `translate(${xWalk}px, ${yWalk}px)`;
    }

    function resetPositon() {
      // resets the postion of the button as it was initial.
      button.style.transform = `translate(${0}px, ${0}px)`;
      if (!mouseHasEntered) distance /= 2;
      mouseHasEntered = true;
      // when button is return to it's position (mouseHasEntered = true) lets to increase the initial borderline of button for the next time
    }

    /*************** Event-handler ***************/

    window.addEventListener("mousemove", mouseMove);
  };

  useEffect(() => {
    initMagneticCursor();
  }, []);
  return (
    <button type="button" className="button" onClick={onClick}>
      Btn
    </button>
  );
}

export default Button;
