# Opleverinspectie — Woningstichting Wageningen

Webapp om bij de oplevering van nieuwbouw per woning en per algemene ruimte de tekortkomingen vast te leggen, met foto, op locatie via de iPad. Per object ontstaat een proces-verbaal in huisstijl, volgens het Opleverprotocol nieuwbouw.

**Huidige versie: 1.5.1**

Kenmerken:
- **Offline:** na één keer laden werkt de app ook zonder internet.
- **Geen installatie:** geen inlog en geen server; alle gegevens blijven op de tablet.
- **Twee bestanden:** `index.html` (de hele app, ± 1,2 MB) en `sw.js` (voor het offline werken).

## Openen en installeren

- **Adres:** de app draait via GitHub Pages op `https://bas-oo.github.io/Opleverinspectie/`.
- **Browser:** open het adres op de iPad in Chrome of Safari. Gebruik daarna altijd dezelfde browser en hetzelfde adres. De gegevens staan in de opslag van díe browser op díe iPad; een andere browser ziet ze niet.
- **Beginscherm (aanbevolen):** zet de app op het beginscherm via Delen → **Zet op beginscherm**. Dan opent hij schermvullend.
- **Offline:** de app werkt offline zodra hij één keer met internet is geopend. Een nieuwe versie op GitHub komt vanzelf door bij de eerstvolgende keer openen mét verbinding.

## Opbouw

**Complex → Blok → Object** (woning, appartement, algemene ruimte of overig).

Per object zijn er zes tabbladen:

| Tabblad | Inhoud |
|---|---|
| Gegevens | Adres, type, opdrachtnemer en wie namens opdrachtgever en opdrachtnemer optreden (leeg = de standaard van het complex) |
| Vooropname | Tekortkomingen vóór de oplevering |
| Oplevering | Overgenomen vooropnamepunten (hersteld / niet hersteld) en nieuwe punten |
| Meterstanden | Elektra laag, elektra hoog, elektra laag teruglevering, elektra hoog teruglevering, water en (optioneel) gas, elk met foto; of "niet van toepassing" |
| Overige zaken | Sleutels, raamsleutels, groepenkastkaart, screens, dakluik, inregelrapporten, testrapport elektra, vrij tekstveld |
| Afronden | Ondertekenen, de proces-verbalen (PDF) en de Excel-export van de tekortkomingen |

Op het complex leg je de **standaardgegevens** vast. Objecten nemen die over, tenzij ze op het object zelf zijn ingevuld:
- namens opdrachtgever;
- de opdrachtnemer en wie namens de opdrachtnemer optreedt;
- de netbeheerders;
- de C-limieten per woning en per blok (standaard 3 en 5).

## Werkwijze op de bouwplaats

**Tekortkoming vastleggen**
- Tik op **+ Tekortkoming** en vul per punt in:
  - ruimte en omschrijving;
  - urgentie A Kritiek / B Hoog / C Laag;
  - "Niet erkend" (opdrachtnemer) en, bij de oplevering, "Paraaf" (opdrachtgever);
  - één foto.
- **Foto:** de camera opent direct, en de foto wordt verkleind tot 1280 px. Doorzichtige afbeeldingen krijgen een witte achtergrond.
- **Suggesties voor de ruimte:** tik op het veld Ruimte voor een vaste looproute (Hal, Woonkamer, Keuken, …) plus eerder ingevoerde ruimtes. Pas een echte tik kiest een ruimte; vegen door de lijst kiest niets.
- **Suggesties voor de omschrijving:** eerder gebruikte omschrijvingen uit hetzelfde complex verschijnen zodra je begint te typen.

**Van vooropname naar oplevering**
- **Oplevering starten** neemt alle vooropnamepunten over, inclusief foto. Per punt geef je aan of het hersteld is. De vooropname wordt dan alleen-lezen.
- Is er in de oplevering nog niets veranderd, dan kun je **Oplevering ongedaan maken** gebruiken.

**Waarschuwingen**
- Een open A-punt geeft een rode banner: de oplevering kan niet plaatsvinden.
- Gaat het aantal C-punten boven de limiet per woning of per blok, dan verschijnt een gele waarschuwing.

**Meterstanden**
- Alleen cijfers met hooguit één komma of punt.
- De eerste ingevulde stand zet de datum van de meteropname op vandaag.
- Gas is optioneel: veel nieuwbouw heeft geen gasaansluiting. Zonder gasstand geeft de app geen aandachtspunt en heeft de PDF geen gaskolom.

**Overige zaken**
- Met **Kopiëren** neem je de overige zaken van een andere woning in hetzelfde complex in één keer over, en pas je daarna aan wat verschilt.

## Afronden per woning

1. Vul eerst in: namens opdrachtgever, de opdrachtnemer, namens opdrachtnemer en de plaats. Zonder deze gegevens kan niet worden getekend.
2. Opdrachtgever en opdrachtnemer tekenen met vinger of Apple Pencil.
3. Na de eerste handtekening is de oplevering alleen-lezen. Wie een handtekening verwijdert, kan weer wijzigen.
4. De tweede handtekening rondt de oplevering **definitief** af. Daarna kan niets meer worden gewijzigd of verwijderd; de PDF kun je altijd opnieuw maken.

