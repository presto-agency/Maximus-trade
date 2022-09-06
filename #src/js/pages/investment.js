window.addEventListener('DOMContentLoaded', function () {
    let currentBlock  = document.querySelector(".investment");
    callPopUp_2(currentBlock)
    customScroll()
    grabCursor()
})

let customScroll = () => {
    thumbMoving()
    window.addEventListener("resize", thumbMoving )
    function thumbMoving (){
        let items = Array.from(document.querySelectorAll('.line-items__item>p'));
        if(items.length>0) {
            let scrollThumb = document.querySelector('.investment__progress-bar>span');
            let portion = `${(100 / items.length)}`;
            scrollThumb.style.left = portion + '%';
            items.forEach(item => {
                item.onclick = () => {
                    if (items.indexOf(item) === 0) {
                        scrollThumb.style.left = portion + '%';
                    } else {
                        scrollThumb.style.left = `${portion * (items.indexOf(item) + 1)}%`;
                    }
                }
            })
        }
    }
}

let grabCursor = () => {
    let containers = document.querySelectorAll('.line-items');
    if (window.screen.width > 1024) {
        let startY;
        let scrollTop;
        let startX;
        let scrollLeft;
        let isDown;

        containers.forEach(container => {
            container.addEventListener('mousedown', e => mouseIsDown(e));
            container.addEventListener('mouseup', e => mouseUp(e))
            container.addEventListener('mouseleave', e => mouseLeave(e));
            container.addEventListener('mousemove', e => mouseMove(e));
            function mouseIsDown(e) {
                isDown = true;
                startY = e.pageY - container.offsetTop;
                startX = e.pageX - container.offsetLeft;
                scrollLeft = container.scrollLeft;
                scrollTop = container.scrollTop;
            }
            function mouseUp(e) {
                isDown = false;
            }
            function mouseLeave(e) {
                isDown = false;
            }
            function mouseMove(e) {
                if (isDown) {
                    e.preventDefault();
                    const y = e.pageY - container.offsetTop;
                    const x = e.pageX - container.offsetLeft;
                    const walkY = y - startY;
                    const walkX = x - startX;
                    container.scrollTop = scrollTop - walkY;
                    container.scrollLeft = scrollLeft - walkX;
                }
            }
        });
    }
}