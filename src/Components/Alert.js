import React from "react";

export default function Alert(props) {
    const handleOnCapital=(text)=>{
        let capitalizeCase=text.charAt(0).toUpperCase()+text.slice(1);
        return capitalizeCase;
    }
  return (
    props.alert&&
    <div>
     <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{handleOnCapital(props.alert.typ)}</strong>: {props.alert.msg}
        {/* <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button> */}
      </div>
    </div>
    
  );
}
