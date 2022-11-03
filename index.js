const isUrl = (s) => {
  try {
    let a = new URL(s);
  } catch {
    return false;
  }
  return true;
};
let f = Object.create(null);
f.frame = document.createElement("iframe");
f.frame.style =
  "border: none; position: absolute; top:0; left: 0; height: 100vh; width: 100vw; z-index: 10000;";
document.querySelector("button").addEventListener("click", () => {});
