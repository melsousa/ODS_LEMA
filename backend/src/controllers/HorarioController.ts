import { horarioRepository } from "./../repositories/HorarioRepository";

import { Request, Response } from "express";
// import {}
export class HorarioController {
  async createHorario(req: Request, res: Response) {
    const { dataInicio, dataFim, disponivel } = req.body;

    try {
      const newHorario = horarioRepository.create({
        dataInicio,
        dataFim,
        disponivel,
      });

      await horarioRepository.save(newHorario);

      return res.status(201).json(newHorario);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async listHorarios(req: Request, res: Response) {
    try {
      const horarios = await horarioRepository.find();

      return res.status(200).json(horarios);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

//   async deleteHorario(req: Request, res: Response) {
//     const { id_horaDisponivel } = req.params;

//     try {
//       const horario = await horarioRepository.findOne(id_horaDisponivel);

//       if (!horario) {
//         return res.status(404).json({ message: 'Horário não encontrado' });
//       }

//       await horarioRepository.delete(id_horaDisponivel);

//       return res.status(200).json({ message: 'Horário excluído com sucesso' });
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
}
