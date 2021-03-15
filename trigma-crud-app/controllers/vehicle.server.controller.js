import mongoose from 'mongoose';
//import models
import VehicleDetail from '../models/vehicle.server.model';
export const getVehicleDetails = (req, res) => {
	VehicleDetail.find().exec((err, vehicleDetails) => {
		if (err) {
			return res.json({ success: false, message: 'Some Error' });
		}
		return res.json({ success: true, message: 'Vehicle details fetched successfully', vehicleDetails });
	});
};
export const addVehicleDetails = (req, res) => {
	const newVehicleDetail = new VehicleDetail(req.body);
	newVehicleDetail.save((err, vehicleInfo) => {
		if (err) {
			return res.json({ success: false, message: 'Some Error' });
		}
		return res.json({ success: true, message: 'Vehicle Detail added successfully', vehicleInfo });
	});
};
export const updateVehicleDetails = (req, res) => {
	VehicleDetail.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, vehicleInfo) => {
		if (err) {
			return res.json({ success: false, message: 'Some Error', error: err });
		}
		console.log(vehicleInfo);
		return res.json({ success: true, message: 'Updated successfully', vehicleInfo });
	});
};
export const getVehicleInfo = (req, res) => {
	VehicleDetail.find({ _id: req.params.id }).exec((err, vehicleInfo) => {
		if (err) {
			return res.json({ success: false, message: 'Some Error' });
		}
		if (vehicleInfo.length) {
			return res.json({ success: true, message: 'Vehicle fetched by id successfully', vehicleInfo });
		} else {
			return res.json({ success: false, message: 'Vehicle with the given id not found' });
		}
	});
};
export const deleteVehicleDetails = (req, res) => {
	VehicleDetail.findByIdAndRemove(req.params.id, (err, vehicleInfo) => {
		if (err) {
			return res.json({ success: false, message: 'Some Error' });
		}
		return res.json({ success: true, message: ' deleted successfully' });
	});
};
