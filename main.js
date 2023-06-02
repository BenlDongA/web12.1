// chuyen doi cac hinh anh tieu de
document.addEventListener('DOMContentLoaded', function() {
    var carousel = new bootstrap.Carousel(document.getElementById('carouselExampleCaptions'), {
      interval: 2500, // Đặt thời gian trượt giữa các slide (đơn vị: mili giây)
      ride: true // Tự động chuyển đổi slide
    });
  });


  document.querySelector('.arrow-left').addEventListener('click', function() {
    const boxContainer = document.querySelector('.box-container');
    const scrollAmount = 254; // Khoảng cách trượt (800px)
    
    boxContainer.scrollLeft -= scrollAmount;
});

document.querySelector('.arrow-right').addEventListener('click', function() {
    const boxContainer = document.querySelector('.box-container');
    const scrollAmount = 254 // Khoảng cách trượt (800px)
    
    boxContainer.scrollLeft += scrollAmount;
});

    const boxContainer = document.querySelector('.box-container');
    const scrollAmount = 762; 
    let isReverse = false; // Biến để theo dõi hướng chạy của danh sách
    
    function autoScroll() {
    const currentScrollPosition = boxContainer.scrollLeft;
    const maxScrollPosition = boxContainer.scrollWidth - boxContainer.clientWidth;
    
    if (isReverse) {
    boxContainer.scrollTo({ left: currentScrollPosition - scrollAmount, behavior: 'smooth' });
    if (currentScrollPosition - scrollAmount <= 0) {
      isReverse = false;
    }
    } else {
    boxContainer.scrollTo({ left: currentScrollPosition + scrollAmount, behavior: 'smooth' });
    if (currentScrollPosition + scrollAmount >= maxScrollPosition) {
      isReverse = true;
    }
    }
    }
    
    setInterval(autoScroll, 5000);
    // dong hò
    function updateCountdown(element, countdownDate) {
      var daysElement = element.querySelector('.countdown-section:nth-child(1) .countdown-amount');
      var hoursElement = element.querySelector('.countdown-section:nth-child(2) .countdown-amount');
      var minutesElement = element.querySelector('.countdown-section:nth-child(3) .countdown-amount');
      var secondsElement = element.querySelector('.countdown-section:nth-child(4) .countdown-amount');
  
      var countdownInterval = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;
  
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
        daysElement.innerHTML = days;
        hoursElement.innerHTML = ("0" + hours).slice(-2);
        minutesElement.innerHTML = ("0" + minutes).slice(-2);
        secondsElement.innerHTML = ("0" + seconds).slice(-2);
  
        if (distance < 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);
    }
  
    var countdownElements = document.querySelectorAll('.dongho .deals-countdown');
    countdownElements.forEach(function(element) {
      var countdownDate = new Date("2028/10/10 00:00:00").getTime();
      updateCountdown(element, countdownDate);
    })