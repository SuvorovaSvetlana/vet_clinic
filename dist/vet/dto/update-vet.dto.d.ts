import { CreateVetDto } from './create-vet.dto';
declare const UpdateVetDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateVetDto>>;
export declare class UpdateVetDto extends UpdateVetDto_base {
    full_name: string;
    speciality: string;
    visits: [];
}
export {};
