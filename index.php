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

}

$request=obterClientes();
new menu($request);

?>