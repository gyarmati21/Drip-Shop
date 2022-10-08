# WebShop Projektterv 2022

## 1. Összefoglaló 

A projekt célja egy webshop megvalósítása, amelyben ruhákat fogunk árulni. Fő célunk az, hogy a mai fiatalokat normális ruhába öltöztessük, hogy a dripjük 300%-os legyen. Mi nem csak ruhát hanem stílus árulunk. A weboldalunkon a legjobb funkció a saját stílus megvalósítása, segítségül árulunk basic dripeket. Ezzel is lehhetővétéve a gyors és kényelmes ruhavásárlást. A felhasználó kedvére válogathat változatos, rendkívüli és exklúzív termékeink közül. Drip shop, ahol a pacek a still!


## 2. Verziók

| Verzió | Szerző(k)                    | Dátum      | Státusz  | Megjegyzés                               |
| ------ | ---------------------------- | ---------- | -------- | ---------------------------------------- |
| 0.1    | Gyarmati Patrik, Katona Ádám | 2022-09-24 | Tervezet | Tervezett és lehetséges funkciók, design |



Státusz osztályozás:
 - Tervezet: befejezetlen dokumentum, a mérföldkő leadása előtti napokban
 - Előterjesztés: a projekt menedzser bírálatával, a mérföldkő határidejekor
 - Elfogadott: a megrendelő által elfogadva, a prezentáció bemutatásakor


## 3. A projekt bemutatása

A Webshop projectet 2022/09/24-én kezdjük és 2022/11/28-án adjuk át a megrendelőknek és tesszük elérhetővé a felhasználóknak. Ezen időtartam alatt a megrendelőnek 4 alkalommal fogjuk bemutatni a projectünk aktuális állapotát. Ezen a projecten összesen 7 bíztató, siker-orientált ifjú programozó fog dolgozni. A projectünk célja a megrendelők elvárásainak felűlmúlása és a felhasználók minden divat-igényeinek kielégítése valamint egy remek szolgáltatás biztosítása. Motivációnk hogy kitörjünk a mainstream ruhaoldalak monopóliumának árnyékából.


### 3.1. Rendszerspecifikáció

A rendszer képes lesz több ruhát tárolni és kezelni, külön és csomagokban is egyaránt. Az oldal rendelés előtt egy precíz számítást követően képes lesz megjósolni a megrendelt outfit "Drip" százalékát. Valamint a rendszerünk képes lesz felhasználók adatainak tárolására. A regisztrált felhasználók nyomon tudják követni az eddigi rendeléseik "Drip" százalékainak összegzését. A megrendelő és felhasználók közös igényeinek kielégítése, hogy egy letisztult, könnyen használható, felhasználóbarát és sikeres Webshopot hozzunk létre. A projectre azért van szükség hogy az emberek stílusos ruhákat tudjanak vásárolni egy stílusos oldalról.


### 3.2. Funkcionális követelmények

- Felhasználói munkamenet megvalósítása
	- Bejelentkezés felület megvalósítása
	- Regisztráció felület megvalósítása
	- Munkamenet követés funkció megvalósítása
- Felhasználók kezelése (CRUD)
	- Felhasználó fiókok törlése
	- A felhasználó fiók módosítása
	- Felhasználói adatok megjelenítése a profilon
- Több jogosultsági szint (felhasználó)
	- Felhasználó
		- A felhasználók módosíthatják az adataikat (jelszó)
		- A felhasználó likeolhatja a ruhákat
		- A felhasználónak megvont jogosultsága a ruhák kezelése felett
	- Admin
		- Admin jogosultságú felhasználó az adatbázis egészét tudja kezelni
- Ruhák kezelése (CRUD)
	- Admin felhasználó tud új ruhákat hozzáadni
	- Admin felhasználó tud ruhákat törölni az adatbázisból
	- Admin felhasználó tudja modósítani a már feltöltött ruhákat
	- Az oldal ki listázza az adatbázisban tárólt ruhákat
- Outfitek kezelése (CRUD)
	- Admin felhasználó tud új outfitet hozzáadni
	- Admin felhasználó tud outfitet törölni az adatbázisból
	- Admin felhasználó tudja modósítani a már feltöltött outfitet
	- Az oldal ki listázza az adatbázisban tárólt outfitet
