"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Env"));
const crypto = __importStar(require("crypto"));
const ranConfig = {
    rankings_cache: Env_1.default.get('RANKINGS_CACHE'),
    ranuser: Env_1.default.get('RANUSER_DB'),
    rangame1: Env_1.default.get('RANGAME1_DB'),
    ranshop: Env_1.default.get('RANSHOP_DB'),
    userinfo_table: Env_1.default.get('GAME_VERSION') == 'GS' ? 'GSUserInfo' : 'UserInfo',
    epoints_column: Env_1.default.get('EPOINTS_COLUMN'),
    maleClass: [1, 2, 16, 256, 512, 1024],
    femaleClass: [4, 8, 32, 64, 128, 2048],
    classList: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048],
    schoolList: [0, 1, 2],
    schoolName: ['Sacred Gate', 'Mystic Peak', 'Phoenix'],
    getChaClassName: (chaClass) => {
        switch (chaClass) {
            case 1:
                return 'Brawler (M)';
            case 64:
                return 'Brawler (F)';
            case 2:
                return 'Swordsman (M)';
            case 128:
                return 'Swordsman (F)';
            case 4:
                return 'Archer (F)';
            case 256:
                return 'Archer (M)';
            case 8:
                return 'Shaman (F)';
            case 512:
                return 'Shaman (M)';
            case 16:
                return 'Extreme (M)';
            case 32:
                return 'Extreme (F)';
            case 1024:
                return 'Gunner (M)';
            case 2048:
                return 'Gunner (F)';
        }
    },
    getChaClassImage: (chaClass) => {
        switch (chaClass) {
            case 1:
                return 'https://i.imgur.com/4pNBz6K.png';
            case 64:
                return 'https://i.imgur.com/0OZcqAV.png';
            case 2:
                return 'https://i.imgur.com/Ck4J8HR.png';
            case 128:
                return 'https://i.imgur.com/xEoLFs0.png';
            case 4:
                return 'https://i.imgur.com/vL8MPEE.png';
            case 256:
                return 'https://i.imgur.com/Y88IEoK.png';
            case 8:
                return 'https://i.imgur.com/kTZVitu.png';
            case 512:
                return 'https://i.imgur.com/uS62yJN.png';
            case 16:
                return 'https://i.imgur.com/PwMMC9N.png';
            case 32:
                return 'https://i.imgur.com/XEsY5R4.png';
            case 1024:
                return 'https://i.imgur.com/knSE6ce.png';
            case 2048:
                return 'https://i.imgur.com/3HOjhRi.png';
        }
    },
    generateRandomString(length) {
        const characters = 'ABCDEFGHJKMNOPQRSTUVWXYZ0123456789';
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charactersLength);
            result += characters.charAt(randomIndex);
        }
        return result;
    },
    validateEmail(email) {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    },
    stringToMD5Hash(input) {
        const md5Hash = crypto.createHash('md5').update(input).digest('hex');
        const result = md5Hash.substring(0, 19).toUpperCase();
        return result;
    },
};
exports.default = ranConfig;
//# sourceMappingURL=ran.js.map