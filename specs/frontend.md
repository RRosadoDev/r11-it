# REDISEÑO UI/UX WEB — R11

## Servicios de TI y Software a Medida para PYMEs

### ROL

Actúa como un **Diseñador UI/UX Senior especializado en interfaces Web B2B, SaaS, sistemas administrativos y sitios web de servicios tecnológicos para PYMEs**.

Tu objetivo es diseñar y, si corresponde, implementar una nueva versión de la web corporativa de **R11**, empresa dedicada a:

* Desarrollo de software a medida.
* Sistemas de gestión para pequeñas y medianas empresas.
* Punto de venta (POS).
* Gestión de inventarios.
* Sistemas de citas y reservas.
* Automatización de procesos empresariales.
* Integración de sistemas.
* Servicios y soporte TI.

---

# 1. OBJETIVO DEL REDISEÑO

La web actual debe evolucionar desde una estética:

> oscura + técnica + intimidante + estilo terminal/consola

hacia una experiencia:

> **luminosa + profesional + cercana + moderna + confiable + fácil de entender.**

El público objetivo principal NO está compuesto por desarrolladores.

La interfaz debe transmitir confianza inmediatamente a:

* Dueños de pequeñas empresas.
* Administradores.
* Personal de ventas.
* Personal de recepción.
* Encargados de inventario.
* Profesionales independientes.
* Comerciantes locales.

### Principio fundamental

El visitante debe entender en pocos segundos:

**Qué hace R11 → cómo puede ayudar a su negocio → qué solución podría utilizar → cómo contactar.**

Evita utilizar lenguaje excesivamente técnico en las secciones comerciales.

No presentar a R11 como una empresa "para programadores", sino como una empresa tecnológica que **resuelve problemas reales de negocios mediante software**.

---

# 2. DIRECCIÓN VISUAL

Utiliza un estilo:

**Modern SaaS / B2B / Clean Corporate / Premium but Accessible**

Inspiración conceptual:

* Dashboards SaaS modernos.
* Landing pages de software empresarial.
* Interfaces fintech limpias.
* Software administrativo moderno.
* Websites de empresas tecnológicas orientadas a PYMEs.

### Sensaciones que debe transmitir

* Confianza.
* Orden.
* Profesionalismo.
* Simplicidad.
* Cercanía.
* Eficiencia.
* Modernidad.
* Seguridad.

### Evitar

NO utilizar:

* Fondo negro predominante.
* Código fuente como decoración principal.
* Terminales.
* Efectos hacker.
* Glitches.
* Neon.
* Exceso de gradientes.
* Exceso de animaciones.
* Fondos recargados.
* Texturas tecnológicas.
* Elementos visuales que parezcan una empresa de ciberseguridad.
* Lenguaje excesivamente técnico.
* Cards con demasiada información.

La tecnología debe estar presente **a través de la calidad visual del producto**, no mediante clichés tecnológicos.

---

# 3. DESIGN SYSTEM

Crear un Design System consistente antes de construir las páginas.

## 3.1 Colores

### Background

```css
--color-background: #FFFFFF;
--color-background-soft: #F8FAFC;
--color-background-muted: #F1F5F9;
```

### Primary

Utilizar azul corporativo/navy para transmitir confianza.

```css
--color-primary: #0F172A;
--color-primary-blue: #1E40AF;
--color-primary-light: #EFF6FF;
```

Utilizar:

* `#0F172A` para títulos importantes.
* `#1E40AF` para elementos primarios secundarios, links y estados activos.
* Azul muy claro para fondos informativos.

### Accent / CTA

Utilizar verde esmeralda y WhatsApp.

```css
--color-success: #10B981;
--color-whatsapp: #25D366;
--color-success-light: #ECFDF5;
```

El verde debe reservarse principalmente para:

* WhatsApp.
* Contacto.
* Solicitar información.
* Empezar un proyecto.
* Acciones de conversión.

