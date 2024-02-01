export const filter = () => {
    let filtros = document.querySelectorAll('.filter');
    let contents = document.querySelectorAll('.content-product')
    filtros.forEach(btn => {
        
        filtros.forEach((btn, index) => {
            if(index === 0){
                btn.classList.add('active')
            }else{
                btn.classList.remove('active')
            }
     
        });
        btn.addEventListener('click', () => {
            filtros.forEach((btn) => {
                btn.classList.remove('active')
            });
            contents.forEach((cont) => {
                cont.classList.add('d-none')
            })
            btn.classList.add('active')
            let content = document.getElementById(btn.dataset.type)
            content.classList.remove('d-none')
        })
    });
}