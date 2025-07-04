"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const borrow_Controller_1 = require("../controllers/borrow.Controller");
router.post('/borrow', borrow_Controller_1.createBorrow);
router.get('/borrow', borrow_Controller_1.getBorrows);
exports.default = router;
