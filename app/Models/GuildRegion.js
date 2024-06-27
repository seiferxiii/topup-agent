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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Orm_1 = global[Symbol.for('ioc.use')]("Adonis/Lucid/Orm");
const Guild_1 = __importDefault(require("./Guild"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class GuildRegion extends Orm_1.BaseModel {
}
GuildRegion.table = `${Env_1.default.get('RANGAME1_DB')}.dbo.GuildRegion`;
__decorate([
    (0, Orm_1.column)({ columnName: 'GuNum' }),
    __metadata("design:type", Number)
], GuildRegion.prototype, "guNum", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'RegionID' }),
    __metadata("design:type", Number)
], GuildRegion.prototype, "regionId", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'RegionTax' }),
    __metadata("design:type", Number)
], GuildRegion.prototype, "regionTax", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => Guild_1.default, {
        foreignKey: 'GuNum',
        localKey: 'GuNum',
    }),
    __metadata("design:type", Object)
], GuildRegion.prototype, "guild", void 0);
exports.default = GuildRegion;
//# sourceMappingURL=GuildRegion.js.map