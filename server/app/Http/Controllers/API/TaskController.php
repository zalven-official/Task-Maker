<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskRequest;
use App\Models\Task;
use App\Http\Resources\TaskResource;
use App\Repositories\TaskRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class TaskController extends Controller
{
    private $taskRepository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->taskRepository = $taskRepository;
    }

    public function index()
    {
        $task = $this->taskRepository->all();
        return response()->json([
            'data' => TaskResource::collection($task),
            'message' => 'Tasks fetched.'
        ]);
    }

    public function store(TaskRequest $task)
    {
        $task = $this->taskRepository->create();
        return response()->json(['Task created successfully.', new TaskResource($task)]);
    }


    public function show($id)
    {
        $task = $this->taskRepository->findById($id);
        if (is_null($task)) {
            return response()->json('Data not found', 404);
        }
        return response()->json(['data' => new TaskResource($task)]);
    }

    public function update(TaskRequest $request, Task $task)
    {
        $task = $this->taskRepository->updateById($request->id);
        return response()->json(['Task updated successfully.', new TaskResource($task)]);
    }


    public function destroy(Task $task)
    {
        $this->taskRepository->delete($task);
        return response()->json('Task deleted successfully');
    }
}
