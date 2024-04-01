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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VetRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const Repository_1 = require("typeorm/repository/Repository");
const vet_entity_1 = require("./entities/vet.entity");
let VetRepository = class VetRepository {
    constructor(vetRepo) {
        this.vetRepo = vetRepo;
    }
    async save(vet) {
        return await this.vetRepo.save(vet);
    }
    async find() {
        return await this.vetRepo.find({ relations: { visits: true } });
    }
    async findOne(id) {
        return await this.vetRepo.findOne({
            relations: { visits: true },
            where: { id }
        });
    }
    async delete(id) {
        return await this.vetRepo.delete(id);
    }
};
exports.VetRepository = VetRepository;
exports.VetRepository = VetRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(vet_entity_1.Vet)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], VetRepository);
//# sourceMappingURL=vet.repository.js.map