import { IsNotEmpty, IsNumber} from "class-validator";
import { ProductDto } from "./product.dto";
import { CategoryDto } from "../Category/category.dto";
import { GetCategoryDto } from "../Category/get-Category.dto";

export class CreateProductDto extends ProductDto {

    @IsNotEmpty()
    id_category: GetCategoryDto;

}