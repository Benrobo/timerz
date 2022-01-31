// import style from "./style.module.css";

export default function Error({ message = "Error container" }) {
  return <div style={mainstyle.main}>{message}</div>;
}

const mainstyle = {
  main: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  },
};
