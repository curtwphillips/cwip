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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const times = __importStar(require("./times"));
const logging = __importStar(require("./logging"));
const { cleanDataForLogging, loggingSettings, shouldLogMessage } = logging;
describe('logging', () => {
    describe('shouldLogMessage', () => {
        beforeEach(() => {
            loggingSettings.disableSameMessagesLimit = false;
            loggingSettings.priorMessages = {};
        });
        it('should return true for misssing message', () => __awaiter(void 0, void 0, void 0, function* () {
            expect(shouldLogMessage('')).toBe(true);
        }));
        it('should return true when appconfig is not limiting messages', () => __awaiter(void 0, void 0, void 0, function* () {
            loggingSettings.disableSameMessagesLimit = true;
            expect(shouldLogMessage('hi')).toBe(true);
        }));
        it.only('should return true when called consecutively', () => __awaiter(void 0, void 0, void 0, function* () {
            loggingSettings.disableSameMessagesLimit = false;
            shouldLogMessage('hi');
            expect(shouldLogMessage('hi')).toBe(true);
        }));
        it('should return true if enough time elapsed since last message counter began', () => __awaiter(void 0, void 0, void 0, function* () {
            loggingSettings.disableSameMessagesLimit = false;
            const logSpy = jest.spyOn(times, 'hoursPastDate');
            logSpy.mockReturnValueOnce(3);
            shouldLogMessage(2, 'default');
            expect(shouldLogMessage(2, 'default')).toBe(true);
        }));
        it('should return true when count is too low', () => {
            const message = 'test message';
            loggingSettings.priorMessages.default = {};
            expect(shouldLogMessage(message, 'default')).toBe(true);
        });
        it('should return false when count is too high', () => {
            const message = 'test message';
            loggingSettings.priorMessages.default = {};
            loggingSettings.priorMessages.default[message] = { date: new Date(), count: 3 };
            expect(shouldLogMessage(message, 'default')).toBe(false);
        });
    });
    describe('cleanDataForLogging', () => {
        it('should clean data for logging', () => {
            const hidden = 'HIDDEN';
            const password = process.env.TEST_PASSWORD;
            expect(password).toEqual('testPassword');
            let opts;
            expect(cleanDataForLogging(opts)).toEqual(undefined);
            opts = {
                auth: password,
            };
            expect(cleanDataForLogging(opts)).toEqual({ auth: hidden });
            opts = {
                headers: {
                    Authorization: password,
                },
            };
            expect(cleanDataForLogging(opts)).toEqual({
                headers: {
                    Authorization: hidden,
                },
            });
            opts = {
                data: [
                    {
                        thumbnailPhoto: password,
                    },
                ],
            };
            expect(cleanDataForLogging(opts)).toEqual({
                data: [
                    {
                        thumbnailPhoto: password.slice(0, 5),
                    },
                ],
            });
        });
    });
});
