/*
====================================================================
 INSTITUTO TECNOLÓGICO - PRÁCTICA API CANVAS
--------------------------------------------------------------------
 Programa: Dibujo básico usando Canvas en JavaScript
 Autor: Jesús Vite
 Materia: Graficación
 Descripción:
 Este programa utiliza la API Canvas de HTML5 para realizar
 un dibujo básico en 2D. Se obtiene un elemento <canvas>
 desde el documento HTML y se usa su contexto gráfico para
 dibujar un rectángulo relleno de color verde.

 Objetivo:
 Comprender cómo acceder al lienzo (canvas), obtener el
 contexto de dibujo y representar figuras básicas mediante
 JavaScript.

 Fecha: 16/02/2026
====================================================================
*/


// ---------------------------------------------------------------
// 1. Obtener el elemento canvas desde el documento HTML
// ---------------------------------------------------------------
var canvas = document.getElementById("lienzo");


// ---------------------------------------------------------------
// 2. Ajustar tamaño del canvas al 50% de la pantalla
// ---------------------------------------------------------------

// window.innerWidth  -> ancho visible del navegador
// window.innerHeight -> alto visible del navegador

canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;


// ---------------------------------------------------------------
// 3. Obtener el contexto de dibujo 2D
// ---------------------------------------------------------------
var ctx = canvas.getContext("2d");


// ---------------------------------------------------------------
// 4. Definir el estilo de relleno
// ---------------------------------------------------------------
ctx.fillStyle = "rgb(210, 159, 17)";


// ---------------------------------------------------------------
// 5. Dibujar un rectángulo relleno
// ---------------------------------------------------------------
ctx.fillRect(10, 10, 200, 200);
