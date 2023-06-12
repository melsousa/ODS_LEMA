import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: "/arquivos", // Diretório de destino para salvar os arquivos
  filename: function (req: Request, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
  },
});

export const upload = multer({ storage: storage });
