<?php 

	/**
	 * CONEXÃO COM O MYSQL
	 */
	class Sql
	{

		/* VARIAVEL */		
		public $conn;


		/* CONECTAR */
		public function __construct()
		{
			return $this->conn = mysqli_connect("127.0.0.1", "root", "", "hcode_shop");
		}


		/* RETORNAR UM VALOR */		
		public function query($string_query)
		{
			return mysqli_query($this->conn, $string_query);
		} 


		/* DESCONECTAR */
		public function __destruct()
		{
			mysqli_close($this->conn);
		}

		
	}

 ?>
