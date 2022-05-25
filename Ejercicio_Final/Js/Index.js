$(document).ready(function() {
    function refrescar(objeto) {
        $('#Artista').val(objeto.NOMBRE);
        $('#Fecha').val(objeto.FECHA_NACIMIENTO);
        $('#Nacionalidad').val(objeto.NACIONALIDAD);
        $('#Descripcion').val(objeto.DESCRIPCION);
        $('#Album').val(objeto.ALBUM);
        $('#Publicacion').val(objeto.FECHA_PUBLICACION);
        $('#Cancion').val(objeto.CANCION);
        $('#Duracion').val(objeto.DURACION);
    }

    //$('#M1').modal();
    //    $('#M1').on('hidden.bs.modal', function (e) {
    //        let varid = $('#idMusic').val();
      //      console.log(varid);
        //        $.post('./Php/Conexion.php',{par1:varid},function(data){
          //          refrescar(data);
         //   //    },'json');
        //  })

    $('#btn1').click(function() {
        let varid = prompt('Id a consultar');
        $.post('Php/Conexion.php',{par1:varid},function(data){
            refrescar(data);
        },'json');
    });
});