# Tesztjegyzőkönyv-`Products Filter`

## 1. Teszteljárások (TP)

### 1.1. Szűrés a nav bar segítségével 
- Azonosító: TP-01
- Tesztesetek: TC-01, TC-02, TC-03, TC-04
- Leírás: Egy kiemelt kategóriára kattintva a nav báron az ahhoz a kategóriához tartozó termékek jelennek csak meg

    0. lépés: A products oldal megnyitása
    1. lépés: Rákattintás egy gombra a nav báron
    2. lépés: Ellenőrrizük az eredményt. Elvárt eredmény: a kiválasztott a kategóriához tartozó termékek jelennek csak meg


### 1.2. Szűrés az oldalsáv segítségével
- Azonosító: TP-02
- Tesztesetek: TC-05, TC-06, TC-07, TC-08, TC-09, TC-10
- Leírás: A Filter gomb megnyomása után csak a kiválasztott a kategóriához tartozó termékek jelennek csak meg
    
    0. lépés: A products oldal megnyitása
    1. lépés: Kiválasztunk egy vagy több kategóriát az oldalsávon
    2. lépés: Rákattintunk a szűrés gombra
    1. lépés: Ellenőrrízük az eredményt. Elvárt eredmény: a kiválasztott a kategóriához tartozó termékek jelennek csak meg

## 2. Teszesetek (TC)

### 2.1. Szűrés a nav bar segítségével 

#### 2.1.1. TC-01
- TP: TP-01
- Leírás: A TOPS csak az ahhoz a kategóriához tartozó termékeket jelenít meg
- Művelet: Rákattintunk a TOPS gombra
- Elvárt kimenet: Csak a TOPS kategóriához tartozó termékek jelennek meg

#### 2.1.2. TC-02
- TP: TP-01
- Leírás: A PANTS csak az ahhoz a kategóriához tartozó termékeket jelenít meg
- Művelet: Rákattintunk a PANTS gombra
- Elvárt kimenet: Csak a PANTS kategóriához tartozó termékek jelennek meg

#### 2.1.3. TC-03
- TP: TP-01
- Leírás: Az ACCESSORIES csak az ahhoz a kategóriához tartozó termékeket jelenít meg
- Művelet: Rákattintunk az ACCESSORIES gombra
- Elvárt kimenet: Csak az ACCESSORIES kategóriához tartozó termékek jelennek meg

#### 2.1.4. TC-04
- TP: TP-01
- Leírás: Az OUTFITS csak az ahhoz a kategóriához tartozó termékeket jelenít meg
- Művelet: Rákattintunk az OUTFITS gombra
- Elvárt kimenet: Csak az OUTFITS kategóriához tartozó termékek jelennek meg

### 2.2. Szűrés az oldalsáv segítségével

#### 2.2.1. TC-05
- TP: TP-02
- Leírás: A Tops kiválasztása után csak az ahhoz tartozó termékeket jelennek meg
- Művelet: Kijelöljük csak a Tops kategóriát 
- Művelet: Rányomunk a Filter gombra
- Elvárt kimenet: Csak a Tops kategóriába tartozó termékek jelennek meg

#### 2.2.2. TC-06
- TP: TP-02
- Leírás: A Pants kiválasztása után csak az ahhoz tartozó termékeket jelennek meg
- Művelet: Kijelöljük csak a Pants kategóriát 
- Művelet: Rányomunk a Filter gombra
- Elvárt kimenet: Csak a Pants kategóriába tartozó termékek jelennek meg

#### 2.2.3. TC-07
- TP: TP-02
- Leírás: Az Accessories kiválasztása után csak az ahhoz tartozó termékeket jelennek meg
- Művelet: Kijelöljük csak az Accessories kategóriát 
- Művelet: Rányomunk a Filter gombra
- Elvárt kimenet: Csak az Accessories kategóriába tartozó termékek jelennek meg

