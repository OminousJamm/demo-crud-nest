import { taskStatus } from "../task.entity"
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn} from 'class-validator';
export class CreateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    title: string
    description: string
}

export class UpdateTaskDto{
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([taskStatus.DONE, taskStatus.PENDING, taskStatus.IN_PROGRESS])
    status?: taskStatus
}