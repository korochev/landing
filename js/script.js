function toggleElement(e, h, s) { e.classList.toggle(h); if (s) { toggleElement(e, s) } }
function navRound(ele) { var hti = ele.childNodes[0]; var hmt = document.getElementById('header-menu-toggle'); toggleElement(hti, 'menu-toggle__icon_hide', 'menu-toggle__icon_show'); toggleElement(hmt, 'header__menu_hide', 'header__menu_show') }
var mt = document.querySelector('.search__onclick-event'); mt.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') { if (!mt.checked) { mt.checked = !0 } else { mt.checked = !1 } } else { event.preventDefault() }
    if (mt.checked) { document.querySelector('.search__entry-data').focus() } else { mt.blur(); document.querySelector('.btn_big').focus() }
})
document.querySelectorAll('.accordion__tab').forEach(function (et) {
    et.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
            var ri = event.target.getAttribute('for'); document.querySelectorAll('.accordion__radio').forEach(function (abc) { abc.removeAttribute('checked') })
            document.getElementById(ri).setAttribute('checked', 'checked')
        }
    })
})
var lazyLoadInstance = new LazyLoad({}); function toggleElement(e, h, s) { e.classList.toggle(h); if (s) { toggleElement(e, s) } }
function navRound(ele) { var hti = ele.childNodes[0]; var hmt = document.getElementById('header-menu-toggle'); toggleElement(hti, 'menu-toggle__icon_hide', 'menu-toggle__icon_show'); toggleElement(hmt, 'header__menu_hide', 'header__menu_show') }
var mt = document.querySelector('.search__onclick-event'); mt.addEventListener('keydown', function (event) {
    if (event.key == 'Enter') { if (!mt.checked) { mt.checked = !0 } else { mt.checked = !1 } } else { event.preventDefault() }
    if (mt.checked) { document.querySelector('.search__entry-data').focus() } else { mt.blur(); document.querySelector('.btn_big').focus() }
})
document.querySelectorAll('.accordion__tab').forEach(function (et) {
    et.addEventListener('keydown', function (event) {
        if (event.key == 'Enter') {
            var ri = event.target.getAttribute('for'); document.querySelectorAll('.accordion__radio').forEach(function (abc) { abc.removeAttribute('checked') })
            document.getElementById(ri).setAttribute('checked', 'checked')
        }
    })
})
var currentCount = 0;
var sliderImages = document.querySelectorAll('.slider__radio');
function changeSlide() {
    if (currentCount < sliderImages.length) {
        sliderImages[currentCount].checked = true;
        currentCount++;
    }
    else {
        currentCount = 0;
        changeSlide();
    }
}
var timerId = setInterval(changeSlide, 3000);
document.querySelectorAll('.slider__switch').forEach(function (et) { et.addEventListener('click', function (event) { clearTimeout(timerId); }) })
var lazyLoadInstance = new LazyLoad({})
