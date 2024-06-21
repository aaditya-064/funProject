const yesBtn = document.querySelector('#yesButton_')
const noBtn = document.querySelector('#noButton_')

noBtn.addEventListener('mouseenter', ()=>{
    noBtn.style.top = Math.ceil(Math.random()*60 + Math.random()*30) + '%'
    noBtn.style.left = Math.ceil(Math.random()*60 + Math.random() * 10) + '%'
})