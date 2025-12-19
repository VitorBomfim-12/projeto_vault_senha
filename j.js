document.addEventListener('DOMContentLoaded',function(){
    const todos_modal= document.querySelectorAll('.modal');
    todos_modal.forEach(function(modal){

          modal.addEventListener('show.bs.modal',function(){
            const formulario=this.querySelector('form');
            if (formulario){
               const campos_do_formulario=formulario.querySelectorAll('.form-control');
               campos_do_formulario.forEach(function(campo){
                campo.setAttribute('data-original',campo.value);

               })
            };

          });

          modal.addEventListener('hidden.bs.modal',function(){
          const formulario=this.querySelector('form')

           if (formulario){
            const campos=formulario.querySelectorAll('.form-control')
            campos.forEach(function(campo){
            const valores_fixos= campo.getAttribute('data-original');
            campo.value=valores_fixos;
             

              })
           };
          

        });
  });
});
      
     



document.addEventListener('DOMContentLoaded',function(){
    const todos_modal= document.querySelectorAll('.modal');
    todos_modal.forEach(function(modal){

          modal.addEventListener('show.bs.modal',function(){
            const formulario=this.querySelector('form');
            if (formulario){
               const campos_do_formulario=formulario.querySelectorAll('.form-control');
               campos_do_formulario.forEach(function(campo){
                campo.setAttribute('data-original',campo.value);

               })
            };

          });

          modal.addEventListener('hidden.bs.modal',function(){
          const formulario=this.querySelector('form')

           if (formulario){
            const campos=formulario.querySelectorAll('.form-control')
            campos.forEach(function(campo){
            const valores_fixos= campo.getAttribute('data-original');
            campo.value=valores_fixos;
             

              })
           };
          

        });
  });
});
      
     