No utilizar verde indiscriminadamente.

### Text

```css
--color-text-primary: #0F172A;
--color-text-secondary: #334155;
--color-text-muted: #64748B;
```

### Borders

```css
--color-border: #E2E8F0;
--color-border-light: #F1F5F9;
```

---

# 4. TIPOGRAFÍA

Utilizar una tipografía moderna Sans Serif.

Preferencia:

**Inter**

Alternativa:

**Plus Jakarta Sans**

Configuración:

```css
font-family: 'Inter', sans-serif;
```

Jerarquía recomendada:

### H1

Desktop:

```css
font-size: clamp(42px, 5vw, 64px);
font-weight: 700;
line-height: 1.05;
letter-spacing: -0.03em;
```

Mobile:

```css
font-size: 40px;
```

### H2

```css
font-size: clamp(32px, 4vw, 46px);
font-weight: 700;
line-height: 1.1;
```

### H3

```css
font-size: 20px;
font-weight: 650;
```

### Body

```css
font-size: 16px;
line-height: 1.65;
color: #475569;
```

Evitar párrafos demasiado largos.

---

# 5. LAYOUT GLOBAL

Utilizar un container central.

```css
.container {
    width: min(1180px, calc(100% - 40px));
    margin-inline: auto;
}
```

Para pantallas grandes:

```css
max-width: 1180px;
```

Las secciones deben tener abundante espacio vertical.

Desktop:

```css
padding-block: 96px;
```

Secciones principales:

```css
padding-block: 120px;
```

Mobile:

```css
padding-block: 64px;
```

---

# 6. BORDER RADIUS Y SOMBRAS

Cards:

```css
border-radius: 12px;
```

Botones:

```css
border-radius: 8px;
```

Elementos grandes / mockups:

```css
border-radius: 16px;
```

Sombras extremadamente suaves.

```css
box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.06);
```

En estado hover:

```css
box-shadow:
    0 16px 40px rgba(15, 23, 42, 0.10);
```

No utilizar sombras fuertes.

---

# 7. BOTONES

Crear un sistema de botones consistente.

## Primary CTA

Botón azul:

```css
background: #0F172A;
color: white;
```

Ejemplo:

**Conocer soluciones**

## Conversion CTA

Botón verde:

```css
background: #10B981;
color: white;
```

Ejemplo:

**Hablar por WhatsApp**

## Secondary

Botón blanco:

```css
background: #FFFFFF;
border: 1px solid #E2E8F0;
color: #0F172A;
```

Todos los botones deben:

* Tener altura aproximada de 44–48px.
* Tener padding horizontal generoso.
* Utilizar iconos simples cuando aporten contexto.
* Tener estados hover/focus visibles.
* Mantener excelente accesibilidad.

---

# 8. NAVBAR

Crear un Navbar fijo/sticky.

## Desktop

Estructura:

```text
[ R11 LOGO ]     Servicios   Soluciones   Proceso   Nosotros      [ WhatsApp ]
```

El logo debe estar alineado a la izquierda.

El menú debe ser minimalista.

No utilizar demasiados elementos.

### Navbar

```css
height: 72px;
background: rgba(255,255,255,.92);
backdrop-filter: blur(12px);
border-bottom: 1px solid #E2E8F0;
```

El navbar debe permanecer visible durante el scroll.

### WhatsApp

Utilizar:

* Icono de WhatsApp.
* Texto "Hablar por WhatsApp".

Debe ser visualmente más importante que los links normales.

### Mobile

Transformar el menú en:

```text
[ R11 ]                         [ ☰ ]
```

Abrir un menú móvil limpio y espacioso.

---

# 9. HERO SECTION

Esta debe ser la sección visualmente más importante.

Utilizar layout de dos columnas.

