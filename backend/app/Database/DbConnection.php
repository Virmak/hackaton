<?php

namespace App\Database;

class DbConnection
{
    private static $instance;
    private static $dbConnection;
    private function __construct()
    {
        self::$dbConnection = new \PDO(
            'mysql:host=localhost;dbname=hackaton;charset=UTF8',
            'root',
            '123456');

        self::$dbConnection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        self::$dbConnection->setAttribute(\PDO::ATTR_EMULATE_PREPARES, false);

    }

    public static function getInstance(): DbConnection
    {
        if (self::$instance == null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function createUser($firstName, $lastName, $email, $username, $password, $birthDate, $address, $roleId)
    {
        $stmt = self::$dbConnection->prepare('INSERT INTO users 
        (id, username, password, first_name, last_name, email, birth_date, address, score, role_id) 
        VALUES (NULL, :fname, :lname, :email, :bdate, :address, 0, :roleid)');

        $stmt->bindParam(':username', $firstName);
        $stmt->bindParam(':password', $lastName);
        $stmt->bindParam(':fname', $firstName);
        $stmt->bindParam(':lname', $lastName);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':bdate', $birthDate);
        $stmt->bindParam(':address', $address);
        $stmt->bindParam(':roleid', $roleId);

        $stmt->execute();
    }

    public function getUserById($id)
    {
        $stmt = self::$dbConnection->prepare('SELECT * FROM users WHERE id = :id');
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }

    public function getUserByUsernamePass($username, $password)
    {
        $stmt = self::$dbConnection->prepare('SELECT * FROM users WHERE username = :username AND password = :password');
        $stmt->bindParam(':username', $username);
        $stmt->bindParam(':password', $password);
        $stmt->execute();
        return $stmt->fetch(\PDO::FETCH_ASSOC);
    }



}