import { IsNotEmpty } from "class-validator";
import { GetCategoryDto } from "../Category/get-Category.dto";
import { ProductDto } from "./product.dto";

export class CreateProductDto extends ProductDto {

    @IsNotEmpty()
    id_category: GetCategoryDto;

}