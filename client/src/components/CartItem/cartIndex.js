import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

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
  const [, dispatch] = useStoreContext();

  const deleteFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id,
      });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value),
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };
  return (
    <Table>
      <TableHead>
        <StyledTableCell>{item.name}</StyledTableCell>
        <StyledTableCell align="right">${item.price}</StyledTableCell>
      </TableHead>
      <TableBody>
        <StyledTableCell>
          <img style={{ width: "30%" }} src={`/images/${item.image}`} alt="" />
        </StyledTableCell>
        <StyledTableCell align="right">
          {" "}
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
        </StyledTableCell>
      </TableBody>
      <span role="img" aria-label="trash" onClick={() => deleteFromCart(item)}>
        🗑️
      </span>
    </Table>
  );
};

export default CartItem;
