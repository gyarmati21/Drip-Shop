# Tesztjegyzőkönyv-`Products`

## 1. Teszteljárások (TP)

### 1.1. Products oldal megjelenítése 
- Azonosító: TP-01
- Tesztesetek: TC-01
- Leírás: Egy felhasználónak megjeleníti az oldal a productokat

    0. lépés: A products gombra kattintunk az oldal megnyitásakor

    1. lépés: Ellenőrrizük az eredményt. Elvárt eredmény: a user látja az adatbázisból kiolvassott productokat az oldalon megjelenítva


### 1.2. Products oldalon egy product megjelenítése
- Azonosító: TP-02
- Tesztesetek: TC-02
- Leírás: Egy felhasználónak megjeleníti az oldal a productot
    
    0. lépés: A products gombra kattintunk az oldal megnyitásakor
    1. Lépés: A products oldalon egy productra rá kattintunk
    2. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: Megjelenítődik a product dialogon a productunk

### 1.3. Products oldalon egy product CART-hoz hozzáadása
- Azonosító: TP-03
- Tesztesetek: TC-03
- Leírás: Egy felhasználó hozzáadhat egy productot a CART-hoz

    0. lépés: A products gombra kattintunk az oldal megnyitásakor
    1. Lépés: A products oldalon egy productra rá kattintunk
    2. Lépés: A product dialogon az ADD TO CART gombra kattintunk
    3. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: A kiválasztott productunk hozzá adódott a CART-hoz


## 2. Teszesetek (TC)

### 2.1. Products oldal megjelenítése 

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: Products oldalon lévő productok megjelenítése
- Művelet: A főoldalra belépve a products gombra kattintunk
- Elvárt kimenet: A products oldal megnyílik és a productok kilistázódnak 

### 2.2. Products oldalon egy product megjelenítése

#### 2.2.1. TC-02
- TP: TP-02
- Leírás: Egy product adatai dialogon megjenelítése
- Művelet: Rákattíntunk egy productra
- Elvárt kimenet: Egy product az adataival együtt megjelenik egy dialogon

### 2.3. Products oldalon egy product CART-hoz hozzáadása

#### 2.3.1. TC-03
- TP: TP-03
- Leírás: Egy product hozzáadása a CART-hoz
- Művelet: Rákattíntunk egy productra 
- Művelet: Rákattíntunk az ADD TO CART gombra
- Elvárt kimenet: Hozzáadódik egy product a CART-hoz

## 3. Tesztriportok (TR)

### 3.1. Products oldal megjelenítése

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Bejelentkeztem
    2. lépés: Rákattíntottam a products gombra
    3. lépés: helyes eredményt kaptam: a products oldalon a termékek megjelentek

### 3.2. Products oldalon egy product megjelenítése

#### 3.2.1. TR-02 (TC-02)
- TP: TP-02
    1. lépés: Bejelentkeztem
    2. lépés: Rákattíntottam a products gombra
    3. lépés: Rákattíntottam egy poduct-ra
    4. lépés: helyes eredményt kaptam:a product megjelent egy dialogban a helyes adatokkal


### 3.3. Products oldalon egy product CART-hoz hozzáadása

#### 3.3.1. TR-02 (TC-03)
- TP: TP-03
    1. lépés: Bejelentkeztem
    2. lépés: Rákattíntottam a products gombra
    3. lépés: Rákattíntottam egy poduct-ra
    4. lépés: Rákattíntottam az ADD TO CART gombra
    5. lépés: helyes eredményt kaptam: a product bekerült a CART-ba


