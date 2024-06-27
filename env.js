"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
exports.default = Env_1.default.rules({
    HOST: Env_1.default.schema.string({ format: 'host' }),
    PORT: Env_1.default.schema.number(),
    APP_KEY: Env_1.default.schema.string(),
    APP_NAME: Env_1.default.schema.string(),
    DRIVE_DISK: Env_1.default.schema.enum(['local']),
    NODE_ENV: Env_1.default.schema.enum(['development', 'production', 'test']),
    MSSQL_SERVER: Env_1.default.schema.string({ format: 'host' }),
    MSSQL_PORT: Env_1.default.schema.number(),
    MSSQL_USER: Env_1.default.schema.string(),
    MSSQL_PASSWORD: Env_1.default.schema.string(),
    MSSQL_DB_NAME: Env_1.default.schema.string(),
    RANGAME1_DB: Env_1.default.schema.string(),
    RANSHOP_DB: Env_1.default.schema.string(),
    RANUSER_DB: Env_1.default.schema.string(),
    MD5_PASSWORD_ENABLE: Env_1.default.schema.number(),
    EPOINTS_COLUMN: Env_1.default.schema.string(),
    USERINFO_COLUMN: Env_1.default.schema.string(),
    RAN_SERVER_KEY: Env_1.default.schema.string(),
    CONTRI_POINT_COLUMN: Env_1.default.schema.string(),
    MMR_COLUMN: Env_1.default.schema.string(),
    PK_KILL_COLUMN: Env_1.default.schema.string(),
    PK_DEATH_COLUMN: Env_1.default.schema.string(),
    CHARACTER_LEVEL_DATE_COLUMN: Env_1.default.schema.string()
});
//# sourceMappingURL=env.js.map