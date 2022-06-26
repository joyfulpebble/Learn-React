import React from "react";
import classes from "./PostInfo.module.css"

export function PostInfo({Id, title, body}) {
  
  return (
    <div className={classes.container}>

      <div className={classes.info__block}>
        <p className={classes.bold}>Id: </p>
        <p className={classes.normal}>{Id}</p>
      </div>

      <div className={classes.info__block}>
        <p className={classes.bold}>Post Title: </p>
        <p className={classes.normal}>{title}</p>
      </div>

      <div className={classes.info__block}>
        <p className={classes.bold}>Post Body: </p>
        <p className={classes.normal}>{body}</p>
      </div>
      
    </div>
  )
}