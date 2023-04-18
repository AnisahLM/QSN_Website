import React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const DrawerList = () => {
  const { products } = useSelector((state) => state);
  // console.log(products);

  return products.map((p) => (
    <List key={p.id}>
      <ListItem>
        <ListItemText primary={p.name} />
      </ListItem>
    </List>
  ));
};

export default DrawerList;