Vooraf toont de app de aandachtspunten, zoals niet-beoordeelde vooropnamepunten, punten zonder urgentie en niet-ingevulde overige zaken.

## Een heel blok of complex in één keer afronden

**Blok afronden** (op het blokscherm) en **Complex afronden** (op het complexscherm) laten opdrachtgever en opdrachtnemer één keer tekenen voor een reeks objecten.

**Groepen op het verzamelscherm**
- **Klaar om af te ronden** — staat standaard aangevinkt.
- **Met aandachtspunten** — staat standaard uit. Denk aan niet-ingevulde overige zaken, geen meterstanden of een overschreden C-limiet per woning. "Alles" aanvinken vraagt eerst om bevestiging.
- **Kan niet mee** — de oplevering is niet gestart, er is een open A-punt, er staat al één handtekening, of er is een afwijkende vertegenwoordiger. Zo'n object rond je af op het objectscherm.
- **Al afgerond.**

Op complexniveau staan de objecten per blok gegroepeerd, met een knop "Alles/Niets" per blok.

**Na het ondertekenen**
- Elk aangevinkt object is afgerond, met dezelfde twee handtekeningen onder het eigen proces-verbaal.
- Daarnaast ontstaat een **verzamel-proces-verbaal**. Dat bevat de lijst van objecten, hun aandachtspunten, en boven de handtekeningen een verwijzing naar die lijst.
- De historie van de afrondingen staat op het blok- en het complexscherm.

## PDF's

- **Proces-verbaal per opname:** in huisstijl, met de urgentieklassen, de tekortkomingen, bijlage 1b (meterstanden), de overige zaken, de verklaring met handtekeningen en een genummerde fotobijlage.
- **Verzamel-proces-verbaal:** per blok- of complexafronding.
- **Tekens:** het lettertype ondersteunt Nederlandse, West- en Oost-Europese, Turkse en Vietnamese tekens. Grieks, Cyrillisch en Chinees verschijnen als "?".
- **Opslaan of versturen:** via **Delen / bewaren…** (Bestanden, mail, OneDrive) of **Downloaden**.

## Tekortkomingen exporteren (PDF of Excel)

Op het tabblad **Afronden** van een object, en op het scherm **Blok afronden** / **Complex afronden**, staat **Tekortkomingen exporteren**. Kies eerst **PDF** of **Excel**, en daarna deze woning, het blok of het hele complex. Per object telt de actuele opname: de oplevering als die is gestart, anders de vooropname.

- **PDF:** hetzelfde proces-verbaal, maar zonder fotobijlage en zonder fotonummers. Bij een blok of complex begint het bestand met een overzichtspagina (per object A/B/C, open, hersteld, afgerond, met totaal), gevolgd door het proces-verbaal van elk object waarvan de vooropname of oplevering is begonnen. De paginanummering telt per object.
- **Excel:** geen foto's, twee bladen:
  - **Tekortkomingen:** één regel per punt, met complex, blok, adres, opname, nummer (zoals in het proces-verbaal), ruimte, omschrijving, urgentie, status (open / hersteld / niet hersteld / nog te beoordelen), niet erkend, paraaf en of er een foto is. Met filters op de koprij.
  - **Per object:** het aantal A-, B- en C-punten, open en hersteld, niet erkend, C-limiet en of het object is afgerond.

## Complex importeren uit Excel

Op het complexoverzicht staan **Excel importeren** en **Sjabloon downloaden**. Het bestand bevat één regel per object:

| Complex | Complexnaam | Blok | Adres | Woningtype |
|---|---|---|---|---|
| 960 | Torckdael fase 2 | A | Buurtseweg 12 | Appartement |

**Kolommen**
- Kolomnamen zijn niet hoofdlettergevoelig, en er zijn alternatieven: Type/Objecttype/Soort, Complexnummer, Gebouw.
- In plaats van een kolom Adres mogen ook de kolommen **Straat**, **Huisnummer** en **Toevoeging** staan. Een toevoeging die met "alg" begint, wordt een algemene ruimte.
- Ontbreekt de kolom Complex, dan vraagt de app om het complexnummer; binnen een geopend complex gebruikt hij dat complex. Ontbreekt de kolom Woningtype, dan vraagt de app het type.
- "960 Torckdael" in één cel wordt gesplitst in nummer en naam.

**Wat de import doet**
- Een titel of lege regels boven de koprij zijn geen probleem.
- Bestaande complexen en blokken worden aangevuld. Adressen die al in het blok staan, worden overgeslagen. Er wordt nooit iets gewijzigd of verwijderd.
- Vooraf toont de app een samenvatting, met de Excel-rijnummers van overgeslagen regels.
- Werkt met .xlsx, .xls en .csv (komma of puntkomma).

## Opslag en back-up

**Opslag**
- Alles wordt bij iedere wijziging automatisch opgeslagen in de browseropslag (IndexedDB) van de tablet.
- Sluit de app vlak na het typen, dan zorgt een noodkopie dat er niets verloren gaat.

