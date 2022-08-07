# Redux Projekt

## Ett Simpelt Redux Projekt
Projektet innefattar en simpel layout design likt en webshop, syftet med denna design är att kunna applicera funktionalitet genom Redux biblotektet. 

Projektet har en simpel Redux setup, vilket görs under föreläsning. Om man inte har klonat ner designLayout branch och implementerat Redux setup själv, klonas branch "redux-setup". "redux-setup" är vår utgångspunkt för uppgiften.

### Uppgiften

1. Skapa funktionalitet för CartLink komponent att visa antalt artiklar i varukorg i Material UI komponenten "badge", 
Det ska visa antalt artiklar och uppdateras vid varje nyinlagd produkt i varukorg.

2. Skapa funktionalitet för att möjligöra addering och subtrahering av redan inlagd produkt i varukorgen. Det innebär att knapparna i CartItem komponenten ska förändra antal artiklar i given produkt. 

3. Skapa en funktion som summerar priset på alla produkter i varukorg, denna funktionalitet innebär att priset updateras varje gång en produkt läggs till. Det ska även finnas ett onClick event där total priset visas i en alert ruta när man klickar på Checkout knappen. Total priset ska beräknas med skatt på 25% moms och frakt på 55kr.  
