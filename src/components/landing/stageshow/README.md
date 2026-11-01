# Stageshow runtime

The MIT-licensed stage, clock, target measurement, cursor and keyboard core
from the local stageshow skill. Marqly keeps its existing product components,
assets, typography and colors inside these stages.

Host adaptation: `stage.css` omits the kit's unlayered host resets. Marqly's
Tailwind v4 preflight and utility layers supply the product's element styles;
reverting them would restore browser paragraph margins and list bullets.
The `stageshow` layer precedes `utilities` in `landing.css`.

Only the runtime dependencies used by the three authored gestures are copied.
No new npm dependencies are required.
