let bars = document.getElementById("bars");

let links = document.querySelector(".links");

bars.addEventListener("click", function () {
  links.classList.toggle("none");
});

let text = document.querySelector("blockquote");

let i = 0,
  mytext = "لمسة من الفخامة والأناقة والجمال";

function typing() {
  if (i < mytext.length) {
    text.innerHTML += mytext.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}
typing();

let text2 = document.querySelector(".q-1");

let j = 0,
  mytext2 = "فن العيش الأنيق معنا غير";

function typing2() {
  if (j < mytext2.length) {
    text2.innerHTML += mytext2.charAt(j);
    j++;
    setTimeout(typing2, 50);
  }
}
typing2();

let text3 = document.querySelector(".q-2");

let k = 0,
  mytext3 = "لمسات بسيطة قد تغير المكان الى الأفضل ";

function typing3() {
  if (k < mytext3.length) {
    text3.innerHTML += mytext3.charAt(k);
    k++;
    setTimeout(typing3, 50);
  }
}
typing3();

let text4 = document.querySelector(".q-3");

let l = 0,
  mytext4 = "غير الأن بدون تردد";

function typing4() {
  if (l < mytext4.length) {
    text4.innerHTML += mytext4.charAt(l);
    l++;
    setTimeout(typing4, 50);
  }
}
typing4();
