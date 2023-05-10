import { useQuery } from "react-query";
import { fetchCoinHistory } from "@/api";
import styled from "styled-components";

const PriceCard = styled.li`
  padding: 10px 5px;
  text-align: center;
  border-radius: 10px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  display: flex;
  justify-content: space-around;
  span {
    font-size: 10px;
    font-weight: 400;
    display: block;
  }
`;

const PriceCardSection = styled.ul`
  margin-bottom: 100px;
`;

interface PriceProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(`${coinId}`)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <div>
          <PriceCardSection>
            {data?.map((price) => (
              <PriceCard>
                <div>
                  <span>Price High:</span>
                  {price.high}
                </div>
                <div>
                  <span>Price Low:</span>
                  {price.low}
                </div>
              </PriceCard>
            ))}
          </PriceCardSection>
        </div>
      )}
    </div>
  );
}

export default Price;
