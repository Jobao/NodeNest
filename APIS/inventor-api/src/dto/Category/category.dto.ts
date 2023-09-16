import { IsNotEmpty} from "class-validator";
/**
 * Se usa para modificar y crear categorias
 */
export class CategoryDto {

    @IsNotEmpty()
    desc: string;
}