**Back-up maken**
- **Export** (complexoverzicht) maakt één JSON-bestand met alle gegevens, foto's en handtekeningen.
- **Export complex** (in een complex) doet hetzelfde voor één complex, wat handiger is bij veel foto's.
- Maak aan het eind van elke dag een export, en bewaar die buiten de tablet (SharePoint, OneDrive of mail). Op het complexscherm staat wanneer de laatste export was.

**Back-up terugzetten met Import**
- **Alles vervangen** wist de tablet en zet de back-up terug.
- **Samenvoegen** vult de tablet aan. Per object blijft de laatst gewijzigde versie staan, en nieuwe verzamelafrondingen komen erbij. Zo breng je het werk van twee tablets samen.
- Zijn dezelfde objecten op twee tablets apart afgerond, dan blijven beide rondes bewaard. De ronde die niet meer geldt, krijgt een rode markering in de historie.
- Een beschadigd back-upbestand wordt geweigerd, en er verandert niets.

**Let op**
- Het wissen van websitegegevens in de browser wist ook de app-gegevens. Exporteer dus eerst.
- Open de app niet in twee tabbladen tegelijk. De app waarschuwt daarvoor, omdat de tabbladen elkaars werk kunnen overschrijven.

## Bediening

- Terugvegen of de terugknop van de browser gaat één scherm terug binnen de app. Bij een open dialoog of foto sluit "terug" eerst die dialoog of foto.
- Kruimelpad bovenin: Complexen › Complex › Blok › Object.

## Voor beheer en ontwikkeling

- **Uitrol:** upload `index.html` en `sw.js` samen naar de hoofdmap van deze repository; GitHub Pages publiceert ze automatisch. Zonder `sw.js` werkt de app niet offline.
- **Versienummer:** staat onderaan elk scherm (`APP_VERSIE` in `index.html`).
- **Ingebouwde bibliotheken:** jsPDF met AutoTable (PDF) en SheetJS (Excel). Er is geen internetverbinding nodig voor de app zelf.
- **Lettertype:** Reddit Sans (SIL Open Font License), ingebouwd in Regular en Bold met Latin Extended.
- **Tests:** de testbevindingen en de toetsregels voor volgende versies staan in het QA-rapport (`QA-rapport_opleverinspectie_*.md`).

## Versiegeschiedenis

| Versie | Belangrijkste wijzigingen |
|---|---|
| 1.0 | Eerste versie: complex/blok/object, vooropname en oplevering, foto per punt, handtekeningen, PDF, Excel-import, export/import |
| 1.1 | Verbeteringen na QA-review, waaronder foto-opslag, miniaturen en offline werken (service worker) |
| 1.2 | Tabblad Overige zaken; meterstanden optioneel per object; ondertekenen en PDF samengevoegd op het tabblad Afronden |
| 1.2.1 | De tweede handtekening rondt de oplevering definitief af; de partijgegevens worden daarbij vastgezet |
| 1.3 | Verzamelafronding: een heel blok of complex in één keer ondertekenen, met verzamel-proces-verbaal |
| 1.3.2 | `sw.js` hersteld (offline werkte niet); de selectie op het verzamelscherm blijft behouden; samenvoegen neemt nieuwe rondes mee en markeert conflicten; aannemer en plaats verplicht bij de verzamelafronding |
| 1.3.3 | Verzamelscherm per blok gegroepeerd, met "Alles" per blok en bij aandachtspunten; C-limiet per woning en ontbrekende meterstanden als aandachtspunt bij de verzamelafronding |
| 1.3.4 | Ruimtelijst klapt niet meer vanzelf open over het punt; terugknop blijft in de app; PDF-lettertype met Oost-Europese en Turkse tekens; noodkopie bij sluiten; witte achtergrond voor doorzichtige foto's; partijen en plaats verplicht bij los ondertekenen; controle op meterstanden; juiste rijnummers bij Excel-import |
| 1.4.0 | Partijen heten opdrachtgever en opdrachtnemer (schermen en PDF); urgentie A Kritiek / B Hoog / C Laag; meterstanden in de volgorde laag, hoog, laag terug, hoog terug, water, gas (optioneel), met even brede kolommen in de PDF; Excel-export van alle tekortkomingen (zonder foto's) bij het afronden |
| 1.4.1 | Korte schuif-fade bij navigeren: dieper (complex → blok → object) en een tabblad naar rechts schuiven naar links; terug en een tabblad naar links schuiven naar rechts. Bij tabbladen beweegt alleen de inhoud; tikken tijdens de overgang wordt genegeerd; uit bij 'beweging beperken' |
| 1.4.2 | De donkere tabknop schuift mee naar het gekozen tabblad; de scrollstand van de tabbalk blijft staan |
| 1.5.0 | Tekortkomingen ook als PDF: het proces-verbaal zonder fotobijlage, per woning, blok of complex (met overzichtspagina); keuze PDF / Excel bij het afronden |
| 1.5.1 | Toelichtende tekst in de kaart Tekortkomingen exporteren weggehaald |
