Darcosi
#1867
De miért dupláz?

You missed a call from 
Patrik_21
 that lasted 5 minutes.
 — 11/27/2022 11:47 PM
Darcosi — 11/27/2022 11:48 PM
xd
Patrik_21 — 11/27/2022 11:48 PM
amúgy
szilárdnak linuxon
elég fosul néz ki az oldal xd
nemtom miért
Darcosi — 11/27/2022 11:48 PM
Kapja be a Linuxot
Patrik_21 — 11/27/2022 11:48 PM
de ott is linuxon kell bemutatni
Darcosi — 11/27/2022 11:48 PM
Szerintem az az oldalsó retek miatt
Símán Chrome-ban biztos faszán néz ki
OS-től függetlenül
Patrik_21 — 11/27/2022 11:49 PM
Chromium
xd
Darcosi — 11/27/2022 11:49 PM
Mert ő valami nagy wierd böngészőt használ
Darcosi — 11/27/2022 11:50 PM
Same shit
Majd prog2-n ránézek azért
Patrik_21 — Yesterday at 12:04 AM
jó nagy kaga
Patrik_21 — Yesterday at 12:59 AM
cengiz oldala
Image
Patrik_21 — Today at 2:19 PM
Image
Darcosi — Today at 2:30 PM
xdddd
Hell nah
Hozzá ne nyúljon
Patrik_21 — Today at 2:30 PM
Image
Image
xd
erről tudsz valamit
Darcosi — Today at 2:35 PM
Miagecimet csinál
Patrik_21 — Today at 2:35 PM
nem vágom
de az a baj
hogy az adatbázissal baszakszik
Darcosi — Today at 2:35 PM
Képes utolsó nap elbaszni az egészet
Patrik_21 — Today at 2:36 PM
Image
visszakerült a legjobb product
Darcosi — Today at 2:36 PM
Hell yeah
Patrik_21 — Today at 2:37 PM
xd
Image
ezt láttaad?
Darcosi — Today at 2:38 PM
Nem xdd
Patrik_21 — Today at 4:15 PM
"Success the ordering"
cengiz elfogadó üzenete az oldalon
Darcosi — Today at 4:54 PM
xddd
Englis
Patrik_21 — Today at 5:07 PM
bírsz jönni dc?
Darcosi — Today at 5:16 PM
Nem
Darcosi
 started a call that lasted 17 minutes.
 — Today at 8:31 PM
Patrik_21
 started a call.
 — Today at 8:50 PM
Darcosi — Today at 9:24 PM
Image
Darcosi — Today at 9:39 PM
# Tesztjegyzőkönyv-`Cart`

## 1. Teszteljárások (TP)

### 1.1. Új product hozzáadása a kosárhoz tesztelése
- Azonosító: TP-01
Expand
message.txt
5 KB
10. megbeszélés:
 - Időpont: 2021.11.16.
 - Hely: Discord
 - Résztvevők:
      * Katona Ádám
     * Pál Szilárd
     * Györök Gábor
     * Kabók Dániel Tibor
     * Gyarmati Patrik
     * Kücüktüfekci Cengiz Etem
     * Rózsa Patrik
 - Érintett témák: Jelenlegi állások bemutatása, felmerülő problémák megbeszélése

11. megbeszélés:
 - Időpont: 2021.11.26.
 - Hely: Discord
 - Résztvevők:
      * Katona Ádám
     * Pál Szilárd
     * Györök Gábor
     * Kabók Dániel Tibor
     * Gyarmati Patrik
     * Rózsa Patrik
 - Érintett témák: Adatbázis feltöltése, CSS színek megbeszélése, kategoríák eldöntése

12. megbeszélés:
 - Időpont: 2021.11.29.
 - Hely: Discord
 - Résztvevők:
      * Katona Ádám
     * Györök Gábor
     * Kabók Dániel Tibor
     * Gyarmati Patrik
     * Rózsa Patrik
 - Érintett témák: Merge-ölések, teszt file-ok megírása, végső javítások
﻿
# Tesztjegyzőkönyv-`Cart`

## 1. Teszteljárások (TP)

### 1.1. Új product hozzáadása a kosárhoz tesztelése
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Új product-ot hozzáadunk a kosárhoz

    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk be
    1. lépés: Válasszunk ki egy tetszőleges product-ot
    2. lépés: Kattintsunk az "add to cart" gombra
    3. lépés: Nyissuk meg a kosár oldalát a menüben a kosár ikonra kattintással
    4. lépés: Ellenőrizzük, hogy megjelent-e a kívánt elem a kosárban


