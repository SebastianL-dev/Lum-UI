import autoprefixer from "autoprefixer";
import cssnano from "cssnano";

export default {
  map: false,
  plugins: [autoprefixer(), cssnano({ preset: "default" })],
};
