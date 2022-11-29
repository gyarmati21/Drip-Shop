# Tesztjegyzőkönyv-`Product management`

## 1. Teszteljárások (TP)
## FONTOS CSAK ADMIN HASZNÁLHATJA

### 1.1. Termék létrehozása - adatbázis tesztelése 
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Létrehozás során adatbázisba feltöltés

    0. lépés: Nyissuk meg az alkalmazást, és menjünk rá a product management oldalra
    1. lépés: Írjuk be az átlalunk létrehozni kívánt product adatait
    2. lépés: Nyomjuk meg a hozzáadás gombot
    3. lépés: Ellenőrrizük az eredményt. Elvárt eredmény: Az alsó listában megjelenik a termék

### 1.2. Kilistázás tesztelése 
- Azonosító: TP-02
- Tesztesetek: TC-01
- Leírás: Termékek adatainak kilistázása

    0. lépés: Jelentkezzünk be az admin felhasználóval
    1. lépés: Nyissuk meg a "product management" menüt a lenyíló listából
    2. lépés: Ellenőrízzük az eredményt. Elvárt eredmény: Termék adatai sikeresen kilistázásra kerülnek

### 1.3. CRUD tesztelése 
- Azonosító: TP-03
- Tesztesetek: TC-01, TC-02, TC-03
- Leírás: CRUD műveletek sikeres működése

    0. lépés: Nyissuk meg a "product management" menüt a lenyíló listából
    1. lépés: Válasszuk ki az általunk használni kívánt funckiót, értelemszerűen töltsük ki vagy nyomjuk meg a gombot
    2. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: CRUD funkciók sikeresen működnek

## 2. Teszesetek (TC)

### 2.1. Termék törlésének tesztesete

#### 2.1.1. TC-01
- TP: TP-03
- Leírás: Termék törlésének tesztelése
- Művelet: Rákattintunk a "Delete" gombra az egyik termék sorában
- Elvárt kimenet: Az adatbázisból és a kilistázásból törlődik az adott termék

### 2.2. Termék módosításának tesztesete

#### 2.2.1. TC-02
- TP: TP-03
- Leírás: Termék adatainak módosításának tesztesete
- Bemenet: Általunk módosítani kívánt adattagok átírása, ezestben: `email` = helpbro@gmail.com, ammennyiben a felhasz észleli
- Ezután az admin:
- Művelet: nyomjuk meg az `Edit product` gombot
- Elvárt kimenet: a kilistázásban a megfelelő mező

### 2.3. Termék létrehozása - adatbázisfeltöltése tesztesete

#### 2.3.1. TC-01
- TP: TP-01
- Leírás: Termék létrehozás - adatbázisfeltöltése tesztelése
- Bemenet: Adatok kitöltése: `category`, `drip`, `imageURL`, `name`, `price`
- Művelet: Rákattintunk a "Hozzáadás" gombra
- Elvárt kimenet: Az adatbázisba felkerülnek a felhasználó adatai és kilistázásban is megjelennek

## 3. Tesztriportok (TR)

### 3.1. Regisztráció - adatbázisfeltöltése tesztriportja

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: helpbro@gmail.com-t beírtam
    2. lépés: helpbro-t beírtam 
    3. lépés: a gomb egyszeri megnyomás átirányított
    4. lépés: helyes eredményt kaptam (adatok felkerültek az adatbázisba)

### 3.2. Termék törlésének tesztriportja

#### 3.2.1. TR-01 (TC-01)
- TP: TP-03
    1. lépés: A termékeket kilistázza
    2. lépés: a választott felhasználó melletti "Delete" gomb egyszeri megnyomására törli a terméket
    3. lépés: helyes eredményt kaptam 

### 3.3. Termék módosításának tesztriportjai

#### 3.3.1. TR-01 (TC-02)
- TP: TP-03
    1. lépés: a választott termék melletti "Edit" gomb egyszeri megnyomására kitölt adatokkal az ürlapot
    2. lépés: a kívánt adatokat átírom más értékre
    3. lépés: megnyomom az "Edit product" gombot
    3. lépés: helyes eredményt kaptam 

#### 3.3.1. TR-02 (TC-03)
- TP: TP-03
    1. lépés: a választott termék melletti "Edit" gomb egyszeri megnyomására kitölt adatokkal az ürlapot
    2. lépés: a kívánt adatokat átírom üresre
    3. lépés: megnyomom az "Edit product" gombot
    3. lépés: helyes eredményt kaptam 

### 3.4. Termék kilistázásnak tesztriportja

#### 3.4.1. TR-01 (TC-01)
- TP: TP-02
    1. lépés: Megnyomom a lenyíló listában az "product management" gombot
    2. lépés: helyes eredményt kaptam 
