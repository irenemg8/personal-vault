# Archivos y enlaces por poner
Proyecto con Laravel 12 con clean architecture
💻Laravel 12 es una de las versiones más avanzadas del framework PHP, ofreciendo una estructura modular, alto rendimiento y facilidad de escalabilidad. Aplicando Clean Architecture, podemos desarrollar proyectos eficientes, organizados y fáciles de mantener. Esta estructura separa la lógica de negocio, infraestructura y presentación, facilitando el mantenimiento y la extensibilidad del código.

✅ Ventajas

✔ Modularidad: Facilita la escalabilidad y el mantenimiento.

✔ Separación de responsabilidades: Reduce el acoplamiento entre capas.

✔ Código limpio y organizado: Facilita la comprensión del proyecto.

✔ Pruebas más sencillas: Las capas desacopladas permiten testear componentes de forma independiente.

✔ Fácil integración con APIs y servicios externos.

❌ Desventajas

❌ Curva de aprendizaje inicial alta si no se está familiarizado con Clean Architecture.

❌ Mayor cantidad de archivos y estructura más compleja, lo que puede ser innecesario en proyectos pequeños.

❌ Mayor tiempo de configuración inicial.

Aplicar Clean Architecture en Laravel 12 es una excelente estrategia para proyectos grandes y escalables. Aunque la curva de aprendizaje es más alta y la configuración inicial toma más tiempo, la modularidad y la organización del código facilitan el desarrollo a largo plazo. Esta estructura es ideal para APIs RESTful, microservicios y plataformas empresariales. 🚀

----- insertar foto --------


Plugins de figma: stark
Plugins de figma: unsplash
Plugins de figma: autoflow
Plugins de figma: lottieflies
Plugins de figma: penpot.app
Plugins de figma: paper.design
Plugins de figma: subframe
Plugins de figma: unicorn.studio
Plugins de figma: motiff.com



portfolio https://inikasdesktop.framer.website/


ejemplo de codigo cards: 
Made in Webflow with CSS & Locomotive Scroll v5.

I call it wheel for now. This is a deco element, that's why I would use aria-hidden="true" on it, so it's invisible for screenreaders.

HTML:

<div class="wheel" style="--angle: 15deg">
 <div class="items">
 <div class="item-wrap" style="--index: 0">
 <div class="item">..</div>
 </div>
 <div class="item-wrap" style="--index: 1">
 <div class="item">..</div>
 </div>
 ...
 </div>
</div>

I got in the layout 24 cards, so i used also the --index from 0 to 23.

On the parent section I got the attributes for Locomotive Scroll, data-scroll & data-scroll-css-progress. It will add a CSS variable --progress to the element. This variable represents the current progress of the element and ranges between 0 and 1.

On the wheel I set aspect-ratio: 1 and a width: 70em. In my case I'm using inside the wheel em, so I can set a fluid font-size which lets every shrink down/up on resizing the browser. Could also use something like 40vw.

I'm using on the wheel also:

transform: rotate(calc(var(--progress, 0) * -70deg));

Which lets it rotate a bit based on the scroll progress we get form Locomotive Scroll.

On the "items" class I'm using display grid to grid pile all item-wraps inside it.

.item-wrap {
 transform: rotate(calc(var(--angle) * var(--index)));
 grid-area: 1 / 1;
 justify-self: center;
 height: 100%;
}

Thats the part where we also rotate all item-wraps based on the angle we set, and based on the index.

On the "item" I'm styling the actual card and set transform: transform: translate(0, -100%); so, it's sitting right before the top of the item-wrap.

With that we got cards in a circular order.

Adding also a gradient as overlay on it. And I removed the cards at the bottom because we wouldn't see them, so less cards, better perfomance.




Plugins Figma - Parte 2
Para trabajar, agilizar, optimizar… o divertirse un rato

Hola red! Seguimos con los plugins de Figma, esos aliados que nos hacen la vida más fácil. Hoy os traigo otros 5 plugins que os pueden ser súper útiles. Desde acelerar la creación de wireframes hasta mejorar la gestión de capas o insertar avatares realistas en vuestros prototipos, estos recursos os ayudarán a diseñar de forma más ágil y organizada. Aquí os los presento uno a uno para que los tengáis siempre a mano. 👇

