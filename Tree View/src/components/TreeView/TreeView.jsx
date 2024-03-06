import React from "react";
import MenuItem from "./MenuItem";

export default function TreeView({ menu }) {
  return (
    <div>
      {menu && menu.length
        ? menu.map((item) => <MenuItem item={item} />)
        : null}
    </div>
  );
}
