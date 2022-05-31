$(document).ready(function() {
    $('#btn1').click(function() {
        $('#M1').modal({backdrop: 'static', keyboard: false});
    });

    $('#btn2').click(function() {
        let Nom = $('#Artista').val();
        let Fec = $('#Fecha').val();
        let Nac = $('#Nacionalidad').val();
        let Des = $('#Descripcion').val();
        let Alb = $('#Album').val();
        let Pub = $('#Publicacion').val();
        let Can = $('#Cancion').val();
        let Dur = $('#Duracion').val();
        swal({
            title: "¿Está seguro de guardar la información?",
            text: "19100158",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                $.post('./Php/Registro.php',{Nombre:Nom,FechaNac:Fec,Nacionalidad:Nac
                    ,Descripcion:Des,Album:Alb,Publicacion:Pub,Cancion:Can,Duracion:Dur});
                swal("La información se salvo", {
                icon: "success"
                });
            } else {
                swal("Se cancelo la acción");
            }
        });
    });

    $('#btn3').click(function() {
        $('#M2').modal({backdrop: 'static', keyboard: false});
    });

    $('#btn4').click(function() {
        $('#M3').modal({backdrop: 'static', keyboard: false});
    });

//MODALES
    $('#btn5').click(function() {
        let ID = $('#idMusic').val();
        $.post('./Php/Consulta.php',{id:ID},function(data){
            refrescar(data);
        },'json');
        $('#M1').modal('hide');
    });

    $('#btn6').click(function() {
        let ID = $('#idMusic2').val();
        let Nom = $('#Artista').val();
        let Fec = $('#Fecha').val();
        let Nac = $('#Nacionalidad').val();
        let Des = $('#Descripcion').val();
        let Alb = $('#Album').val();
        let Pub = $('#Publicacion').val();
        let Can = $('#Cancion').val();
        let Dur = $('#Duracion').val();
        swal({
            title: "¿Está seguro de actualizar la información?",
            text: "19100158",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                $.post('./Php/Actualiza.php',{Nombre:Nom,FechaNac:Fec,Nacionalidad:Nac
                    ,Descripcion:Des,Album:Alb,Publicacion:Pub,Cancion:Can,Duracion:Dur,id:ID});
                swal("La información se actualizo", {
                icon: "success"
                });
            } else {
                swal("Se cancelo la acción");
            }
        });
        $('#M2').modal('hide');
    });

    $('#btn7').click(function() {
        let ID = $('#idDes').val();
        $.post('./Php/Elimina.php',{id:ID});
        swal("El registro se elimino", { icon: "success"});
        $('#M3').modal('hide');
    });

//FUNCION PARA MOSTRAR LOS DATOS
    function refrescar(objeto) {
        $('#idDes').val(objeto.ID);
        $('#Artista').val(objeto.NOMBRE);
        $('#Fecha').val(objeto.FECHA_NACIMIENTO);
        $('#Nacionalidad').val(objeto.NACIONALIDAD);
        $('#Descripcion').val(objeto.DESCRIPCION);
        $('#Album').val(objeto.ALBUM);
        $('#Publicacion').val(objeto.FECHA_PUBLICACION);
        $('#Cancion').val(objeto.CANCION);
        $('#Duracion').val(objeto.DURACION);
    }
});