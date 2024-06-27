"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const databaseConfig = {
    connection: Env_1.default.get('DB_CONNECTION'),
    connections: {
        mssql: {
            client: 'mssql',
            connection: {
                user: Env_1.default.get('MSSQL_USER'),
                port: Env_1.default.get('MSSQL_PORT'),
                server: Env_1.default.get('MSSQL_SERVER'),
                password: Env_1.default.get('MSSQL_PASSWORD'),
                database: Env_1.default.get('MSSQL_DB_NAME'),
                options: {
                    encrypt: false,
                    trustedConnection: true,
                    useUTC: true,
                },
            },
            migrations: {
                naturalSort: true,
                disableRollbacksInProduction: true,
            },
            healthCheck: false,
            debug: false,
            pool: {
                max: 100,
                min: 0,
                idleTimeoutMillis: 30000,
            },
        },
    },
};
exports.default = databaseConfig;
//# sourceMappingURL=database.js.map