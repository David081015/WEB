$(document).ready(function() {
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

    $('#btn1').click(function() {
        $('#M1').modal();

        // $('#M1').on('hidden.bs.modal', function (e) {
        //     let varid = $('#idMusica').val();
        //    console.log(varid);
        //     $.post('./Php/Conexion.php',{par1:varid},function(data){
        //             refrescar(data);
        //         },'json');
        //   });
    });
});