const btnTheme = document.querySelector('#btn')
const body = document.body;
btnTheme.addEventListener('click', () => {
    
    body.classList.toggle('modo-oscuro');
    
    if (body.classList.contains('modo-oscuro')) {
        btnTheme.textContent = 'Modo Claro';
    } else {
        btnTheme.textContent = 'Modo Oscuro';
    }
    console.log('Modo oscuro activo:', body.classList.contains('modo-oscuro'))
});