let func = () => {
    elm.type = 'date'
    elm.value = '1990-11-11';
}
let elm = document.getElementById('dpicker');
elm.addEventListener('focus', (event) => {
    event.target.type = 'date'
    event.target.value = '1990-11-11'
});