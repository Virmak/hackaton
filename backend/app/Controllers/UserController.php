<?php

namespace Virmak\Controllers;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Virmak\Models\User;

class UserController extends Controller
{
    private $table;

    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
        $this->table = $this->db->table('users');

    }

    public function create(RequestInterface $request, ResponseInterface $response)
    {
        $user = new User();

        $user->username = $request->getParam('username');
        $user->password = $request->getParam('password');
        $user->first_name = $request->getParam('first_name');
        $user->last_name = $request->getParam('last_name');
        $user->email = $request->getParam('email');
        $user->birth_date = $request->getParam('birth_date');
        $user->address = $request->getParam('address');
        $user->role_id = $request->getParam('role');

        try {
            $user->save();
        } catch (\Exception $e) {
            return $this->getFailMessage();
        }

        return $this->getSuccessMessage();
    }

    public function read(RequestInterface $request, ResponseInterface $response)
    {
        $id = $request->getParam('id');
        $isLogin  = $request->getParam('isLogin');
        if ($isLogin) {
            $username = $request->getParam('username');
            $password = $request->getParam('password');

            $user = $this->table
                ->where('username', '=', $username)
                ->where('password', '=', $password)
                ->get();
        } else {
            $user = User::find($id);
        }

        return $user;
    }

    public function update(RequestInterface $request, ResponseInterface $response)
    {

        $userId = $this->getUserIdByUsername($request->getParam('username'));
        $user = User::find($userId);

        if ($user == null) {
            return $this->getFailMessage();
        }

        $user->username = $request->getParam('username');
        if ($request->getParam('password') != null) {
            $user->password = $request->getParam('password');
        }
        $user->first_name = $request->getParam('first_name');
        $user->last_name = $request->getParam('last_name');
        $user->email = $request->getParam('email');
        $user->birth_date = $request->getParam('birth_date');
        $user->address = $request->getParam('address');
        $user->role_id = $request->getParam('role');

        try {
            $user->save();
        } catch (\Exception $e) {
            return $this->getFailMessage();
        }

        return $this->getSuccessMessage();
    }

    public function delete(RequestInterface $request, ResponseInterface $response)
    {
        throw new \Exception('not implemented');
    }


    private function getSuccessMessage()
    {
        return '{"result": "success"}';
    }

    private function getFailMessage()
    {
        return '{"result": "success"}';
    }

    private function getUserIdByUsername($username)
    {
        $user = $this->table->where('username', '=', $username)->get();
        if (!count($user))
            return null;
        return $user[0]->id;
    }
}