<?php

namespace Virmak\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{

    protected $with = ['user'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

}