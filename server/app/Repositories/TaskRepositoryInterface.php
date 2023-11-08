<?php

namespace App\Repositories;

use App\Models\Task;

interface TaskRepositoryInterface
{
    public function all();

    public function findById($id);

    public function create();

    public function updateById($id);

    public function delete(Task $task);
}
