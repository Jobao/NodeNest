import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateClientDto {

    @IsNotEmpty()
    name: string;

    address?: string;

    id_fiscal: string;

    @IsEmail()
    email: string;
}
