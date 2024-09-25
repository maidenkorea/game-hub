import axios from "axios";
import key from "C:/game-hub-api-key";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: key,
  },
});