- Megrendelések kezelése (CRD)
	- A vásárló képes megrendeléseket leadni
	- A vásárló képes megrendeléseket törölni
	- Az admin képes a megrendelést törölni
	- Az admin látja a leadott megrendeléseket
- "Drip-o-meter"
	- Az oldal képes kiírni a DRIP számát
	- A felhasználó megrendeléskor látja a Drip-o-meter-t
	- Az adatbázisban minden ruhának el van tárolva a Drip mértéke
- Kosárfunkciók
	- A felhasználó képes hozzáadni ruhákat
	- A felhasználó képes hozzáadni outfiteket
	- A felhasználó képes törölni a kosárból
	- A felhasználó képes updatelni a kosárban lévő ruhák darabszámát

### 3.3. Nem funkcionális követelmények

- A kliens oldal platform- és böngészőfüggetlen legyen
- Reszponzív megjelenés
- Szenzitív adatokat biztonságosan tároljuk
- Könnyen navigálható és használható oldal

## 4. Költség- és erőforrás-szükségletek

Az erőforrásigényünk összesen kb. 15 személynap/fő.

A rendelkezésünkre áll összesen (7 * 70 = 490) pont.

```
Becsült sarokszámok, a rendelkezésre álló erőforrás fejenként általában 17-25 személynap, 
a pontok száma = fejenként a projektre kapható maxpont * tagok száma.
```

## 5. Szervezeti felépítés és felelősségmegosztás
A projekt megrendelője Dr. Pflanzner Tamás. A Drip Shop projektet a projektcsapat fogja végrehajtani, amely jelenleg hét fejlesztőből áll. A csapatban található tapasztalt és pályakezdő webprogramozó is, A tapasztalt projekttagok több hónapja dolgoznak az iparban, számos sikeres projektten vannak túl.
 - Katona Ádám (<1 év tapasztalat)
 - Pál Szilárd (<1 év tapasztalat)
 - Györök Gábor (<1 év tapasztalat)
 - Kabók Dániel (<1 év tapasztalat)
 - Gyarmati Patrik (<1 év tapasztalat)
 - Kücüktüfekci Cengiz Etem (<1 év tapasztalat)
 - Rózsa Patrik (<1 év tapasztalat)

### 5.1 Projektcsapat
A projekt a következő emberekből áll:

|                                                          | Név                      | E-mail cím (stud-os)            |
| -------------------------------------------------------- | ------------------------ | ------------------------------- |
| Megrendelő                                               | Dr. Pflanzner Tamás      | tamas.pflanzner@inf.u-szeged.hu |
| Felelősségek: Projekt menedzser                          | Pál Szilárd              | h050611@stud.u-szeged.hu        |
| Felelősségek: Adatbázis és adatkapcsolatok               | Rózsa Patrik             | h163488@stud.u-szeged.hu        |
| Felelősségek: Felhasználói felületek                     | Gyarmati Patrik          | h045342@stud.u-szeged.hu        |
| Felelősségek: Felhasználókezelés                         | Györök Gábor             | h158138@stud.u-szeged.hu        |
| Felelősségek: Üzleti logikák                             | Katona Ádám              | h159532@stud.u-szeged.hu        |
| Felelősségek: Adatbázis lekérdezések                     | Kabók Dániel             | h046510@stud.u-szeged.hu        |
| Felelősségek: Az adatbázis feltöltése releváns adatokkal | Kücüktüfekci Cengiz Etem | h160842@stud.u-szeged.hu        |

## 6. A munka feltételei

### 6.1. Munkakörnyezet
A projekt a következő munkaállomásokat fogja használni a munka során:
 - Lenovo V15 G2 laptop (CPU: Ryzen 7 5700U, RAM: 16 GB, GPU: Radeon Vega 8, OS: Windows 10)
 - Asztali számítógép (CPU:  Ryzen 7 3700X, RAM: 16GB, GPU: Nvidia GTX 1060, OS: Windows 10)
 - Asztali számítógép (CPU: Core i5 7400, RAM: 24GB, GPU: Nvidia GTX 1050 Ti, OS: Windows 10)
 - Asztali számítógép (CPU: Core i5 10400F, RAM: 16GB, GPU: Nvidia RTX 2060S, OS: Windows 10)
 - Asztali számítógép (CPU: Ryzen 5 2600x, RAM: 16GB, GPU: Nvidia GTX 1660 Ti, OS: Arch Linux)
 - Asztali számítógép (CPU: Core i3 8100, RAM: 16GB, GPU: Radeon RX 6600, OS: Windows 10)
 - Asztali számítógép (CPU: ???, RAM: ??GB, GPU: ???, OS: Windows 10)
 - Sony VAIO VPCEH2H1E laptop (CPU: Core i3 2330M, RAM: 4 GB, GPU: Intel HD 3000, OS: Debian Linux)

