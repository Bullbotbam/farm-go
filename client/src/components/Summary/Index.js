import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { Button } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import Auth from "../../utils/auth"

function Summary() {
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

  return (
    <TableContainer className="summary">
      <Table>
        <TableHead>
          <StyledTableCell>Order Summary</StyledTableCell>
          {/* <StyledTableCell align="right">Quantity</StyledTableCell> */}
        </TableHead>
        <TableBody>
          <StyledTableCell>
            Total: $
          </StyledTableCell>
        </TableBody>
      </Table>
      {
              Auth.loggedIn() ?
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
      :
      <span>(log in to check out)</span>
  }
    </TableContainer>
  );
}

export default Summary;
