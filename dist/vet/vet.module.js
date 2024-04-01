"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VetModule = void 0;
const common_1 = require("@nestjs/common");
const vet_service_1 = require("./vet.service");
const vet_controller_1 = require("./vet.controller");
const typeorm_1 = require("@nestjs/typeorm");
const vet_entity_1 = require("./entities/vet.entity");
const vet_repository_1 = require("./vet.repository");
let VetModule = class VetModule {
};
exports.VetModule = VetModule;
exports.VetModule = VetModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([vet_entity_1.Vet])],
        controllers: [vet_controller_1.VetController],
        providers: [vet_service_1.VetService, vet_repository_1.VetRepository]
    })
], VetModule);
//# sourceMappingURL=vet.module.js.map