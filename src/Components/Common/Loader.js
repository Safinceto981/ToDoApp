import React from "react";

export default function Loader() {
  const loader = false;
  if (loader) {
    return <div>Loading ...</div>;
  } else {
    return <div></div>;
  }
}
