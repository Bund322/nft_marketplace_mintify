//Перемещение по меню
$('.header__href').on('click', function () {
    $('.header__href_current').add(this).toggleClass('header__href_current');
});

//Очистка текста из поиска

$('#search').on('input', function () {
    if($(this).val()) {
        $('#clear-button').css('display' , 'block');
    }else {
        $('#clear-button').css('display' , 'none');
    }
    
});
document.getElementById('clear-button').onclick = function () {
    document.getElementById('search').value  = '';
    $('#clear-button').css('display' , 'none');
};


//Меню аккардеон
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion_active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//Всплывающее окно
$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    $("#popup1").hide();
});
//Функция отображения PopUp
$('.main-content-left__create-item_black').on('click', function PopUpShow(){
    $("#popup1").show();
    
    ////Ввод только цифр
    $('.nft-card__eth_new').bind("change keyup input click", function() {
        if (this.value.match(/[^0-9\.]/g)) {
            this.value = this.value.replace(/[^0-9\.]/g, '');
        }
    });
    ////
});

//Функция скрытия PopUp
$('.popup-hide').on('click', function PopUpHide(){
    $("#popup1").hide();
});



//Слайд страницы
$('.number').on('click', function () {
    $('.number_active').add(this).toggleClass('number_active');
});




//перемещение файла
var dropZone = $('#upload-container');
dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
    return false;
});
dropZone.on('dragover dragenter', function() {
    dropZone.addClass('dragover');
});

dropZone.on('dragleave', function(e) {
    dropZone.removeClass('dragover');
});
dropZone.on('drop', function(e) {
    dropZone.removeClass('dragover');
});
