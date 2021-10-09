import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Summary from "../components/Summary/Index";

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

function Cart() {
  return (
    <>
      <h2 style={{ fontSize: "50px" }}>Users Cart</h2>
      <section>
        <TableContainer className="table" style={{width: "220%"}}>
          <Table 
          >
            <TableHead>
                <StyledTableCell>Products</StyledTableCell>
                <StyledTableCell align="right">item-Price</StyledTableCell>
            </TableHead>
            <TableBody>
              <StyledTableCell component="th" scope="row">
                Images/description
              </StyledTableCell>
              <StyledTableCell align="right">QTY</StyledTableCell>
            </TableBody>
          </Table>
        </TableContainer>
           <Summary />
        <div className="cart">
       
        </div>
      </section>
    </>
  );
}
export default Cart;