```text
-------------------------------------------------------
|                                                     |
|  SOFTWARE QUE HACE                                  |
|  MÁS SIMPLE TU NEGOCIO         [ MOCKUP SOFTWARE ] |
|                                                     |
|  Soluciones digitales...                            |
|                                                     |
|  [ Hablar por WhatsApp ] [ Ver soluciones ]         |
|                                                     |
-------------------------------------------------------
```

## Columna izquierda

Agregar un pequeño eyebrow:

**Software para negocios**

H1 orientado al beneficio.

Ejemplo conceptual:

> **Tecnología que hace crecer tu negocio.**

Subtítulo:

> Creamos software y soluciones digitales que simplifican tus operaciones, organizan tu información y te ayudan a trabajar mejor.

No utilizar frases excesivamente técnicas.

### CTA

Principal:

**Hablar por WhatsApp**

Secundario:

**Ver soluciones**

### Elementos adicionales opcionales

Agregar una pequeña línea de confianza:

> Soluciones pensadas para pequeñas y medianas empresas.

---

# 10. HERO MOCKUP

La columna derecha debe mostrar un mockup fotorrealista de software empresarial.

No mostrar código.

Mostrar una interfaz similar a:

**Dashboard / POS / Inventario**

El mockup debe parecer un producto real.

Ejemplo:

```text
┌─────────────────────────────────────┐
│ R11                                  │
│ Dashboard                            │
├───────────┬─────────────────────────┤
│ Inicio    │ Ventas                   │
│ Ventas    │                          │
│ Productos │ S/ 24,850                │
│ Clientes  │                          │
│ Reportes  │ ┌─────┐ ┌─────┐         │
│           │ │Ventas│ │Stock│         │
│           │ └─────┘ └─────┘         │
│           │                          │
└───────────┴─────────────────────────┘
```

La interfaz del software debe utilizar:

* Blanco.
* Gris muy claro.
* Navy.
* Azul.
* Verde como indicador positivo.

El mockup debe parecer colocado sobre un escritorio/oficina moderna.

Debe existir profundidad visual, pero sin convertir el Hero en una imagen excesivamente llamativa.

---

# 11. BARRA DE GARANTÍAS / CONFIANZA

Inmediatamente después del Hero.

Fondo:

```css
#F8FAFC
```

Crear cuatro elementos horizontales.

Ejemplo:

```text
✓ Atención cercana
✓ Soluciones a medida
✓ Implementación rápida
✓ Soporte continuo
```

Cada elemento debe tener:

* Icono lineal.
* Texto corto.
* Tipografía de 14–15px.

En desktop:

```text
[icon] Atención cercana | [icon] A medida | [icon] Rápida | [icon] Soporte
```

En mobile:

convertir en grid 2x2.

---

# 12. SERVICIOS IT

Crear una sección con:

Eyebrow:

**Servicios**

H2:

> Soluciones digitales para trabajar mejor

Descripción breve.

Después, grid 2x2.

## Card 1 — Desarrollo de software

Icono: código/producto.

Título:

**Software a medida**

Descripción:

> Sistemas diseñados alrededor de la forma en que realmente trabaja tu negocio.

Badge:

**A tu medida**

---

## Card 2 — Sistemas empresariales

Icono: dashboard.

Título:

**Sistemas de gestión**

Descripción:

> Centraliza ventas, inventario, clientes y operaciones desde un solo lugar.

Badge:

**Listo para usar**

---

## Card 3 — Automatización

Icono: workflow.

Título:

**Automatización de procesos**

Descripción:

> Reduce tareas repetitivas y dedica más tiempo a lo que realmente importa.

Badge:

**Ahorra tiempo**

---

## Card 4 — Soporte TI

Icono: headset / life buoy.

Título:

**Soporte y tecnología**

Descripción:

> Acompañamiento para mantener tus herramientas funcionando correctamente.

Badge:

**Respuesta rápida**

---

# 13. INTERACCIÓN DE LAS CARDS

Las cards deben ser minimalistas.

