let kdv = 20;
let gelirVergisi = 25;
let satısBedeli = Number(prompt('Satış bedelini giriniz: '));
let maliyet = Number(prompt('Maliyeti Giriniz : '));

kdv = satısBedeli + (satısBedeli * (kdv / 100));

let kdvHaric = satısBedeli / (1 + 0.2);
console.log(kdvHaric);
brutKar = satısBedeli - maliyet;
gelirVergisi = brutKar * 0.25;
let netKar = brutKar - gelirVergisi;

alert('KDV dahil toplam satış fiyatı: ' + kdv + '\nNet kar : ' + netKar);