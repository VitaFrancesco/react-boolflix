# 🎬 React Boolflix

**React Boolflix** è una web app sviluppata in **React** che simula una piattaforma di streaming ispirata a Netflix. Permette di cercare film e serie TV tramite [The Movie Database API (TMDB)](https://api.themoviedb.org), e mostra i risultati in un'interfaccia moderna e dinamica.

---

## 🚀 Funzionalità principali

- 🔍 Ricerca di contenuti tramite **TMDB API**
- 🎞️ Risultati divisi in due sezioni: **Film** e **Serie TV**, entrambe **scrollabili orizzontalmente**
- 🖱️ Hover sulle card con **ritardo di 1 secondo** per mostrare:
  - Titolo
  - Voto
  - Trama (overview)
  - Lingua originale (con flag)
- 🏳️ Gestione della **lingua con bandiere**, tramite chiamate all’API `https://flagcdn.com/en/codes.json`
- ✅ Filtro dei risultati per **genere** tramite checkbox nella sezione filtri
- 🧠 Doppio filtro: ricerca + filtro per genere
- 🎨 Styling personalizzato con **CSS Modules** (`*.module.css`)

---

## 🧰 Tecnologie utilizzate

- React
- Axios
- CSS Modules (nessun framework come Bootstrap)
- TMDB API
- Flagcdn API

---

## 🧪 Come funziona

1. L'utente effettua una **ricerca tramite input**
2. Vengono effettuate due chiamate a TMDB:
   - Una per i film
   - Una per le serie TV
3. I risultati vengono mostrati in due **caroselli separati**
4. Passando il mouse su una card per **1 secondo**, vengono mostrate le info dettagliate
5. I **generi** sono selezionabili tramite **checkbox**: i risultati mostrati vengono filtrati di conseguenza

---

## 🌍 Gestione lingua

La lingua originale di ciascun contenuto viene usata per mostrare la **bandiera corrispondente**, ottenuta da: https://flagcdn.com/en/codes.json