```css
.card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 32px;
    transition:
        transform .2s ease,
        box-shadow .2s ease,
        border-color .2s ease;
}
```

Hover:

```css
.card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(15,23,42,.08);
    border-color: #CBD5E1;
}
```

No utilizar animaciones exageradas.

---

# 14. SOFTWARE POR CASOS DE USO

Esta sección debe mostrar que R11 no vende simplemente "programación".

Mostrar soluciones concretas para diferentes negocios.

Título:

> Software pensado para tu forma de trabajar

Crear tabs o cards visuales.

### Caso 1

**Punto de venta**

Rubro:

**Restaurantes / Comercios**

Mostrar mockup realista de:

* Productos.
* Carrito.
* Total.
* Métodos de pago.
* Ventas del día.

---

### Caso 2

**Gestión de citas**

Rubro:

**Clínicas / Consultorios / Profesionales**

Mostrar:

* Calendario.
* Horarios.
* Clientes.
* Citas.
* Estado.

---

### Caso 3

**Control de inventario**

Rubro:

**Ferreterías / Comercios**

Mostrar:

* Productos.
* Stock.
* Entradas.
* Salidas.
* Alertas.

Cada caso debe tener una etiqueta clara del negocio.

Evitar presentar las pantallas como simples screenshots flotantes.

Construirlas visualmente como mockups de un producto SaaS real.

---

# 15. SECCIÓN PROCESO

Título:

> De la idea a una solución funcionando

Subtítulo:

> Un proceso claro, sin complicaciones técnicas innecesarias.

Mostrar tres pasos.

```text
01                    02                    03

CONVERSAMOS      DISEÑAMOS              IMPLEMENTAMOS
```

### 01 — Conversamos

> Entendemos cómo funciona actualmente tu negocio y qué necesitas mejorar.

### 02 — Diseñamos

> Definimos una solución sencilla, clara y adaptada a tus procesos.

### 03 — Implementamos

> Construimos, probamos y ponemos la solución en funcionamiento.

Utilizar conectores visuales simples.

En desktop:

```text
01 ─────────── 02 ─────────── 03
```

En mobile:

```text
01
│
02
│
03
```

---

# 16. SECCIÓN DE CONVERSIÓN

Crear una sección CTA visualmente diferenciada.

Fondo navy:

```css
background: #0F172A;
```

Texto blanco.

Título:

> ¿Tienes un proceso que podría funcionar mejor?

Texto:

> Cuéntanos qué necesitas y encontremos juntos una solución.

CTA:

**Hablar por WhatsApp**

Secondary:

**Solicitar información**

La sección debe sentirse como una invitación, no como publicidad agresiva.

---

# 17. FORMULARIO DE CONTACTO

Crear formulario simple.

Máximo tres campos principales:

```text
Nombre
¿Cómo podemos ayudarte?
WhatsApp / correo
```

Alternativamente:

```text
Nombre
Empresa
¿Qué necesitas?
```

El formulario debe ser extremadamente limpio.

Inputs:

```css
height: 48px;
border: 1px solid #CBD5E1;
border-radius: 8px;
padding: 0 14px;
```

Focus:

```css
border-color: #1E40AF;
box-shadow: 0 0 0 3px rgba(30,64,175,.10);
```

CTA:

**Quiero hablar con R11**

Agregar mensaje de confianza:

> Tus datos serán utilizados únicamente para responder tu consulta.

---

# 18. WHATSAPP FLOTANTE

Agregar botón fijo en la esquina inferior derecha.

Desktop:

```text
                         ┌───────────────────────┐
                         │ ¿Hablamos?             │
                         └───────────────────────┘
                                          [ WhatsApp ]
```

El botón debe ser:

* Circular.
* Verde WhatsApp.
* Icono blanco.
* 56–60px.
* `position: fixed`.

```css
position: fixed;
right: 24px;
bottom: 24px;
width: 58px;
height: 58px;
border-radius: 50%;
background: #25D366;
z-index: 1000;
```

