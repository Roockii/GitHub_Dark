# Onyx Vibration Alarm: landing de producto para Shopify

Es el mockup `Onyx_Vibration_Alarm___Mockup.html` pasado a secciones de Shopify (Online Store 2.0).
Todos los textos, imágenes, listas, colores y opciones se editan desde **Tienda online → Temas → Personalizar**.

## Archivos

| Archivo | Qué es |
|---|---|
| `assets/onyx.css` | Estilos. Todo va dentro de `.onyx`, así no toca el resto del tema |
| `assets/onyx.js` | Animación de aparición al hacer scroll y barra de progreso |
| `sections/onyx-product.liquid` | Hero: galería, valoración, precio, selector de cantidad, añadir al carrito, caja de oferta, garantías, acordeón y barra fija inferior |
| `sections/onyx-faq.liquid` | Preguntas rápidas en tarjetas |
| `sections/onyx-ripple.liquid` | Sección negra con las ondas animadas y las ventajas a izquierda y derecha |
| `sections/onyx-features.liquid` | "Recupera tus mañanas": características con imagen o vídeo y dos datos cada una |
| `sections/onyx-compare.liquid` | Tabla comparativa ONYX, Móvil y Smartwatch |
| `sections/onyx-experts.liquid` | Testimonios de expertos |
| `sections/onyx-reviews.liquid` | Reseñas: barras de estrellas, listado y botón "Ver más" |
| `sections/onyx-footer.liquid` | Pie de página |
| `templates/product.onyx.json` | Plantilla de producto con todas las secciones ya colocadas y rellenas con los textos del mockup |

## Instalación

1. Ve a **Tienda online → Temas → ⋯ → Editar código**.
2. En **assets** crea `onyx.css` y `onyx.js` y pega su contenido.
3. En **sections** crea cada `onyx-*.liquid` y pega su contenido.
4. En **templates** crea una plantilla JSON de producto llamada `onyx` y pega `product.onyx.json`.
5. Abre tu producto en el admin y, en **Plantilla del tema**, elige `onyx`.
6. Abre **Personalizar**, elige la plantilla de producto `onyx` y edita lo que quieras.

Otra opción es copiar las carpetas del tema con Shopify CLI: `shopify theme push`.

## Qué se puede editar

* **Producto**: precio, precio tachado, imágenes y variantes salen del propio producto de Shopify. El % de descuento se calcula con el "Precio de comparación".
* **Opciones de cantidad** (bloques): unidades, texto, etiqueta ("AHORRA 10%") y % de descuento mostrado.
  > El % solo cambia el precio que se ve en la página. Para que se cobre de verdad, crea un descuento automático por cantidad en **Descuentos**.
* **Después de añadir al carrito**: ir al carrito, ir directo al pago o quedarse y mostrar un aviso.
* **Acordeón, ventajas, garantías, preguntas, características, filas de la comparativa, testimonios y reseñas**: son bloques, así que se pueden añadir, borrar y reordenar.
* **Colores**: cada sección tiene los 3 colores del degradado, además del fondo y el texto.
* Las secciones también se pueden añadir sueltas en cualquier página con **Añadir sección → Onyx · …**.
