import React from 'react'
// import PropTypes from 'prop-types'

export default function Alart(props) {
  return (
   <div style={{height:50}}>
    {props.alert && <div class={`alert alert-${props.alert.type}`} role="alert">
  <strong>{props.alert.type.charAt(0).toUpperCase()+props.alert.type.substring(1)} {props.alert.message}</strong>
</div>
}
</div>
  );
}