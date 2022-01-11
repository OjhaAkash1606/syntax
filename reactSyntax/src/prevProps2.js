import React, { useEffect, useState, useRef } from "react";
export function PrevProps2(props) {
  let lastProps = useRef();
  useEffect(() => {
    lastProps.current = props.state;
    // console.log(lastProps);
  });
  const storePrevProps = lastProps.current;
  return (
    <>
      {/* {console.log(props)} */}
      <h3>Previous props 2</h3>
      {console.log(props.state)}
      {/* {console.log(storePrevProps)} */}
      <h4>Prev Props : {lastProps.current}</h4>
      <h4>Prev Props : {storePrevProps}</h4>
      <h4>Count number : {props.state}</h4>
    </>
  );
}
