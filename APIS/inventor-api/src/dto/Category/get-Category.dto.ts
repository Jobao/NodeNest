import { IsNotEmpty} from "class-validator";

export class GetCategoryDto {

    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    desc: string;
}