import React, { FC } from "react";
import { Typography } from "antd";

const Home: FC<HomeProps> = ({ setCrumbs }) => {
  setCrumbs("Assignment Description");

  return (
    <div>
      <Typography.Title level={5} style={{ textDecorationLine: "underline" }}>
        Model and implement a microservice platform using serverless
        technologies on a prominent IaaS provider such as AWS or Azure.
      </Typography.Title>
      <Typography.Text>
        A. Model and implement a microservice platform using serverless
        technologies on a prominent IaaS provider such as AWS or Azure.
      </Typography.Text>
      <br />
      <Typography.Text>
        B. All the APIs should be secured using an OAuth2-like token mechanism.
      </Typography.Text>
      <br />
      <Typography.Text>
        C. You need to implement more than 5 mock services to demonstrate the
        solution.
      </Typography.Text>
    </div>
  );
};

interface HomeProps {
  setCrumbs: any;
}

export default Home;
