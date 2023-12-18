import multer from 'multer';
import crypt from 'crypto';
import path from 'path';
import { Request } from 'express';

export const multerConfig = {
    dest: path.resolve(__dirname, '..', 'images'),
    storage: multer.diskStorage({
        destination: (req: Request, file, callback) => {
            callback(null, path.resolve(__dirname, '..', 'images'));
        },
        filename: (req: Request, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const sanitizedOriginalName = file.originalname.replace(/\s+/g, '_'); // Remover espaços
            callback(null, `${uniqueSuffix}_${sanitizedOriginalName}`);
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024,
    }
};