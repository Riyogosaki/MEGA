import mongoose from "mongoose";
import datamessage from "../model/product.model.js";


export const getProducts= async (req, res) => {

	try {
		const senddata = await datamessage.find({});
		console.log(senddata);
		res.status(200).json({ success: true, data: senddata });

	} catch (error) {
		console.error("Error Occured in getting data", error.message);
		res.status(500).json({ success: false, message: "Failed to get data" });

	}

};
export const createProducts= async (req, res) => {
	const { name, image } = req.body;

	if (!name || !image) {
		return res.status(400).json({ success: false, message: "Name field is required" });
	}

	const sendmessage = new datamessage({ name, image });

	try {
		const sendingdata = await sendmessage.save();
		res.status(201).json({ success: true, data: sendingdata });
	} catch (error) {
		console.error("Error saving message:", error.message);
		res.status(500).json({ success: false, message: "Failed to save the message" });
	}
};


export const UpdateProducts= async (req, res) => {
	const { id } = req.params;
	const product = req.body;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ success: false, message: "Invalid Product Id" });
	}

	try {
		const updatedProduct = await datamessage.findByIdAndUpdate(id, product, { new: true });
		res.status(200).json({ success: true, data: updatedProduct });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};



export const DeleteProducts= async (req, res) => {
	const { id } = req.params;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(500).json({ success: false, message: "Invalid Product Id " });
	}

	try {
		const deleteProduct = await datamessage.findByIdAndDelete(id);
		res.status(200).json({ success: true, message: "Product deleted" });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
};
