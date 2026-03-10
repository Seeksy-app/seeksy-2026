import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/sidebar-theme.css";
import { initFaviconRotation } from "./utils/faviconRotation";

console.log('[Boot] Seeksy app starting...');

// Unregister any stale service workers on boot
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    if (registrations.length > 0) {
      console.log(`[Boot] Found ${registrations.length} service worker(s), unregistering...`);
      for (const registration of registrations) {
        console.log('[Boot] Unregistering service worker:', registration.scope);
        registration.unregister();
      }
    }
  }).catch((err) => {
    console.warn('[Boot] Failed to unregister service workers:', err);
  });
}

// Initialize hourly favicon rotation
initFaviconRotation();

console.log('[Boot] Rendering React app...');
const root = document.getElementById("root")!;
createRoot(root).render(<App />);

// Listen for the hero image to finish loading before revealing
function revealApp() {
  if (root.classList.contains("ready")) return;
  const loader = document.getElementById("initial-loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 250);
  }
  root.classList.add("ready");
}

window.addEventListener("seeksy:hero-ready", revealApp, { once: true });

// Fallback: reveal after 3s max in case the event never fires (e.g. different route)
setTimeout(revealApp, 3000);
