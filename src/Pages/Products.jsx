import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Box } from "@mui/system";
import { NavLink, Outlet } from "react-router-dom";
import { Divider } from "@mui/material";

export default function Products() {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    // fetchUsers();
    return () => {};
  }, []);

  const fetchUsers = () => {
    // const data = { userId: user._id };
    axios.get("http://localhost:8000/shop//show/all").then((res) => {
      console.log(res.data.products);
      setUsers(res.data.products);
    });
  };
  const activeClassName = "active";

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "30px",
          backgroundColor: "white",
          borderBottom: "1px solid #c2c2c2",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <NavLink
          to="/Products"
          style={{ color: "#2f2f2f", fontSize: 20 }}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Products
        </NavLink>
        <Divider orientation="vertical" />
        <NavLink
          to="AddProducts"
          style={{ color: "#2f2f2f", fontSize: 20 }}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Add Product
        </NavLink>
      </Box>
      <Outlet />
    </>
  );
}
