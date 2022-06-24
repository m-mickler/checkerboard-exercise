var container = document.createElement("div");
container.style.width = "100%";
document.body.append(container);

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    var div = document.createElement("div");
    if (i % 2 !== 0) {
      if (j % 2 !== 0) {
        div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
      } else {
        div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
      }
    } else {
      if (j === 0 || j % 2 === 0) {
        div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
      } else {
        div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
      }
    }
    div.style.width = "11.1%";
    div.style.float = "left";
    div.style.paddingBottom = "11.1%";
    div.style.border = "1px solid black";
    container.append(div);
  }
}