import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export class Util {
  constructor() {
    if (typeof window !== "undefined" && document !== "undefined") {
      // init notyf
      this.notif = new Notyf({
        duration: 2000,
        position: {
          x: "right",
          y: "top",
        },
      });

      //   check if localstorage data is not null
      if (localStorage.getItem("timerz") === null) {
        return localStorage.setItem("timerz", JSON.stringify([]));
      }
      this.local = localStorage.getItem("timerz");
    }
  }
  success(msg) {
    if (this.notif && this.notif.success !== "undefined") {
      return this.notif.success({
        message: msg,
        dismissible: true,
      });
    }
  }
  error(msg) {
    if (this.notif && this.notif.error !== "undefined") {
      return this.notif.error({
        message: msg,
        dismissible: true,
      });
    }
  }

  createLocal() {
    if (typeof window !== "undefined" && document !== "undefined") {
      localStorage.setItem("timerz", JSON.stringify([]));
    }
  }

  getData() {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (this.local === null) {
        this.createLocal();
      }
      let data = localStorage.getItem("timerz");
      return JSON.parse(data);
    }
  }

  addData(payload) {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (payload !== undefined || payload !== "") {
        localStorage.setItem("timerz", JSON.stringify(payload));
      }
    }
  }

  genId() {
    let char =
      "abcdefghijklmnopqABCDEFGHIJKLMNOPQ1234567890$#%^&*()-+@~!".split("");

    let id = "";

    for (let i = 0; i < 10; i++) {
      let r = Math.floor(Math.random() * char.length + 1 - 1);
      id += char[r];
    }
    return id;
  }
}
