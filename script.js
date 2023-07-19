window.addEventListener('keydown', (e)=>{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;
    let y = e.keyCode 
    let x = document.getElementsByClassName(`${y}`)
    x[0].classList.add('bg-black')
    x[0].classList.add('text-black')
    setTimeout(() => {
        x[0].classList.remove('bg-black')
        x[0].classList.remove('text-black')
    }, 30);
    audio.currentTime = 0;
    audio.play();
});
let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const audio = document.querySelector(`audio[data-key="${button.classList[1]}"]`)
        if (!audio) return;
        button.classList.add('bg-black')
        button.classList.add('text-black')
        setTimeout(() => {
            button.classList.remove('bg-black')
            button.classList.remove('text-black')
        }, 30);
        audio.currentTime = 0;
        audio.play();
    })
}); 