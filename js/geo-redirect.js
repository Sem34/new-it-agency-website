// Проверяем, был ли выбран язык пользователем
const userLanguage = localStorage.getItem('language');

// Если язык не был выбран, проверяем страну через API
if (!userLanguage) {
  fetch('https://api.ipgeolocation.io/ipgeo?apiKey=433e9cd6e64743c3b0e33a749f75fa00')
    .then(response => response.json())
    .then(data => {
      if (data.country_code2 === 'UA') {
        // Сохраняем выбор украинского языка и редиректим на украинскую версию
        localStorage.setItem('language', 'ua');
        window.location.href = 'https://itgin.team/ua/';
      }
    });
} else if (userLanguage === 'ua') {
  // Если пользователь ранее выбрал украинский язык, редиректим на украинскую версию
  window.location.href = 'https://itgin.team/ua/';
}

// Сохраняем выбор языка при клике на английскую версию
document.getElementById('english-button').addEventListener('click', function() {
  localStorage.setItem('language', 'en');
  window.location.href = 'https://itgin.team/';
});

// Сохраняем выбор языка при клике на украинскую версию
document.getElementById('ukrainian-button').addEventListener('click', function() {
  localStorage.setItem('language', 'ua');
  window.location.href = 'https://itgin.team/ua/';
});
