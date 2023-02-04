const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const getXX = () => {
    return Math.floor(Math.random() * 6);
} 

var arrX = [getXX(), getXX() , getXX()];
const onChangeX = () => {
    $('#xuc-xac-1').src = `./assets/image/xx/${arrX[0] + 1}.jpg`;
    $('#xuc-xac-2').src = `./assets/image/xx/${arrX[1] + 1}.jpg`;
    $('#xuc-xac-3').src = `./assets/image/xx/${arrX[2] + 1}.jpg`;
}
window.onload = function() {
    onChangeX();
};
console.log(arrX);


const onShake = () => {
    arrX = arrX.map(() => getXX());
    onChangeX();
};

$('.btn.btn-close').onclick = function() {
    if(!$('.bat').classList[1]) {
        $('.bat').classList.add('bat-close');
        $('#closeOpenAudio').play();
    }
}
$('.btn.btn-active').onclick = function() {
    if($('#main .box').classList[1]) {
        console.log('shake funtion return');
        return 0;
    }
    if($('.bat').classList[1]) {
        onShake();
        console.log(arrX);
        $('#shakeAudio').play();
        $('#main .box').classList.add('shake');
        setTimeout(() => {
            $('#main .box').classList.remove('shake');
        }, 3000);
    }
    else {
        alert('Đậy vào đã broo!!!')
    }
}
$('.btn.btn-open').onclick = function() {
    if($('#main .box').classList[1]) {
        console.log('open function return');
        return 0;
    }
    if($('.bat').classList[1]) {
        $('.bat').classList.remove('bat-close');
        $('#closeOpenAudio').play();
    }
}