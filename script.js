let body=document.querySelector('body');

body.addEventListener('mousemove',function(elem){
    body.style.setProperty("--x",elem.clientX+'px');
    body.style.setProperty("--y",elem.clientY+'px');
});