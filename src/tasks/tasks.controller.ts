import { Controller, Get, Post, Put, Delete, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) { }
    @Get()
    getAllTasks(){
        return this.tasksService.getAllTasks();
    };

    @Post()
    createTask( @Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task.title, task.description);
    };

    @Delete(':id')
    deleteTask(@Param('id') id: string) {
        return this.tasksService.deleteTask(id);
    };

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
        return this.tasksService.updateTask(id, updatedFields);
    }
}