A projekt a következő technológiákat/szoftvereket fogja használni a munka során: 
 - Heroku platformszolgáltatás
 - Heroku által biztosított PostgreSQL adatbázisszerver
 - Spring Boot (Backend)
 - Maven szoftverprojekt menedzselő szoftver
 - Intellij IDEA, Visual Studio Code
 - Thymeleaf (HTML Template Engine)
 - Git verziókövető (GitLab)

### 6.2. Rizikómenedzsment

| Kockázat                                  | Leírás                                                                                                                                                                                   | Valószínűség | Hatás   |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------- |
| Betegség                                  | Súlyosságtól függően hátráltatja vagy bizonyos esetekben teljes mértékben korlátozza a munkavégzőt, így az egész projektre kihatással van. Megoldás: a feladatok átcsoportosítása        | közepes      | közepes |
| Kommunikációs fennakadás a csapattagokkal | A csapattagok között nem elégséges az információ áramlás, nem pontosan, esetleg késve vagy nem egyértelműen tájékoztatjuk egymást. Megoldás: még gyakoribb megbeszélések és ellenőrzések | kis          | erős    |

## 7. Jelentések

### 7.1. Munka menedzsment
A munkát Pál Szilárd Ákos koordinálja. Fő feladata, hogy folyamatosan egyeztessen a csapattagokkal az előrehaladásról és a fellépő problémákról, esetlegesen a megoldásban is segítséget nyújhat a projekt csúszásának elkerülése végett.

### 7.2. Csoportgyűlések

Hetente ülésezünk, megbeszéljük az elmúlt héten felmerülő problémákat, esetleg felmerülő új ötleteket, eltervezzük a következő hét teendőit. A megbeszélésről minden esetben Discord thread készül.

1. megbeszélés:
 - Időpont: 2021.09.17.`
 - Hely: Discord`
 - Résztvevők:
 	- Katona Ádám
 	- Pál Szilárd
 	- Györök Gábor
 	- Kabók Dániel Tibor
 	- Gyarmati Patrik
 	- Kücüktüfekci Cengiz Etem
 	- Rózsa Patrik
 - Érintett témák: Technológiák kiválasztása, téma és név megbeszélése, minták áttekintése

2. megbeszélés:
 - Időpont: 2021.09.24.
 - Hely: Discord
 - Résztvevők:
  	- Katona Ádám
 	- Pál Szilárd
 	- Györök Gábor
 	- Kabók Dániel Tibor
 	- Gyarmati Patrik
 	- Kücüktüfekci Cengiz Etem
 	- Rózsa Patrik
 - Érintett témák: Első mérföldkő kb felének kitöltése, funkciókról ötletelés

3. megbeszélés:
 - Időpont: 2021.10.01.
 - Hely: Discord
 - Résztvevők:
  	- Katona Ádám
 	- Pál Szilárd
 	- Györök Gábor
 	- Kabók Dániel Tibor
 	- Gyarmati Patrik
 	- Kücüktüfekci Cengiz Etem
 	- Rózsa Patrik
 - Érintett témák: Git configurálása, commit-olások, első mérföldkő folytatása

4. megbeszélés:
 - Időpont: 2021.10.08.
 - Hely: Discord
 - Résztvevők:
  	- Katona Ádám
 	- Pál Szilárd
 	- Györök Gábor
 	- Kabók Dániel Tibor
 	- Gyarmati Patrik
 	- Kücüktüfekci Cengiz Etem
 	- Rózsa Patrik
 - Érintett témák: Első mérföldkő formázása, kibővítése, Gantt chart

### 7.3. Minőségbiztosítás

