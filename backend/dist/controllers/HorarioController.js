"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HorarioController = void 0;
const HorarioRepository_1 = require("./../repositories/HorarioRepository");
// import {}
class HorarioController {
    async createHorario(req, res) {
        const { dataInicio, dataFim, disponivel } = req.body;
<<<<<<< HEAD
        try {
            const newHorario = HorarioRepository_1.horarioRepository.create({
                dataInicio,
                dataFim,
                disponivel
            });
            await HorarioRepository_1.horarioRepository.save(newHorario);
            return res.status(201).json(newHorario);
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
=======
        const newHorario = HorarioRepository_1.horarioRepository.create({
            dataInicio,
            dataFim,
            disponivel,
        });
        await HorarioRepository_1.horarioRepository.save(newHorario);
        return res.status(201).json(newHorario);
>>>>>>> origin/Melissa
    }
}
exports.HorarioController = HorarioController;
