# Traccia 0

### Steps
- Utilizzando il file in allegato, creiamo un database con MySQL Workbench.
- Creiamo una nuova applicazione Express.
- Colleghiamo l’app al db e verifichiamo che tutto funzioni.
- Prepariamo una rotta index per ottenere la lista dei film.
- Prepariamo una rotta show per ottenere i dettagli di un singolo film e le sue recensioni.

## BONUS
- Inserire le immagini nel progetto express, cartella public, con relativo middleware.
- Inserire i dati di connessione al database come variabili d’ambiente.
- Inserire le vostre API in controller.
- Inserire le vostre rotte in un router.
- Inserire un middleware per le rotte inesistenti.
- Inserire un middleware per la gestione errori.

# Traccia 1

### MILESTONE 0
Ragionate sulla struttura dell'applicazione che volete realizzare:
- Di quali e quante pagine ho bisogno?
- Avranno bisogno di qualche componente?
- Ci sono componenti riutilizzabili più volte?
- Di quali props hanno bisogno? 

Iniziate a immaginare il risultato finale prima di scrivere una sola riga di codice.

### MILESTONE 1
- Avviate un nuovo progetto React con Vite.
- Ripuliamo lo scaffold da file e codice di esempio non necessari.
- Assicuriamoci che tutto funzioni.

### MILESTONE 2
- Installiamo React Router.
- Creiamo un layout di base per la nostra applicazione.
- Creiamo almeno 2 pagine: una in cui mostrare la lista dei film e una in cui vederne il dettaglio (usando l'id come parametro).
- Impostiamo le rotte per le diverse pagine.

### MILESTONE 3
- Nella pagina con l'elenco dei film prepariamo il layout per accogliere una Card del film.
- Realizziamo il componente della Card, che dovrà accettare il film tramite Props.
- Nella pagina prepariamo un oggetto con la stessa struttura di un film e passiamolo al componente card.

### MINI-BONUS:
- Preparare un array in cui ripetere più volte lo stesso film, o addirittura film diversi.
- La card dovrà avere anche un link che riporti a /movies/id.

### BONUS
- Nella pagina con il dettaglio dei film predisponiamo un titolo e una descrizione placeholder.
- Subito sotto ripetiamo il discorso della Card, ma questa volta saranno Card di recensione (voto, autore, testo ecc..).

# Traccia 2

### MILESTONE 1
- Installate il pacchetto cors sull'applicazione express webapp-express.
- Importate, configurate e abilitate il CORS per l'indirizzo su cui gira la vostra applicazione React.

#### Mini-bonus: 
- Impostate l'indirizzo del frontend nel file .env invece che schiantato a mano in stringa.

### MILESTONE 2
Spostiamoci su webapp-react
- Nella pagina con la lista dei film aggiungiamo una chiamata axios per recuperarli dalla nostra web-api, stampandoli in console.
- Se tutto funziona, spostiamo i dati in uno state su cui iteriamo per generare le cards dei film.

### MILESTONE 3
- Come la milestone precedente, ma per recuperare il dettaglio del singolo film (titolo, autore, ecc..).
- Una volte stampati in pagina i dati del film, procedete a generare dinamicamente le card delle recensioni. Prima verificate che la vostra web-api restituisca quel dato (v. postman e/o console.log).

#### Mini-bonus: 
- Attenzione alle dipendenze dello useEffect

### BONUS
- Caricate le immagini nel public del backend, ma visualizzatele da React.

#### Super-bonus:
- Nel controller che recupera i dati del singolo film modificate la query per restituire anche la media delle relative recensioni.
Vi serviranno una join e la funzione AVG: componete prima la query funzionante su Workbench (es. per id=3) e poi vi spostate su express parametrizzando l'id.
- Migliorate il layout come credete.

# Traccia 3

### MILESTONE 1 - BACKEND
- Predisponiamo un nuovo endpoint nella webAPI per salvare nel database una nuova recensione legata ad un film.
- Testiamola su postman e verifichiamo che nel DB venga effettivamente inserita una nuova recensione.

### MILESTONE 2 - FRONTEND
- Creiamo un componente che contenga il form per le recensioni.
- Inseriamo questo componente nella pagina di dettaglio del film.
- All'invio del form evitiamo il reload della pagina e stampiamo in console tutti i dati presenti nel form (e l'id del film).
- Disattiviamo lo strict mode.
- Se tutto funziona, usiamo questi dati per inviarli alla webapi tramite axios.

### MILESTONE 3 - FRONTEND
- A inserimento avvenuto, chiamiamo dal componente del form un metodo del padre, per recuperare nuovamente i dettagli del movie.
- Testiamo tutto, riattiaviamo strict mode.

### BONUS:
- Inseriamo una validazione nel form di recensione. Possiamo usarla per attivare/disattivare il bottone di submit o per aggiungere dei bordi verde/rosso alle input, verificando con una funzione che i dati nello state rispettino alcune condizioni.