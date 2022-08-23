import React from "react";
import Link from "next/link";
import { Button, Row, Col } from "antd";
import ExchangeCard from "./components/exchange-card";

export default function Home() {
  return (
    <>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
        gutter={16}
      >
        <Col span={4}>
          <div class="mb-3">
            <Link href="/market/BTC_THB">
              <Button block>BTC/THB</Button>
            </Link>
          </div>

          <div class="mb-3">
            <Link href="/market/BUSD_THB">
              <Button block>BUSD/THB</Button>
            </Link>
          </div>
          <Link href="/market/USDT_THB">
            <Button block>USDT/THB</Button>
          </Link>
        </Col>

        <Col>
          <ExchangeCard />
        </Col>
      </Row>
    </>
  );
}
