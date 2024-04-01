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
exports.OwnerService = void 0;
const common_1 = require("@nestjs/common");
const owner_entity_1 = require("./entities/owner.entity");
const owner_repository_1 = require("./owner.repository");
let OwnerService = class OwnerService {
    constructor(ownerRepository) {
        this.ownerRepository = ownerRepository;
    }
    async createOwner(createOwnerDto) {
        const owner = new owner_entity_1.Owner();
        owner.full_name = createOwnerDto.full_name;
        owner.contacts = createOwnerDto.contacts;
        owner.animals = createOwnerDto.animals;
        return await this.ownerRepository.save(owner);
    }
    async findAll() {
        return await this.ownerRepository.find();
    }
    async findOne(id) {
        return await this.ownerRepository.findOne(id);
    }
    async update(id, updateOwnerDto) {
        const owner = await this.ownerRepository.findOne(id);
        const { full_name, contacts } = updateOwnerDto;
        if (full_name) {
            owner.full_name = full_name;
        }
        if (contacts) {
            owner.contacts = contacts;
        }
        return await this.ownerRepository.save(owner);
    }
    async remove(id) {
        await this.ownerRepository.delete(id);
    }
};
exports.OwnerService = OwnerService;
exports.OwnerService = OwnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [owner_repository_1.OwnerRepository])
], OwnerService);
//# sourceMappingURL=owner.service.js.map