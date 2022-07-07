document.addEventListener('DOMContentLoaded',function(){
    // alert("alert");
    showDiv()
    createpreview()
});
console.log('hello');
let x=0
let slides = document.getElementsByClassName('slide')
function increaseOne()

{console.log('increase');
x++
showDiv()}

function decreaseOne(){
    console.log ("decrease");
    x--
    showDiv()
}

function showDiv(){
    
    if (x >= slides.length){
        x=slides.length-1
    }
    if (x<0){
        x=0
    }
    for(let i =0; i<slides.length; i++){
        s = slides [i]
        s.style.display = 'none';
        if (i == x) s.style.display='block'
    }
}
function createpreview(){
    let preview = document.getElementById('preview')
    for(let i =0; i<slides.length; i++){
        s = slides [i]
        console.log(s.children[0].src)
        let img = document.createElement('img')
        img.src = s.children[0].src
        let div = document.createElement('div')
        div.appendChild(img)
        preview.appendChild(div)
        
        div.classList.add('w3-cell')
        div.classList.add('w3-center')
        img.classList.add('fit')
        img.addEventListener('click',function(){x=i
            showDiv()})
    }
}

