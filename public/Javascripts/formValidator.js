document.addEventListener('DOMContentLoaded', (event) => {

    // console.log('Hola, estoy validando');

    const UserForm = document.querySelector('#UserForm');
    const email = document.getElementById('usuario');


    UserForm.addEventListener('submit', (event) => {
        const errorsArray = [];
        event.preventDefault();
        let refuseEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       
        if(email == undefined){}
        else{
             let testEmail = refuseEmail.test(email.value)
        
             console.log(testEmail)
        
             if(email.value != '' /* || email.value != null || email.value != undefined */ && !testEmail){
                    errorsArray.push(` El <strong> Email </strong> que intentas ingresar no es valido `);
        }}
        
       
        Array.from(UserForm.elements).forEach(element => {
            
            if(element.type !== 'submit' ){
                console.log(element);
                
                // element.parentElement.removeChild(element.parentElement.lastElementChild);

                if(element.value === '' || element.value === null || element.value === undefined){
                    element.classList.add('is-invalid');
                    /* element.parentElement.innerHTML += `<p class="text-danger">El campo <strong>${element.dataset.label}</strong> debe ser diligenciado</p>` */
                    errorsArray.push(` El campo <strong>${element.dataset.label}</strong> debe ser diligenciado `);
                }
                else{
                    element.classList.remove('is-invalid');
                }
            }

            if(element.value.length < 6 && element.value != "" && element.dataset.label != undefined && element.dataset.label != "Genero" && element.dataset.label != "Precio" && element.dataset.label != "Categoria")
            
            {errorsArray.push(` El campo <strong>${element.dataset.label}</strong> debe contener al menos 6 caracteres `);}

               
        });
        
 

        if(errorsArray.length === 0){
            UserForm.submit();
        }else{
            const errorsDiv = document.getElementById('errorsDiv');
            errorsDiv.innerHTML = '';
            errorsArray.forEach(error => {
                errorsDiv.hidden = false;
                errorsDiv.innerHTML += `<p>- ${ error }</p>`
            });

        }
        //console.log(errorsArray);
        //console.log(element.dataset.label);
    });


    // console.log(
    //     document.forms[0]
    // );

});


