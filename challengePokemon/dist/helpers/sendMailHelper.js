"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailHelper = void 0;
var path_1 = require("path");
var PokemonRepository_1 = require("../repository/PokemonRepository");
var TypesPokemonRepository_1 = require("../repository/TypesPokemonRepository");
var SendMailService_1 = __importDefault(require("../services/SendMailService"));
var sendMailHelper = function (type, emails) { return __awaiter(void 0, void 0, void 0, function () {
    var randomPokemons, apiType, pokemons, items, item, apiPokemons, pokemon, error_1, error_2, path, params;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                randomPokemons = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 9, , 10]);
                return [4 /*yield*/, TypesPokemonRepository_1.TypesPokemonRepository.find(type)];
            case 2:
                apiType = _a.sent();
                pokemons = {
                    pokemon: apiType.pokemon
                };
                items = pokemons.pokemon;
                _a.label = 3;
            case 3:
                if (!(randomPokemons.length <= 4)) return [3 /*break*/, 8];
                item = items[Math.floor(Math.random() * items.length)];
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, PokemonRepository_1.PokemonRepository.find(item.pokemon.name)];
            case 5:
                apiPokemons = _a.sent();
                pokemon = {
                    id: apiPokemons.id,
                    types: apiPokemons.types,
                    photo: apiPokemons.sprites.front_default,
                    name: apiPokemons.name,
                    weight: apiPokemons.weight,
                    height: apiPokemons.height,
                    base_experience: apiPokemons.base_experience
                };
                randomPokemons.push(pokemon);
                return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.log('cron error', error_1);
                return [3 /*break*/, 7];
            case 7: return [3 /*break*/, 3];
            case 8: return [3 /*break*/, 10];
            case 9:
                error_2 = _a.sent();
                console.log('cron error', error_2);
                return [3 /*break*/, 10];
            case 10:
                path = path_1.resolve(__dirname, "..", "..", "src", "views", "emails", "layout.hbs");
                params = {
                    type: type,
                    randomPokemons: randomPokemons
                };
                return [4 /*yield*/, SendMailService_1.default.send(emails, type, params, path)];
            case 11:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.sendMailHelper = sendMailHelper;
