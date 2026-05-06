// ============================================================
// CASTING BOARD — Configurazione
// Modifica SOLO questo file dopo aver fatto il deploy di Apps Script
// ============================================================

const CONFIG = {
  // URL dell'Apps Script deployato (lo trovi dopo il deploy)
  // Esempio: https://script.google.com/macros/s/AKfycbx.../exec
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbz7YjkcflYr9KXoYZmLVrKTIcnP9HHo9u5FBKIlrQCIP4gNJWKRlQqmL3pIPZHjt-hS/exec',

  // Deve corrispondere a SECRET_TOKEN in Code.gs
  TOKEN: 'CastingModelsFDS',

  // Nome dell'agenzia/progetto (appare nell'header)
  AGENCY_NAME: 'Casting Board',

  // Password semplice per accedere alla gallery (lascia vuoto per nessuna protezione)
  // NOTA: non è sicurezza vera — serve solo per non esporre la gallery pubblicamente
  GALLERY_PASSWORD: 'Admin0123',
};

// Non modificare sotto questa riga
window.CONFIG = CONFIG;
