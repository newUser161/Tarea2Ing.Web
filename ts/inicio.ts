import jQuery= require('jquery');
const $:JQueryStatic=jQuery;



(function () {
  'use strict'
  let forms = document.querySelectorAll('.needs-validation')    
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:any) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation();          
          $(window).scrollTop(0);
        
        } else {
          event.preventDefault();          
          let formulario:any = document.getElementById('formulario');
          formulario.style.display = 'none';
          $('#seccionFormulario').prepend('<div id="mensajeExitoso">Hemos recibido sus datos,          pronto nos estaremos comunicando con usted</div>');         
          let mensajeExitoso:any = document.getElementById('mensajeExitoso');
          mensajeExitoso.style.color = 'white';
          mensajeExitoso.style.fontSize = '20px';
          mensajeExitoso.classList.add('container');          
          }
        form.classList.add('was-validated')
      }, false)
    })
})();

function validarCheckBoxesLan(){
  let validacion:boolean = false;
  let checkBoxLanguage:any=document.getElementsByName('check_language');
  for(let i=0;i<checkBoxLanguage.length;i++){
        if(checkBoxLanguage[i].checked==true){
            validacion = true;
        }
  }
  return validacion;
}

function validarCheckBoxesCurso(){
  let validacion:boolean = false;
  let checkBoxCursos:any=document.getElementsByName('check_curso');  
  let textAreaCursos:any=document.getElementById('otro');     
  for(let i=0;i<checkBoxCursos.length;i++){
        if((checkBoxCursos[i].checked==true) || (textAreaCursos.value != "")){
            validacion = true;
        }
  }  
  return validacion;
  
}

function enviarDatos(){    
    let checkBoxLenguages:any=document.getElementsByName('check_language');
    let checkBoxCursos:any=document.getElementsByName('check_curso');
    let textAreaLanguage:any=document.getElementById('otro');
    if (validarCheckBoxesLan()){
      for(let i=0;i<checkBoxLenguages.length;i++){        
        checkBoxLenguages[i].setCustomValidity('');
      }
    } else {
      for(let i=0;i<checkBoxLenguages.length;i++){
        if(checkBoxLenguages[i].checked==false){                        
          checkBoxLenguages[i].setCustomValidity('invalid');          
        }
      }          
    };
    
    if (validarCheckBoxesCurso()){      
      for(let i=0;i<checkBoxCursos.length;i++){        
        checkBoxCursos[i].setCustomValidity('');        
      }
      textAreaLanguage.setCustomValidity('');      
    } else {            
      for(let i=0;i<checkBoxCursos.length;i++){
        if(checkBoxCursos[i].checked==false){                        
          checkBoxCursos[i].setCustomValidity('invalid');          
        }
      }    
      textAreaLanguage.setCustomValidity('invalid');     
    }    
};

let btnSubmit:any = document.getElementById('botonSubmit');
btnSubmit.addEventListener('click',enviarDatos);


function limpiarDatos(){   
  let campoNombre:any = document.getElementById('nombreCompleto');
  campoNombre.value = '';
  let campoRut:any = document.getElementById('rut');
  campoRut.value = '';
  let campoCorreo:any = document.getElementById('correo');
  campoCorreo.value = '';
  let campoNumero:any = document.getElementById('telefono');
  campoNumero.value = '';
  let radioLenguaje:any=document.getElementsByName('radio_experiencia');
  for(let i=0;i<radioLenguaje.length;i++){
    radioLenguaje[1].checked = true;         
  }
  let rangoConocimiento:any = document.getElementsByClassName('custom-range');
  for(let i=0;i<rangoConocimiento.length;i++){
    rangoConocimiento[i].value = 5;
  }  
  let checkBoxLanguage:any=document.getElementsByName('check_language');
  for(let i=0;i<checkBoxLanguage.length;i++){
    checkBoxLanguage[i].checked = false;         
  }
  let checkBoxCursos:any=document.getElementsByName('check_curso');  
  let textAreaLanguage:any=document.getElementById('otro');     
  for(let i=0;i<checkBoxCursos.length;i++){
    checkBoxCursos[i].checked = false;        
  }  
  textAreaLanguage.value = '';
  let campoOpinion:any = document.getElementById('opinionEscuela');
  campoOpinion.value = '';
  
  

      
}
let btnReset:any = document.getElementById('botonReset');
btnReset.addEventListener('click',limpiarDatos);






