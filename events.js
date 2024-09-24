let blue_btn = document.getElementById('blue_btn');
let red_btn = document.getElementById('red_btn');
let white_btn = document.getElementById('white_btn');
let image =document.getElementById('car_image');

blue_btn.addEventListener('click', function(){
    let changable = document.getElementById('changable');
    changable.style.background= 'blue';
    changable.style.color = 'white';
    image.setAttribute('src','images/benz_blue.png');

});
red_btn.addEventListener('click', function(){
    let changable = document.getElementById('changable');
    changable.style.background= 'red';
    changable.style.color = 'white';
    image.setAttribute('src','images/benz_red.jpg');
});
white_btn.addEventListener('click', function(){
    let changable = document.getElementById('changable');
    changable.style.background= 'white';
    changable.style.color = 'black';
    image.setAttribute('src','images/benz_white.jpg');
});

changable.addEventListener('click', function(){
    alert('Just got a car !!\n congrats man!');
});