import { IsNotEmpty } from "class-validator";
import { ProductDto } from "./product.dto";

export class GetProductDto extends ProductDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    categoryDesc: string;

}