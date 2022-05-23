$(document).ready(function() {
    $('#btn1').click(function() {
        $('.modal-body p').text('Se disparo un modal con bootstrap.');
    });

    $('#btn2').click(function() {
        $('.modal-body p').text('Se disparo un modal con Js-Jq.');
        $('#M1').modal();
    });

    $('#btn3').click(function() {
        $('#Alerta').show();
    });

    $('#btn4').click(function() {
        $('#Alerta').hide();
    });

    $('#btn5').click(function() {
        $('#M1').modal('hide')
        swal({
            title: "¿Está seguro de guardar la información?",
            text: "19100158",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                swal("La información se salvo", {
                icon: "success",
                });
            } else {
                swal("Se cancelo la acción");
            }
        });
    });

    $('#btn6').click(function() {
        swal("Se disparo un modal con SweetAlert", "19100158", "success");
    });

    $('#btn7').click(function() {
        var solicitud = new XMLHttpRequest();          //Crear objeto XMLHttpRequest
            
            solicitud.onreadystatechange = function() {   // En esta propiedad declaramos la funcion a ejecutar
                                                        // cuando cambie el status del objeto XMLHttpRequest
            
                if (solicitud.readyState == 4 && solicitud.status == 200) {                 // La respueta esta lista
                    document.getElementById("header").innerHTML = solicitud.responseText;  // La propiedad responseText tiene la respuesta en texto
            }};
            
            solicitud.open("GET", "Formulario.txt", true);
            solicitud.send();
    });

    $('#btn8').click(function() {
        $.post('getregistro.php', {}, function(data){
            console.log(data);
            $('#Artista').val(data.Artista);
            $('#Fecha').val(data.Fecha);
            $('#Nacionalidad').val(data.Nacionalidad);
            $('#Descripcion').val(data.Descripcion);
            $('#Album').val(data.Album);
            $('#Publicacion').val(data.Publicacion);
            $('#Cancion').val(data.Cancion);
            $('#Duracion').val(data.Duracion);
        },'json');
    });

    $('#btn9').click(function() {
        new Promise(function(resolve,reject) {
            var solicitud = new XMLHttpRequest();
            solicitud.onreadystatechange = function() {
                if(solicitud.readyState == 4 && solicitud.status == 200) {
                    resolve(solicitud.responseText);
            }};
            solicitud.open("GET", "Formulario.txt", true);
            solicitud.send();
        }).then(value => document.getElementById("header").innerHTML = value );
    });

    $('#btn10').click(function() {
        fetch('getRegistro.php')
            .then(respuesta => respuesta.json())
                .then(function(dato) {refrescar(dato)});
    });

    function refrescar(objeto) {
        $('#Artista').val(objeto.Artista);
        $('#Fecha').val(objeto.Fecha);
        $('#Nacionalidad').val(objeto.Nacionalidad);
        $('#Descripcion').val(objeto.Descripcion);
        $('#Album').val(objeto.Album);
        $('#Publicacion').val(objeto.Publicacion);
        $('#Cancion').val(objeto.Cancion);
        $('#Duracion').val(objeto.Duracion);
    }
});