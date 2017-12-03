<?php

namespace Virmak\Controllers;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;
use Virmak\Models\Event;
use Virmak\Models\User;

class EventController extends Controller
{
    private $table;

    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
        $this->table = $this->db->table('events');

    }

    public function create(RequestInterface $request, ResponseInterface $response)
    {
        $event = new Event();

        $event->name = $request->getParam('name');
        $event->start_date = $request->getParam('start_date');
        $event->location = $request->getParam('location');
        $event->description = $request->getParam('description');
        $event->user_id = $request->getParam('user_id');

        try {
            $event->save();
        } catch (\Exception $e) {
            return $this->getFailMessage();
        }

        return $this->getSuccessMessage();
    }

    public function read(RequestInterface $request, ResponseInterface $response)
    {
        $id = $request->getParam('id');
        $event = Event::find($id);
        return json_encode($event);
    }

    public function search(RequestInterface $request, ResponseInterface $response)
    {

        $name = $request->getParam('query');
        return json_encode($this->table->where('name', 'LIKE', $name . '%')->get());
    }

    public function all(RequestInterface $request, ResponseInterface $response)
    {
        return json_encode(Event::all());
    }

    public function update(RequestInterface $request, ResponseInterface $response)
    {
        throw new \Exception('Not implemented');
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
}