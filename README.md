# Redux Projekt V 14

## Information

Projektet innefattar en simpel layout design likt en webshop, syftet med denna design är att kunna applicera funktionalitet med Redux biblotektet. 

Projektet har 4 branches, varje branch representerar ett stadie i applikationen utveckling. DesignTemplate branchen är där för er som vill testa att implementera all funktionalitet själva med Redux. redux-setup branchen är den branch vi kommer göra under föreläsningen där vi tillsammans gör setupen för global state med Redux. Slutligen är det Solution branchen som ska fungera som ett facit och genomgångs branch över föregående uppgift.

### Branches 
##### designLayout: Är applikationen med HTML & CSS Template utan funktionalitet.
##### redux-setup: Är applikationen med ett deklarerat globalt state varav en action är deklarerad i reducern.
##### solution: Är applikationen med full funktionallitet.



## Uppgiften

1. Skapa funktionalitet för CartLink komponent att visa antalt artiklar i varukorg i Material UI komponenten "badge", 
Det ska visa antalt artiklar och uppdateras vid varje nyinlagd produkt i varukorg.

2. Skapa funktionalitet för att möjligöra addering och subtrahering av redan inlagd produkt i varukorgen. Det innebär att knapparna i CartItem komponenten ska förändra antal artiklar i given produkt. 

3. Skapa en funktion som summerar priset på alla produkter i varukorg, denna funktionalitet innebär att priset updateras varje gång en produkt läggs till. Det ska även finnas ett onClick event där total priset visas i en alert ruta när man klickar på Checkout knappen.
