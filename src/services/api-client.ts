import axios from "axios";
import key from "C:/Keys/game-hub";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: key,
  },
});
