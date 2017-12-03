<?php

namespace Virmak\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    protected $with = array('comments');

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }


    public function comments()
    {
    	return $this->hasMany(Comment::class);
    }

}