import axios from "axios";

export class LambdaServicesSDK {
  constructor(private env: { token: string; basePath: string }) {
    if (!this.env) {
      this.env = {
        token: "",
        basePath: "",
      };
    }
  }

  public async MockServiceOne() {
    try {
      const response = await axios.get(
        "https://www.amock.io/api/CharanaAmar/asgcc-1"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async lambdaProduct() {
    try {
      const response = await axios.get(`${this.env.basePath}/product`, {
        headers: {
          Authorization: `Bearer ${this.env.token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  public async MockServiceTwo() {
    try {
      const response = await axios.get(
        "https://www.amock.io/api/CharanaAmar/asgcc-2"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async MockServiceThree() {
    try {
      const response = await axios.get(
        "https://www.amock.io/api/CharanaAmar/asgcc-3"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async MockServiceFour() {
    try {
      const response = await axios.get(
        "https://www.amock.io/api/CharanaAmar/asgcc-4"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  public async MockServiceFive() {
    try {
      const response = await axios.get(
        "https://www.amock.io/api/CharanaAmar/asgcc-5"
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
}

//http://www.amock.io/api/CharanaAmar/asgcc-1
