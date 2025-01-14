import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
const CreatePage = () => {

    const [product, newProducts] = useState({
        name: "",
        image: "",
    }
    )

    const createProduct = async (product) => {
        // Validate the input
        try {
            if (!product.name || !product.image) {
                return { success: false, message: "Please provide all fields" };
            }
            const res = await fetch("/api/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            });
            const data = await res.json();
            return ({ success: true, data });
        } catch (error) {
            return ({ success: false, message: error.message || "An Unexpected Error Occured" });
        }
    }
    const handleAddProduct = async () => {
        const result = await createProduct(product);
        if (result.success) {
            toast.success("Product added successfully!");
        }
        else {
            toast.error(result.message);
        }
    }
    return (
        <>
            <ToastContainer />
            <div>
                <h1>WelCome To The Show ☯️☯️</h1>
                <br></br>
                <input
                    placeholder='Product Name'
                    name='name'
                    value={product.name}
                    onChange={(e) => newProducts({ ...product, name: e.target.value })}
                />
                <input
                    placeholder='image'
                    name='image'
                    value={product.image}
                    onChange={(e) => newProducts({ ...product, image: e.target.value })}
                />
                <button type='submit' onClick={handleAddProduct}>Add Now</button>
                <br></br>
            </div>
        </>

    );
}

export default CreatePage

