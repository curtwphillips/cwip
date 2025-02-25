"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTBToGB = exports.convertTBToMB = exports.convertTBToKB = exports.convertGBToTB = exports.convertGBToMB = exports.convertGBToKB = exports.convertMBToTB = exports.convertMBToGB = exports.convertMBToKB = exports.convertKBToTB = exports.convertKBToGB = exports.convertKBToMB = exports.convertTBToBytes = exports.convertGBToBytes = exports.convertMBToBytes = exports.convertKBToBytes = exports.convertBytesToTB = exports.convertBytesToGB = exports.convertBytesToMB = exports.convertBytesToKB = exports.convertBytesTo = exports.convertToBytes = exports.TBInGB = exports.TBInMB = exports.TBInKB = exports.GBInTB = exports.GBInMB = exports.GBInKB = exports.MBInTB = exports.MBInGB = exports.MBInKB = exports.KBInTB = exports.KBInGB = exports.KBInMB = exports.bytesInTB = exports.bytesInGB = exports.bytesInMB = exports.bytesInKB = void 0;
const math_1 = require("../math");
exports.bytesInKB = 1_024;
exports.bytesInMB = 1_048_576;
exports.bytesInGB = 1_073_741_824;
exports.bytesInTB = 1_099_511_627_776;
exports.KBInMB = 1_024;
exports.KBInGB = 1_048_576;
exports.KBInTB = 1_073_741_824;
exports.MBInKB = 0.0009765625;
exports.MBInGB = 1_024;
exports.MBInTB = 1_048_576;
exports.GBInKB = 9.5367431640625e-7;
exports.GBInMB = 0.0009765625;
exports.GBInTB = 1_024;
exports.TBInKB = 9.313225746154785e-10;
exports.TBInMB = 9.5367431640625e-7;
exports.TBInGB = 0.0009765625;
const byteMap = { bytes: 1, kb: exports.bytesInKB, mb: exports.bytesInMB, gb: exports.bytesInGB, tb: exports.bytesInTB };
const convertToBytes = (val, convertType) => (0, math_1.multiply)(val, byteMap[convertType]);
exports.convertToBytes = convertToBytes;
const convertBytesTo = (bytes, convertType) => (0, math_1.doMath)('divide', bytes, byteMap[convertType]);
exports.convertBytesTo = convertBytesTo;
const convertBytesToKB = (val) => (0, exports.convertBytesTo)(val, 'kb');
exports.convertBytesToKB = convertBytesToKB;
const convertBytesToMB = (val) => (0, exports.convertBytesTo)(val, 'mb');
exports.convertBytesToMB = convertBytesToMB;
const convertBytesToGB = (val) => (0, exports.convertBytesTo)(val, 'gb');
exports.convertBytesToGB = convertBytesToGB;
const convertBytesToTB = (val) => (0, exports.convertBytesTo)(val, 'tb');
exports.convertBytesToTB = convertBytesToTB;
const convertKBToBytes = (val) => (0, exports.convertToBytes)(val, 'kb');
exports.convertKBToBytes = convertKBToBytes;
const convertMBToBytes = (val) => (0, exports.convertToBytes)(val, 'mb');
exports.convertMBToBytes = convertMBToBytes;
const convertGBToBytes = (val) => (0, exports.convertToBytes)(val, 'gb');
exports.convertGBToBytes = convertGBToBytes;
const convertTBToBytes = (val) => (0, exports.convertToBytes)(val, 'tb');
exports.convertTBToBytes = convertTBToBytes;
const convertKBToMB = (val) => (0, exports.convertBytesToMB)((0, exports.convertToBytes)(val, 'kb'));
exports.convertKBToMB = convertKBToMB;
const convertKBToGB = (val) => (0, exports.convertBytesToGB)((0, exports.convertToBytes)(val, 'kb'));
exports.convertKBToGB = convertKBToGB;
const convertKBToTB = (val) => (0, exports.convertBytesToTB)((0, exports.convertToBytes)(val, 'kb'));
exports.convertKBToTB = convertKBToTB;
const convertMBToKB = (val) => (0, exports.convertBytesToKB)((0, exports.convertToBytes)(val, 'mb'));
exports.convertMBToKB = convertMBToKB;
const convertMBToGB = (val) => (0, exports.convertBytesToGB)((0, exports.convertToBytes)(val, 'mb'));
exports.convertMBToGB = convertMBToGB;
const convertMBToTB = (val) => (0, exports.convertBytesToTB)((0, exports.convertToBytes)(val, 'mb'));
exports.convertMBToTB = convertMBToTB;
const convertGBToKB = (val) => (0, exports.convertBytesToKB)((0, exports.convertToBytes)(val, 'gb'));
exports.convertGBToKB = convertGBToKB;
const convertGBToMB = (val) => (0, exports.convertBytesToMB)((0, exports.convertToBytes)(val, 'gb'));
exports.convertGBToMB = convertGBToMB;
const convertGBToTB = (val) => (0, exports.convertBytesToTB)((0, exports.convertToBytes)(val, 'gb'));
exports.convertGBToTB = convertGBToTB;
const convertTBToKB = (val) => (0, exports.convertBytesToKB)((0, exports.convertToBytes)(val, 'tb'));
exports.convertTBToKB = convertTBToKB;
const convertTBToMB = (val) => (0, exports.convertBytesToMB)((0, exports.convertToBytes)(val, 'tb'));
exports.convertTBToMB = convertTBToMB;
const convertTBToGB = (val) => (0, exports.convertBytesToGB)((0, exports.convertToBytes)(val, 'tb'));
exports.convertTBToGB = convertTBToGB;
