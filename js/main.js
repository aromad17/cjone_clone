
window.addEventListener('load', () => {

  let rollingOn = (bannerNum) => {
    for (let el of rollingA) {
      el.classList.remove("on");
    }
    rollingA[bannerNum].classList.add("on");
  }

  const arrowA = document.querySelectorAll(".arrow>a");

  let secWhite = (bannerNum) => {
    if (bannerSection[bannerNum].classList.contains("white")) {
      for (let el of arrowA) {
        el.classList.add("white");
      }
      for (let el of rollingA) {
        el.classList.add("white");
      }
    } else {
      for (let el of arrowA) {
        el.classList.remove("white");
      }
      for (let el of rollingA) {
        el.classList.remove("white");
      }
    }

  }



  const topMenudDD = document.querySelectorAll('.topMenu>dd')

  topMenudDD[4].addEventListener('click', e => {
    e.currentTarget.classList.toggle('on');
    if (e.currentTarget.classList.contains('on')) {
      e.currentTarget.children[0].setAttribute("title", "고객센터 닫기")
    } else {
      e.currentTarget.children[0].setAttribute("title", "고객센터 열기")
    }
  })

  const headerWrap = document.querySelector('.header_wrap')
  const menu = document.querySelectorAll('nav.gnb>ul>li')
  const subMenu = document.querySelectorAll('nav.gnb>ul>li>ul')
  const serviceCenter = document.querySelector('.service_center');
  const srchOpen = document.querySelector('.srch_open')
  const srchBox = document.querySelector('form.srch')


  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('mouseover', () => {
      if (serviceCenter.classList.contains("on")) {
        serviceCenter.classList.remove("on");
      }
      if (srchBox.classList.contains("on")) {
        srchBox.classList.remove("on");
        srchOpen.classList.remove("on");
      }



      headerWrap.classList.add('on');

      subMenu.forEach(item => {
        item.classList.add('on')
      });
    }); //mouseover

    menu[i].addEventListener('mouseleave', () => {
      headerWrap.classList.remove('on');
      subMenu.forEach(item => {
        item.classList.remove('on')
      });
    }); //mouseleave

    menu[i].children[0].addEventListener('focus', () => {
      headerWrap.classList.add('on');
      subMenu.forEach(item => {
        item.classList.add('on')
      });
    }); //focus

    menu[i].children[0].addEventListener('blur', () => {
      headerWrap.classList.remove('on');
      subMenu.forEach(item => {
        item.classList.remove('on')
      });
    }); //blur
  }








  // 검색 열기닫기

  srchOpen.addEventListener('click', e => {
    e.preventDefault();
    e.currentTarget.classList.toggle('on')
    srchBox.classList.toggle('on');

    if (e.currentTarget.classList.contains('on')) {
      e.currentTarget.children[0].setAttribute("title", "검색입력서식 닫기")
    } else {
      e.currentTarget.children[0].setAttribute("title", "검색입력서식 열기")
    }





  })




  //로그인 이미지

  const appear = document.querySelector(".appear");
  const loop = document.querySelector(".loop");
  let appearImg = "";
  let loopImg = "";

  for (let i = 0; i <= 56; i++) {
    if (i < 10) {
      i = "0" + i;
    }
    appearImg = appear.innerHTML += `<img src = "img/appear/appear_000${i}.png" alt="NOW"/>`;

  }

  appear.innerHTML = appearImg;

  for (let j = 0; j <= 81; j++) {
    if (j < 10) {
      j = "0" + j;
    }
    loopImg = loop.innerHTML += `<img src = "img/loop/loop_000${j}.png" alt="loop img"/>`;

  }

  loop.innerHTML = loopImg;
  const loginAppear = document.querySelectorAll(".appear>img");
  const loginLoop = document.querySelectorAll(".loop>img");



  for (let h = 0; h < loginAppear.length; h++) {
    loginAppear[h].style.animation = `ani 2.85s linear ${0.05 * h}s 1`;
  }

  for (let j = 0; j < loginLoop.length; j++) {
    loginLoop[j].style.animation = `ani 4.1s linear ${2.85 + (j * 0.05)}s infinite`;
  }


  const contentLi = document.querySelectorAll(".content1>ul>li")
  const quick = document.querySelectorAll(".content1>ul>li>a>span");
  const quick1 = document.querySelector(".quick1");
  const quick2 = document.querySelector(".quick2");
  const quick3 = document.querySelector(".quick3");
  const quick4 = document.querySelector(".quick4");


  for (let i = 0; i < 20; i++) {

    if (i < 10) {
      i = "0" + i;
    }
    quick1.innerHTML += `<img src = "img/quick01/quick01_000${i}.png" alt="퀵이미지1">`;
    quick2.innerHTML += `<img src = "img/quick02/quick02_000${i}.png" alt="퀵이미지2">`;
    quick3.innerHTML += `<img src = "img/quick03/quick03_000${i}.png" alt="퀵이미지3">`;
    quick4.innerHTML += `<img src = "img/quick04/quick04_000${i}.png" alt="퀵이미지4">`;
  }

  for (let q = 0; q < contentLi.length; q++) {
    for (let k = 0; k < 20; k++) {
      contentLi[q].addEventListener("mouseover", e => {
        let img = e.currentTarget.children[0].children[0].children;

        img[k].style.opacity = 0;
        img[k].style.animation = `quickAni 1s linear ${0.05 * k}s infinite`;
      })

      contentLi[q].addEventListener("mouseout", e => {
        let img = e.currentTarget.children[0].children[0].children;

        img[k].style.animation = "none";
        img[0].style.opacity = 1;
      })

    }
  }

  //배너
  const banner = document.querySelector(".banner_frame");
  const bannerFrame = document.querySelector(".banner");
  const bannerSection = banner.querySelectorAll("section");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const playBtn = document.querySelector(".play");
  const bannerRoll = document.querySelectorAll(".banner_roll>li");
  const rollingA = document.querySelectorAll(".banner_roll>li>a");
  let idxNum = 0;
  let getBannerWid = bannerFrame.clientWidth;





  window.addEventListener("resize", () => {
    getBannerWid = bannerFrame.clientWidth;
    banner.style.left = (getBannerWid * idxNum) + "px";
  })


  prevBtn.addEventListener("click", e => {
    //prev
    idxNum++;

    if (idxNum >= 1) {
      idxNum = -3;
    }
    let leftVal = idxNum * getBannerWid;
    banner.style.left = leftVal + "px";
    console.log(idxNum);
    rollingOn((idxNum * -1));
    secWhite((idxNum * -1));

    autoBanner = setTimeout(bannerPlay, 5000);

  })


  // next
  nextBtn.addEventListener("click", e => {
    idxNum--;
    if (idxNum <= -4) {
      idxNum = 0;
    }
    let leftVal = idxNum * getBannerWid;
    banner.style.left = leftVal + "px";
    console.log(idxNum);
    rollingOn((idxNum * -1));
    secWhite((idxNum * -1));

    autoBanner = setTimeout(bannerPlay, 5000);

  })

  let bannerPlay = () => {
    idxNum--;
    if (idxNum <= -4) {
      idxNum = 0;
    }
    let leftVal = idxNum * getBannerWid;
    banner.style.left = leftVal + "px";
    rollingOn((idxNum * -1));
    secWhite((idxNum * -1));

    autoBanner = setTimeout(bannerPlay, 5000);

  };

  let autoBanner = setTimeout(bannerPlay, 5000);

  //play

  let flag = true;

  playBtn.addEventListener("click", e => {
    if (flag) {
      e.preventDefault();
      playBtn.classList.add("on");
      clearTimeout(autoBanner);
      flag = false;
    } else {
      e.preventDefault();
      playBtn.classList.remove("on");
      autoBanner = setTimeout(bannerPlay, 5000);
      flag = true;
    }
  })



  bannerRoll.forEach((item, idx) => {

    item.addEventListener("click", (e) => {

      setTimeout(() => {
        e.preventDefault();
        clearInterval(autoBanner);
        banner.style.left = `${idx * (-getBannerWid)}px`;
        for (let el of rollingA) {
          el.classList.remove("on");
        }
        rollingA[idx].classList.add("on");
      }, 100);



    })

  })

  //스크롤이벤트

  const topBtn = document.querySelector(".top");

  topBtn.addEventListener("click", e => {
    e.preventDefault();
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  })

  window.addEventListener("scroll", () => {

    let scroll = document.querySelector("html").scrollTop;

    // 도넛
    const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
    const doughnut_Left_s = document.querySelector(".doughnut_Left_s");
    const combine_Left = document.querySelector(".combine_Left");
    //left
    const doughnut_Center_L = document.querySelector(".doughnut_Center_L");
    const doughnut_Center_s = document.querySelector(".doughnut_Center_s");
    //center
    const doughnut_right_M = document.querySelector(".doughnut_right_M");
    const doughnut_right_s = document.querySelector(".doughnut_right_s");
    const doughnut_right = document.querySelector(".doughnut_right");
    //right

    combine_Left.style.top = `${scroll * 0.5}px`;
    doughnut_Left_s.style.top = `${scroll * 0.5}px`;
    doughnut_Left_L.style.top = `${1310 - scroll * 0.8}px`;
    // left
    doughnut_Center_L.style.top = `${scroll * 0.7}px`;
    doughnut_Center_s.style.top = `${scroll * 0.9}px`;
    // center
    doughnut_right_M.style.top = `${scroll * 0.9}px`;
    doughnut_right_s.style.top = `${300 - scroll * 0.2}px`;
    doughnut_right.style.top = `${900 - scroll * 0.6}px`;
    // right

    if (scroll < 50) {
      topBtn.style.display = "none";
    } else if (scroll < 2410 && scroll >= 50) {
      topBtn.classList.remove("on");
      topBtn.style.display = "block";
    }
    else if (scroll >= 2410) {
      topBtn.classList.add("on");
    }

  })


  const all = document.querySelectorAll(".content3_inner>div>ul>li");
  const content3Sel = document.querySelectorAll(".content3_inner>ul>li");
  const content3SelA = document.querySelectorAll(".content3_inner>ul>li>a");
  const ent = document.querySelectorAll(".ent")
  const shop = document.querySelectorAll(".shop")
  const dinner = document.querySelectorAll(".dinner")
  const fedex = document.querySelectorAll(".fedex")

  all.forEach((item, idx) => {
    item.addEventListener("mouseover", (e) => {
      e.currentTarget.classList.add("on");
    })
    item.addEventListener("mouseout", (e) => {
      e.currentTarget.classList.remove("on");
    })
  })


  function displaySel(value) {
    for (let el of all) {
      el.style.display = "none";
    }
    for (let el of value) {
      el.style.display = "block";
    }
  }

  // li a를 클릭했을때
  content3Sel.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      let classNam = e.currentTarget.getAttribute("class");
      console.log(classNam)
      switch (classNam) {
        case "ent":
          displaySel(ent);
          break;
        case "shop":
          displaySel(shop);
          break;
        case "dinner":
          displaySel(dinner);
          break;
        case "fedex":
          displaySel(fedex);
          break;
        case "all":
          for (let el of all) {
            displaySel(all);
          }
          break;
      }

      for (let el of content3SelA) {
        el.classList.remove("on");
      }
      content3SelA[idx].classList.add("on");
    })
  })



  const famSite = document.querySelector(".family_site");

  famSite.addEventListener("click", (e) => {
    e.preventDefault();
    famSite.classList.toggle("on");

  })


  const moBtn = document.querySelector(".moBtn");
  const moClose = document.querySelector(".moBtn_close");
  const body = document.querySelector("body");
  const moBg = document.querySelector("div.bg")
  const mob = document.querySelector(".mob")
  const moServiceCenter = document.querySelector(".service_center");
  const moTopSub = document.querySelectorAll(".mo_gnb>ul>li");
  moFlag = 0;


  function activation(i, value) {
    for (let el of value) {
      el.classList.remove("on");
    }
    value[i].classList.add("on");
  }

  moBtn.addEventListener("click", e => {
    e.preventDefault();
    body.classList.add("on");
    moBg.classList.add("on");
    moClose.classList.add("on");
    mob.classList.add("on");
  })

  moClose.addEventListener("click", e => {
    e.preventDefault();
    body.classList.remove("on");
    moBg.classList.remove("on");
    moClose.classList.remove("on");
    mob.classList.remove("on");
  })

  moServiceCenter.addEventListener("click", e => {
    e.preventDefault();
    moServiceCenter.classList.toggle("on");
  })

  moTopSub.forEach((item, idx) => {
    item.addEventListener("click", e => {

      if (item.classList.contains("on")) {
        for (let el of moTopSub) {
          el.classList.remove('on');
        }
      } else {
        activation(idx, moTopSub);
      }
    })
  })


})
