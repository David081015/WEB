<?php
//Variable
$id=$_POST['id'];
//Conexion
$hostname = 'localhost';
$database = 'web_19100158';
$username = 'root';
$password = 'Castillo105.dct';

try {
    $con = new PDO("mysql:host=$hostname;
    dbname=$database",$username,$password);
} catch(PDOException $e) {
    echo "Error de conexion";
    echo $e->getMessage();
    exit();
}

try{
    $consultaSql = 'Select ID, NOMBRE, NACIONALIDAD, FECHA_NACIMIENTO, 
        DESCRIPCION, ALBUM, FECHA_PUBLICACION, CANCION, DURACION from musica where id='.$id;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta -> closeCursor();
} catch(PDOException $e) {
    echo "Error de consulta";
    echo $e->getMessage();
}

echo json_encode($resultado);
?>