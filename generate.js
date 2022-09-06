// // const PImage = require("pureimage")
// // const Path2D = require("path2d-polyfill");
// // const fs = require('fs')

// // // make image
// // const img1 = PImage.make(100, 100)

// // // get canvas context
// // const ctx = img1.getContext('2d');

// // // fill with red
// // const p = new Path2D('M10 10 h 80 v 80 h -80 Z');

// // ctx.fillStyle = 'red';
// // // ctx.fillRect(0,0,100,100);
// // ctx.fill(p)

// // //write to 'out.png'
// // PImage.encodePNGToStream(img1, fs.createWriteStream('out.png')).then(() => {
// //     console.log("wrote out the png file to out.png");
// // }).catch((e)=>{
// //     console.log("there was an error writing");
// // });

// var Canvas = require('canvas')
// console.log('Canvas is', Canvas)
// var nodeCanvas = new Canvas(120, 120)
// var ctx = nodeCanvas.getContext('2d')

// // canvas-5-polyfill patches CanvasRenderingContext2D.prototype
// // lets give it one
// global.CanvasRenderingContext2D = {};
// global.CanvasRenderingContext2D.prototype = ctx;

// require('canvas-5-polyfill')

// // square outline
// var path1 = new Path2D();
// path1.rect(10, 10, 100, 100);
// ctx.stroke(path1);

// // black square inside
// var path2 = new Path2D();
// path2.rect(20, 20, 80, 80);
// ctx.fill(path2);

// // green circle in the center
// var path3 = new Path2D();
// path3.arc(60, 60, 30, 0, 2 * Math.PI);
// ctx.fillStyle = 'green';
// ctx.fill(path3);

// // canvas to PNG file
// var fs = require('fs')
// var out = fs.createWriteStream(__dirname + '/canvas.png');
// var stream = nodeCanvas.pngStream();

// stream.on('data', out.write.bind(out));
// stream.on('end', console.log.bind(console, 'saved png'));

const fs = require("fs");

