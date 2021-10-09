import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import Summary from "../Summary/Index";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontSize: 25,
    fontFamily: "Gabriela , serif",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    fontFamily: "Gabriela , serif",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    fontFamily: "Gabriela , serif",
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function Cart() {
  return (
    <>
      <div className="cart">
        <h2 style={{ fontSize: "50px" }}>My Cart</h2>
        <TableContainer>
          <Table sx={{ minWidth: "80%" }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Total Items</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right">Quantity</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                {" "}
                Products
                <StyledTableCell component="th" scope="row">
                  Products
                </StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </StyledTableRow>
            </TableBody>
            <Button
              variant="contained"
              color="success"
              style={{
                margin: "5%",
                alignSelf: "center",
                display: "grid",
              }}
            >
              Checkout
            </Button>
          </Table>
        </TableContainer>
        <Summary />
      </div>
    </>
  );
}
export default Cart;
