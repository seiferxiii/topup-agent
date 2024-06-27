"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
const Recaptcha2_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Addons/Recaptcha2"));
class Recaptcha {
    async handle({ request }, next) {
        const recaptchaResponse = request.input('g-recaptcha-response');
        try {
            await Recaptcha2_1.default.validate(recaptchaResponse);
        }
        catch (errors) {
            throw new standalone_1.Exception(Recaptcha2_1.default.translateErrors(errors || 'invalid-input-response'), 400, 'E_CAPTCHA');
        }
        await next();
    }
}
exports.default = Recaptcha;
//# sourceMappingURL=Recaptcha.js.map