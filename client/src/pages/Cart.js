import React from "react";
import CartItem from "../components/CartItem/cartIndex"
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Summary from "../components/Summary/Index";
import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_CUSTOMER } from "../utils/queries";

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
  const { firstName: userParams } = useParams();

  const { loading, data } = useQuery(QUERY_CUSTOMER, {
    variables: { firstName: userParams },
  });
  const customer = data?.user || {};

//   if (loading) {
//     return <div>hello</div>;
//   }

  return (
    <>
      <h2 style={{ fontSize: "50px" }}>{customer.firstName}'s Cart</h2>
      <section>
        <TableContainer className="table" style={{ width: "220%" }}>
          <Table>
            <TableHead>
              <StyledTableCell>Products</StyledTableCell>
              <StyledTableCell align="right">item-Price</StyledTableCell>
            </TableHead>
            <TableBody>
              <StyledTableCell >
                Images/description
              </StyledTableCell>
              <StyledTableCell align="right">QTY</StyledTableCell>
            </TableBody>
          </Table>
        </TableContainer>
        <Summary />
        <div className="cart"></div>
      </section>
    </>
  );
}
export default Cart;
