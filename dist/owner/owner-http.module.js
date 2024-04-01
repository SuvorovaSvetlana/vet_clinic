"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerHttpModule = void 0;
const common_1 = require("@nestjs/common");
const owner_controller_1 = require("./owner.controller");
const owner_module_1 = require("./owner.module");
const owner_service_1 = require("./owner.service");
let OwnerHttpModule = class OwnerHttpModule {
};
exports.OwnerHttpModule = OwnerHttpModule;
exports.OwnerHttpModule = OwnerHttpModule = __decorate([
    (0, common_1.Module)({
        imports: [owner_module_1.OwnerModule],
        providers: [owner_service_1.OwnerService],
        controllers: [owner_controller_1.OwnerController]
    })
], OwnerHttpModule);
//# sourceMappingURL=owner-http.module.js.map