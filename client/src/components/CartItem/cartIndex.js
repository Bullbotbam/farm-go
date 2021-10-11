import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

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

const CartItem = ({ item }) => {
  return (

      <Table>
        <TableHead>
          <StyledTableCell>{item.name}</StyledTableCell>
          <StyledTableCell align="right">${item.price}</StyledTableCell>
        </TableHead>
        <TableBody>
          <StyledTableCell>
            <img style={ {width: "40%"}}
            src={`/images/${item.image}`} alt="" />
          </StyledTableCell>
          <StyledTableCell align="right">
            {" "}
            <span>Qty:</span>
            <input
              type="number"
              placeholder="1"
              value={item.purchaseQuantity}
            />
          </StyledTableCell>
        </TableBody>
      </Table>

  );
};

export default CartItem;
