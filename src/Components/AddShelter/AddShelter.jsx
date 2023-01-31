import React, { useState } from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";
import { storage } from "../../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { useNavigate } from "react-router";
import { Add, Input } from "@mui/icons-material";
import { IMaskInput } from "react-imask";
import PropTypes from "prop-types";
// --------------------------------------------------------------------
// --------------------------------------------------------------------
// ======================================================
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+92(000)0000-000"
      definitions={{
        "#": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
const AddShelter = () => {
  const Navigate = useNavigate();
  const [IMGG, setIMGG] = useState("");
  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const [values, setValues] = useState({
    name: "",
    description: "",
    address: "",
    email: "",
    phone: "",
    registration: "",
    Image: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // ====================================================
  const handleImage = (e) => {
    setValues({ ...values, [e.target.name]: e.target.files[0] });
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setIMGG(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.Image);
    if (!values.Image) {
      alert("Please Add an Image");
      return false;
    } else if (
      !values.name ||
      !values.description ||
      !values.address ||
      !values.email ||
      !values.phone ||
      !values.registration
    ) {
      alert("All Fields are required");
      return;
    } else if (values.name.length < 10) {
      alert("Name Must have more then 10 characters");
    } else if (values.description.length < 200) {
      alert("Product Description must be more then 200 characters");
    } else {
      const storageRef = ref(storage, `files/${values.Image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, values.Image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgresspercent(progress);
        },
        (error) => {
          alert(error);
        },
        async () => {
          await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImgUrl(downloadURL);
          });
        }
      );
      if (imgUrl === null) return;
      const formData = {
        name: values.name,
        description: values.description,
        address: values.address,
        email: values.email,
        phone: values.phone,
        registration: String,
        Image: imgUrl,
      };
      axios
        .post("http://localhost:8000/adoption/shelter/add", formData)
        .then((res) => {
          alert(res.data.message);
          setValues({
            name: "",
            description: "",
            address: "",
            email: "",
            phone: "",
            registration: "",
            Image: "",
          });
          setImgUrl(null);
          Navigate("/Products");
        })
        .catch((err) => {
          // alert(err.data.message);
          alert(err);
        });
    }
  };

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Box sx={{ width: "700px" }}>
          <Box sx={{ m: 1 }}>
            <Box
              sx={{
                width: "200px",
                height: "200px",
                contain: "content",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}>
              {IMGG ? (
                <img src={IMGG} alt="" width={200} />
              ) : (
                <Add sx={{ fontSize: 70, color: "GrayText" }} />
              )}
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
            label="Shelter Name"
            variant="standard"
            type="text"
            name="name"
            placeholder="Shelter Name"
            value={values.name}
            onChange={handleChange}
            sx={{ width: "45%", m: 1 }}
            required
          />
          <TextField
            label="Address"
            variant="standard"
            type="text"
            name="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
            required
            sx={{ width: "45%", m: 1 }}
          />
        </Box>
        <Box sx={{ width: "700px" }}>
          <TextField
            label="Email"
            variant="standard"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            required
            sx={{ width: "45%", m: 1 }}
          />
          <TextField
            label="Details"
            variant="standard"
            name="description"
            placeholder="values Details"
            onChange={handleChange}
            value={values.description}
            rows={5}
            required
            sx={{ width: "45%", m: 1 }}
          />
        </Box>
        <Box sx={{ width: "700px" }}>
          <TextField
            label="Phone"
            variant="standard"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            value={values.phone}
            rows={5}
            required
            sx={{ width: "45%", m: 1 }}
          />
          <TextField
            label="Registration #"
            variant="standard"
            name="registration"
            placeholder="Registration #"
            onChange={handleChange}
            value={values.registration}
            rows={5}
            required
            sx={{ width: "45%", m: 1 }}
          />
        </Box>
        <Box sx={{ width: "700px" }}>
          <Button
            color="success"
            variant="contained"
            sx={{ width: "45%", m: 1 }}
            onClick={handleSubmit}>
            Add values
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddShelter;
