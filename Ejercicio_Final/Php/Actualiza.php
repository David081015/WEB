<?php
//Variables
$id=$_POST['id'];
$Nombre=$_POST['Nombre'];
$FechaNac=$_POST['FechaNac'];
$Nacionalidad=$_POST['Nacionalidad'];
$Descripcion=$_POST['Descripcion'];
$Album=$_POST['Album'];
$Publicacion=$_POST['Publicacion'];
$Cancion=$_POST['Cancion'];
$Duracion=$_POST['Duracion'];
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
    $consultaSql = "update  musica set NOMBRE = '$Nombre', NACIONALIDAD = '$Nacionalidad',
    FECHA_NACIMIENTO = '$FechaNac', DESCRIPCION = '$Descripcion', ALBUM = '$Album',
    FECHA_PUBLICACION = '$Publicacion', CANCION = '$Cancion', DURACION = '$Duracion' where id = $id";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $consulta -> closeCursor();
} catch(PDOException $e) {
    echo "Error de consulta";
    echo $e->getMessage();
}
?>