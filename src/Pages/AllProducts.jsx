import { Close, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  AppBar,
  Button,
  Dialog,
  FormControl,
  // IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

import axios from "axios";
import React from "react";

const AllProducts = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch();
    return () => {};
  }, []);

  const fetch = () => {
    // const data = { userId: user._id };
    axios.get("http://localhost:8000/shop/show/all").then((res) => {
      console.log(res.data.products);
      setProducts(res.data.products);
    });
  };
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "calc(100vh - 73px)" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell variant="head">SR#</TableCell>
              <TableCell variant="head">Name</TableCell>
              <TableCell variant="head">Category</TableCell>
              <TableCell variant="head">Price</TableCell>
              <TableCell variant="head">Quantity Available</TableCell>
              <TableCell variant="head">Quantity Ordered</TableCell>
              <TableCell variant="head" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((e, i = 0) => {
              i = i + 1;
              return <Row product={e} key={e._id} no={i} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
const Row = ({ product, no }) => {
  const [enable, setEnable] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [o, setO] = React.useState({});
  const [values, setValues] = React.useState({
    _id: o._id,
    status: o.status,
    TrackingService: o.TrackingService ? o.TrackingService : "",
    TrackingId: o.TrackingId ? o.TrackingId : "",
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (value) => (e) => {
    setValues({ ...values, [value]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/shop/order/update", values)
      .then((res) => {
        console.log(res.data);
        setO(res.data.data);
        handleClose();
      });
  };
  return (
    <>
      <TableRow>
        <TableCell>{no}</TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.category}</TableCell>
        <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center">{product.quantity}</TableCell>
        <TableCell align="center">{product.NumberSold}</TableCell>
        {/* <TableCell variant="head">Total Raiting</TableCell> */}
        <TableCell align="center">
          <IconButton color="error" onClick={handleClickOpen}>
            <Edit sx={{ fontSize: 15 }} />
          </IconButton>
          {/* <IconButton>
          <Delete />
        </IconButton> */}
        </TableCell>
      </TableRow>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        //  TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            backgroundColor: "white",
            color: "#e92e4a",
          }}
        >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <Close />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Edit Product
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSubmit}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Box sx={{ width: "300px" }}>
            <TextField
              label="Product Name"
              sx={{ width: "100%", m: 1 }}
              variant="standard"
              value={values.TrackingId}
              onChange={handleChange("TrackingId")}
            />
          </Box>
          <Box sx={{ width: "300px" }}>
            <FormControl variant="standard" sx={{ width: "100%", m: 1 }}>
              <InputLabel id="gender">Courier Service</InputLabel>
              <Select
                label="Courier Service"
                name="gender"
                id="gender"
                // color="success"
                variant="standard"
                value={values.TrackingService}
                onChange={handleChange("TrackingService")}
                // required
              >
                <MenuItem value="TCS">TCS</MenuItem>
                <MenuItem value="Cheeta">Cheeta</MenuItem>
                <MenuItem value="DHL">DHL</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: "300px" }}>
            <FormControl variant="standard" sx={{ width: "100%", m: 1 }}>
              <InputLabel id="gender">Status</InputLabel>
              <Select
                label="Courier Service"
                name="gender"
                id="gender"
                // color="success"
                variant="standard"
                value={values.status}
                onChange={handleChange("status")}
                // required
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Ready To Ship">Ready To Ship</MenuItem>
                <MenuItem value="Shipped">Shipped</MenuItem>
                <MenuItem value="Ready To Deliver">Ready To Deliver</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
                <MenuItem value="Cancled">Cancled</MenuItem>
                <MenuItem value="Not Recived">Not Recived</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
export default AllProducts;
