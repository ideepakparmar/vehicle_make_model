import express from 'express';
//import controller file
import * as vehicleController from '../controllers/vehicle.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/').get(vehicleController.getVehicleDetails).post(vehicleController.addVehicleDetails).put(vehicleController.updateVehicleDetails);
router.route('/:id').get(vehicleController.getVehicleInfo).delete(vehicleController.deleteVehicleDetails);
export default router;
