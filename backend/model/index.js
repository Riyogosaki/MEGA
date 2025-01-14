
app.post("/api/message/:id", async (req, res) => {
	const { id } = req.params;
	const { image, name } = req.body;
	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(500).json({ success: false, message: "Invalid Product Id " });
	}

	else if (!name || !image) {
		return res.status(400).json({ success: false, message: "Enter all field is required" });
	}

	const messageing = await new datamessage({ id, image, name });

	try {
		const haa = await messageing.save();
		res.status(200).json({ success: true, message: haa });
	} catch (error) {
		res.status(500).json({ success: false, message: "Server Error" });
	}
});


app.get("/api/message/:id", async (req, res) => {
	const {_id} =req.params;
	const product = req.body;

	try {
		const senddata = await datamessage.find(_id,product);
		console.log(senddata);
		res.status(200).json({ success: true, data: senddata });
	} catch (error) {
		console.error("Error Occured in getting data", error.message);
		res.status(500).json({ success: false, message: "Failed to get data" });

	}

});