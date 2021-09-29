define(["require", "exports", "jquery"], function (require, exports, jQuery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jQuery;
    (function () {
        'use strict';
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    $(window).scrollTop(0);
                }
                else {
                    event.preventDefault();
                    var formulario = document.getElementById('formulario');
                    formulario.style.display = 'none';
                    $('#seccionFormulario').prepend('<div id="mensajeExitoso">Hemos recibido sus datos,          pronto nos estaremos comunicando con usted</div>');
                    var mensajeExitoso = document.getElementById('mensajeExitoso');
                    mensajeExitoso.style.color = 'white';
                    mensajeExitoso.style.fontSize = '20px';
                    mensajeExitoso.classList.add('container');
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    function validarCheckBoxesLan() {
        var validacion = false;
        var checkBoxLanguage = document.getElementsByName('check_language');
        for (var i = 0; i < checkBoxLanguage.length; i++) {
            if (checkBoxLanguage[i].checked == true) {
                validacion = true;
            }
        }
        return validacion;
    }
    function validarCheckBoxesCurso() {
        var validacion = false;
        var checkBoxCursos = document.getElementsByName('check_curso');
        var textAreaCursos = document.getElementById('otro');
        for (var i = 0; i < checkBoxCursos.length; i++) {
            if ((checkBoxCursos[i].checked == true) || (textAreaCursos.value != "")) {
                validacion = true;
            }
        }
        return validacion;
    }
    function enviarDatos() {
        var checkBoxLenguages = document.getElementsByName('check_language');
        var checkBoxCursos = document.getElementsByName('check_curso');
        var textAreaLanguage = document.getElementById('otro');
        if (validarCheckBoxesLan()) {
            for (var i = 0; i < checkBoxLenguages.length; i++) {
                checkBoxLenguages[i].setCustomValidity('');
            }
        }
        else {
            for (var i = 0; i < checkBoxLenguages.length; i++) {
                if (checkBoxLenguages[i].checked == false) {
                    checkBoxLenguages[i].setCustomValidity('invalid');
                }
            }
        }
        ;
        if (validarCheckBoxesCurso()) {
            for (var i = 0; i < checkBoxCursos.length; i++) {
                checkBoxCursos[i].setCustomValidity('');
            }
            textAreaLanguage.setCustomValidity('');
        }
        else {
            for (var i = 0; i < checkBoxCursos.length; i++) {
                if (checkBoxCursos[i].checked == false) {
                    checkBoxCursos[i].setCustomValidity('invalid');
                }
            }
            textAreaLanguage.setCustomValidity('invalid');
        }
    }
    ;
    var btnSubmit = document.getElementById('botonSubmit');
    btnSubmit.addEventListener('click', enviarDatos);
    function limpiarDatos() {
        var campoNombre = document.getElementById('nombreCompleto');
        campoNombre.value = '';
        var campoRut = document.getElementById('rut');
        campoRut.value = '';
        var campoCorreo = document.getElementById('correo');
        campoCorreo.value = '';
        var campoNumero = document.getElementById('telefono');
        campoNumero.value = '';
        var radioLenguaje = document.getElementsByName('radio_experiencia');
        for (var i = 0; i < radioLenguaje.length; i++) {
            radioLenguaje[1].checked = true;
        }
        var rangoConocimiento = document.getElementsByClassName('custom-range');
        for (var i = 0; i < rangoConocimiento.length; i++) {
            rangoConocimiento[i].value = 5;
        }
        var checkBoxLanguage = document.getElementsByName('check_language');
        for (var i = 0; i < checkBoxLanguage.length; i++) {
            checkBoxLanguage[i].checked = false;
        }
        var checkBoxCursos = document.getElementsByName('check_curso');
        var textAreaLanguage = document.getElementById('otro');
        for (var i = 0; i < checkBoxCursos.length; i++) {
            checkBoxCursos[i].checked = false;
        }
        textAreaLanguage.value = '';
        var campoOpinion = document.getElementById('opinionEscuela');
        campoOpinion.value = '';
    }
    var btnReset = document.getElementById('botonReset');
    btnReset.addEventListener('click', limpiarDatos);
});
