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
exports.AnimalRepository = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const animal_entity_1 = require("./entities/animal.entity");
let AnimalRepository = class AnimalRepository {
    constructor(animalRepo) {
        this.animalRepo = animalRepo;
    }
    async save(animal) {
        return await this.animalRepo.save(animal);
    }
    async find() {
        return await this.animalRepo.find();
    }
    async findOne(id) {
        return await this.animalRepo.findOne({ relations: { owner: true, }, where: { id } });
    }
    async delete(id) {
        return await this.animalRepo.delete(id);
    }
};
exports.AnimalRepository = AnimalRepository;
exports.AnimalRepository = AnimalRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(animal_entity_1.Animal)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AnimalRepository);
//# sourceMappingURL=animal.repositopy.js.map