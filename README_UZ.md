# Node.js Command-line Tic Tac Toe O'yini

Bu oson, komand qatorli Tic Tac Toe o'yini Node.js orqali o'ynaladi.

## O'rnatish

1. Node.js sizning mashinangizga o'rnatilganligini tekshiring. Terminalingizda `node -v` komandasini yurgizib ko'ring. Agar Node.js o'rnatilgan bo'lsa, Siz terminalda uning versiyasini ko'rishingiz mumkin.
2. Agar Node.js o'rnatilmagan bo'lsa, [Node.js-ni rasmiy saytidan](https://nodejs.org/en) yuklab o'rnating.
3. Ushbu repositoryni kompyuteringizga yuklab oling yoki klon qiling.
4. Terminal orqali repository katalogiga o'ting.
5. Barcha zarur modullarni o'rnatish uchun `npm install` komandasini yurgizing.

## O'yinni boshlash

O'yinni boshlash uchun `npm start` komandasini terminalda yurgizing.

## O'yin Qoidalari

1. O'yin X o'yinchining yurishi bilan boshlanadi.
2. O'yinchilar navbatma-navbat 1 va 9 orasidagi raqamni tanlaydi. Bu raqamlar doskada aniq bir joyga mos keladi:

```
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
```

3. Agar o'yinchi oldindan olingan joyga yurish qilsa, o'yin yangi yurishni so'raydi.
4. O'yinda g'olib chiqqan (gorizontal, vertikal yoki dioganal yo'nalishida uch ta qator) yoki durang (barcha joylar olingan, lekin g'olib yo'q) haqida yakun topguncha davom etadi.

## Testlar

Testlarni yurgizish uchun `npm test` komandasini terminalda yurgizing.

## Eslatma

Bu o'yin command-line interfeysi uchun mo'ljallangan va oddiy veb muhitda ishlay olmaydi.

O'yindan maroq oling!
