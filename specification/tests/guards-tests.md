# Tesztjegyzőkönyv-`Guards`

## 1. Teszteljárások (TP)

### 1.1. User managment elérése különböző jogosultságokkal 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02
- Leírás: Egy admin user el tudja érni a user management oldalt míg egy sima user

    0. lépés: A profil ikonra kiválasztjuk a lenyíló listából a user management-et
    1. lépés: Ellenőrrizük az eredményt. Elvárt eredmény: a user management oldal megnyílt vagy nem a jogosultsági színtünk függvényében


### 1.2. Products oldal elérése és az autentikáció összefüggése
- Azonosító: TP-02
- Tesztesetek: TC-03, TC-04
- Leírás: Csak a bejelentkezés után lehet elérni a products oldalt
    
    0. lépés: A főoldalon kattintsunk rá a products gombra
    1. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: Csak akkor enged be ha be vagyunk jelentkezve

### 1.3. Cart oldal elérése és az autentikáció összefüggése
- Azonosító: TP-03
- Tesztesetek: TC-05, TC-06
- Leírás: Csak a bejelentkezés után lehet elérni a cart oldalt

    0. lépés: Adjuk hozzá a jelenlegi URl-hez hogy /cart
    1. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: Csak akkor enged be ha be vagyunk jelentkezve

### 1.4. Order oldal elérése és az autentikáció összefüggése
- Azonosító: TP-04
- Tesztesetek: TC-07, TC-08
- Leírás: Csak a bejelentkezés után lehet elérni a order oldalt

    0. lépés: Adjuk hozzá a jelenlegi URl-hez hogy /order
    1. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: Csak akkor enged be ha be vagyunk jelentkezve

## 2. Teszesetek (TC)

### 2.1. User managment elérése különböző jogosultságokkal

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: User managment elérése adminkénk
- Művelet: Jobb fent a profilunkra rányomva kiválasztjuk a user management pontot
- Elvárt kimenet: A user management oldal megnyílik

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: User managment elérése userként
- Művelet: Jobb fent a profilunkra rányomva kiválasztjuk a user management pontot
- Elvárt kimenet: A user management oldal nem jelenik meg

### 2.2. Products oldal elérése és az autentikáció összefüggése

#### 2.2.1. TC-03
- TP: TP-02
- Leírás: Products oldal elérése kijelentkezve
- Művelet: Kijelentkezünk
- Művelet: Rányomunk a products gombra
- Elvárt kimenet: A products oldal nem nyílt meg

#### 2.2.2. TC-04
- TP: TP-02
- Leírás: Products oldal elérése bejelentkezve
- Művelet: Bejelentkezünk 
- Művelet: Rányomunk a products gombra
- Elvárt kimenet: A products oldal megnyílik

### 2.3. Cart oldal elérése és az autentikáció összefüggése

#### 2.3.1. TC-05
- TP: TP-03
- Leírás: Cart oldal elérése kijelentkezve
- Művelet: Kijelentkezünk 
- Művelet: Hozzáadjuk az url-hez hogy /cart
- Elvárt kimenet: Nem történik változás

#### 2.3.2. TC-06
- TP: TP-03
- Leírás: Cart oldal elérése bejelentkezve
- Művelet: Bejelentkezünk 
- Művelet: Hozzáadjuk az url-hez hogy /cart
- Elvárt kimenet: Megjelenik a cart oldal

### 2.4. Order oldal elérése és az autentikáció összefüggése

#### 2.4.1. TC-07
- TP: TP-04
- Leírás: Order oldal elérése kijelentkezve
- Művelet: Kijelentkezünk 
- Művelet: Hozzáadjuk az url-hez hogy /order
- Elvárt kimenet: Nem történik változás

#### 2.4.2. TC-08
- TP: TP-04
- Leírás: Cart oldal elérése bejelentkezve
- Művelet: Bejelentkezünk 
- Művelet: Hozzáadjuk az url-hez hogy /order
- Elvárt kimenet: Megjelenik az orderoldal

## 3. Tesztriportok (TR)

### 3.1. User management elérése kölönböző jogosultságokkal

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Bejelentkeztem admin felhasználóval
    2. lépés: Jobb fent rákattintottam a profilomra
    3. lépés: A lenyíló listából kiválasztottam a user management opciót
    4. lépés: helyes eredményt kaptam: a user management oldal megjelent

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: Bejelentkeztem sima felhasználóval
    2. lépés: Jobb fent rákattintottam a profilomra
    3. lépés: A lenyíló listából kiválasztottam a user management opciót
    4. lépés: helyes eredményt kaptam: nem történt változás az oldalon

### 3.2. Products oldal elérése és az autentikáció összefüggése

#### 3.2.1. TR-03 (TC-03)
- TP: TP-02
    1. lépés: Kijelentkezem
    2. lépés: Rákattintok a products gombra
    3. lépés: helyes eredményt kaptam: nem történt változás az oldalon

#### 3.2.2. TR-04 (TC-04)
- TP: TP-02
    1. lépés: Bejelentkezem
    2. lépés: Rákattintok a products gombra
    3. lépés: helyes eredményt kaptam: megjelent a products oldal

### 3.3. Cart oldal elérése és az autentikáció összefüggése

#### 3.3.1. TR-05 (TC-05)
- TP: TP-03
    1. lépés: Kijelentkezem
    2. lépés: Hozzáírom az url-hez hogy "/cart"
    3. lépés: helyes eredményt kaptam: nem történt változás az oldalon

#### 3.3.2. TR-06 (TC-06)
- TP: TP-03
    1. lépés: Bejelentkezem
    2. lépés: Hozzáírom az url-hez hogy "/cart"
    3. lépés: helyes eredményt kaptam: megjelent a cart oldal

### 3.4. Order oldal elérése és az autentikáció összefüggése

#### 3.4.1. TR-07 (TC-07)
- TP: TP-04
    1. lépés: Kijelentkezem
    2. lépés: Hozzáírom az url-hez hogy "/order"
    3. lépés: helyes eredményt kaptam: nem történt változás az oldalon

#### 3.4.2. TR-08 (TC-08)
- TP: TP-04
    1. lépés: Bejelentkezem
    2. lépés: Hozzáírom az url-hez hogy "/order"
    3. lépés: helyes eredményt kaptam: megjelent a order oldal

