// // src/components/ParticleCursor.js
// import React, { useEffect } from 'react';
// import { particlesCursor } from 'threejs-toys';
// import styled from 'styled-components';

// // Estilos con Styled Components
// const AppContainer = styled.div`
//   overflow: hidden;
// `;

// const Canvas = styled.canvas`
//   display: block;
//   position: fixed;
//   z-index: -1;
//   top: 0;
//   width: 100%;
//   height: 100%;
// `;

// const ParticleCursor = () => {
//     console.log("tester");
    
//   useEffect(() => {
//     const pc = particlesCursor({
//       el: document.getElementById('app'),
//       gpgpuSize: 512,
//       colors: [0x00fffc, 0x0000ff], // Cambié el color a #00fffc y azul
//       color: 0xff0000,
//       coordScale: 0.5,
//       noiseIntensity: 0.005,
//       noiseTimeCoef: 0.0001,
//       pointSize: 2,
//       pointDecay: 0.0025,
//       sleepRadiusX: 250,
//       sleepRadiusY: 250,
//       sleepTimeCoefX: 0.001,
//       sleepTimeCoefY: 0.002,
//     });

//     return () => {
//       pc.destroy(); // Limpiar al desmontar
//     };
//   }, []);

//   return (
//     <AppContainer id="app">
//       <Canvas></Canvas>
//     </AppContainer>
//   );
// };

// export default ParticleCursor;

// ////////good
// src/components/ParticleCursor.js
import React, { useEffect } from 'react';
import { particlesCursor } from 'threejs-toys';
import styled from 'styled-components';

// Estilos con Styled Components
const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw; /* Ocupa todo el ancho de la ventana */
  height: 100vh; /* Ocupa todo el alto de la ventana */
  overflow: hidden;
  pointer-events: none; /* Asegura que no interfiera con otros elementos */
  z-index: -1; /* Coloca el lienzo detrás del contenido */
`;

const ParticleCursor = () => {
  useEffect(() => {
    const pc = particlesCursor({
      el: document.getElementById('particle-container'), // ID del contenedor
      gpgpuSize: 512,
      colors: [0x00fffc, 0x0000ff],
      coordScale: 0.5,
      noiseIntensity: 0.005,
      noiseTimeCoef: 0.0001,
      pointSize: 2,
      pointDecay: 0.0025,
      sleepRadiusX: 250,
      sleepRadiusY: 250,
      sleepTimeCoefX: 0.001,
      sleepTimeCoefY: 0.002,
    });

    return () => {
      pc.destroy(); // Limpiar el efecto al desmontar
    };
  }, []);

  return <AppContainer id="particle-container"></AppContainer>;
};

export default ParticleCursor;
