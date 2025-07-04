"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookZod = void 0;
const zod_1 = require("zod");
exports.bookZod = zod_1.z.object({
    title: zod_1.z.string({
        required_error: 'Title is required',
    }),
    author: zod_1.z.string({
        required_error: 'Author is required',
    }),
    genre: zod_1.z.enum(['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'], {
        required_error: 'Genre is required',
    }),
    isbn: zod_1.z.string({
        required_error: 'ISBN is required',
    }),
    description: zod_1.z.string().optional(),
    copies: zod_1.z.number({
        required_error: 'Copies is required',
    }).int().nonnegative(),
    available: zod_1.z.boolean().default(true)
});
