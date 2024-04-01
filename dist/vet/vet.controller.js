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
exports.VetController = void 0;
const common_1 = require("@nestjs/common");
const vet_service_1 = require("./vet.service");
const create_vet_dto_1 = require("./dto/create-vet.dto");
const update_vet_dto_1 = require("./dto/update-vet.dto");
let VetController = class VetController {
    constructor(vetService) {
        this.vetService = vetService;
    }
    async create(createVetDto) {
        return await this.vetService.create(createVetDto);
    }
    async findAll() {
        return await this.vetService.findAll();
    }
    async findOne(id) {
        return await this.vetService.findOne(+id);
    }
    async update(id, updateVetDto) {
        return await this.vetService.update(+id, updateVetDto);
    }
    async remove(id) {
        return await this.vetService.remove(+id);
    }
};
exports.VetController = VetController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vet_dto_1.CreateVetDto]),
    __metadata("design:returntype", Promise)
], VetController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VetController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VetController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vet_dto_1.UpdateVetDto]),
    __metadata("design:returntype", Promise)
], VetController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VetController.prototype, "remove", null);
exports.VetController = VetController = __decorate([
    (0, common_1.Controller)('vets'),
    __metadata("design:paramtypes", [vet_service_1.VetService])
], VetController);
//# sourceMappingURL=vet.controller.js.map