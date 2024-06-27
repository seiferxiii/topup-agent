"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const recaptchaConfig = {
    siteKey: Env_1.default.get('RECAPTCHA_SITE_KEY'),
    secretKey: Env_1.default.get('RECAPTCHA_SECRET_KEY'),
    ssl: true,
    views: false,
};
exports.default = recaptchaConfig;
//# sourceMappingURL=recaptcha.js.map