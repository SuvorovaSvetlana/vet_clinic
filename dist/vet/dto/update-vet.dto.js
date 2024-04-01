"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVetDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_vet_dto_1 = require("./create-vet.dto");
class UpdateVetDto extends (0, mapped_types_1.PartialType)(create_vet_dto_1.CreateVetDto) {
}
exports.UpdateVetDto = UpdateVetDto;
//# sourceMappingURL=update-vet.dto.js.map