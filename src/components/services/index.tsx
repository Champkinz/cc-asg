import { Button, Card, Spin, Typography } from "antd";
import React, { FC, useEffect, useState } from "react";
import { LambdaServicesSDK } from "../../sdk/server";
import ReactJson from "react-json-view";
const { Text } = Typography;

const ServicesMain: FC<ServicesMainProps> = ({ setCrumbs }) => {
  const [serviceOne, setserviceOne] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const ss = new LambdaServicesSDK();
  useEffect(() => {
    setCrumbs("Lambda Services");
  }, [setCrumbs]);

  const callServiceOne = async (service: string) => {
    let res: any;
    setIsLoading(true);
    switch (service) {
      case "1": {
        res = await ss.MockServiceOne();
        break;
      }
      case "2": {
        res = await ss.MockServiceTwo();
        break;
      }
      case "3": {
        res = await ss.MockServiceThree();
        break;
      }
      case "4": {
        res = await ss.MockServiceFour();
        break;
      }
      case "5": {
        res = await ss.MockServiceFive();
        break;
      }
      default: {
        res = { error: "Propably didnt set a service" };
        break;
      }
    }
    setserviceOne(res);
    setIsLoading(false);
  };
  return (
    <div>
      <div className="flex flex-1 flex-row justify-around">
        <Button onClick={() => callServiceOne("1")}>Lambda Service One</Button>
        <Button onClick={() => callServiceOne("2")}>Lambda Service Two</Button>
        <Button onClick={() => callServiceOne("3")}>
          Lambda Service Three
        </Button>
        <Button onClick={() => callServiceOne("4")}>Lambda Service Four</Button>
        <Button onClick={() => callServiceOne("5")}>Lambda Service Five</Button>
      </div>

      <Spin spinning={isLoading}>
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
          }}
          className="flex flex-1 justify-around"
        >
          <Card style={{ width: "100%", height: "60vh" }} hoverable>
            <Typography.Title level={4}>Data Fields</Typography.Title>
            {serviceOne &&
              Object.keys(serviceOne).map((item: string, index: number) => (
                <div key={`m${index}`}>
                  <Text code>{item.toUpperCase()}</Text>:
                  <Text code>{serviceOne[item]}</Text>
                  <br />
                </div>
              ))}
          </Card>
          <Card style={{ width: "100%", height: "60vh" }} hoverable>
            <Typography.Title level={4}>JSON</Typography.Title>
            <ReactJson src={serviceOne} />
          </Card>
        </div>
      </Spin>
    </div>
  );
};

interface ServicesMainProps {
  setCrumbs: any;
}

export default ServicesMain;
