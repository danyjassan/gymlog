# GymLog — instrucciones para Claude

App personal para registrar ejercicios del gym. Es una PWA que se instala en iPhone desde Safari.

## Reglas
- Habla conmigo en español y explícame los cambios de forma sencilla (no soy programador experto).
- Todo el código vive en `index.html` (HTML + CSS + JS en un solo archivo). No agregues frameworks, npm ni librerías de internet: la app debe funcionar 100% sin internet.
- Los datos se guardan en `localStorage` con la clave `gymlog-v1`. NUNCA cambies la forma de los datos sin migrar los datos viejos: perdería mi historial.
- Las gráficas son SVG hechas a mano (`lineChart`, `barChart`).
- Diseño: tema oscuro, pensado para iPhone (botones grandes, inputs de 16px, respetar `safe-area`).
- Cada vez que cambies cualquier archivo, sube el número en `const CACHE = 'gymlog-vN'` de `sw.js`, para que mi iPhone descargue la versión nueva.
- Después de cada cambio, abre la vista previa en tamaño de iPhone (390×844) y revisa que no haya errores en la consola.
- Cuando te diga "súbelo" o "publícalo": haz commit con un mensaje en español y push a la rama `main` de GitHub (GitHub Pages publica desde ahí).
