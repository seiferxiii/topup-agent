"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { whoami: 'why are you here?' };
});
Route_1.default.get('/health_check', 'ApiController.health_check');
Route_1.default.post('/login', 'ApiController.login');
Route_1.default.post('/user/info', 'ApiController.user_info');
Route_1.default.post('/user/topup', 'ApiController.topup');
Route_1.default.post('/user/topup/list', 'ApiController.topup_list');
//# sourceMappingURL=routes.js.map