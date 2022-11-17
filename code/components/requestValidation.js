

export const validation = (cheked) =>{
    
    if (cheked.length < 64 ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
        });
        console.log(cheked)  
        return cheked = []; 
    }

    if (cheked.length >64 && cheked.length<68) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
        });
        return cheked = []; 
    }

    if (cheked.length >68 && cheked.length<72) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios',
        });
        return cheked = []; 
    }

    //Aqui tengo que mandar los datos 
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Encuesta enviada con exito',
        timer: 1500
    })
    console.log(cheked)
    form.reset();
}