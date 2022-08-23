import { useEffect, useState } from "react";
import { useInterval } from "use-interval";
import { useRouter } from "next/router";
import Link from "next/link";
import { Button, Row, Col } from "antd";
import ExchangeCard from "../components/exchange-card";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTicker,
  selectAllTicker,
  selectTickerBySymbol,
} from "../../redux/reducers/ticker";

const Market = () => {
  const router = useRouter();
  const { id } = router.query;
  const [symbol, setSymbol] = useState("");

  const tickerList = useSelector(selectAllTicker);

  const dispatch = useDispatch();

  useInterval(() => {
    dispatch(fetchTicker());
  }, 5000);

  useEffect(() => {
    dispatch(fetchTicker());
  }, []);

  useEffect(() => {
    console.log("🚀 ~ file: [id].jsx ~ line 17 ~ Market ~ id", id);
  }, [id]);

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
          {/* {tickerList.map((ticker) => {
            return (
              <div class="mb-3">
                <Link href="/market/BTC_THB">
                  <Button onClick={() => setSymbol(ticker.symbol)} block>
                    {ticker.symbol}
                  </Button>
                </Link>
              </div>
            );
          })} */}
          <div class="mb-3">
            <Link href="/market/BTC_THB">
              <Button onClick={() => setSymbol("btc_thb")} block>
                BTC/THB
              </Button>
            </Link>
          </div>

          <div class="mb-3">
            <Link href="/market/BUSD_THB">
              <Button onClick={() => setSymbol("busd_thb")} block>
                BUSD/THB
              </Button>
            </Link>
          </div>
          <Link href="/market/USDT_THB">
            <Button onClick={() => setSymbol("usdt_thb")} block>
              USDT/THB
            </Button>
          </Link>
          {/* <Button onClick={() => setSymbol("btc_thb")} block>{tickerList?.symbol ?? `not found`}</Button> */}
        </Col>

        <Col>
          <ExchangeCard symbol={symbol} />
        </Col>
      </Row>
    </>
  );
};

export default Market;
