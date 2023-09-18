import { IsNotEmpty, IsNumber } from "class-validator";

export class ProductDto{
    @IsNotEmpty()
    desc: string;

    @IsNumber()
    cantidad: number
}