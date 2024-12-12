// makeArray fonksiyonu, iki dizi ve maksimum uzunluk alır ve birleşik dizinin uzunluğunu maksimum uzunluk ile sınırlar
function makeArray(firstArray, secondArray, maxLength) {
  // İlk diziyi ve ikinci diziyi birleştirir
  const newArray = firstArray.concat(secondArray);

  // Yeni dizinin uzunluğu belirtilen maksimum uzunluğu aşarsa, uzunluğu maksimum uzunluğa ayarlar
  if (newArray.length > maxLength) {
    newArray.length = maxLength;
  }

  // Sonuçta oluşan diziyi döndürür
  return newArray;
}

// Testler
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// getUserNames fonksiyonu, kullanıcı nesnelerinin bir dizisinden kullanıcı adlarını içeren bir dizi döndürür
const getUserNames = users => users.map(user => user.name);

////////////
console.log(
  getUserNames([
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
);
// Bu kodun çıktısı:
// [
//   'Moore Hensley',
//   'Sharlene Bush',
//   'Ross Vazquez',
//   'Elma Head',
//   'Carey Barr',
//   'Blackburn Dotson',
//   'Sheree Anthony'
// ]
