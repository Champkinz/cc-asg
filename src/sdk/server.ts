import axios from "axios";

export class LambdaServicesSDK {
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