Agregar tooltip/popup:

> ¿Tienes alguna consulta? Escríbenos.

En mobile reducir ligeramente el tamaño.

---

# 19. FOOTER

Footer limpio.

Estructura:

```text
R11
Servicios
Soluciones
Contacto
Redes sociales

© 2026 R11. Todos los derechos reservados.
```

Agregar una descripción breve:

> Tecnología y software para negocios que quieren trabajar mejor.

No utilizar un footer gigante.

---

# 20. ICONOGRAFÍA

Utilizar iconos lineales.

Preferencia:

**Lucide Icons**

o una biblioteca equivalente.

Características:

* Stroke fino.
* Diseño consistente.
* Tamaño 20–24px.
* Sin iconos 3D.
* Sin emojis como iconografía principal.

Ejemplos:

* MessageCircle
* Code2
* LayoutDashboard
* Boxes
* Workflow
* Headphones
* CalendarDays
* ShoppingCart
* Package
* CheckCircle2
* ArrowRight

---

# 21. ANIMACIONES

Utilizar microinteracciones discretas.

Ejemplos:

* Fade-up al entrar en viewport.
* Hover suave en cards.
* Hover en botones.
* Transición del Navbar.
* Aparición progresiva de mockups.

Duración:

```css
200ms — 300ms
```

Easing:

```css
ease-out
```

NO utilizar:

* Parallax excesivo.
* Scroll hijacking.
* Animaciones constantes.
* Elementos que se mueven permanentemente.
* Efectos glitch.
* Animaciones que dificulten la lectura.

Respetar:

```css
prefers-reduced-motion
```

---

# 22. RESPONSIVE DESIGN

El diseño debe ser Mobile First.

Breakpoints sugeridos:

```css
640px
768px
1024px
1280px
```

### Desktop

Hero:

```text
50% / 50%
```

Servicios:

```text
2 x 2
```

Casos de uso:

```text
contenido + mockup
```

Proceso:

```text
horizontal
```

### Tablet

Reducir espacios y tamaños.

### Mobile

Hero:

```text
Texto
CTA
Mockup
```

Servicios:

```text
1 columna
```

Casos de uso:

```text
Mockup
Texto
```

Proceso:

```text
vertical
```

Navbar:

```text
Logo + menú hamburguesa
```

Nunca permitir:

* Scroll horizontal.
* Texto cortado.
* Botones demasiado pequeños.
* Cards excesivamente altas.
* Formularios difíciles de utilizar.

---

# 23. ACCESIBILIDAD

Cumplir buenas prácticas WCAG.

Garantizar:

* Contraste suficiente.
* Estados focus visibles.
* Navegación mediante teclado.
* Labels para formularios.
* Alt text para imágenes.
* Targets táctiles de mínimo aproximadamente 44px.
* Jerarquía correcta de headings.
* No depender únicamente del color para transmitir información.

Los botones deben comunicar claramente qué ocurrirá al hacer clic.

Evitar CTAs genéricos como:

> "Enviar"

Preferir:

> "Solicitar información"

o

> "Hablar con R11"

---

# 24. UX Y COPYWRITING

La comunicación debe centrarse en beneficios empresariales.

## Evitar

> Desarrollamos soluciones utilizando arquitectura hexagonal, microservicios y tecnologías modernas.

## Preferir

> Creamos sistemas adaptados a los procesos de tu negocio para que trabajes de forma más rápida y organizada.

La tecnología puede explicarse posteriormente en una sección técnica o página específica.

### Regla

**Primero el problema del cliente.
Después la solución.
Finalmente la tecnología.**

---

# 25. ESTRUCTURA FINAL DE LA HOME

La página principal debe seguir exactamente esta jerarquía:

```text
1. Navbar
       ↓
2. Hero
       ↓
3. Barra de confianza
       ↓
4. Servicios
       ↓
5. Software / Casos de uso
       ↓
6. Proceso
       ↓
7. CTA
       ↓
8. Formulario de contacto
       ↓
9. Footer
```

