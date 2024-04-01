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
exports.VisitService = void 0;
const common_1 = require("@nestjs/common");
const visit_entity_1 = require("./entities/visit.entity");
const visit_repository_1 = require("./visit.repository");
let VisitService = class VisitService {
    constructor(visitRepository) {
        this.visitRepository = visitRepository;
    }
    async create(createVisitDto) {
        const visit = new visit_entity_1.Visit();
        visit.date = new Date();
        visit.vetName = createVisitDto.vetName;
        visit.vet = createVisitDto.vet;
        visit.animalName = createVisitDto.animalName;
        visit.animal = createVisitDto.animal;
        visit.visitPurpose = createVisitDto.visitPurpose;
        return await this.visitRepository.save(visit);
    }
    async findAll() {
        return await this.visitRepository.find();
    }
    async findOne(id) {
        return await this.visitRepository.findOne(id);
    }
    async update(id, updateVisitDto) {
        const visit = await this.visitRepository.findOne(id);
        const { date, vetName, vet, animalName, animal, visitPurpose } = updateVisitDto;
        if (date) {
            visit.date = date;
        }
        if (vet) {
            visit.vet = vet;
        }
        if (vetName) {
            visit.vetName = vetName;
        }
        if (animal) {
            visit.animal = animal;
        }
        if (animalName) {
            visit.animalName = animalName;
        }
        if (visitPurpose) {
            visit.visitPurpose = visitPurpose;
        }
        return await this.visitRepository.save(visit);
    }
    async remove(id) {
        await this.visitRepository.delete(id);
    }
};
exports.VisitService = VisitService;
exports.VisitService = VisitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [visit_repository_1.VisitRepository])
], VisitService);
//# sourceMappingURL=visit.service.js.map