Az elkészült terveket a terveken nem dolgozó csapattársak közül átnézik, hogy megfelel-e a specifikációnak és az egyes diagramtípusok összhangban vannak-e egymással. A meglévő rendszerünk helyes működését a prototípusok bemutatása előtt a tesztelési dokumentumban leírtak végrehajtása alapján ellenőrizzük és összevetjük a specifikációval, hogy az elvárt eredményt kapjuk-e. További tesztelési lehetőségek: unit tesztek írása az egyes modulokhoz vagy a kód közös átnézése (code review) egy, a vizsgált modul programozásában nem résztvevő csapattaggal. Szoftverünk minőségét a végső leadás előtt javítani kell a rendszerünkre lefuttatott kódelemzés során kapott metrikaértékek és szabálysértések figyelembevételével.
Az alábbi lehetőségek vannak a szoftver megfelelő minőségének biztosítására:
- Specifikáció és tervek átnézése (kötelező)
- Teszttervek végrehajtása (kötelező)
- Unit tesztek írása (választható)
- Kód átnézése (választható)

### 7.4. Átadás, eredmények elfogadása

A projekt eredményeit Dr. Pflanzner Tamás fogja elfogadni. A projektterven változásokat csak  Dr. Pflanzner Tamás írásos kérés esetén Dr. Pflanzner Tamás engedélyével lehet tenni. A projekt eredményesnek bizonyul, ha specifikáció helyes és határidőn belül készül el. Az esetleges késések pontlevonást eredményeznek.
Az elfogadás feltételeire és beadás formájára vonatkozó részletes leírás a következő honlapon olvasható: https://okt.sed.hu/rf1/

### 7.5. Státuszjelentés

Minden leadásnál a projektmenedzser jelentést tesz a projekt haladásáról, és ha szükséges változásokat indítványoz a projektterven. Ezen kívül a megrendelő felszólítására a menedzser 3 munkanapon belül köteles leadni a jelentést. A gyakorlatvezetővel folytatott csapatmegbeszéléseken a megadott sablon alapján emlékeztetőt készít a csapat, amit a következő megbeszélésen áttekintenek és felmérik az eredményeket és teendőket. Továbbá gazdálkodnak az erőforrásokkal és szükség esetén a megrendelővel egyeztetnek a projektterv módosításáról.

## 8. A munka tartalma

### 8.1. Tervezett szoftverfolyamat modell és architektúra

A szoftver fejlesztése során az agilis fejlesztési modellt alkalmazzuk. A fejlesztés során nagy hangsúlyt fektetünk a folyamatos kommunikcióra. A fejlesztés során a szoftver specifikációi rugalmasan vátozhatnak, és ezzel leggyorsabban tudunk a alkalmazkodni az új elvárásokhoz.

A szoftver MVC alapú architectúrára fog épülni. A frontend oldalait a backend fogja felépíteni, és elküldeni HTTP üzenetek formájában. Az alkalmazás egy PostGreSQL adatbázis fogja támogatni.

```
Milyen szoftverfolyamat modellt követve állítja elő a csapat a specifikációnak megfelelő prototípusokat? Miért ezt választja? 
A csapat milyen architektúrát választ a projekt megvalósításához? Milyen rétegek (logikai, adat, GUI) lesznek?
```

### 8.2. Átadandók és határidők
A főbb átadandók és határidők a projekt időtartama alatt a következők:


| Szállítandó |                Neve                 | Határideje |
| :---------: | :---------------------------------: | :--------: |
|     D1      |       Projektterv és útmutató       | 2022-10-05 |
|    P1+D2    | UML, DB, képernyőtervek és bemutató | 2022-10-19 |
|    P1+D3    |      Prototípus I. és bemutató      | 2022-11-09 |
|    P2+D4    |     Prototípus II. és bemutató      | 2022-11-30 |

```
D - dokumentáció, P - prototípus
```

## 9. Feladatlista

A következőkben a tervezett feladatok részletes összefoglalása található.


### 9.1. Projektterv (1. mérföldkő)

Ennek a feladatnak az a célja, hogy megvalósításhoz szükséges lépéseket, az ütemzést és a felelősöket meghatározzuk.

Részfeladatai a következők:

#### 9.1.1. Projektterv kitöltése

Felelős: Pál Szilárd

