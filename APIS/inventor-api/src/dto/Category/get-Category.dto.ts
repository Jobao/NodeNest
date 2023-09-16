import { IsNotEmpty} from "class-validator";
import { CategoryDto } from "./category.dto";

export class GetCategoryDto extends CategoryDto {

    @IsNotEmpty()
    id: number;
}