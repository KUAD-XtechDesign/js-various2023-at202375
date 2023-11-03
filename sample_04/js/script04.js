let snowcontainer = document.querySelector(".snow-container");

const creatSnow = () => {
  /*雪の要素を生成*/
  let snow = document.createElement("span");
  snow.className ="snow";

  minSize = 5;
  mixSize = 10;

  /*雪の大きさをランダムに決める　*/
  letsnowSaiz = Math.random() * (maxSize - minSize) +minSiza;


  snow.style.width = snowSize + "px"
  snow.style.height = snowSize + "px"

  /*雪の降り始めの位置を決定する　*/
  snow.left = Math.random() * 100 + "%"

  snowContaimer.appendchild(snow);

  /* 10秒後に雪を消す */
  setTimeout(() => {
  snow.remove();


 },10000);
};

setInterval(creatSnow, 100);
