# Tesztjegyzőkönyv-`Regisztráció és Bejelentkezés`

## 1. Teszteljárások (TP)

### 1.1. Regisztráció - Authentikáció tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: Regisztráció során firebase-be való feltöltés

    0. lépés: Nyissuk meg az alkalmazást, és menjünk rá a regisztrációs oldalra
    1. lépés: Írjuk be az átlalunk használni kívánt adatokat
    2. lépés: Nyomjuk meg a regisztráció gombot
    3. lépés: Ellenőrrizük az eredményt. 
    - Elvárt eredmény: Regisztrált adatok felkerülnek a firebase felhasználók listájára

### 1.1. Bejelentkezés - Beléptetés tesztelése 
- Azonosító: TP-02
- Tesztesetek: TC-02
- Leírás: Regisztráció során firebase-be való feltöltés

    0. lépés: Nyissuk meg az alkalmazást, és menjünk rá a bejelentkezés oldalra
    1. lépés: Írjuk be a felregisztrált adatainkat
    2. lépés: Nyomjuk meg a bejelentkezés gombot
    3. lépés: Ellenőrrizük az eredményt. 
    - Elvárt eredmény: A felhasználó sikeresen bejelentkezett

## 2. Teszesetek (TC)

### 2.1. Regisztráció - Firebase Authentikáció Feltöltése

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Regisztráció - `Firebase Authentication` adatbázis feltöltése tesztelése
- Bemenet: Adatok kitöltése: 
- `Username` = Felhasználónév megadása
- `Email` = E-mail cím megadása 
- `Password` = Jelszó megadása
- `Password megerősítése` = Jelszó megerősítése
- Művelet: Rákattintunk a "Sign-up" gombra
- Elvárt kimenet: A `Firebase Authentication` adatbázisban megjelennek az adatok

### 2.2. Bejelentkezés - Felhasználó Beléptetése

#### 2.2.2. TC-02
- TP: TP-02
- Leírás: Bejelentkezése - `Firebase Authentication` adatbázisban megegyező adatok esetén a felhasználó beléptetése
- Bemenet: Adatok kitöltése: 
- `Email` = E-mail cím megadása 
- `Password` = Jelszó megadása
- Művelet: Rákattintunk a "Sign-in" gombra
- Elvárt kimenet: A felhasználó sikeresen belépett és hozzáfér a korlátozott oldalakhoz.

## 3. Tesztriportok (TR)

### 3.1. Regisztráció - Firebase Authentikáció Feltöltésének Tesztriportja

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: `Patrik` felhasználó nevet beírtam
    2. lépés: `patrik@gmail.com` emailt beírtam
    3. lépés: `alma123` jelszót beírtam
    4. lépés: `alma123` megerősítő jelszót beírtam
    5. lépés: a gomb egyszeri megnyomás feltöltötte az adatokat és átírányított a products oldalra
    6. `Végeredmény`: helyes eredményt kaptam (adatok felkerültek az a Firebase adatbázisba)

#### 3.1.2. TR-02 (TC-01)
- TP: TP-01
    1. lépés: `Patrik` felhasználó nevet beírtam
    2. lépés: `patrik@gmail.com` emailt beírtam
    3. lépés: `alma123` jelszót beírtam
    4. lépés: `alma` nem egyező megerősítő jelszót beírtam
    5. lépés: a gomb egyszeri megnyomás feltöltötte az adatokat és átírányított a products oldalra
    6. `Végeredmény`: hibaüzenetet kaptam : `Passwords do not match`

#### 3.1.3. TR-03 (TC-01)
- TP: TP-01
    1. lépés: `Patrik` felhasználó nevet beírtam
    2. lépés: `patrik.gmail.com` helytelen formátumú emailt beírtam
    3. lépés: `alma123` jelszót beírtam
    4. lépés: `alma123` megerősítő jelszót beírtam
    5. lépés: a gomb egyszeri megnyomás feltöltötte az adatokat és átírányított a products oldalra
    6. `Végeredmény`: lépés: hibaüzenetet kaptam : `Invalid e-mail address`



### 3.2. Bejelentkezés - Felhasználó Beléptetésének Tesztriportja

   #### 3.2.1. TR-04 (TC-02)
- TP: TP-02
    1. lépés: `patrik@gmail.com` helyes emailt beírtam
    2. lépés: `alm123` helyes jelszót beírtam
    3. lépés: `Sign-in` gomb megnyomása
    4. `Végeredmény`: Helyes eredmény, a Felhasználó sikeresen bejelentkezett és át lett irányítva a Products oldalra.

#### 3.2.2. TR-05 (TC-02)
- TP: TP-02
    1. lépés: `patrik@gmail.com` emailt beírtam
    2. lépés: `körte987` helytelen jelszót beírtam
    3. lépés: `Sign-in` gomb megnyomása
    4. `Végeredmény`: Hibaüzenet, valamint nem léptette be a felhasználót helytelen jelszóval, maradt a bejelentkező felületen

#### 3.2.3. TR-06 (TC-02)
- TP: TP-02
    1. lépés: `patrik@freemail.com` helytelen emailt beírtam
    2. lépés: `alma123` helyes jelszót beírtam
    3. lépés: `Sign-in` gomb megnyomása
    4. `Végeredmény`: Hibaüzenet, valamint nem léptette be a felhasználót helytelen email címmel, maradt a bejelentkező felületen
    