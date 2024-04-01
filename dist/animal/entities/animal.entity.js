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
exports.Animal = exports.AnimalType = void 0;
const owner_entity_1 = require("../../owner/entities/owner.entity");
const visit_entity_1 = require("../../visit/entities/visit.entity");
const typeorm_1 = require("typeorm");
var AnimalType;
(function (AnimalType) {
    AnimalType["dog"] = "dog";
    AnimalType["cat"] = "cat";
    AnimalType["mouse"] = "mouse";
    AnimalType["hamster"] = "hamster";
    AnimalType["rodent"] = "rodent";
    AnimalType["fish"] = "fish";
    AnimalType["bird"] = "bird";
    AnimalType["reptile"] = "reptile";
})(AnimalType || (exports.AnimalType = AnimalType = {}));
let Animal = class Animal {
};
exports.Animal = Animal;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Animal.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: AnimalType
    }),
    __metadata("design:type", String)
], Animal.prototype, "animal_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Animal.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Animal.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Animal.prototype, "ownerId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => owner_entity_1.Owner, owner => owner.animals, {
        orphanedRowAction: "delete",
        eager: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", owner_entity_1.Owner)
], Animal.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => visit_entity_1.Visit, visit => visit.animal, {
        cascade: true
    }),
    __metadata("design:type", Array)
], Animal.prototype, "visits", void 0);
exports.Animal = Animal = __decorate([
    (0, typeorm_1.Entity)()
], Animal);
//# sourceMappingURL=animal.entity.js.map