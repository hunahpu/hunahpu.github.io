---
layout: post
title:  "Algunas animaciones"
date:   2019-09-05
categories: mates animacion gif
author: Ivan Rivera
---
<script src="/assets/js/p5/p5.min.js"></script>
Estas son algunas animaciones que hice utilizando [p5.js](https://p5js.org/) y [threejs](https://threejs.org/)
## Panal de abejas danzante
Esta es una animación que se me ocurrió al ver un vídeo de [The Coding Train](https://www.youtube.com/user/shiffman)  sobre como transformar un triangulo en un circulo y viceversa, el vídeo muestra varias formas sobre como atacar el problema, [video](https://www.youtube.com/watch?v=mvgcNOX8JGQ).
<script src="/assets/js/animations/honeycomb.js"></script>
<div id="honeycomb">
<!--Honeycomb canvas-->
</div>

## Tetraedro a cubo

Siguiendo la misma idea de transformar un circulo en un triangulo, me pregunte ¿por que no hacerlo en 3d? pasar de una esfera a un tetraedro o de un tetraedro a una esfera , entonces decidí tomar el centro del triangulo y empujarlo hacia afuera, para sorpresa mía el resultado es un cubo!

<div id="scene3d">
<iframe id="inlineFrameExample"
width="300" height="300"
    src="/assets/html/tetrahedron_to_cube.html" frameBorder="0" scrolling="no">
</iframe>

</div>

## Cubo a dodecaedro rombico

Decidí intentar con otros poliedros, por ejemplo  al hacerlo con un cubo  y empujar los centros de cada cuadrado se obtiene un dodecaedro rombico


<div id="scene3d">
<iframe id="inlineFrameExample"
width="300" height="300"
    src="/assets/html/cube_to_rhombic_dodecahedron.html" frameBorder="0" scrolling="no">
</iframe>
</div>