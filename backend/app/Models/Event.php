<?php

namespace Virmak\Models;

use Illuminate\Database\Eloquent\Model;

class Event extends Model
{

    public function subEvents()
    {
        return $this->hasMany(SubEvent::class);
    }


}