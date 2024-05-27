/*

// When the user chooses one of the channel buttons, change the src attribute of the img inside the .tv-show div
// You should write a single function to change the channel that accepts a single input, the channel number, and uses a conditional statement to change the TV to the image specific to that channel.
// When you set up your event listeners for the buttons, the callback function should call upon that change channel function
// Use a conditional statement to evaluate which channel they've chosen, so you can set a specific image for each channel
// Feel free to look up and use any images of your choice and include them in your conditional statement! Be sure to use an absolute path to the image file.

// Image files
1-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg

2-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg

3-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg

4-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg

5-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg

6-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg

7-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg

8-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg

9-
https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg
*/

// Variables
// 1 - get channel from the remote
// 2 - get the screen and change in the image in there

// Pseudo-code
// Variable1, listen to it for a click
// function() {Listener would update the image in the screen} */




let screen1 = document.getElementsByTagName('img')[1];


let btn1 = document.getElementsByClassName('channel')[0];
console.log(screen1);
console.log(btn1);


btn1.addEventListener('click', function() {
    
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg';
});


let btn2 = document.getElementsByClassName('channel')[1];
console.log(screen1);
console.log(btn1);


btn2.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg';
});



let btn3 = document.getElementsByClassName('channel')[2];
console.log(screen1);
console.log(btn1);


btn3.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg';
});


let btn4 = document.getElementsByClassName('channel')[3];
console.log(screen1);
console.log(btn1);


btn4.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg';
});


let btn5 = document.getElementsByClassName('channel')[4];
console.log(screen1);
console.log(btn1);


btn5.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg';
});


let btn6 = document.getElementsByClassName('channel')[5];
console.log(screen1);
console.log(btn1);


btn6.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg';
});



let btn7 = document.getElementsByClassName('channel')[6];
console.log(screen1);
console.log(btn1);


btn7.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg';
});



let btn8 = document.getElementsByClassName('channel')[7];
console.log(screen1);
console.log(btn1);


btn8.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg';
});


let btn9 = document.getElementsByClassName('channel')[8];
console.log(screen1);
console.log(btn1);


btn9.addEventListener('click', function() {
    screen1.src = 'https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg';
});



