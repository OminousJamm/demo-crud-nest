import { Injectable } from '@nestjs/common';
import { Task, taskStatus } from './task.entity';
import { v4 } from 'uuid';
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    private tasks: Task[] = [            
    {
        id: v4(),
        title: "Task",
        description: "Task Description",
        status: taskStatus.PENDING,
    }
    ];

    createTask(title: string, description: string): Task {
        const task = {
            id: v4(),
            title: title,
            description: description,
            status: taskStatus.PENDING,
        };
        this.tasks.push(task);
        return task;
    }
    getAllTasks(): Task[] { 
        return this.tasks;
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id);
    }
    updateTask(id: string, updateTask: UpdateTaskDto): Task {
        const task = this.getTaskById(id);
        const newTask = Object.assign(task, updateTask);
        this.tasks = this.tasks.map(task => task.id === id ? newTask: task);
        return newTask;
    }
    deleteTask(id: string){
        this.tasks =  this.tasks.filter(task => task.id !== id);
    }
}