#### 2.2.4. TC-08
- TP: TP-02
- Leírás: Az Outfits kiválasztása után csak az ahhoz tartozó termékeket jelennek meg
- Művelet: Kijelöljük csak az Outfits kategóriát 
- Művelet: Rányomunk a Filter gombra
- Elvárt kimenet: Csak az Outfits kategóriába tartozó termékek jelennek meg

#### 2.2.5. TC-09
- TP: TP-02
- Leírás: Az Outfits és Accessories kiválasztása után azok a termékek jelennek meg amik legalább az egyik kategóriába beletartoznak
- Művelet: Kijelöljük csak az Outfits és Accessories kategóriákat
- Művelet: Rányomunk a Filter gombra
- Elvárt kimenet: Mind az Outfit-ek mind az Accessory-k megjelentek

#### 2.2.6. TC-10
- TP: TP-02
- Leírás: Minden kategória kiválasztásával minden termék megjelenik
- Művelet: Kijelöljük az összes kategóriát
- Művelet: Rányomunk a Filter gombra
- Elvárt kimenet: Minden termék listázásra kerül

## 3. Tesztriportok (TR)

### 3.1. Szűrés a nav bar segítségével

#### 3.1.1. TR-01 (TC-01)
- TP: TP-01
    1. lépés: Rákattintok a TOPS gombra a navbáron
    2. lépés: helyes eredményt kaptam: csak a TOPS kategóriába eső termékek jelentek meg

#### 3.1.2. TR-02 (TC-02)
- TP: TP-01
    1. lépés: Rákattintok a PANTS gombra a navbáron
    2. lépés: helyes eredményt kaptam: csak a PANTS kategóriába eső termékek jelentek meg

#### 3.1.3. TR-03 (TC-03)
- TP: TP-01
    1. lépés: Rákattintok a ACCESSORIES gombra a navbáron
    2. lépés: helyes eredményt kaptam: csak a ACCESSORIES kategóriába eső termékek jelentek meg

#### 3.1.4. TR-04 (TC-04)
- TP: TP-01
    1. lépés: Rákattintok a OUTFITS gombra a navbáron
    2. lépés: helyes eredményt kaptam: csak a OUTFITS kategóriába eső termékek jelentek meg

### 3.2. Szűrés az oldalsáv segítségével

#### 3.2.1. TR-05 (TC-05)
- TP: TP-02
    1. lépés: Kijelölöm a Tops kategóriát az oldalsávon
    2. lépés: Rákattintok a Filter gombra
    3. lépés: helyes eredményt kaptam: csak Tops kategóriába eső termékek láthatóak mostmár

#### 3.2.2. TR-06 (TC-06)
- TP: TP-02
    1. lépés: Kijelölöm a Pants kategóriát az oldalsávon
    2. lépés: Rákattintok a Filter gombra
    3. lépés: helyes eredményt kaptam: csak Pants kategóriába eső termékek láthatóak mostmár

#### 3.2.3. TR-07 (TC-07)
- TP: TP-02
    1. lépés: Kijelölöm a Accessories kategóriát az oldalsávon
    2. lépés: Rákattintok a Filter gombra
    3. lépés: helyes eredményt kaptam: csak Accessories kategóriába eső termékek láthatóak mostmár

#### 3.2.4. TR-08 (TC-08)
- TP: TP-02
    1. lépés: Kijelölöm a Outfits kategóriát az oldalsávon
    2. lépés: Rákattintok a Filter gombra
    3. lépés: helyes eredményt kaptam: csak Outfits kategóriába eső termékek láthatóak mostmár

#### 3.2.5. TR-09 (TC-09)
- TP: TP-02
    1. lépés: Kijelölöm a Outfits és Accessories kategóriákat az oldalsávon
    2. lépés: Rákattintok a Filter gombra
    3. lépés: helyes eredményt kaptam: csak Outfits és Accessories kategóriába eső termékek láthatóak mostmár

#### 3.2.6. TR-10 (TC-10)
- TP: TP-02
    1. lépés: Kijelölöm az összer kategóriát az oldalsávon
    2. lépés: Rákattintok a Filter gombra
    3. lépés: helyes eredményt kaptam: nem változott semmi
