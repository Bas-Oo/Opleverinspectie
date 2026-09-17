[README_opleverinspectie.md](https://github.com/user-attachments/files/32339285/README_opleverinspectie.md)
# Opleverinspectie-tool — iteratie 1

E�n bestand: `opleverinspectie.html` (± 0,9 MB). Draait volledig offline in Safari op de iPad. Geen installatie, geen internet, geen inlog.

## Op de iPad zetten

1. Zet `opleverinspectie.html` in iCloud Drive of stuur het per mail/AirDrop naar de iPad.
2. Open de **Bestanden**-app, tik op het bestand → het opent in Safari.
   Werkt het niet direct: houd het bestand ingedrukt → **Deel** → **Safari**.
3. In Safari: tik op **Deel** → **Zet op beginscherm**. De app opent daarna schermvullend met het WSW-beeldmerk als icoon.

Belangrijk: de gegevens staan in de browseropslag (IndexedDB) van Safari op díe iPad. Open het bestand altijd op dezelfde manier (via het beginschermicoon), anders ziet Safari het soms als een andere "site" met een lege opslag.

## Werken met de app

- **Complex → Blok → Object**. Per object tabs: Gegevens · Vooropname · Oplevering · Meterstanden · Ondertekening · PDF.
- **+ Tekortkoming**: ruimte, omschrijving, urgentie A/B/C, niet erkend, paraaf, foto (camera opent direct; foto wordt verkleind tot 1280 px).
- Bij het typen van ruimte/omschrijving verschijnen eerder gebruikte waarden uit hetzelfde complex; één tik neemt ze over.
- **Oplevering starten** neemt alle vooropnamepunten over; per punt: Hersteld / Niet hersteld. Nieuwe punten toevoegen kan.
- Rode banner bij een A-punt (oplevering kan niet plaatsvinden); gele waarschuwing boven 3 C-punten per object en boven 5 per blok.
- **Ondertekening**: met vinger of Apple Pencil, per opname (vooropname en oplevering apart). Overslaan mag: de PDF krijgt dan lege vakken.
- **PDF**: proces-verbaal per opname in huisstijl, met bijlage 1b en genummerde fotobijlage. Safari toont de PDF; via Deel → Bewaar in Bestanden of mail.

## Complex importeren uit Excel

Op het complexoverzicht staat **Excel importeren** (en **Sjabloon downloaden**). Eén regel per object met de kolommen:

| Complex | Complexnaam (optioneel) | Blok | Adres | Woningtype |
|---|---|---|---|---|
| 960 | Torckdael fase 2 | A | Buurtseweg 12 | Appartement |

- Kolomnamen zijn niet hoofdlettergevoelig; "Type" of "Objecttype" werkt ook. Lege regels boven de koprij worden genegeerd.
- Woningtype: Appartement / Woning / Algemene ruimte (herkend op de eerste letters; leeg = Woning).
- Staat de complexnaam in dezelfde cel als het nummer ("960 Torckdael"), dan wordt die gesplitst.
- Bestaande complexen en blokken worden aangevuld; adressen die al in het blok staan worden overgeslagen. Er wordt nooit iets gewijzigd of verwijderd. Vóór het importeren zie je een samenvatting.
- .xlsx, .xls en .csv (komma of puntkomma) werken.

## Back-up (export/import)

- Alles wordt bij iedere wijziging automatisch opgeslagen op de iPad.
- **Export** (knop bovenin op het complexoverzicht) maakt één JSON-bestand met alle gegevens én foto's. Bewaar dit dagelijks buiten de iPad (iCloud, mail, SharePoint).
- **Import** zet zo'n bestand terug op dezelfde of een andere tablet. Let op: import vervangt alles wat op de tablet staat.
- Wissen van Safari-websitegegevens wist ook de app-data. Exporteer dus eerst.

## Eerst testen op de bouwplaats

Het grootste risico zit in de camera-invoer en de opslag van tientallen foto's per woning. Test dat eerst met één woning en veel foto's voordat de tool breed wordt ingezet.

## Nog niet in iteratie 1 (staat gepland voor iteratie 2)

Complexoverzicht-PDF, instellingenscherm met beheer van suggestielijsten, urgentie voorvullen bij een gekozen omschrijving, sorteren op ruimte, waarschuwing bij ontbrekende dagelijkse back-up.
