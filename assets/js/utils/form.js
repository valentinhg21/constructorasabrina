export const form  = () => {
    let form = document.querySelector('.contact-form')
    let inputs = form.querySelectorAll('input')
    let textarea = form.querySelector('textarea')
    form.addEventListener('submit', e => {
        e.preventDefault();
        let error = true;
        inputs.forEach(input => {
            if(validator.isEmpty(input.value)){
                input.classList.add('error')
                error = true;
            }else{
                input.classList.remove('error')
                error = false;
            }
            if(validator.isEmpty(textarea.value)){
                textarea.classList.add('error')
                error = true;
            }else{
                textarea.classList.remove('error')
                error = false;
            }

            
        });
        if(!error){
            // ENVIO DE FORMULARIO
            let HOME_URL = document.location.origin
            let cliente = new FormData();
  
            inputs.forEach((input, index) => {
                cliente.append(`dato_${index}`, input.value )
            })
            cliente.append('mensaje', textarea.value );
            // ENVIO DE FORMULARIO
            fetch(`${HOME_URL}/mail.php`,{
                method: 'POST',
                body: cliente
            })
            .then((response) => response.json())
            .then(data => {
                if(data.status === 200){
                  
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'ÉXITO',
                        text: '¡Su mensaje se ha enviado correctamente!',
                        confirmButtonText: "Cerrar",
              
                   
                      })
                      inputs.forEach((input, index) => {
    
                                input.value = '';
                           
                         
                      })
                      textarea.value = "";
    
                }else{
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: 'ERROR',
                        text: '¡Inténtelo de nuevo más tarde!',
                        confirmButtonText: "Cerrar",
                    
                      
                      })
                }
            })
            .catch((err) => {
            
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'ERROR',
                    text: '¡Inténtelo de nuevo más tarde!',
                    confirmButtonText: "Cerrar",
         
               
                  })
            })
        }
    })
}