// Define los endpoints y mapea cada uno a su respectivo controlador
// Define las rutas necesarias para cada operación del controlador

import express from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller,
    crearSuperheroeController,
    editarSuperheroeController,
    eliminarSuperheroePorIdController,
    eliminarSuperheroePorNombreController
} from '../controllers/superheroesController.mjs';

const router = express.Router();

router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller); //'/heroes/buscar/mayores-30' si este endpoint se ubica luego de otros
                                                                        // http://localhost:3000/api/heroes/mayores-30

router.get('/heroes/:id', obtenerSuperheroePorIdController);        //http://localhost:3000/api/heroes/68475df5fb5f667115415199  
                                                                    // (id de MongoDB compass)
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);  //http://localhost:3000/api/heroes/buscar/poderes/Velocidad%20aumentada
                                                                                        //http://localhost:3000/api/heroes/buscar/poderes/Invisibilidad
//Nuevos endpoint Sprint3 TP1
router.get('/heroes', obtenerTodosLosSuperheroesController);
router.post('/heroes', crearSuperheroeController);
router.put('/heroes/editar/:nombreSuperheroe', editarSuperheroeController);
router.delete('/heroes/eliminar/:id', eliminarSuperheroePorIdController);
router.delete('/heroes/eliminar-nombre/:nombreSuperheroe', eliminarSuperheroePorNombreController);

export default router;


