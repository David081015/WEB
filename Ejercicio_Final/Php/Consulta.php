<?php
include "Conexion.php";
try {
    $query = $con->prepare("Select * from musica");
    $query->execute();
    while ($row=$query->fetch()) {
        echo $row['ID'].'-'.
        $row['NOMBRE'].'-'.
        $row['NACIONALIDAD'].'-'.
        $row['FECHA_NACIMIENTO'].'-'.
        $row['DESCRIPCION'].'-'.
        $row['ALBUM'].'-'.
        $row['FECHA_PUBLICACION'].'-'.
        $row['CANCION'].'-'.
        $row['DURACION'].'-'.
    }
    $query->closeCursor();
} cath(PDOException $e) {
    echo "Error de consulta";
    echo $e->getMessage();
}
?>