import React from "react";
import { Box } from "@mui/material";
const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        p: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}>
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: 3,
          p: 1,
          backgroundColor: "white",
        }}>
        <h3>Products</h3>
        <p>Total Products {200}</p>
        <p>Quantity Sold: {100}</p>
      </Box>
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: 3,
          p: 1,
          backgroundColor: "white",
        }}>
        <h3>Users</h3>
        <p>Registered Users {200}</p>
        <p>Verified Users: {100}</p>
      </Box>
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: 3,
          p: 1,
          backgroundColor: "white",
        }}>
        <h3>Orders</h3>
        <p>Total Orders {200}</p>
        <p>Delivered: {100}</p>
        <p>Pending: {100}</p>
      </Box>
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: 3,
          p: 1,
          backgroundColor: "white",
        }}>
        <h3>Pets</h3>
        <p>Registered Pets {200}</p>
        {/* <p>Quantity Sold: {100}</p> */}
      </Box>
      <Box
        sx={{
          width: 200,
          height: 200,
          borderRadius: 3,
          p: 1,
          backgroundColor: "white",
        }}>
        <h3>Shelters</h3>
        <p>Registered Shelters {200}</p>
        <p>Shelter Pets: {100}</p>
      </Box>
    </Box>
  );
};

export default Dashboard;