👉 Ink Wireframes ✨ ✨ ✨ 
• Proporciona una librería de wireframes prediseñados para proyectos web y móviles.
• Facilita la creación rápida de prototipos de baja fidelidad.
• Ayuda a estructurar y visualizar ideas de diseño sin enfocarse en detalles visuales.
• Acelera la fase inicial de conceptualización de interfaces.

👉 Unnamed Layers ✨ ✨ ✨ 
• Proporciona una librería de wireframes prediseñados para proyectos web y móviles.
• Facilita la creación rápida de prototipos de baja fidelidad.
• Ayuda a estructurar y visualizar ideas de diseño sin enfocarse en detalles visuales.
• Acelera la fase inicial de conceptualización de interfaces.

👉 Sort Layers ✨ ✨ ✨ 
• Ordena las capas de manera automática por orden alfabético o por posición (eje X o Y).
• Mejora la jerarquía visual dentro del archivo de diseño.
• Optimiza el flujo de trabajo al evitar la organización manual de capas.
• Asegura una estructura lógica y eficiente en los proyectos.

👉 User Profile Avatar ✨ ✨ ✨ 
• Genera automáticamente avatares de usuario ficticios como placeholders.
• Ahorra tiempo al evitar la búsqueda manual de imágenes de perfil.
• Permite completar de forma rápida listas o secciones de perfiles en interfaces.
• Ideal para prototipos que requieren usuarios simulados de manera simple.

👉 UI Faces ✨ ✨ ✨ 
• Inserta avatares realistas y variados desde múltiples fuentes y categorías.
• Ofrece opciones como avatares generados con IA, aliens, ilustraciones abstractas y dibujos a mano.
• Mejora la apariencia y el realismo visual en prototipos y diseños UI/UX.

https://uxknowledgebase.com/sketching-e32af57baf10
https://concepts.app/en/
https://uxdesign.cc/ui-ux-sketching-techniques-101-7e91d854ae3d

eventos, cheat sheets, etc  zerotomastery.io/resources       https://www.youtube.com/@ZeroToMastery
behance.net
goodui.org
flaticon.com
thenounproject.com
unsplash.com

https://danielschifano.notion.site/Complete-Web-Mobile-Designer-Resources-2024-ca49aed867664ded845d9bea503bfc96



https://www.figma.com/community/plugin/838413521721548186/unused-components
https://www.figma.com/community/plugin/767721682134156281
https://www.figma.com/community/plugin/801195587640428208/design-lint
https://www.figma.com/community/plugin/733025261168520714/figmotion
https://www.figma.com/community/plugin/734590934750866002/chart
https://www.figma.com/community/plugin/748533339900865323/contrast
https://www.figma.com/community/plugin/735098390272716381/iconify
https://www.figma.com/community/plugin/740272380439725040/material-design-icons
https://www.figma.com/community/plugin/744047966581015514
https://www.figma.com/community/plugin/852192486284901337/streamline-icons-illustrations-and-emoji-a-ui-ux-icon-library-with-svg-and-png
https://www.figma.com/community/plugin/739503328703046360/humaaans-for-figma
https://www.figma.com/community/plugin/781441863578182316/illustrations
https://www.figma.com/community/plugin/838959511417581040
https://www.figma.com/community/plugin/775712743044356003/duotones
https://www.figma.com/community/plugin/738775292786594626/design-inspo
https://www.figma.com/community/plugin/738454987945972471
https://www.figma.com/community/plugin/768550475442788437/color-search
https://www.figma.com/community/plugin/809860933081065308
https://www.figma.com/community/plugin/731841207668879837/image-palette
https://www.figma.com/community/plugin/733902567457592893
https://www.figma.com/community/plugin/818613147082270958
https://www.figma.com/community/plugin/742764242781786818/wireframe
https://www.figma.com/community/plugin/731627216655469013/content-reel
https://www.figma.com/community/plugin/736000994034548392/lorem-ipsum-by-divriots
https://www.figma.com/community/plugin/836358953686653979/figchat
https://www.figma.com/community/plugin/786891204057439536
https://www.figma.com/community/plugin/740832935938649295/color-palettes-colorsinspo-color-accessibility-tools
https://www.figma.com/community/plugin/733159460536249875/a11y-color-contrast-checker
https://www.figma.com/community/plugin/734693888346260052/able-friction-free-accessibility
https://www.figma.com/community/plugin/829802086526281657/pexels
https://www.figma.com/community/plugin/738992712906748191/remove-bg
