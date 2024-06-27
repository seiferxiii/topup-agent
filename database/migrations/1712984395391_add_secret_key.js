"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
const ran_1 = __importDefault(global[Symbol.for('ioc.use')]("Config/ran"));
class default_1 extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = `${ran_1.default.ranuser}.dbo.${ran_1.default.userinfo_table}`;
    }
    async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.string('secret_key');
        });
    }
    async down() {
    }
}
exports.default = default_1;
//# sourceMappingURL=1712984395391_add_secret_key.js.map