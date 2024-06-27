"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Character"));
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const TopupHistory_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/TopupHistory"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const ran_1 = __importDefault(global[Symbol.for('ioc.use')]("Config/ran"));
const ShopItemMap_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/ShopItemMap"));
class ApiController {
    async login({ auth, request, response }) {
        const { username, password } = request.body();
        if (!username) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Username is required',
            });
        }
        if (!password) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Password is required',
            });
        }
        let user = null;
        if (Number(Env_1.default.get('MD5_PASSWORD_ENABLE'))) {
            user = await User_1.default.query()
                .where('userid', username)
                .where('password', ran_1.default.stringToMD5Hash(password))
                .first();
        }
        else {
            user = await User_1.default.query().where('userid', username).where('password', password).first();
        }
        if (!user) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Invalid account',
            });
        }
        if (!user.secret_key) {
            user.secret_key = `${username}-${ran_1.default.generateRandomString(10)}-${Date.now()}`;
            await user.save();
        }
        const token = await auth.use('api').login(user);
        return response.json({
            status: 1,
            data: {
                user,
                user_secret_key: user.secret_key,
                token,
            },
        });
    }
    async user_info({ request, response }) {
        const { secret_key } = request.body();
        const user = await User_1.default.query().where('secret_key', secret_key).first();
        if (!user) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Invalid account',
            });
        }
        return response.json({
            status: 1,
            data: user,
        });
    }
    async topup({ request, response }) {
        const { secret_key, amount, order_id } = request.body();
        if (!secret_key) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Missing secret key',
            });
        }
        if (!amount) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Missing amount',
            });
        }
        const checkTopupHistory = await TopupHistory_1.default.findBy('order_id', order_id);
        if (checkTopupHistory) {
            response.status(400);
            return response.json({
                status: 0,
                data: checkTopupHistory,
                message: 'Topup already processed.',
            });
        }
        const user = await User_1.default.query().where('secret_key', secret_key).first();
        if (!user) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Invalid user',
            });
        }
        if (Number(user.epoints) > 0) {
            user.epoints = Number(user.epoints) + Number(amount);
        }
        else {
            user.epoints = Number(amount);
        }
        await user.save();
        const topupHistory = await TopupHistory_1.default.create({
            user_id: user.id,
            amount: Number(amount),
            order_id,
        });
        return response.json({
            status: 1,
            data: {
                user,
                topupHistory,
            },
            message: 'Topup successful',
        });
    }
    async health_check({ request, response }) {
        const { server_key } = request.qs();
        if (server_key != Env_1.default.get('RAN_SERVER_KEY')) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Invalid server key',
            });
        }
        try {
            await User_1.default.find(1);
            await Character_1.default.find(1);
            await ShopItemMap_1.default.find(1);
        }
        catch (error) {
            response.status(400);
            return response.json({
                status: 0,
                message: 'Database connection failed',
            });
        }
        return response.json({
            status: 1,
            message: 'OK',
        });
    }
}
exports.default = ApiController;
//# sourceMappingURL=ApiController.js.map