Tartam:  2 hét

Erőforrásigény:  2 személynap/fő


### 9.2. UML és adatbázis tervek (2. mérföldkő)

Ennek a feladatnak az a célja, hogy a rendszerarchitektúrát, az adatbázist és webalkalmazás kinézetét megtervezzük.

Részfeladatai a következők:

#### 9.2.1. Use Case diagram

Felelős: Rózsa Patrik

Tartam:  2 hét

Erőforrásigény:  1 személynap

#### 9.2.2. Class diagram

Felelős: Gyarmati Patrik

Tartam:  2 hét

Erőforrásigény:  1 személynap

#### 9.2.3. Sequence diagram

Felelős: Kücüktüfekci Cengiz

Tartam:  2 hét

Erőforrásigény:  2 személynap

#### 9.2.4. Egyed-kapcsolat diagram adatbázishoz

Felelős: Kabók Dániel

Tartam:  2 hét

Erőforrásigény:  1 személynap

#### 9.2.5. Package diagram

Felelős: Pál Szilárd

Tartam:  2 hét

Erőforrásigény:  1 személynap

#### 9.2.6. Képernyőtervek

Felelős: Katona Ádám

Tartam:  2 hét

Erőforrásigény:  1 személynap


### 9.3. Prototípus I. (3. mérföldkő)

Ennek a feladatnak az a célja, hogy egy működő prototípust hozzunk létre, ahol a vállalt funkcionális követelmények nagy része már prezentálható állapotban van.

Részfeladatai a következők:

#### 9.3.1.  Felhasználói jogosultsági szintek implementálás Back-enden (admin, user)

Felelős: Pál Szilárd

Tartam:  1 hét

Erőforrásigény: 3 személynap

#### 9.3.2.  FrameWork és rendszer felállítás

Felelős: Pál Szilárd

Tartam:  1 hét

Erőforrásigény: 3 személynap



#### 9.3.3.  Felhasználói fiókkal kapcsolatos Front-End elkészítése (login, register, user-page)

Felelős: Gyarmati Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.4.  Felhasználói fiókkal kapcsolatos Back-End elkészítése (login, register, user-page)

Felelős: Gyarmati Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.5.  Felhasználók kezeléséhez tartozó back-end (listázása, módosítása, törlése)

Felelős: Rózsa Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap

#### 9.3.6.  Felhasználók kezeléséhez kapcsolódó front-end (listázása, módosítása, törlése)

Felelős: Rózsa Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap

#### 9.3.7.  Termékek listázása front-end

Felelős: Gyarmati Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap



#### 9.3.8.  Termékek listázása back-end

Felelős: Pál Szilárd

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.9.	Egy termék oldala front-end

Felelős: Katona Ádám

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.10.  Egy termék oldala back-end

Felelős: Katona Ádám

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.11.  Termékek management front-end

Felelős: Györök Gábor

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.12.  Termékek management back-end

Felelős: Györök Gábor

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.13.  Kosár front-end

Felelős: Kabók Dani

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.14.  Kosár back-end

Felelős: Kabók Dani

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.15.  Megrendelés front-end

Felelős: Kücüktüfekci Cengiz Etem

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.3.16.  Megrendelés back-end

Felelős: Kücüktüfekci Cengiz Etem

Tartam:  1 hét

Erőforrásigény: 3 személynap



#### 9.3.17.  Style (CSS)

Felelős: Gyarmati Patrik, Kabók Dani, Katona Ádám

Tartam:  1 hét

Erőforrásigény: 3 személynap


### 9.4. Prototípus II. (4. mérföldkő)

Ennek a feladatnak az a célja, hogy az előző mérföldkő hiányzó funkcióit pótoljuk, illetve a hibásan működő funkciókat és az esetlegesen felmerülő új funkciókat megvalósítsuk. Továbbá az alkalmazás alapos tesztelése is a mérföldkőben történik.


#### 9.4.1.  Ruha szettek front-end

Felelős: Katona Ádám

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.4.2.  Ruha szettek back-end

Felelős: Katona Ádám

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.4.3.  Felhasználói jogosultsági szintek tesztelése és javítása (TP, TC, TR)

Felelős: Pál Szilárd

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.4.4.  Felhasználói fiókkal kapcsolatos funkciók tesztelése  és javítása (TP, TC, TR)

