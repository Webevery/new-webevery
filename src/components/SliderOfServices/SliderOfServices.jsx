import React from "react";
import styles from "./SliderOfServices.styles.scss";
import { serviceData } from "@/data";
import OrderBtn from "../Buttons/OrderBtn/OrderBtn";

export const SliderOfServices=()=>{
    return (<ul className={styles.serviceList}>
    {serviceData.map(({id,title,desc,price})=>{
      return <li key={id}>
        <h3>{title}</h3>
        <ul>
        {desc && desc.map(({id,text})=>{
          return <li key={id}>{text}</li>
        })}
        <p className={styles.price}>{price}</p>
        <OrderBtn/>
        </ul>
      </li>
    })}
    </ul>)
}