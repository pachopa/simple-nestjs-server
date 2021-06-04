// import { IsString, IsNumber, IsOptional } from "class-validator";
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from "./create-movie.dto";

export class UpdateMovieDto extends PartialType(CreateMovieDto) { }

// {
//     @IsOptional()
//     @IsString()
//     readonly title?: string;

//     @IsOptional()
//     @IsNumber()
//     readonly year?: number;


//     @IsOptional()
//     @IsString({ each: true })
//     readonly genres?: string[];
// }







