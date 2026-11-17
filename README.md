# QUIZGO

Telegram Mini App per creare quiz personali importando uno o più fogli Excel (.xlsx).

## Funzioni implementate
- Importazione di più file Excel nella stessa sessione.
- Riconoscimento di intestazioni italiane/inglesi comuni.
- Materie, selezione per materia o tutte, ordine originale o casuale.
- Risposte mescolate una volta all'avvio di ogni test, mantenendo corretta l'associazione della soluzione.
- Test una domanda alla volta e conferma esplicita.
- Storico risultati personale, con conteggio corrette/errate e domande sbagliate.
- API protetta con verifica server-side della firma Telegram Mini App e isolamento dati tramite ID Telegram.
- Database Cloudflare D1 per quiz e risultati.

## Formato Excel
Una riga per domanda. Intestazioni consigliate: **Materia, Domanda, A, B, C, D, Corretta**. Le intestazioni possono essere varianti riconoscibili (es. Question, Subject, Answer). La soluzione può essere la lettera A/B/C/D o il testo esatto dell'opzione. Sono richieste almeno due opzioni.

## Sviluppo locale
```bash
npm install
npm run dev
npm test
npm run build
```
In locale, senza un initData Telegram valido, l'importazione e il quiz sono utilizzabili per provare l'interfaccia, ma il salvataggio cloud e lo storico persistente richiedono l'apertura dalla Mini App Telegram.

## Deploy Cloudflare (da completare con l'account proprietario)
1. Crea un database: `npx wrangler d1 create quizgo`.
2. Copia il database ID restituito in `wrangler.toml`, sostituendo `REPLACE_WITH_D1_DATABASE_ID`.
3. Applica lo schema: `npx wrangler d1 migrations apply quizgo --remote`.
4. Imposta il token del bot come secret: `npx wrangler secret put TELEGRAM_BOT_TOKEN`.
5. Esegui `npm run build` e `npx wrangler deploy`.
6. Imposta l'URL HTTPS pubblicato in BotFather come URL della Mini App.

Non inserire mai il token Telegram nel frontend o nel repository.

## Stato e limiti
MVP in sviluppo, non ancora pubblicato. La configurazione Cloudflare richiede un account e la creazione del D1; non sono stati creati account, bot o servizi esterni. Il backend accetta fino a 500 domande per utente per singolo salvataggio. Prima del rilascio vanno completati i test end-to-end dentro Telegram, controllati i limiti del piano Cloudflare e verificato il flusso di recupero degli errori.
