# Tesztjegyzőkönyv-`User management`

## 1. Teszteljárások (TP)

### 1.1. Regisztráció - adatbázis tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Regisztráció során adatbázisba feltöltés

    0. lépés: Nyissuk meg az alkalmazást, és menjünk rá a regisztrációs oldalra
    1. lépés: Írjuk be az átlalunk használni kívánt adatokat
    2. lépés: Nyomjuk meg a regisztráció gombot
    3. lépés: Ellenőrrizük az eredményt. Elvárt eredmény: Regisztrált adatok bekerülnek az adatbázisba

### 1.2. Kilistázás tesztelése 
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: Felhasználók adatainak kilistázása

    0. lépés: Jelentkezzünk be az admin felhasználóval
    1. lépés: Nyissuk meg a "user management" menüt a lenyíló listából
    2. lépés: Ellenőrízzük az eredményt. Elvárt eredmény: Felhasználók adatai sikeresen kilistázásra kerülnek

### 1.3. CRUD tesztelése 
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: CRUD műveletek sikeres működése

    0. lépés: Nyissuk meg a "user management" menüt a lenyíló listából
    1. lépés: Válasszuk ki az általunk használni kívánt funckiót
    2. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: CRUD funkciók sikeresen működnek

## 2. Teszesetek (TC)

### 2.1. Felhasználó törlésének tesztesete

#### 2.1.1. TC-01
- TP: TP-03
- Leírás: Felhasználó törlésének tesztelése
- Művelet: Rákattintunk a "Delete" gombra az egyik felhasználó sorában
- Elvárt kimenet: Az adatbázisból és a kilistázásból törlődik az adott felhasználó

### 2.2. Felhasználó módosításának tesztesete

#### 2.2.1. TC-02
- TP: TP-03
- Leírás: Felhasználó adatainak módosításának tesztesete
- Bemenet: Általunk módosítani kívánt adattagok átírása, ezestben: `email` = helpbro@gmail.com
- Művelet: nyomjuk meg az `Edit user` gombot
- Elvárt kimenet: a kilistázásban a megfelelő mező (email) tartalma: `email`= helpbro@gmail.com

#### 2.2.2. TC-03
- TP: TP-03
- Leírás: Felhasználó adatainak módosításának tesztesete
- Bemenet: Általunk módosítani kívánt adattagok átírása, ezestben: `email` =
- Művelet: nyomjuk meg az `Edit user` gombot
- Elvárt kimenet: a kilistázásban a megfelelő mező (email) alatt: `"Invalid Email"` hiba

### 2.3. Regisztráció - adatbázisfeltöltése tesztesete

#### 2.3.1. TC-01
- TP: TP-01
- Leírás: Regisztráció - adatbázisfeltöltése tesztelése
- Bemenet: Adatok kitöltése: `email` = helpbro@gmail.com, `password` = helpbro
- Művelet: Rákattintunk a "Register" gombra
- Elvárt kimenet: Az adatbázisba felkerülnek a felhasználó adatai

## 3. Tesztriportok (TR)

### 3.1. Regisztráció - adatbázisfeltöltése tesztriportja

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: helpbro@gmail.com-t beírtam
    2. lépés: helpbro-t beírtam 
    3. lépés: a gomb egyszeri megnyomás átirányított
    4. lépés: helyes eredményt kaptam (adatok felkerültek az adatbázisba)

### 3.2. Felhasználó törlésének tesztriportja

#### 3.2.1. TR-01 (TC-01)
- TP: TP-03
    1. lépés: A felhasználókat kilistáztam
    2. lépés: a választott felhasználó melletti "Delete" gomb egyszeri megnyomás futtatja a szkriptet
    3. lépés: helyes eredményt kaptam (felhasználó törlődött az adatbázisból és a kilistázásból is eltűnt)

### 3.3. Felhasználó módosításának tesztriportjai

#### 3.3.1. TR-01 (TC-02)
- TP: TP-03
    1. lépés: a választott felhasználó melletti "Edit" gomb egyszeri megnyomás futtatja a szkriptet
    2. lépés: a kívánt adatokat átírom más értékre
    3. lépés: megnyomom az "Edit user" gombot
    3. lépés: helyes eredményt kaptam (felhasználó módosult az adatbázisban és a kilistázásban is)

#### 3.3.1. TR-02 (TC-03)
- TP: TP-03
    1. lépés: a választott felhasználó melletti "Edit" gomb egyszeri megnyomás futtatja a szkriptet
    2. lépés: a kívánt adatokat átírom üresre
    3. lépés: megnyomom az "Edit user" gombot
    3. lépés: helyes eredményt kaptam (felhasználó nem módosult az adatbázisban és a kilistázásban sem, helyette hibaüzenetet kaptam)

### 3.4. Felhasználó kilistázásnak tesztriportja

#### 3.4.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: Megnyomom a lenyíló listában az "user management" gombot
    2. lépés: helyes eredményt kaptam (a felhasználók adatai sikeresen kilistázásra kerültek az oldalon)


    