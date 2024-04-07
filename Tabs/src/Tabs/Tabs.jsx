import React from "react";
import ChildTab from "./ChildTab";

export default function Tabs() {
  const content = [
    {
      label: "Tab1",
      data: "This is content for tab 1",
    },
    {
      label: "Tab2",
      data: "This is content for tab 2",
    },
    {
      label: "Tab3",
      data: "This is content for tab 3",
    },
  ];

  function handelChange(indexx) {
    console.log(indexx);
  }

  return <ChildTab content={content} passedFunction={handelChange} />;
}
