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
const luxon_1 = require("luxon");
const Character_1 = __importDefault(require("./Character"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
class Guild extends Orm_1.BaseModel {
}
Guild.table = `${Env_1.default.get('RANGAME1_DB')}.dbo.viewGuildInfo`;
__decorate([
    (0, Orm_1.column)({ isPrimary: true, columnName: 'GuNum' }),
    __metadata("design:type", Number)
], Guild.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaNum' }),
    __metadata("design:type", Number)
], Guild.prototype, "characterId", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ChaName' }),
    __metadata("design:type", String)
], Guild.prototype, "character_name", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuName' }),
    __metadata("design:type", String)
], Guild.prototype, "guild_name", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuRank' }),
    __metadata("design:type", Number)
], Guild.prototype, "guild_rank", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuIncomeMoney' }),
    __metadata("design:type", Number)
], Guild.prototype, "guild_income", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuMoney' }),
    __metadata("design:type", Number)
], Guild.prototype, "guild_money", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuBattleWin' }),
    __metadata("design:type", Number)
], Guild.prototype, "guild_win", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuBattleLose' }),
    __metadata("design:type", Number)
], Guild.prototype, "guild_loss", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuBattleDraw' }),
    __metadata("design:type", Number)
], Guild.prototype, "guild_draw", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'GuBattleLastTime' }),
    __metadata("design:type", luxon_1.DateTime)
], Guild.prototype, "guild_last_battle_date", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Character_1.default),
    __metadata("design:type", Object)
], Guild.prototype, "guild_members", void 0);
exports.default = Guild;
//# sourceMappingURL=Guild.js.map