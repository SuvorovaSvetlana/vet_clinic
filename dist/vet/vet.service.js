"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VetService = void 0;
const common_1 = require("@nestjs/common");
const vet_entity_1 = require("./entities/vet.entity");
const vet_repository_1 = require("./vet.repository");
let VetService = class VetService {
    constructor(vetRepository) {
        this.vetRepository = vetRepository;
    }
    async create(createVetDto) {
        const vet = new vet_entity_1.Vet();
        vet.full_name = createVetDto.full_name;
        vet.speciality = createVetDto.speciality;
        return await this.vetRepository.save(vet);
    }
    async findAll() {
        return await this.vetRepository.find();
    }
    async findOne(id) {
        return await this.vetRepository.findOne(id);
    }
    async update(id, updateVetDto) {
        const vet = await this.vetRepository.findOne(id);
        const { full_name, speciality } = updateVetDto;
        if (full_name) {
            vet.full_name = full_name;
        }
        if (speciality) {
            vet.speciality = speciality;
        }
        return await this.vetRepository.save(vet);
    }
    async remove(id) {
        await this.vetRepository.delete(id);
    }
};
exports.VetService = VetService;
exports.VetService = VetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [vet_repository_1.VetRepository])
], VetService);
//# sourceMappingURL=vet.service.js.map