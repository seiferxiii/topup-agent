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
class ShopItemMap extends Orm_1.BaseModel {
}
ShopItemMap.table = `${Env_1.default.get('RANSHOP_DB')}.dbo.ShopItemMap`;
__decorate([
    (0, Orm_1.column)({ isPrimary: true, columnName: 'ProductNum' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "id", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemMain' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_main", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemSub' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_sub", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemName' }),
    __metadata("design:type", String)
], ShopItemMap.prototype, "item_name", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemStock' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_stock", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemSec' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_section", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemCategory' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_category", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemPrice' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_price", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemComment' }),
    __metadata("design:type", String)
], ShopItemMap.prototype, "item_comment", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemImage' }),
    __metadata("design:type", String)
], ShopItemMap.prototype, "item_image", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemHidden' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_hidden", void 0);
__decorate([
    (0, Orm_1.column)({ columnName: 'ItemLimited' }),
    __metadata("design:type", Number)
], ShopItemMap.prototype, "item_limited", void 0);
exports.default = ShopItemMap;
//# sourceMappingURL=ShopItemMap.js.map