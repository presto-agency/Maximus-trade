window.addEventListener('DOMContentLoaded', function () {
  sliderClients()
  callPopUp()
  callForgottenPassword()
  scrollToForm()
  dropMenu()
})

let sliderClients = () => {
  let slider = document.querySelector('.our-clients__swiper');
  slider ? new Swiper('.our-clients__swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: 'true',
    speed: 500,
    spaceBetween: 32,
    grabCursor: true,
    pagination: {
      el: '.our-clients__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.our-clients__next',
      prevEl: '.our-clients__prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
      }
    }
  }) : null;
}

let callPopUp = () => {
  let triggersOpen = document.querySelectorAll(".trigger");
  let triggersClose = document.querySelectorAll(".sub-close");
  let body = document.querySelector('body');
  triggersOpen ? triggersOpen.forEach((btn) =>
    btn.addEventListener("click", function () {
      let activeTab = document.querySelector(".active-popup");
      let subPopUp = document.querySelector('.forgotten.active');
      activeTab && activeTab.classList.remove("active-popup");
      let tabAttr = this.getAttribute("data-attr");
      document.getElementById(tabAttr).classList.add("active-popup");
      body.style.overflow = 'hidden';
      subPopUp ? subPopUp.classList.remove('active') : null;
    })
  ) : null;
  triggersClose ? triggersClose.forEach(btnClose =>
    btnClose.addEventListener("click", function () {
      let closeTabAttr = this.getAttribute("data-close");
      document.getElementById(closeTabAttr).classList.remove("active-popup");
      body.style.overflow = '';
    })
  ) : null;
}

let callForgottenPassword = () => {
  let openBtn = document.getElementById('forgotten-go');
  let closeBtn = document.getElementById('forgotten-back');
  let popUp = document.querySelector('.forgotten');
  if (popUp) {
    openBtn.onclick = () => {
      popUp.classList.add('active')
    }
    closeBtn.onclick = () => {
      popUp.classList.remove('active')
    }
  }
}

let scrollToForm = () => {
  let anchor = document.querySelector('.hero-block__content>button');
  if (anchor) {
    let element = document.querySelector('.need-help')
    let topElement = element.offsetTop;
    anchor.addEventListener('click', function (e) {
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: topElement - 150
      });
    })
  }
}

let dropMenu = () => {
  let blockSort = document.getElementById("sort");
  if (!!blockSort) {
    let blockList = document.getElementById("sort-list");
    let elemItemSelect = document.querySelectorAll(".sort-select__item");
    let elemCurrent = document.getElementById("current-value");
    let active = document.querySelector("#sort-list li.active");

    elemCurrent.textContent = active.textContent;

    const hideSelectMenu = () => {
      blockList.classList.remove('container-active');
      blockSort.classList.remove('turn-arrow');
      blockList.style.maxHeight = '0';
    };

    const showSelectMenu = () => {
      blockList.classList.add('container-active');
      blockList.style.maxHeight = blockList.scrollHeight + 'px';
      blockSort.classList.add('turn-arrow');
    };

    const onMouseScroll = () => {
      if (!blockList.classList.contains('container-active')) {
        return
      }
      if (window.scrollY > 0) {
        hideSelectMenu();
      }
    };

    const onOutsideClick = (e) => {
      if (!blockList.classList.contains('container-active')) {
        return
      }
      if (!e.target.classList.contains('sort-select__item') && !e.target.classList.contains('sort-select__current')) {
        hideSelectMenu();
      }
      ;
    };

    const onSelectClick = () => {
      blockList.classList.contains('container-active')
        ? hideSelectMenu()
        : showSelectMenu();
    };

    blockSort.addEventListener('click', onSelectClick);
    window.addEventListener('click', onOutsideClick);
    window.addEventListener('scroll', onMouseScroll);

    elemItemSelect.forEach(item => item.addEventListener('click', function () {
      let elemItemSelectActive = document.querySelectorAll('.sort-select__item.active');
      elemItemSelectActive.forEach(itemActive => itemActive.classList.remove('active'));
      item.classList.add('active');
      elemCurrent.textContent = item.textContent;
      elemCurrent.setAttribute('data-value', item.getAttribute('data-value'));
    }))
  }
};

const getIframeId = () => {
  let reg = /\//g;
  let video_wrapper = document.querySelector('#player_1');
  let video_attribute = video_wrapper.getAttribute('data-src').split(reg);
  return video_attribute[video_attribute.length - 1]
}

const playIframe = () => {
  const playerWrapper = document.querySelector('.player__iframe_preview');
  if(!!playerWrapper){
    playerWrapper.onclick = () => {
      if (playerWrapper.classList.contains('active')) {
        playerWrapper.classList.remove('active')
        player.pauseVideo()
      } else {
        playerWrapper.classList.add('active')
        player.playVideo()
      }
    }
  }
}

playIframe()

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player_1', {
    videoId: `${getIframeId()}`,
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'showinfo': 0,
      'rel': 0,
      'enablejsapi': 1,
      'origin': 'presto-agency.github.io'
    }
  });
}