### 1.2. Kosár kilistázás tesztelése 
- Azonosító: TP-02
- Tesztesetek: TC-02
- Leírás: Kosár tartalmának kilistázása

    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk be
    1. lépés: Válasszunk ki egy tetszőleges product-okat, ezeket adjuk hozzá a kosarunkhoz, némelyiket többször is
    3. lépés: Nyissuk meg a kosár oldalát a menüben a kosár ikonra kattintással
    4. lépés: Ellenőrizzük, hogy helyesen megjelennek-e a kívánt elemek a kosrában, amelyeket többször is hozzáadtuk, ott a quantity érték annak megfelelő-e

### 1.3. Kosár módosítás tesztelése
- Azonosító: TP-03
- Tesztesetek: TC-03
- Leírás: Size, quantity módosítása, product törlése a kosárból

    0. lépés: Nyissuk meg az alkalmazást és jelentkezzünk be
    1. lépés: Válasszunk ki egy tetszőleges product-ot, ezt adjuk hozzá a kosárhoz
    2. lépés: Nyissuk meg a kosár oldalát a menüben a kosár ikonra kattintással
    3. lépés: Változtassuk meg a quantity-t a "+" és "-" gombokra kattintva
    4. lépés: Ellenőrizzük le, hogy kattintásunknak megfelelően voltozott-e a quantity
    5. lépés: Kattintunk rá az áthúzott piros kosár ikonra a product kosrából való törlésére
    6. lépés: Ellenőrizzük  le, hogy a megfelelő product eltűnt-e a kosárból

## 2. Teszesetek (TC)

### 2.1. Új product hozzáadása a kosárhoz tesztelése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Új product hozzáadása a kosárhoz
- Művelet: Kattintsunk az `add to cart` gombra egy product-nál
- Elvárt kimenet: A kosárban megjelenik az adott product

### 2.2. Kosár kilistázás tesztelése 

#### 2.2.1. TC-02
- TP: TP-01, TP-02
- Leírás: Kosár kilistázás a kosár oldalán 
- Művelet: Addjunk a kosrához több product-ot az `add to cart` gomb segítségével, némelyiket ötbbször is
- Elvárt kimenet: a kilistázásban minden product megjelenik, amelyiket hozzáadtuk, amellyeket pedig többször is, ott annak megfelelően beállítódok a quantity

### 2.3. Kosár módosítás tesztelése

#### 2.3.1. TC-03
- TP: TP-01
- Leírás: A kosárban lévő elemeknek a quantity és size voltoztatása, elemek törlése 
- Művelet: Kosár feltöltése után a kosárban a `+` és `-` segítségével a quantity-t, `size` legördülő menü segítségével a size-t múdosítjuk, a piros cart icon segítségével pedig töröljük az elemek a kosrából
- Elvárt kimenet: A kosár oldalon valós időben frissülnek az adatab a műveleteknek megfelelően

## 3. Tesztriportok (TR)

### 3.1. Új product hozzáadása tesztriportja

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    0. lépés: Bejelentkeztem
    1. lépés: Hozzáadtam AI WITH THE BRAIDS product-ot a kosrához
    2. lépés: A kosár ikon átvitt a kosár oldalára
    3. lépés: A kosár táblázatában megjelent az AI WITH THE BRAIDS product 1-es qunatity-vel
    4. lépés: helyes eredményt kaptam (megfeleő product megfelelő quantity-vel jelent meg)

#### 3.1.1. TR-02 (TC-02)
- TP: TP-01, TP-02
    0. lépés: Bejelentkeztem
    1. lépés: Hozzáadtam AI WITH THE BRAIDS product-ot a kosrához 3x, és a BTK JERSEY-t 1x
    2. lépés: A kosár ikon átvitt a kosár oldalára
    3. lépés: A kosár táblázatában egymás alatt megjelent az AI WITH THE BRAIDS product 3-as qunatity-vel, a BTK JERSEY pedig 1-es quantity-vel
    4. lépés: helyes eredményt kaptam (megfeleő product-ok megfelelő quantity-kkel jelent meg)

#### 3.1.1. TR-03 (TC-03)
- TP: TP-03
    0. lépés: Bejelentkeztem
    1. lépés: Hozzáadtam AI WITH THE BRAIDS product-ot a kosrához 3x, és a BTK JERSEY-t 1x
    2. lépés: A kosár ikon átvitt a kosár oldalára
    3. lépés: A kosár táblázatában egymás alatt megjelent az AI WITH THE BRAIDS product 3-as qunatity-vel, a BTK JERSEY pedig 1-es quantity-vel
    4. lépés: Rákattintottam a `-` gombra 12x az AI WITH THE BRAIDS product-nál, a piros korá ikonra pedig a BTK JERSEY
    4. lépés: helyes eredményt kaptam (az AI WITH THE BRAIDS product-nál a quantity 1 lett, a BTK JERSEY eltűnt a kosárból)
message.txt
5 KB