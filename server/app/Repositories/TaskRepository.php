<?php

namespace App\Repositories;


use App\Models\Task;


class TaskRepository implements TaskRepositoryInterface
{
    public function all()
    {
        $search = request()->search;
        if ($search) {
            return Task::where('title', 'LIKE', '%' . $search . '%')
                ->orWhere('description', 'LIKE', '%' . $search . '%')
                ->orWhere('completionStatus', 'LIKE', '%' . $search . '%')
                ->get();
        }
        return Task::all();
    }
    public function findById($id)
    {
        return Task::find($id);
    }
    public function create()
    {
        return Task::create(request()->all());
    }
    public function updateById($id)
    {
        $task = Task::find($id);
        return $task->update(request()->all());
    }
    public function delete(Task $task)
    {
        $task->delete();
    }
}
