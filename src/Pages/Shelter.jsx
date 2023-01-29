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

export default function Shelter() {
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
      <Outlet />
    </>
  );
}
