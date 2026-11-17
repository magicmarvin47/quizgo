# QUIZGO

Telegram Mini App per creare quiz personali importando file Excel (.xlsx). Versione statica: non richiede backend, database, account server o telefono sempre acceso.

## Funzioni
- Importazione di uno o più file Excel nella stessa sessione.
- Riconoscimento di intestazioni italiane/inglesi comuni.
- Materie, selezione per materia o tutte, ordine originale o casuale.
- Risposte mescolate una volta all'avvio del test, mantenendo corretta l'associazione della soluzione.
- Test una domanda alla volta con conferma esplicita.
- Storico locale con data, materia, corrette, errate e revisione delle domande sbagliate.
- Quiz e storico salvati nel browser del dispositivo, con archivio separato per ID Telegram quando aperto nella Mini App.

## Dati e limiti
Nessun file Excel viene inviato a un server. I dati restano nella memoria locale del browser/WebView. Non sono sincronizzati tra dispositivi e possono andare persi cancellando i dati del browser o disinstallando l'app. Su un dispositivo condiviso, il profilo locale è separato in base all'ID Telegram fornito dalla WebApp; non è un sistema di autenticazione server-side.

## Formato Excel
Una riga per domanda. Intestazioni consigliate: **Materia, Domanda, A, B, C, D, Corretta**. Sono riconosciuti alias comuni in italiano e inglese. La soluzione può essere la lettera A/B/C/D o il testo esatto dell'opzione. Sono richieste almeno due opzioni.

## Sviluppo e verifica
```bash
npm install
npm test
npm run build
npm run dev
```

## Pubblicazione Telegram
La Mini App deve essere pubblicata su un URL HTTPS pubblico. Il repository GitHub è attualmente privato: GitHub Pages gratuito richiede un repository pubblico. Non rendere pubblico il repository senza autorizzazione esplicita. Dopo aver scelto un hosting statico gratuito compatibile, impostare l'URL HTTPS in BotFather come URL della Mini App.

## Stato
Codice statico senza servizi a pagamento. Build e test devono risultare verdi prima di dichiarare la versione pronta. Bot Telegram, URL pubblico e configurazione BotFather non sono ancora impostati.