Felelős: Gyarmati Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap



#### 9.4.5.  Felhasználók kezeléséhez tartozó tesztelése   és javítása(TP, TC, TR)

Felelős: Rózsa Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.4.6.  Termékek listázásának tesztelése  és javítása (TP, TC, TR)

Felelős: Gyarmati Patrik

Tartam:  1 hét

Erőforrásigény: 3 személynap



#### 9.4.7.	Egy termék oldalának tesztelése   és javítása(TP, TC, TR)

Felelős: Katona Ádám

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.4.8.  Termékek management tesztelése  és javítása (TP, TC, TR)

Felelős: Györök Gábor

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.4.9.  Kosár tesztelése  és javítása (TP, TC, TR)

Felelős: Kabók Dani

Tartam:  1 hét

Erőforrásigény: 3 személynap


#### 9.4.10.  Megrendelés tesztelése  és javítása(TP, TC, TR)

Felelős: Kücüktüfekci Cengiz Etem

Tartam:  1 hét

Erőforrásigény: 3 személynap


## 10. Részletes időbeosztás

![image](./MINTA-gantt-diagram.png)



## 11. Projekt költségvetés


### 11.1. Részletes erőforrásigény (személynap)


|     Név      			| 1. leadás - Projektterv | 2. leadás - UML és adatbázis | 3. leadás - Prototípus I. | 4. leadás - Prototípus II. | Összesen |
| :----------: 			| :---------------------: | :--------------------------: | :-----------------------: | :------------------------: | :------: |
|  Katona Ádám  		|            3            |              2               |            16             |             4              |    25    |
|  Pál Szilárd  		|            3            |              2               |            18             |             4              |    25    |
|   Györök Gábor   		|            3            |              2               |            15             |             4              |    24    |
|   Kabók Dániel Tibor  |            3            |              2               |            18             |             4              |    27    |
|   Gyarmati Patrik   	|            3            |              2               |            18             |             4              |    27    |
|   Kücüktüfekci Cengiz |            3            |              2               |            16             |             4              |    25    |
|   Rózsa Patrik   		|            3            |              2               |            15             |             4              |    24    |


### 11.2. Részletes feladatszámok

|     Név      			| 1. leadás - Projektterv | 2. leadás - UML és adatbázis | 3. leadás - Prototípus I. | 4. leadás - Prototípus II. | Összesen |
| :----------: 			| :---------------------: | :--------------------------: | :-----------------------: | :------------------------: | :------: |
| Katona Ádám 		|            2            |              1               |             2             |             2              |    6    |
|  Pál Szilárd  		|            2            |              1               |             3             |             2              |    8    |
|   Györök Gábor 		|            2            |              1               |             2             |             2              |    7    |
|   Kabók Dániel Tibor 	|            2            |              1               |             3             |             2              |    8    |
|   Gyarmati Patrik 	|            2            |              1               |             3             |             2              |    8    |
|   Kücüktüfekci Cengiz |            2            |              1               |             2             |             2              |    7    |
|   Rózsa Patrik 		|            2            |              1               |             2             |             2              |    7    |

### 11.3. Részletes költségvetés

|                  Név                   | 1. leadás - Projektterv | 2. leadás - UML és adatbázis | 3. leadás - Prototípus I. | 4. leadás - Prototípus II. | Összesen  |
| :------------------------------------: | :---------------------: | :--------------------------: | :-----------------------: | :------------------------: | :-------: |
| Maximálisan választható pontszám %-ban |         10% (7)         |           30% (21)           |         50% (35)          |          30% (21)          | 100% (70) |
|              Katona Ádám               |            7            |              12              |            33             |             18             |    70     |
|               Pál Szilárd              |            7            |              12              |            35             |             16             |    70     |
|                Györök Gábor            |            7            |              12              |            35             |             16             |    70     |
|                Kabók Dániel Tibor      |            7            |              12              |            35             |             16             |    70     |
|                 Gyarmati Patrik        |            7            |              12              |            35             |             16             |    70     |
|                 Kücüktüfekci Cengiz    |            7            |              15              |            34             |             14             |    70     |
|                Rózsa Patrik            |            7            |              12              |            35             |             16             |    70     |

Szeged,  2022-10-08 .
