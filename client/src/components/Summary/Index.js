import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Summary() {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.success.main,
          color: theme.palette.common.white,
          fontSize: 25,
          fontFamily: "Gabriela , serif",
          top: "50%",
    left: "50%",
    width: "80%",
        },
      
        [`&.${tableCellClasses.body}`]: {
          fontSize: 20,
          fontFamily: "Gabriela , serif",
          width: "20%",
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
          fontFamily: "Gabriela , serif",
        },
        "&:last-child td, &:last-child th": {
          border: 1,
        },
      }));

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Order Summary</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
             Total: $
            </StyledTableRow>
          </TableBody>
     
        </Table>
      </TableContainer>
    </div>
  );
}

export default Summary;
