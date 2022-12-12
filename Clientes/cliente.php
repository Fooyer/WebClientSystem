<?php

# Criação da classe para o objeto cliente, todas as operações com clientes devem herdar dessa classe

class cliente{

    private $id = NULL;
    private $nome = NULL;
    private $email = NULL;

    function __construct($id,$nome,$email) {

        $this->id = $id;
        $this->nome = $nome;
        $this->email = $email;

    }

    public function setNome($nome) {

        $this->nome = $nome;

        return TRUE;

    }

    public function getNome() {

        return $this->nome;

    }
    
    public function setEmail($email) {

        $this->email = $email;

        return TRUE;

    }

    public function getEmail() {

        return $this->email;

    }
}

?>