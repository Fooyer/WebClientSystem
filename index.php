<?php

include "clientes/data_operations/functions.php";

class menu {

    public $dados = NULL;

    function __construct($request){

        $this->dados = $request;

        $sc = $this->loadPage();
        if ($sc==FALSE) {exit("<script> alert('Houve um erro ao carregar a página.') </script>");}

    }

    public function loadPage(){
        
        $dados=$this->dados;

        include "index.html";
        
        return TRUE;
    
    }

};

$response = obterClientes();

foreach ($response as $propriedade => $valor) {
       
    foreach ($valor as $propriedade2 => $valor2) {
       
        echo "$propriedade2 : $valor2\n";

    };

};

?>