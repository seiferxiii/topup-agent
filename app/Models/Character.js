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
const User_1 = __importDefault(require("./User"));
const luxon_1 = require("luxon");
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class Character extends Orm_1.BaseModel {
}
Character.table = `${Env_1.default.get('RANGAME1_DB')}.dbo.ChaInfo`;
__decorate([
    (0, Orm_1.column)({ isPrimary: true, columnName: 'ChaNum' }),
    __metadata("design:type", Number)
], Character.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserNum' }),
    __metadata("design:type", Number)
], Character.prototype, "userId", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuNum' }),
    __metadata("design:type", Number)
], Character.prototype, "guildId", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaName' }),
    __metadata("design:type", String)
], Character.prototype, "character_name", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaClass' }),
    __metadata("design:type", Number)
], Character.prototype, "character_class", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaLevel' }),
    __metadata("design:type", Number)
], Character.prototype, "character_level", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaSchool' }),
    __metadata("design:type", Number)
], Character.prototype, "character_school", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaStRemain' }),
    __metadata("design:type", Number)
], Character.prototype, "character_stats", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaPower' }),
    __metadata("design:type", Number)
], Character.prototype, "character_stat_pow", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaDex' }),
    __metadata("design:type", Number)
], Character.prototype, "character_stat_dex", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaStrong' }),
    __metadata("design:type", Number)
], Character.prototype, "character_stat_int", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaStrength' }),
    __metadata("design:type", Number)
], Character.prototype, "character_stat_vit", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaMoney' }),
    __metadata("design:type", Number)
], Character.prototype, "character_gold", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaOnline' }),
    __metadata("design:type", Number)
], Character.prototype, "character_online", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaStartMap' }),
    __metadata("design:type", Number)
], Character.prototype, "character_start_map", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaCreateDate' }),
    __metadata("design:type", luxon_1.DateTime)
], Character.prototype, "create_date", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: Env_1.default.get('CHARACTER_LEVEL_DATE_COLUMN') }),
    __metadata("design:type", luxon_1.DateTime)
], Character.prototype, "levelup_date", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: Env_1.default.get('CONTRI_POINT_COLUMN') }),
    __metadata("design:type", Number)
], Character.prototype, "contribution_points", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: Env_1.default.get('MMR_COLUMN') }),
    __metadata("design:type", Number)
], Character.prototype, "mmr", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: Env_1.default.get('PK_KILL_COLUMN') }),
    __metadata("design:type", Number)
], Character.prototype, "pk_kills", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: Env_1.default.get('PK_DEATH_COLUMN') }),
    __metadata("design:type", Number)
], Character.prototype, "pk_deaths", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => User_1.default),
    __metadata("design:type", Object)
], Character.prototype, "user", void 0);
__decorate([
    (0, Orm_1.hasOne)(() => Guild_1.default),
    __metadata("design:type", Object)
], Character.prototype, "guild", void 0);
exports.default = Character;
//# sourceMappingURL=Character.js.map