El WhatsApp flotante debe permanecer visible durante todo el recorrido.

---

# 26. ESTRUCTURA DE FIGMA

Organizar el archivo de Figma de la siguiente manera:

```text
R11 — Design System

├── 00 Foundations
│   ├── Colors
│   ├── Typography
│   ├── Spacing
│   ├── Shadows
│   ├── Radius
│   └── Grid
│
├── 01 Components
│   ├── Navbar
│   ├── Buttons
│   ├── Cards
│   ├── Inputs
│   ├── Badges
│   ├── Icons
│   ├── CTA
│   └── WhatsApp Widget
│
├── 02 Sections
│   ├── Hero
│   ├── Trust Bar
│   ├── Services
│   ├── Solutions
│   ├── Process
│   ├── Contact
│   └── Footer
│
├── 03 Pages
│   └── Home
│
└── 04 Responsive
    ├── Desktop
    ├── Tablet
    └── Mobile
```

Utilizar Auto Layout y componentes reutilizables.

Crear variantes para:

* Default.
* Hover.
* Focus.
* Active.
* Disabled.

---

# 27. ESTRUCTURA CSS RECOMENDADA

Si se implementa directamente en HTML/CSS, utilizar variables globales:

```css
:root {
    --primary: #0F172A;
    --primary-blue: #1E40AF;

    --accent: #10B981;
    --whatsapp: #25D366;

    --background: #FFFFFF;
    --background-soft: #F8FAFC;

    --text: #0F172A;
    --text-secondary: #334155;
    --text-muted: #64748B;

    --border: #E2E8F0;

    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;

    --container: 1180px;

    --shadow-sm:
        0 4px 16px rgba(15, 23, 42, 0.05);

    --shadow-md:
        0 12px 32px rgba(15, 23, 42, 0.08);
}
```

Crear clases reutilizables:

```css
.container
.section
.section-header
.btn
.btn-primary
.btn-secondary
.btn-whatsapp
.card
.badge
.input
.mockup
```

Evitar estilos duplicados.

---

# 28. REGLAS DE DISEÑO IMPORTANTES

1. Priorizar claridad sobre decoración.
2. Priorizar confianza sobre espectacularidad.
3. Priorizar conversión sobre elementos decorativos.
4. Utilizar espacio blanco generosamente.
5. Mantener una jerarquía visual clara.
6. No saturar las secciones.
7. Cada sección debe tener un propósito.
8. No utilizar más de 2–3 colores visualmente dominantes simultáneamente.
9. Los mockups deben parecer software real.
10. Las cards deben ser fáciles de escanear.
11. Los CTA deben ser evidentes pero no agresivos.
12. El usuario debe poder contactar a R11 desde cualquier punto de la página.
13. Mantener consistencia absoluta entre componentes.
14. Diseñar primero Desktop y adaptar cuidadosamente a Mobile.
15. Evitar que la interfaz parezca una plantilla genérica de una startup tecnológica.

---

# 29. RESULTADO ESPERADO

El resultado final debe sentirse como:

> **Una empresa tecnológica profesional que entiende los problemas de los negocios y ofrece soluciones simples.**

No debe sentirse como:

> "Una empresa de programadores mostrando tecnología."

La primera impresión debe comunicar:

**"Esta empresa puede ayudarme a organizar y mejorar mi negocio."**

El diseño debe ser:

**Limpio + profesional + cercano + moderno + confiable + orientado a conversión.**

Antes de generar la interfaz final, define mentalmente el Design System y asegúrate de que todos los componentes, colores, espaciados, tipografías, iconos, botones y estados interactivos respeten las mismas reglas visuales.

Si debes tomar una decisión de diseño no especificada explícitamente, elige siempre la alternativa que favorezca:

**claridad → confianza → facilidad de uso → conversión → estética.**
