// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// function DraggableIcon({ children, className }) {
//     const iconRef = useRef(null);

//     useEffect(() => {
//         const element = iconRef.current;
//         let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

//         const onMouseMove = (e) => {
//             posX = mouseX - e.clientX;
//             posY = mouseY - e.clientY;
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             element.style.left = (element.offsetLeft - posX) + "px";
//             element.style.top = (element.offsetTop - posY) + "px";
//         };

//         const onMouseUp = () => {
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };

//         const onMouseDown = (e) => {
//             e.preventDefault();
//             mouseX = e.clientX;
//             mouseY = e.clientY;
//             document.addEventListener('mousemove', onMouseMove);
//             document.addEventListener('mouseup', onMouseUp);
//         };

//         element.addEventListener('mousedown', onMouseDown);

//         return () => {
//             element.removeEventListener('mousedown', onMouseDown);
//             document.removeEventListener('mousemove', onMouseMove);
//             document.removeEventListener('mouseup', onMouseUp);
//         };
//     }, []);

//     return (
//         <div ref={iconRef} className={`draggableIcon ${className}`}>
//             {children}
//         </div>
//     );
// }

// export default DraggableIcon;





import React, { useState, useEffect, useRef } from 'react';

function DraggableIcon({ title, onClick }) {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const ref = useRef(null);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        e.preventDefault(); // 드래그 시 기본 이벤트 방지
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        setPosition((prevPosition) => ({
            x: prevPosition.x + e.movementX,
            y: prevPosition.y + e.movementY
        }));
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        const currentRef = ref.current;
        currentRef.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            currentRef.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div ref={ref} className="draggableIcon" onClick={onClick} style={{ left: position.x, top: position.y, position: 'absolute' }}>
            {title}
        </div>
    );
}

export default DraggableIcon;
