/*雪をランダムに降らせる*/
let snowContainer = document.querySelector(".snow-container");

const creatSnow = () => {
  /*雪の要素を生成*/
  let snow = document.createElement("span");
  snow.className ="snow";

  minSize = 5;
  maxSize = 10;

  /*雪の大きさをランダムに決める　*/
  let snowSaize = Math.random() * (maxSize - minSize) +minSize;

  snow.style.width = snowSaize + "px"
  snow.style.height = snowSaize + "px"

  /*雪の降り始めの位置を決定する　*/
  snow.style.left = Math.random() * 100 + "%"

  snowContainer.appendChild(snow);

  /* 10秒後に雪を消す */
  setTimeout(() => {
     snow.remove();
  },10000);
};

setInterval(creatSnow, 100);
