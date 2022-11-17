import React, { ReactNode } from "react";
import "./Card.css";

type CardProps = {
  header?: string;
  children: ReactNode;
};

export const Card = (props: CardProps) => (
  <div className="Card">
    <h3 className="Header">{props.header}</h3>
    {props.children}
  </div>
);
