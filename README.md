# QUIZGO

Telegram Mini App per creare quiz personali importando fogli Excel.

## Stato
Prima implementazione in sviluppo. Non è ancora pubblicata né pronta per dati reali.

## Stack
- React + TypeScript + Vite
- Telegram Mini Apps SDK
- Cloudflare Workers + D1
- ExcelJS per importare file .xlsx

## Avvio locale
```bash
npm install
npm run dev
```

## Formato Excel consigliato
Una riga per domanda, con colonne: **Materia, Domanda, A, B, C, D, Corretta**. Le intestazioni riconoscono anche varianti comuni. La colonna Corretta può contenere A/B/C/D oppure il testo esatto della risposta.

## Pubblicazione
Configurazione Cloudflare in `wrangler.toml`. Prima del rilascio occorre creare il database D1, applicare le migrazioni, configurare il secret `TELEGRAM_BOT_TOKEN`, pubblicare il Worker e impostare l'URL HTTPS della Mini App in BotFather.

## Sicurezza
L'identità Telegram deve essere ricavata esclusivamente da `initData` verificato lato server. Non fidarsi di user ID inviati dal browser. I dati quiz sono sempre filtrati per proprietario.

## Nota
QUIZGO è uno strumento di esercitazione: verificare i risultati importati prima di usarli per preparazione ufficiale.
