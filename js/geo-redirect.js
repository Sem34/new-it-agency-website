// window.addEventListener('DOMContentLoaded', (event) => {
//   const englishButton = document.getElementById('english-button');
//   const ukrainianButton = document.getElementById('ukrainian-button');

//   // Для английской версии
//   if (englishButton) {
//     englishButton.addEventListener('click', function() {
//       localStorage.setItem('language', 'en');
//       window.location.href = 'https://itgin.team/';
//     });
//   }

//   // Для украинской версии
//   if (ukrainianButton) {
//     ukrainianButton.addEventListener('click', function() {
//       localStorage.setItem('language', 'ua');
//       window.location.href = 'https://itgin.team/ua/';
//     });
//   }

//   // Получаем текущий выбранный язык пользователя
//   const userLanguage = localStorage.getItem('language');

//   // Если язык не был выбран, проверяем страну через API
//   if (!userLanguage) {
//     fetch('https://api.ipgeolocation.io/ipgeo?apiKey=433e9cd6e64743c3b0e33a749f75fa00')
//       .then(response => response.json())
//       .then(data => {
//         if (data.country_code2 === 'UA' && window.location.pathname !== '/ua/') {
//           // Если пользователь из Украины и не находится на украинской версии, редиректим
//           window.location.href = 'https://itgin.team/ua/';
//           localStorage.setItem('language', 'ua');  // Сохраняем выбор украинского языка
//         }
//       });
//   } else {
//     // Если пользователь ранее выбрал язык и это не та страница, на которую он хочет попасть
//     if (userLanguage === 'ua' && window.location.pathname !== '/ua/') {
//       window.location.href = 'https://itgin.team/ua/';
//     } else if (userLanguage === 'en' && window.location.pathname !== '/') {
//       window.location.href = 'https://itgin.team/';
//     }
//   }
// });
