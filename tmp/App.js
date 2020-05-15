import Sample from "./Sample.js";
import Clock from "../src/Clock.js";

export default class App {
  $target = null;
  // dashboard = null;
  clock = null;

  constructor($target) {
    this.$target = $target;

    // this.dashboard = new Sample($target);
    this.clock = new Clock($target);
  }
}
