let snowcontainer = document.querySelector(".snow-container");

const creatSnow = () => {
  /*雪の要素を生成*/
  let snow = document.createElement("span");
  snow.className ="snow";

  minSize = 5;
  mixSize = 10;

  /*雪の大きさをランダムに決める　*/
  let snowSaiz = Math.random() * (maxSize - minSize) +minSiza;

  snow.style.width = snowSaiz + "px"
  snow.style.height = snowSaiz + "px"

  /*雪の降り始めの位置を決定する　*/
  snow.left = Math.random() * 100 + "%"

  snowcontainer.appendchild(snow);

  /* 10秒後に雪を消す */
  setTimeout(() => {
     snow.remove();
  },10000);
};

setInterval(creatSnow, 100);
