import { IsNotEmpty, IsNumber, isNotEmpty} from "class-validator";

export class ProductDto{
    @IsNotEmpty()
    desc: string;

    @IsNumber()
    cantidad: number
}