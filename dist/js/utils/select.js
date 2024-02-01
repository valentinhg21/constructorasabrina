export const select = () => {
    const select = document.querySelector('.input-field-select')
    const list = document.querySelector('.list')
    const input = select.querySelector('input')
    select.addEventListener('click', e => {
        list.classList.toggle('active')
        let options = list.querySelectorAll('li')
        options.forEach(option => {
            option.addEventListener('click', e => {
                input.value = option.textContent
            })
        });
    })
}