let torso = `<path class="torso"
d="M415.92,467.74c-2.12-4.82-4.87-9.48-10.65-11h0a3.59,3.59,0,0,0-2.33-1.4l-.3.31h0l.3-.31c-1.23-3.78-1.17-7.28,2.05-10.17a2.44,2.44,0,0,0,.61-2.44c-2.33-11.35-3.67-23-7.24-33.95-5-15.43-14.72-28.7-23.08-42.52a10.37,10.37,0,0,0-9.1-5h0a23.47,23.47,0,0,0-8.84-.09.87.87,0,0,1,.11.44h0a.87.87,0,0,0-.11-.44c-1.3-1-1.4-2.52-1.82-3.88-.65-2.13-1.89-3.36-4.21-3.27l-.88-.86h0c-1-1-2.34-.56-3.52-.57-5.9-.07-11.79-.07-17.69-.09-.14-.23-.28-.46-.43-.69q0-20.49,0-41c0-1.31.45-2.75-.61-3.92-.27-1-.22-2.15-1.86-2.29-3.43-.28-6.81-1.14-10.29-.71h0c-1-1.07-2.34-.57-3.54-.66-6.49-.5-12.92.69-19.39.7-4.73,0-5.31.7-5.29,5.53,0,13.45,0,26.9.26,40.34,0,2.23-.45,2.93-2.56,2.89-5.73-.1-11.47,0-17.2-.21-4.38-.17-6.44.93-7.68,5.2-.62,2.11-1.71,2.66-3.8,2.52a19.14,19.14,0,0,0-10.47,2.22,22.48,22.48,0,0,0-5.58,6.54c-.58,1-1.17,1.84-2.42,1.91-2.43,4.71-4.93,9.38-7.27,14.13-3.56,7.21-8.39,13.76-11,21.45-3.88,11.4-5.17,23.43-8.54,34.95-.51,1.75-.44,3.65.91,4.92,2.25,2.12,2.47,4.48,1.59,7.14-9.57,5.5-16.17,14.95-13.39,27.41a6.19,6.19,0,0,0,2.9,5.95l0,0c1.87.19,2.72-.38,3.1-2.52.88-4.89.73-9.78.8-14.68,2.08-5.56,5.92-9.18,11.94-9.55,5.59-.34,10,2.15,12.69,7.21a7.61,7.61,0,0,0,1.27,3.74l.15,1.65c-.22.71.14,1.61-.69,2.13h0c-1.06.76-.69,1.9-.78,2.92-2.78,3.91-3.28,8.48-3.68,13-.17,2,.58,3.5,2.79,2.14,7.59-4.69,11.26-13.83,10.36-21.94-.52-4.75-3.3-8.43-5.05-12.6a1.47,1.47,0,0,1-1.19.26,2.47,2.47,0,0,0,.55-.26c.21-1.18-.08-2.61,1.44-3.14l.07-.8a3.81,3.81,0,0,1-.19-1l4.54-2,.45-.94.15.25q5.51-31.77,11-63.52a15.14,15.14,0,0,0,1.26-5.49c0-1.71,1.12-5.18,1.89-4.66l-13.29,73.72-.6,1.43a1.73,1.73,0,0,1,.28,2.34l.22.11.24-.07h0l-.45,5.44c1.32.77,2.56,1.85,4.28,1.17,2.14,1.67,4.59.61,6.85.62,15.68.06,31.35,0,47,0v.06h15.17c.59.13,1.29.06,1.52.85a1.79,1.79,0,0,1,2.78.2h.87c3.22-1.26,6.49-.73,9.76-.26.71-.29,1.36-.88,2.22-.47,2.75-.19,5.51-.43,8.12.78,1.34-1.15,2.94-1,4.54-1,5.14,0,10.28-.05,15.42-.08H364l3,.25c.78,1,1.9.47,2.87.64l1.63-.57c0-.26,0-.52,0-.78,1,.48,1.2-.15,1.38-.95a15,15,0,0,0-.08-5.79c0-1.47.59-3.28-.06-4.35-2.31-3.84-.56-8.29-2.23-12.14.34-7.16-1.91-13.93-3.3-20.8-2.91-14.46-6-28.88-8.31-43.46q.87,1.28,1.8,2.55c2.16,13.72,5,27.3,7.63,40.91,1.33,6.87,3.51,13.64,3.17,20.8,2.58,3.56,1.95,8.07,3.27,12l.37-.59c1,1.35,2.49,1.7,4.09,1.91l.27,1.4c.25,1.32.51,2.64.76,4a8.68,8.68,0,0,1,.93,4.45h-.52q-2.33,5.38-4.63,10.78c0,1.88-.11,3.76-.17,5.64s-.06,3.88.15,5.78a6.68,6.68,0,0,0,5.45,6c2.88.6,5.5-.65,3.94-2.9.41-2-.71-3.91-.39-5.86a5.44,5.44,0,0,1-.23-.68c0-.51.06-1,.08-1.53a1.78,1.78,0,0,0-.69,0,22.46,22.46,0,0,1,.11-6.65h0c.68-1.52,1.35-3,2-4.55,1.52-2,3.9-2.92,5.76-4.51a49.54,49.54,0,0,1,6.3-.44c7,.36,12.78,8,11.25,16.11-1,2.81.3,8.92,2.27,10.59.76-2.13,3-3.05,3.94-5.21A19.54,19.54,0,0,0,415.92,467.74Zm-10.66-10.95-.26.34h0Zm-23.71,17a4.26,4.26,0,0,0-.49.34A4.26,4.26,0,0,1,381.55,473.83Zm.46-.28.27-.15ZM304.48,304a4.05,4.05,0,0,0-.69,0A4.05,4.05,0,0,1,304.48,304Zm73.89,176.31c.06.24.13.48.2.73l-.27-.33C378.33,480.6,378.35,480.47,378.37,480.33Zm5.76-8.51h0l.16.11Z"
transform="translate(-195.96 -230)" />`;
let head = `<path 
class="head" 
d="M310.62,362.36s4-.12,5.95.64a13.58,13.58,0,0,1,4,2.55,3.13,3.13,0,0,1,.94,2.51,41,41,0,0,1-.17,5.86c-.24,1.64.06,1.83,1.75,2.12a28.67,28.67,0,0,1,14.76,6.73,18.38,18.38,0,0,1,6,14.17c.06,12.47.21,24.95-.12,37.41-.2,7.61-3.65,12.67-11,15.8a14,14,0,0,1-3.4,1.14.89.89,0,0,0-.83,1.07c.05,2.24.06,4.47.05,6.71a.83.83,0,0,0,.69.92c.51.18,1.23.38,1.21,1.14s-.77.86-1.29,1.07c-1.9.77-4,.75-6,1-2.24.3-4.47.67-6.72.87-1.54.13-3.09.12-4.64.31-2.41.28-4.86.13-7.28.32-3.14.24-6.28-.06-9.41-.07a93.09,93.09,0,0,1-10.93-.78c-2.72-.34-5.47-.51-8.19-.89a8.52,8.52,0,0,1-3.43-1.19c-.82-.51-.78-1.17.13-1.36,2-.4,2.3-1.65,2.16-3.39a45.47,45.47,0,0,1,0-4.67c0-.69-.12-1-.91-1.22-4.78-1.27-8.93-3.54-11.7-7.85a15.75,15.75,0,0,1-2.75-8.64c0-6-.09-12,.11-18,.22-6.64.07-13.27.13-19.9a20.61,20.61,0,0,1,3.78-12,19.06,19.06,0,0,1,8.89-6.58,40.41,40.41,0,0,1,9.26-2.68c.89-.13.8-.81.82-1.35.07-1.72.14-3.44.05-5.15a5,5,0,0,1,2.89-5.19c1.51-.77,3-1.75,4.75-1.76C289.85,362.46,310.62,362.36,310.62,362.36Z" 
transform="translate(-190 -340)"/>`;
let legs = `<path class="jeans-back"
d="M229.21,519.06c-.23,2.94,2.56,1,3.26,2.44-2.35.41-4.7,0-7.05,0s-2.65-1.48-2.55-3.54c.4-8.94.29-18,1.26-26.81,1.09-10.1.77-20.22,1.36-30.31,1.56-26.6,1.16-53.3,2.88-79.89.45-7,.76-13.94.79-20.93,0-2.26.41-3.61,3-2.91a3.43,3.43,0,0,0,3.63-.61l12.18.47q9.17,0,18.33,0l13.24.13c4.19.89,8.42.16,12.63.4,1.43.09,2.88-.37,4.28.24-.5,1.92-2,1.14-3,1.1-17.36-.67-34.72-.56-52.09-.51a34.77,34.77,0,0,0-7.27.67,4,4,0,0,0-3.24,3.75,44.92,44.92,0,0,0,.49,16.47c-1.27.31-1,1.45-1,2.36.12,2,.34,4.07.52,6.1.5,1.4-1.22,2.8,0,4.22l0,1.15c-2.08,1.8-2.06,4.54-1.46,6.69.81,2.89.45,5.77.87,8.62.21,1.41,1.76,2.45.83,4.16-1.08,2-.65,4.07,0,6a5.32,5.32,0,0,1-.36,4.3,33.31,33.31,0,0,0-2.84,9.19c-1.11,6.59-1.14,13.44-1.25,20.19-.16,9-.27,17.91-1.12,26.83-.08.76-.21,1.62.52,2.18a5,5,0,0,0,.47,3,5.84,5.84,0,0,1,0,1.78c-2,5.16-.56,10.69-1.5,16-.13.72-.28,1.85.76,1.88s.79-1.09.81-1.84a3.69,3.69,0,0,0-.15-.87.76.76,0,0,1,.38-1c.64-.26.82.3.86.78a32,32,0,0,1-.28,8.91c-.09.44-.48,1.77-1.21.66-1.36-2.08-1.16,0-1.44.58-.59,1.32-.3,2.75-.34,4.13,0,1.8-.4,4,2.46,2.7C227.77,517.54,228.4,518.68,229.21,519.06Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-back"
d="M362.82,481.91c-2.34-1.47-1.49-4.2-2-6.36-1.07-4.63.39-9.42-.55-14.12-.86-4.3.18-8.83-.31-13-1.16-9.8,1.16-19.71-1.26-29.37-.34-1.37.49-2.57.37-3.8-.46-5,1.07-9.95.57-14.91s.33-9.84-1.55-14.49a24.27,24.27,0,0,0,.51-4.36c.06-1.88-.65-2.51-2.25-2.21l-2-.13c0-.59-.14-1.46.51-1.51,3.36-.26,3-3.18,3.17-5.49.21-2.77,0-5.57.08-8.36.09-2.59-.5-4.51-3.14-5-.53-.1-.69-.56-.74-1.09a1,1,0,0,1,.26-.11c5.51-.69,5.65-.69,5.49,5.23-.44,16.39,2.09,32.64,1.65,49-.6,22.28.75,44.5,1.36,66.74C363,479.73,362.87,480.82,362.82,481.91Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front"
d="M361.89,521.37c-1,.94-2.28.53-3.4.54q-26.21.18-52.42.25a12.64,12.64,0,0,1-1.61-.2c-.29-.47-.73-.49-1.19-.53-4.38-.35-4.61-.62-4.68-5.43,0-3,0-5.95-.08-8.92.14-1.77.33-3.53.41-5.29.23-5.23.42-10.45.62-15.67l1.18-.09,0,1.81a6.58,6.58,0,0,0-.56,3.48q0,11.85,0,23.68c0,4.06,0,4.06,3.85,4h45.8l12,0Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-back"
d="M361.89,521.37l-.06-2.3a3.21,3.21,0,0,0,1.9-4c-1.16-2.92.24-5.75-.52-8.81-1.16-4.59,0-9.62-1.49-14.49-.65-2.06-1.43-2.45-2.73-2.67-2.23-.35-4.49-.44-6.74-.62-.8-.07-1.71.13-1.82-1.19,1.08,0,2.16.39,3.24,0a1.27,1.27,0,0,0,2.19,0c1.46-.17,3,.55,4.39-.52l2.26-.08c1.76.24,2.09,1.75,2.16,3.25.4,9.22.71,18.44,1.13,27.66.1,2.11-.68,3.15-2.51,3.4l-.06.12A1.13,1.13,0,0,1,361.89,521.37Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-back"
d="M309,357.07c.86,0,1.95.5,2.14-1.1,0-.19.07-.39.11-.58l.88,1.23c3.83,1.06,7.72.43,11.58.42L340.5,357a51.37,51.37,0,0,0,12.2-.44c.17.35.34.7.5,1.06-.72,1.13-1.82.7-2.76.7-10.73,0-21.46-.15-32.19.12-3.56.09-7.15,0-10.72.42-.79.1-1.71.28-1.91-1C306.71,357.29,308,357.91,309,357.07Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-back" d="M304.59,357.83a4.48,4.48,0,0,1-6.61,0A17.92,17.92,0,0,1,304.59,357.83Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-back" d="M362,485.1c-.23-.83,0-1.37.83-1.46C363.07,484.49,362.8,485,362,485.1Z"
transform="translate(-182.85 -130.39)" />
<polygon class="jeans-front" points="140.37 165.67 140.44 165.56 140.49 165.73 140.37 165.67" />
<path class="jeans-dark"
d="M354.32,379.18l2.05.13c-.25,2.57.06,5.34-2.15,7.21-3.32.69-6.61,1.66-10,1.2a48,48,0,0,0-8.31,0c-9.47.4-18.94-.42-28.43,0-4.85.21-4.93.1-5,5.44,0,.39,0,.79.06,1.19,0,3.2,0,6.41,0,9.61q-.07,9.88-.13,19.77c-.34-.14-.82,1.83-1.05-.11a10.28,10.28,0,0,0-.5-1.67,46.41,46.41,0,0,0,.49-4.68c.06-5.84,0-11.68,0-17.51l0-4.22a2.91,2.91,0,0,0,0-.59v-1.2c.08-5.55-.22-5.93-4.65-6h-.54l-8.23.07-.15,9.53q0,12.89-.05,25.78c-.88,1.75-.36,3.65-.52,5.48l-.65,0c-.11-1.62.58-3.33-.44-4.85,1-8.77.3-17.57.41-26.35v-3a10.57,10.57,0,0,0-.28-3.54c-.7-3.5-1.28-4.18-4.46-3.58s-6.24.32-9.35.44c-6,.23-12.1-.08-18.15-.09-4,0-8,.52-11.87,0-2.81-.35-6.24.85-8.36-2.73a20.58,20.58,0,0,1-1.93-5.5l55.63,0c.34.61.71.62,1.1.05h1.08c.55.71,1.1.71,1.64,0l7.63,0c1.82.53,2.44,1.79,2.26,3.85a8.54,8.54,0,0,0,.25,4.11l.73,0v-8Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front"
d="M358.08,363.82c.09-2.59-.5-4.51-3.14-5-.53-.1-.69-.56-.74-1.09l-1-.15c-.72,1.13-1.82.7-2.76.7-10.73,0-21.46-.15-32.19.12-3.56.09-7.15,0-10.72.42-.79.1-1.71.28-1.91-1h-1a4.48,4.48,0,0,1-6.61,0l-1.58-.05c-.5,1.92-2,1.14-3,1.1-17.36-.67-34.72-.56-52.09-.51a34.77,34.77,0,0,0-7.27.67,4,4,0,0,0-3.24,3.75,44.86,44.86,0,0,0,.49,16.46l.69.11,55.63,0c.4-.64.76-.59,1.1.05h1.08c.54-.82,1.09-.82,1.64,0l7.63,0c1.05-1.22,2.15-.57,3.24-.1l52-.09c0-.59-.14-1.46.51-1.51,3.36-.26,3-3.18,3.17-5.49C358.21,369.41,358,366.61,358.08,363.82Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front"
d="M302.33,379.27v8l-.73,0a8.54,8.54,0,0,1-.25-4.11c.18-2.06-.44-3.32-2.26-3.85C300.14,378.15,301.24,378.8,302.33,379.27Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front" d="M291.46,379.34c-.54.73-1.09.73-1.64,0C290.36,378.54,290.91,378.54,291.46,379.34Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front" d="M288.74,379.37c-.39.57-.76.56-1.1-.05C288,378.68,288.4,378.73,288.74,379.37Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-dark"
d="M288.86,466.93a119.92,119.92,0,0,1-.19,18c-.59,0-1.2-.13-1.58.56-3.58-.29-7.07,1.4-10.7.6-4.92-1.08-9.88-.47-14.84-.43-2.78,0-5.74,2.05-8.41-.65-.36-.36-1.26-.26-1.86-.1-4.67,1.26-9.34-.2-14,0-2.7.13-5.07-1.35-7.7-1.46-1,0-1.55-.94-1.39-2.15a14.73,14.73,0,0,1,7.31-2.26c6.87-.14,13.59-1.84,20.53-1.53,5.36.24,10.74.65,16.13.65,3.74,0,7.6.73,11.43.68,2.09,0,3.84.08,3.82,3.25,1.28-4,.49-8,.8-11.89C288.31,469.09,287.62,467.77,288.86,466.93Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front"
d="M289.83,508.94a133,133,0,0,1-.46-15.46c0-2.89-.41-5.72-.7-8.57-.59,0-1.2-.13-1.58.56.19.79.37,1.59.55,2.39h0c-.18-.8-.36-1.6-.55-2.39-3.58-.29-7.07,1.4-10.7.6-4.92-1.08-9.88-.47-14.84-.43-2.78,0-5.74,2.05-8.41-.65-.36-.36-1.26-.26-1.86-.1-4.67,1.26-9.34-.2-14,0-2.7.13-5.07-1.35-7.7-1.46-1,0-1.55-.94-1.39-2.15-.2-.21-.4-.41-.59-.62l-1.6.6a5,5,0,0,0,.47,3,5.84,5.84,0,0,1,0,1.78c-2,5.16-.56,10.69-1.5,16-.13.72-.28,1.85.76,1.88s.79-1.09.81-1.84a3.69,3.69,0,0,0-.15-.87.76.76,0,0,1,.38-1c.64-.26.82.3.86.78a32,32,0,0,1-.28,8.91c-.09.44-.48,1.77-1.21.66-1.36-2.08-1.16,0-1.44.58-.59,1.32-.3,2.75-.34,4.13,0,1.8-.4,4,2.46,2.7,1-.44,1.61.7,2.42,1.08-.23,2.94,2.56,1,3.26,2.44,12,0,23.92.09,35.88,0,6.79-.06,13.58.38,20.36-.36,1-2.36.46-4.85.6-7.28C289.41,512.2,289,510.49,289.83,508.94Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front"
d="M363.73,515.08c-1.16-2.92.24-5.75-.52-8.81-1.16-4.59,0-9.62-1.49-14.49-.65-2.06-1.43-2.45-2.73-2.67-2.23-.35-4.49-.44-6.74-.62-.8-.07-1.71.13-1.82-1.19-3.9,0-7.8,0-11.69,0-5.56,0-11.11.14-16.67.51-5.33.35-10.69.17-16,0-1.77-.05-3.53-.85-5.29,0a6.58,6.58,0,0,0-.56,3.48q0,11.85,0,23.68c0,4.06,0,4.06,3.84,4h45.81l12,0A3.21,3.21,0,0,0,363.73,515.08Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-dark"
d="M298.79,462.12c0-8.65-.23-17.31.18-26l.77.78c.11,13.39-.64,26.78.43,40.15a2.51,2.51,0,0,0,.23,3c.83,1,1.27-.51,1.93-.8,1.67-.75,3.37-1.92,5.16-1.57,3.49.69,7.11-.79,10.51.91a.58.58,0,0,0,.53,0c3.48-3.11,7.31-.44,10.93-.56a83,83,0,0,1,15.25.6c2.22.33,4.62-.74,7.1-.55,1.87.15,3.28,1.66,5.12,1.37,1,3.82.74,4.15-2.78,4.19-5.94.07-11.87.21-17.81.48-6.91.31-13.85-.28-20.78-.46-4.31-.12-8.61,1.14-12.94,0-1.65-.43-2,.81-1.9,2.32l-1.18.09c-.25-.82-.51-1.64-.77-2.45a.67.67,0,0,0-.06-1c0-1.11,0-2.22,0-3.32a6.19,6.19,0,0,0,0-4.5q0-6.09,0-12.18c.07,0,.2-.11.19-.12A2.87,2.87,0,0,0,298.79,462.12Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front"
d="M354.22,386.52c-3.64,4.08-7.81,6.43-13.18,4.89a4,4,0,0,0-1.62-.09c-4.76.67-9.6-.05-14.24-.5-3.19-.31-5.86.77-8.77.89a3,3,0,0,1-1.58-.14c-3.17-1.6-6.41.19-9.6-.26-2.13-.3-1.18,2.76-2.78,3,0-.4-.06-.8-.05-1.19.11-5.34.19-5.23,5-5.44,9.49-.42,19,.4,28.43,0a48,48,0,0,1,8.31,0C347.61,388.18,350.9,387.21,354.22,386.52Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front" d="M287.1,428.58c-.08.44-.13,1-.7.81-.42-.16-.25-.57.05-.84Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front" d="M301.25,395.5a3.3,3.3,0,0,1-.19-.43s.13-.1.19-.16A2.91,2.91,0,0,1,301.25,395.5Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-dark"
d="M298.72,435.41a.27.27,0,0,1-.28-.31c-.71-1.22-.07-2.42.07-3.62.61-.34,1.33-.53,1.62-1.33.19-.56.4-1.12,1.07-.92s.57,1,.68,1.66C302.48,433.79,300.37,434.4,298.72,435.41Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front"
d="M362.82,483.64v-1.73c-2.34-1.47-1.49-4.2-2-6.36-1.07-4.63.39-9.42-.55-14.12-.86-4.3.18-8.83-.31-13-1.16-9.8,1.16-19.71-1.26-29.37-.34-1.37.49-2.57.37-3.8-.46-5,1.07-9.95.57-14.91s.33-9.84-1.55-14.49a5,5,0,0,0-2.11,2.94,5,5,0,0,1,2.11-2.94,24.27,24.27,0,0,0,.51-4.36c.06-1.88-.65-2.51-2.24-2.21-.25,2.57.06,5.34-2.15,7.21-3.64,4.08-7.81,6.43-13.18,4.89a4,4,0,0,0-1.62-.09c-4.76.67-9.6-.05-14.24-.5-3.19-.31-5.86.77-8.77.89a3,3,0,0,1-1.58-.14c-3.17-1.6-6.41.19-9.6-.26-2.13-.3-1.18,2.76-2.78,3v9.61l-.13,19.77h0c-.34-.13-.82,1.83-1.05-.11a10.28,10.28,0,0,0-.5-1.67,46.41,46.41,0,0,0,.49-4.68c.06-5.84,0-11.68,0-17.51,0-1.41,0-2.82,0-4.22a3.3,3.3,0,0,1-.19-.43s.13-.1.19-.16c0-.4,0-.8,0-1.2.08-5.55-.22-5.93-4.65-6h-.54l-8.23.07-.15,9.53q0,12.89-.05,25.78c-.88,1.75-.36,3.65-.52,5.48-.08.44-.13,1-.7.82-.42-.17-.25-.58.05-.85-.11-1.62.58-3.33-.44-4.85a2.11,2.11,0,0,1-.54.07,2.11,2.11,0,0,0,.54-.07c1-8.77.3-17.57.41-26.35,0-1,0-2,0-3a10.57,10.57,0,0,0-.28-3.54c-.7-3.5-1.28-4.18-4.46-3.58s-6.24.32-9.35.44c-6,.23-12.1-.08-18.15-.09-4,0-8,.52-11.87,0-2.81-.35-6.24.85-8.36-2.73a20.58,20.58,0,0,1-1.93-5.5l-.69-.1c-1.27.31-1,1.45-1,2.36.12,2,.34,4.07.52,6.1h0c.5,1.4-1.22,2.8,0,4.22,0,.38,0,.77,0,1.15-2.08,1.8-2.06,4.54-1.46,6.69.81,2.89.45,5.77.87,8.62.21,1.41,1.76,2.45.83,4.16-1.08,2-.65,4.07,0,6a5.32,5.32,0,0,1-.36,4.3,33.31,33.31,0,0,0-2.84,9.19c-1.11,6.59-1.14,13.44-1.25,20.19-.16,9-.27,17.91-1.12,26.83-.08.76-.21,1.62.52,2.18l1.6-.6q.27-.54.51-1.08-.24.54-.51,1.08c.19.21.39.41.59.62a14.73,14.73,0,0,1,7.31-2.26c6.87-.14,13.59-1.84,20.53-1.53,5.36.24,10.74.65,16.13.65,3.74,0,7.6.73,11.43.68,2.09,0,3.84.08,3.82,3.25,1.28-4,.49-8,.8-11.89.09-1.1-.6-2.42.64-3.26.56-5.55.2-11.12.28-16.68.07-4.38,0-8.76.09-13.14,0-.9-.4-2.58,1.21-2.41,2.67.28,5.36-.28,8,.4-.71-1.22-.07-2.42.07-3.62.61-.34,1.33-.53,1.62-1.33.19-.56.4-1.12,1.07-.92s.57,1,.68,1.66h0c.6,2.9-1.51,3.51-3.16,4.52l.25.74.77.78h0c.11,13.39-.64,26.78.43,40.15a2.51,2.51,0,0,0,.23,3c.83,1,1.27-.51,1.93-.8,1.67-.75,3.37-1.92,5.16-1.57,3.49.69,7.11-.79,10.51.91a.58.58,0,0,0,.53,0c3.48-3.11,7.31-.44,10.93-.56a83,83,0,0,1,15.25.6c2.22.33,4.62-.74,7.1-.55,1.87.15,3.28,1.66,5.12,1.37h0c1,3.82.74,4.15-2.78,4.19-5.94.07-11.87.21-17.81.48-6.91.31-13.85-.28-20.78-.46-4.31-.12-8.61,1.14-12.94,0-1.65-.43-2,.81-1.9,2.32l0,1.81c1.76-.89,3.52-.09,5.29,0,5.34.15,10.7.33,16,0,5.56-.37,11.11-.5,16.67-.51,3.89,0,7.79,0,11.69,0,1.08,0,2.16.39,3.24,0a1.27,1.27,0,0,0,2.19,0c1.46-.17,3,.55,4.39-.52l2.26-.08a1.27,1.27,0,0,0-.52-1.53C361.76,484.27,362,483.73,362.82,483.64Zm-74.64-86.33Zm-1,35.78a3,3,0,0,1-1.15-2.26h0c1.18-.24,1.9.75,2.8,1.25C288.73,433.39,288.57,434.49,287.14,433.09Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-dark"
d="M288.79,432.08c-.06,1.31-.22,2.41-1.65,1a3,3,0,0,1-1.15-2.26C287.17,430.59,287.89,431.58,288.79,432.08Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front" d="M298.74,474.82a6.19,6.19,0,0,1,0,4.5A10.35,10.35,0,0,1,298.74,474.82Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-front" d="M298.71,482.64a.67.67,0,0,1,.06,1A.7.7,0,0,1,298.71,482.64Z"
transform="translate(-182.85 -130.39)" />
<path class="jeans-back" d="M298.79,462.12a2.87,2.87,0,0,1,.18.4s-.12.08-.19.12l-.13-.27Z"
transform="translate(-182.85 -130.39)" />`;

let head_color = `#1d3f3a`;
let torso_color = `#522522`;
let jeans_back_color = `#527623`;
let jeans_front_color = `#341f41`;
let jeans_dark_color = `#042ba7`;
const result = `
<svg 
id="Layer_1" 
data-name="Layer 1" 
xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 240 400">
    <defs>
        <style>
            .head{fill:${head_color};}
            .torso{fill:${torso_color};}
            .jeans-back {
              fill: ${jeans_back_color};
          }

          .jeans-front {
              fill: ${jeans_front_color};
          }

          .jeans-dark {
              fill: ${jeans_dark_color};
          }
        </style></defs>
        
        ${legs}
        ${torso}
        ${head}
        </svg>
`;

fs.writeFile("./file_new.svg", result, (err) => {
  if (err) {
    return console.err(err);
  }
  console.log("The file was saved!");
});
