import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontSize: 25,
    fontFamily: "Gabriela , serif",
  },

  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.common.white,
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
      idbPromise("cart", "delete", { ...item });
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
    <Table className="cartItem"  style={{ width: "90%" }}>
      <TableHead >
        <StyledTableCell>{item.name}</StyledTableCell>
        <StyledTableCell align="right">${item.price}</StyledTableCell>
      </TableHead>
      <TableBody>
        <StyledTableCell>
          <img style={{ width: "20%" }} src={`/images/${item.image}`} alt="" />
        </StyledTableCell>
        <StyledTableCell align="right">
          <Box sx={{ minWidth: 10 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Qty</InputLabel>
              <Select
                type="number"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={item.purchaseQuantity}
                label="1"
                onChange={onChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
              </Select>
            </FormControl>
             <Button
        variant="contained"
        color="success"
        style={{
          margin: "5%",
          display: "grid",
        }}
        onClick={() => deleteFromCart(item)}
      >
        delete
      </Button>
          </Box>
        </StyledTableCell>
      </TableBody>
      
     

    </Table>
  );
};

export default CartItem;
