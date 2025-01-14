import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/message");
        const result = await response.json();
        console.log(result);
        setProducts(result.data || []);
        toast.success("THis is a Home Page");
      } catch (error) {
        console.error("Error fetching data:", error);
        return({success:false ,message:error.message})
      }
    };

    fetchData();
  }, []);

  const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`/api/message/${productId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);

      if (result.success) {
        setProducts(products.filter((product) => product._id !== productId));
      toast.success("Product Deleted successfully");
       
      } else {
        console.error("Failed to delete product:", result.message);
        toast.error(result.message);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }

  };

  const updateProduct = async (productId, updatedProduct) => {
    try {
      const response = await fetch(`/api/message/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await response.json();

      if (data.success) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product._id === productId ? data.data : product
          )
        );
      } else {
        console.error("Failed to update product:", data.message);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <>
    <ToastContainer />
    <div>
      <h1>Product List</h1>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product._id}>
              <p>{product.name}</p>
              <img
                src={product.image}
                alt="Product"
                width={100}
                height={100}
              />
              <button onClick={() => deleteProduct(product._id)}>
                Delete Product
              </button>
              <button
                onClick={() =>
                  updateProduct(product._id, updatedProduct)
                }
              >
                Update Product
              </button>
            </li>
          ))
        ) : (
          <li>No products available</li>
        )}
      </ul>
      <Link to={"/create"}>
        <button>Create New Product</button>
      </Link>
    </div>
    </>
  );
};

export default HomePage;
