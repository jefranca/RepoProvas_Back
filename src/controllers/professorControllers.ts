import {Request,Response,NextFunction} from 'express'
import * as professorService from '../services/professorService'

export async function getProfessors(req:Request,res:Response, next:NextFunction){
    const idDiscipline:number = Number(req.params.idDiscipline);
    try {
        const result = await  professorService.getProfessors(idDiscipline)
        res.send(result);
    } catch (error) {
        if (error.name === 'NoDisciplineFound') return res.status(404).send(error.message);
        next(error);
    }
}