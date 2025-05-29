import { useEffect, useRef } from 'react';
import './BasketballCursor.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function BasketballHoverCursor() {
  const cursorWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let newMouseX = 0, newMouseY = 0;
    const delay = 1;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
    };

    const followMouse = () => {
      newMouseX += (mouseX - newMouseX) / delay;
      newMouseY += (mouseY - newMouseY) / delay;

      if (cursorWrapRef.current) {
        cursorWrapRef.current.style.top = `${newMouseY}px`;
        cursorWrapRef.current.style.left = `${newMouseX}px`;
      }

      requestAnimationFrame(followMouse);
    };

    document.addEventListener('mousemove', moveCursor);
    followMouse();

    const hoverTargets = document.querySelectorAll('.basketball-hover');

    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (cursorWrapRef.current) cursorWrapRef.current.style.display = 'block';
      });
      el.addEventListener('mouseleave', () => {
        if (cursorWrapRef.current) cursorWrapRef.current.style.display = 'none';
      });
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      hoverTargets.forEach((el) => {
        el.removeEventListener('mouseenter', () => {});
        el.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div id="cursor-wrap" ref={cursorWrapRef} style={{ display: 'none' }}>
      <div id="cursor">
        <div className="circle"></div>
        <i className="fas fa-basketball-ball"></i>
        <div className="shadow"></div>
      </div>
    </div>
  );
}

export default BasketballHoverCursor;