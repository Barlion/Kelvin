document.querySelectorAll('.icon-link').forEach(link =>{
    link.addEventListener('click',function(e) {
        document.querySelectorAll('.icon-link').forEach(link=>
        link.classList.remove('active'));

        this.classList.add('active');
    });
});

function changeColor(button) {
    button.classList.toggle('clicked');
}