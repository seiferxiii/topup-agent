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
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const luxon_1 = require("luxon");
const ShopItemMap_1 = __importDefault(require("./ShopItemMap"));
class ShopPurchase extends Orm_1.BaseModel {
}
ShopPurchase.table = `${Env_1.default.get('RANSHOP_DB')}.dbo.ShopPurchase`;
__decorate([
    (0, Orm_1.column)({ isPrimary: true, columnName: 'PurKey' }),
    __metadata("design:type", Number)
], ShopPurchase.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ProductNum' }),
    __metadata("design:type", Number)
], ShopPurchase.prototype, "productId", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'UserUID' }),
    __metadata("design:type", String)
], ShopPurchase.prototype, "username", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'PurFlag' }),
    __metadata("design:type", Number)
], ShopPurchase.prototype, "order_status", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'PurSrc' }),
    __metadata("design:type", Number)
], ShopPurchase.prototype, "purchase_source", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'PurDate' }),
    __metadata("design:type", luxon_1.DateTime)
], ShopPurchase.prototype, "purchase_date", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'PurChgDate' }),
    __metadata("design:type", luxon_1.DateTime)
], ShopPurchase.prototype, "product_claim_date", void 0);
__decorate([
    (0, Orm_1.belongsTo)(() => ShopItemMap_1.default),
    __metadata("design:type", Object)
], ShopPurchase.prototype, "shopItemMap", void 0);
exports.default = ShopPurchase;
//# sourceMappingURL=ShopPurchase.js.map