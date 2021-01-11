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
      const response = await axios.get(`${this.env.basePath}/appone`, {
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

  public async lambdaProduct() {
    try {
      const response = await axios.get(`${this.env.basePath}/apptwo`, {
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
      const response = await axios.get(`${this.env.basePath}/appthree`, {
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

  public async MockServiceThree() {
    try {
      const response = await axios.get(`${this.env.basePath}/appfour`, {
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

  public async MockServiceFour() {
    try {
      const response = await axios.get(`${this.env.basePath}/appfive`, {
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
}

//http://www.amock.io/api/CharanaAmar/asgcc-1
