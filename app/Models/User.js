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
class User extends Orm_1.BaseModel {
}
User.table = `${Env_1.default.get('RANUSER_DB')}.dbo.${Env_1.default.get('USERINFO_COLUMN')}`;
User.online = (0, Orm_1.scope)((query) => {
    query.where('UserLoginState', 1);
});
User.normal_characters = (0, Orm_1.scope)((query) => {
    query.where('UserType', '<', 12);
});
User.active = (0, Orm_1.scope)((query) => {
    query.where('UserAvailable', 1);
});
User.deactivated = (0, Orm_1.scope)((query) => {
    query.where('UserAvailable', 0);
});
__decorate([
    (0, Orm_1.column)({ isPrimary: true, columnName: 'UserNum' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserEmail' }),
    __metadata("design:type", String)
], User.prototype, "useremail", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserName' }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserID' }),
    __metadata("design:type", String)
], User.prototype, "userid", void 0);
__decorate([
    (0, Orm_1.column)({ serializeAs: null, columnName: 'UserPass' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, Orm_1.column)({ serializeAs: null, columnName: 'UserPass2' }),
    __metadata("design:type", String)
], User.prototype, "pincode", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserType' }),
    __metadata("design:type", Number)
], User.prototype, "user_type", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserAvailable' }),
    __metadata("design:type", Number)
], User.prototype, "user_available", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserBlock' }),
    __metadata("design:type", Number)
], User.prototype, "user_block", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserBlockDate' }),
    __metadata("design:type", String)
], User.prototype, "user_block_date", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: Env_1.default.get('EPOINTS_COLUMN') }),
    __metadata("design:type", Number)
], User.prototype, "epoints", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'LastLoginDate' }),
    __metadata("design:type", luxon_1.DateTime)
], User.prototype, "LastLoginDate", void 0);
__decorate([
    (0, Orm_1.column)({ serializeAs: null }),
    __metadata("design:type", String)
], User.prototype, "secret_key", void 0);
__decorate([
    (0, Orm_1.hasMany)(() => Character_1.default),
    __metadata("design:type", Object)
], User.prototype, "characters", void 0);
exports.default = User;
//# sourceMappingURL=User.js.map