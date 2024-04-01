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
exports.AnimalService = void 0;
const common_1 = require("@nestjs/common");
const animal_entity_1 = require("./entities/animal.entity");
const animal_repositopy_1 = require("./animal.repositopy");
let AnimalService = class AnimalService {
    constructor(animalRepository) {
        this.animalRepository = animalRepository;
    }
    async create(createAnimalDto) {
        const animal = new animal_entity_1.Animal();
        animal.animal_type = createAnimalDto.animal_type;
        animal.name = createAnimalDto.name;
        animal.age = createAnimalDto.age;
        animal.owner = createAnimalDto.owner;
        return await this.animalRepository.save(animal);
    }
    async findAll() {
        return await this.animalRepository.find();
    }
    async findOne(id) {
        return await this.animalRepository.findOne(id);
    }
    async update(id, updateAnimalDto) {
        const animal = await this.animalRepository.findOne(id);
        const { animal_type, name, age } = updateAnimalDto;
        if (animal_type) {
            animal.animal_type = animal_type;
        }
        if (name) {
            animal.name = name;
        }
        if (age) {
            animal.age = age;
        }
        return await this.animalRepository.save(animal);
    }
    async remove(id) {
        await this.animalRepository.delete(id);
    }
};
exports.AnimalService = AnimalService;
exports.AnimalService = AnimalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [animal_repositopy_1.AnimalRepository])
], AnimalService);
//# sourceMappingURL=animal.service.js.map