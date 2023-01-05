import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import "./AddItems.css";
const AddItems = () => {
  const [IMGG, setIMGG] = useState("");
  const [Product, setProduct] = useState({
    name: "",
    category: "",
    quantity: 0,
    price: 0,
    description: "",
    Warranty: "",
    Return: "",
    StandardShipping: "",
    FastShipping: "",
    Image: "",
  });
  const handleChange = (e) => {
    setProduct({ ...Product, [e.target.name]: e.target.value });
  };
  // ====================================================
  const handleImage = (e) => {
    setProduct({ ...Product, image: e.target.files[0] });
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setIMGG(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: Product.name,
      category: Product.category,
      quantity: Product.quantity,
      price: Product.price,
      description: Product.description,
      Warranty: Product.Warranty,
      Return: Product.Return,
      StandardShipping: Product.StandardShipping,
      FastShipping: Product.FastShipping,
      Image: "",
    };
    console.log(formData);
    // axios
    //   .post("http://localhost:8000/shop/add", formData)
    //   .then((res) => {
    //     alert(res.data.message);
    //     setProduct({
    //       name: "",
    //       category: "",
    //       quantity: 0,
    //       price: 0,
    //       description: "",
    //       Warranty: false,
    //       Return: false,
    //       StandardShipping: false,
    //       FastShipping: false,
    //       Image: "",
    //     });
    //   })
    //   .catch((err) => {
    //     // alert(err.data.message);
    //     alert(err);
    //   });
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "700px" }}>
          <Box sx={{ m: 1 }}>
            <Box
              sx={{
                width: "200px",
                height: "100px",
                contain: "content",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={IMGG} alt="" width={200} />
            </Box>
            <input
              type="file"
              name="Image"
              accept=".png, .jpg, .jpeg"
              onChange={handleImage}
            />
          </Box>
        </Box>
        <Box sx={{ width: "700px" }}>
          <TextField
            label="Product Name"
            variant="standard"
            type="text"
            name="name"
            placeholder="Product Name"
            value={Product.name}
            onChange={handleChange}
            sx={{ width: "45%", m: 1 }}
            required
          />
          <TextField
            label="Quantity"
            variant="standard"
            type="number"
            name="quantity"
            placeholder="Product Quanity"
            value={Product.quantity}
            onChange={handleChange}
            required
            sx={{ width: "45%", m: 1 }}
          />
        </Box>
        <Box sx={{ width: "700px" }}>
          <TextField
            label="Price"
            variant="standard"
            type="number"
            name="price"
            placeholder="Product Price"
            value={Product.price}
            onChange={handleChange}
            required
            sx={{ width: "45%", m: 1 }}
          />
          <FormControl variant="standard" sx={{ width: "45%", m: 1 }}>
            <InputLabel id="gender" color="success">
              Category *
            </InputLabel>
            <Select
              label="Category *"
              name="category"
              id="category"
              color="success"
              variant="standard"
              value={Product.category}
              onChange={handleChange}
              required
              // sx={{ width: "45%", m: 1 }}
            >
              <MenuItem value="Select Tag">Select Tag</MenuItem>
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Cloths">Cloths</MenuItem>
              <MenuItem value="Toys">Toys</MenuItem>
              <MenuItem value="Medicine">Medicine</MenuItem>
              <MenuItem value="Accessory">Accessory</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "700px" }}>
          <TextField
            label="Details"
            variant="standard"
            name="description"
            placeholder="Product Details"
            onChange={handleChange}
            value={Product.description}
            rows={5}
            required
            sx={{ width: "45%", m: 1 }}
          />
          <FormControl variant="standard" sx={{ width: "45%", m: 1 }}>
            <InputLabel id="gender">Warranty</InputLabel>
            <Select
              label="Warranty"
              name="Warranty"
              id="Warranty"
              variant="standard"
              value={Product.Warranty}
              onChange={handleChange}
            >
              <MenuItem value="N/A">N/A</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ width: "700px" }}>
          <FormControl variant="standard" sx={{ width: "45%", m: 1 }}>
            <InputLabel id="gender">Return</InputLabel>
            <Select
              label="Return"
              name="Return"
              id="Return"
              variant="standard"
              value={Product.Return}
              onChange={handleChange}
            >
              <MenuItem value="N/A">N/A</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ width: "45%", m: 1 }}>
            <InputLabel id="gender">Fast Shipping</InputLabel>
            <Select
              label="Fast Shipping"
              name="FastShipping"
              id="FastShipping"
              variant="standard"
              value={Product.FastShipping}
              onChange={handleChange}
            >
              <MenuItem value="N/A">N/A</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ width: "45%", m: 1 }}>
            <InputLabel id="gender">Standard Shipping</InputLabel>
            <Select
              label="Standard Shipping"
              name="StandardShipping"
              id="StandardShipping"
              variant="standard"
              value={Product.StandardShipping}
              onChange={handleChange}
            >
              <MenuItem value="N/A">N/A</MenuItem>
              <MenuItem value="Available">Available</MenuItem>
            </Select>
          </FormControl>
          <Button
            color="success"
            variant="contained"
            sx={{ width: "45%", m: 1 }}
            onClick={handleSubmit}
          >
            Add Product
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddItems;
