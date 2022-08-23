import React, { useState, useEffect } from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
import { selectTickerBySymbol } from "../../../redux/reducers/ticker";
import Image from "next/image";

const ExchangeCard = ({ symbol }) => {
  const [iconImg, setIconImg] = useState("");

  const ticker = useSelector((state) => selectTickerBySymbol(state, symbol));

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const getIconImg = (symbol) => {
    const arr = symbol.toString().split("_");
    console.log("🚀 ~ file: index.jsx ~ line 19 ~ getIconImg ~ arr", arr);
    return `/${arr[0]}.png`;
  };

  useEffect(() => {
    if (symbol) {
      setIconImg(getIconImg(symbol));
    }
  }, [symbol]);

  return (
    <>
      <Card
        style={{
          width: 300,
        }}
      >
        <h3>
          {ticker ? ticker?.symbol.toUpperCase() : "-"}{" "}
          <Image src={iconImg} width={30} height={30} />
        </h3>
        <h1>
          {ticker
            ? numberWithCommas(ticker?.askPrice)
            : "please select pair exchange"}{" "}
        </h1>
        <p>Volume: {ticker ? numberWithCommas(ticker?.volume) : "-"}</p>
      </Card>
    </>
  );
};

export default ExchangeCard;
