<?php
$registro['Artista'] = 'José Madero';
$registro['Fecha'] = '01/09/1980';
$registro['Nacionalidad'] = 'Mexicana';
$registro['Descripcion'] = 'Cantate, compositor, escritor';
$registro['Album'] = 'Psalmos';
$registro['Publicacion'] = '06/09/2019';
$registro['Cancion'] = 'SSDD';
$registro['Duracion'] = '3:32';

$registroJson = json_encode($registro);
echo $registroJson;
?>