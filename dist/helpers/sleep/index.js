"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.sleep = sleep;
