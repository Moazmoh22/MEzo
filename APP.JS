$(document).ready(function(){
    $('.slick-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});
AOS.init({
    duration: 1200, // مدة التأثير
    once: true // التأثير يحدث مرة واحدة فقط
});
window.onload = function() {
    document.getElementById('welcome-popup').style.display = 'flex';
};

function closePopup() {
    document.getElementById('welcome-popup').style.display = 'none';
}
// كود الحركة البسيطة عند التمرير
window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(function(element) {
        let position = element.getBoundingClientRect().top;
        if (position < window.innerHeight) {
            element.classList.add('animate');
        }
    });
});
const news = [
    "الأهلي يفوز بدوري أبطال إفريقيا للمرة 12!",
    "جدول مباريات الفريق في الدوري المصري الممتاز.",
    "اللاعب محمد الشناوي ينضم للمنتخب الوطني."
];

const newsList = document.getElementById('latest-news');
news.forEach(item => {
    let listItem = document.createElement('li');
    listItem.textContent = item;
    newsList.appendChild(listItem);
});
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

