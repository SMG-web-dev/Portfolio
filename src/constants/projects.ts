import { ProjectProps } from "../types/projects";

export const featuredProjects: ProjectProps[] = [
  {
    id: "top-nutricion",
    title: "FSC TopNutrition",
    tagline: "E-Commerce de Nutrición con Búsqueda Inteligente por IA y Panel de Control",
    taglineEn: "Sports Nutrition E-Commerce with AI Search & Administrative ERP",
    image: "/projects/topnutrition.png",
    github: null,
    live: "https://fsctopnutrition.es",
    technologies: ["NextJS", "TypeScript", "Gemini", "Tailwind", "PostgreSQL", "Stripe"],
    category: "Full-Stack",
    isProfessional: true,
    inProgress: false,
    sellingAngle: "E-Commerce Enterprise & Búsqueda IA",
    sellingAngleEn: "Enterprise E-Commerce & AI Search",
    headlineMetric: {
      value: "94%",
      label: "Afinidad en Búsqueda IA",
      sublabel: "Comprende objetivos en lenguaje natural"
    },
    headlineMetricEn: {
      value: "94%",
      label: "AI Search Precision",
      sublabel: "Understands natural fitness goals"
    },
    quickHighlights: [
      "Buscador inteligente con IA (Gemini): encuentra el suplemento adecuado aunque el cliente busque por objetivo ('ganar músculo sin lactosa').",
      "Panel de control y analítica en tiempo real: seguimiento de ventas, estados de pedidos, métricas de ticket medio y productos más vendidos.",
      "Compra segura y catálogo rápido: filtros instantáneos por alérgenos/objetivo y pasarela de pago protegida con Stripe."
    ],
    quickHighlightsEn: [
      "Natural language AI search (Gemini): finds the exact supplement even when customers search by symptom or goal ('muscle gain, lactose-free').",
      "Real-time analytics and management console: tracks revenue curves, fulfillment stages, average order value, and top products.",
      "Secure checkout & zero-latency catalog: instant allergen filtering and bank-grade Stripe payment gateway."
    ],
    overview: {
      problem: "Las tiendas de suplementación deportiva tienen catálogos enormes con tecnicismos que confunden al cliente (BCAAs, creatina creapure, aislado CFM), lo que provoca que muchos abandonen la web sin saber qué comprar.",
      problemEn: "Sports nutrition stores carry massive catalogs with complex jargon that overwhelms average buyers, causing high cart abandonment.",
      solution: "Un buscador inteligente potenciado por IA que entiende lo que el cliente quiere conseguir en sus propias palabras y le recomienda los productos ideales con su porcentaje de afinidad, respaldado por un panel de control para gestionar ventas y envíos.",
      solutionEn: "An intelligent AI search engine understanding customer fitness goals in plain language with affinity match scores, backed by a robust admin panel to monitor orders and sales."
    },
    architecture: {
      summary: "Arquitectura e-commerce integral con tienda pública de alta velocidad, motor de búsqueda semántica y panel ERP privado para la gestión del negocio.",
      summaryEn: "Comprehensive e-commerce platform combining a fast consumer storefront, semantic AI search, and an administrative ERP dashboard.",
      layers: [
        {
          name: "Tienda Online & Compra Rápida",
          nameEn: "Consumer Storefront & Quick Shop",
          details: "Catálogo con filtros instantáneos (vegano, sin gluten, sin lactosa), carrito ágil y pago seguro con Stripe.",
          detailsEn: "Instant catalog filters (vegan, gluten-free, lactose-free), streamlined cart, and secure Stripe payments.",
          stack: ["Next.js 16", "React 19", "Tailwind", "Stripe Elements"]
        },
        {
          name: "Búsqueda Semántica con IA",
          nameEn: "Semantic AI Search Engine",
          details: "Motor basado en Google Gemini que interpreta intenciones deportivas o de salud y recomienda productos explicando el motivo exacto.",
          detailsEn: "Engine powered by Google Gemini interpreting natural language health goals and explaining why each product matches.",
          stack: ["Google Gemini AI", "Búsqueda Semántica", "Recomendaciones"]
        },
        {
          name: "Panel de Gestión y Analítica (ERP)",
          nameEn: "Business Analytics & ERP Panel",
          details: "Monitor de ventas a 30 días con gráficas interactivas, estados de preparación de pedidos y métricas de clientes.",
          detailsEn: "30-day interactive sales charts, order preparation tracking, and customer management tools.",
          stack: ["Recharts", "Gestión de Pedidos", "KPIs de Ventas"]
        },
        {
          name: "Seguridad Bancaria & Base de Datos",
          nameEn: "Data Security & PostgreSQL",
          details: "Base de datos PostgreSQL con protección estricta de cuentas, roles de administración y verificación segura de pagos.",
          detailsEn: "PostgreSQL database with strict account security, administrative roles, and cryptographic payment verification.",
          stack: ["PostgreSQL", "Seguridad de Datos", "Webhooks Seguros"]
        }
      ]
    },
    technicalHighlights: [
      {
        title: "Búsqueda por Objetivos con Inteligencia Artificial (Gemini)",
        titleEn: "Goal-Oriented AI Search Engine (Gemini)",
        tag: "Inteligencia Artificial",
        description: "Permite al cliente buscar como si hablara con un nutricionista experto en la tienda física.",
        descriptionEn: "Allows buyers to search naturally, as if consulting an experienced in-store sports nutritionist.",
        bullets: [
          "Entiende frases cotidianas: 'suplemento para dormir y recuperar piernas' o 'proteína limpia sin azúcar'.",
          "Muestra un porcentaje de afinidad claro (ej. 94%) y una explicación breve y comprensible.",
          "Sistema de respaldo que garantiza resultados al instante aunque no haya conexión con la IA."
        ],
        bulletsEn: [
          "Understands conversational phrases like 'recovery supplement for better sleep' or 'clean sugar-free protein'.",
          "Displays a transparent affinity score (e.g. 94%) alongside a friendly one-sentence explanation.",
          "Built-in fallback system ensuring search results appear immediately under any network condition."
        ]
      },
      {
        title: "Panel ERP con Gráficas de Ventas y Rendimiento",
        titleEn: "Executive ERP Dashboard with Live Sales Analytics",
        tag: "Gestión de Negocio",
        description: "Una consola visual que permite al propietario conocer la salud de su negocio en tiempo real.",
        descriptionEn: "A visual command center enabling business owners to monitor revenue and orders in real time.",
        bullets: [
          "Gráfica interactiva de ingresos y pedidos acumulados a 7 días, 30 días o año completo.",
          "Embudo circular con los estados de cada paquete (pagado, en preparación, enviado).",
          "Ranking de los productos más vendidos para saber qué reponer en almacén."
        ],
        bulletsEn: [
          "Interactive revenue and order curves across 7-day, 30-day, and full-year timeframes.",
          "Circular status funnel tracking orders (paid, packing, shipped, delivered).",
          "Bestseller leaderboard highlighting which inventory items require restocking."
        ]
      },
      {
        title: "Seguridad y Protección de Datos de Clientes",
        titleEn: "Bank-Grade Customer Data & Payment Security",
        tag: "Seguridad & Confianza",
        description: "Protección rigurosa para que los clientes compren con tranquilidad y los datos de pago permanezcan blindados.",
        descriptionEn: "Rigorous defense ensuring customer payment details and orders remain strictly protected.",
        bullets: [
          "Comunicaciones encriptadas y pasarela oficial de Stripe que nunca almacena datos sensibles de tarjetas.",
          "Acceso restringido al panel administrativo mediante permisos y contraseñas protegidas.",
          "Verificación automática de pagos para evitar fraudes o duplicidades en los pedidos."
        ],
        bulletsEn: [
          "Encrypted communications and official Stripe tokenization that never stores sensitive card data.",
          "Restricted administrative access with protected role passwords and audit logs.",
          "Cryptographic payment verification preventing duplicate or fraudulent order processing."
        ]
      }
    ],
    engineeringDecisions: [
      {
        title: "Búsqueda Dual: Inteligencia Artificial + Rapidez Local",
        titleEn: "Dual Search: AI Precision + Instant Local Speed",
        context: "Si una búsqueda por IA tarda más de un segundo, el comprador se impacienta y puede marcharse.",
        contextEn: "If an AI search takes more than a second, buyers grow impatient and may leave the store.",
        decision: "Combinamos la IA de Gemini con un buscador local ultrarrápido: el usuario siempre recibe sugerencias útiles al instante.",
        decisionEn: "Paired Gemini AI with a lightning-fast local search fallback so visitors always receive instant, helpful recommendations.",
        tradeoff: "Mayor trabajo de desarrollo al crear dos motores coordinados, a cambio de cero esperas para el cliente.",
        tradeoffEn: "More development effort synchronizing two engines in exchange for zero customer wait times."
      }
    ],
    gallery: [
      {
        title: "Tienda Online: Portada y Catálogo de Nutrición",
        titleEn: "Storefront: Hero Banner & Sports Nutrition Catalog",
        description: "Diseño comercial de alto impacto con mensaje de máxima pureza, envío en 24/48h, categorías rápidas y reseñas de confianza.",
        descriptionEn: "High-impact commercial storefront highlighting product purity, fast shipping, quick category access, and verified reviews.",
        image: "/projects/topnutrition.png"
      },
      {
        title: "Consola de Administración: Dashboard Ejecutivo",
        titleEn: "Management Console: Executive ERP Dashboard",
        description: "Panel de control real con evolución de ingresos y ventas a 30 días, métricas de ticket medio, embudo de pedidos y productos líderes.",
        descriptionEn: "Live administrative console with 30-day sales curves, average order value, order status funnel, and top-selling products.",
        image: "/projects/topnutrition-admin.png"
      }
    ]
  },
  {
    id: "neoon",
    title: "Neoon",
    tagline: "E-Commerce de Neones LED con Asistente de IA y Animaciones de Firma",
    taglineEn: "Custom LED Neon E-Commerce with AI Assistant & Signature Animations",
    image: "/projects/neoon.png",
    github: null,
    live: "https://neoones.netlify.app/",
    technologies: ["NextJS", "TypeScript", "SCSS", "PostgreSQL", "Stripe", "Gemini"],
    category: "Full-Stack",
    isProfessional: true,
    inProgress: true,
    sellingAngle: "E-Commerce & Asistente IA en Vivo",
    sellingAngleEn: "E-Commerce & Real-Time AI Assistant",
    headlineMetric: {
      value: "100%",
      label: "Presupuestos Automáticos",
      sublabel: "Generación instantánea en PDF"
    },
    headlineMetricEn: {
      value: "100%",
      label: "Automated Quotes",
      sublabel: "Instant PDF proposal generation"
    },
    quickHighlights: [
      "Asistente conversacional con IA (Gemini): asesora a los clientes en tiempo real y calcula precios según medidas personalizadas.",
      "Diseño inmersivo Dark Theme con efecto neón: animaciones fluidas que simulan el encendido y doblado artesanal de tubos LED.",
      "Generación automática de presupuestos y facturas en PDF: emite al instante documentos comerciales listos para cliente y taller."
    ],
    quickHighlightsEn: [
      "AI-powered shopping assistant (Gemini): guides buyers in real time and calculates dynamic quotes based on custom sizes.",
      "Immersive Dark Theme with signature neon effects: fluid animations recreating artisan LED neon tube craftsmanship.",
      "Automated commercial PDF proposals and invoices: instantly produces print-ready business documents for clients and workshop."
    ],
    overview: {
      problem: "Comprar un neón personalizado por internet genera dudas: los clientes no saben cómo quedará la iluminación en su espacio, y calcular presupuestos a medida solía requerir días de intercambio de emails y llamadas manuales.",
      problemEn: "Buying custom neon signs online creates hesitation: customers cannot easily visualize lighting in their space, and custom quotes traditionally required days of back-and-forth emails.",
      solution: "Una tienda online de impacto visual con asistente de IA en vivo que responde dudas y calcula el precio por centímetro al instante, junto con un panel de gestión que genera pedidos y presupuestos en PDF con un solo clic.",
      solutionEn: "A high-converting storefront featuring a live AI assistant for instant dimension-based pricing, paired with an operational backoffice generating orders and PDF invoices with one click."
    },
    architecture: {
      summary: "Plataforma Next.js moderna con panel de administración para gestionar pedidos, pasarela de pagos con Stripe y servicios automatizados en el servidor.",
      summaryEn: "Modern Next.js platform with an integrated backoffice for order fulfillment, Stripe checkout, and automated server workflows.",
      layers: [
        {
          name: "Experiencia de Usuario & Diseño",
          nameEn: "User Experience & Visual Identity",
          details: "Diseño oscuro premium optimizado para destacar el brillo de los productos neón, con navegación fluida y animaciones ligeras.",
          detailsEn: "Premium dark theme engineered to highlight neon glow, with responsive layouts and lightweight CSS animations.",
          stack: ["Next.js", "React", "SCSS Modules", "Tailwind", "Framer Motion"]
        },
        {
          name: "Asistente con Inteligencia Artificial",
          nameEn: "Live AI Sales Assistant",
          details: "Chatbot conectado a Google Gemini que consulta el catálogo en tiempo real para recomendar modelos y calcular precios por medidas.",
          detailsEn: "Live chatbot connected to Google Gemini accessing active catalog data to recommend designs and compute custom pricing.",
          stack: ["Google Gemini AI", "Streaming SSE", "Catálogo Dinámico"]
        },
        {
          name: "Gestión de Pedidos & Base de Datos",
          nameEn: "Orders Management & Database",
          details: "Base de datos PostgreSQL para almacenar pedidos, estados de fabricación en taller, clientes y tarificación dinámica por superficie.",
          detailsEn: "PostgreSQL database storing customer orders, workshop manufacturing stages, and dynamic surface area calculations.",
          stack: ["PostgreSQL", "Panel Admin", "Gestión de Estados"]
        },
        {
          name: "Facturación en PDF & Pagos Seguros",
          nameEn: "Automated PDF Invoicing & Payments",
          details: "Pasarela Stripe (tarjeta, Bizum, Apple Pay) y motor en servidor para descargar facturas y presupuestos comerciales formales.",
          detailsEn: "Stripe payment gateway (cards, Bizum, Apple Pay) with automated server-side generation of formal PDF invoices.",
          stack: ["Stripe", "Generador PDF", "Facturación Comercial"]
        }
      ]
    },
    technicalHighlights: [
      {
        title: "Asistente de Ventas con IA en Tiempo Real (Neonin)",
        titleEn: "Real-Time AI Sales Assistant (Neonin)",
        tag: "Inteligencia Artificial",
        description: "Un asesor virtual que atiende al comprador 24/7, resuelve dudas de instalación y cotiza medidas personalizadas sin esperas.",
        descriptionEn: "A 24/7 virtual advisor that answers customer questions, suggests designs, and provides instant quotes for custom dimensions.",
        bullets: [
          "Respuestas conversacionales instantáneas en streaming (sin pantallas congeladas).",
          "Calcula automáticamente el presupuesto según los metros cuadrados de metacrilato y tamaño seleccionado.",
          "Protección integrada contra abusos para garantizar disponibilidad continua."
        ],
        bulletsEn: [
          "Instant conversational streaming responses with zero interface freezing.",
          "Automatically calculates quotes according to custom acrylic dimensions and neon tube length.",
          "Built-in rate limiting ensuring high availability and reliability."
        ]
      },
      {
        title: "Efecto de Luz y Trazado de Neón de Alta Fidelidad",
        titleEn: "Signature Neon Light & Tube Trace Effects",
        tag: "Diseño & Experiencia",
        description: "Animaciones visuales exclusivas que recrean la luz eléctrica y el doblado de tubos de neón artesanal sin sobrecargar el móvil del cliente.",
        descriptionEn: "Signature animations recreating electrical glow and hand-bent neon craftsmanship without slowing down mobile devices.",
        bullets: [
          "Curvas orgánicas que simulan la estética del cristal iluminado.",
          "Animación vinculada al movimiento de la página de forma fluida y ligera.",
          "Adaptación automática para usuarios que prefieren reducción de movimiento."
        ],
        bulletsEn: [
          "Organic curves recreating the look of illuminated hand-bent glass.",
          "Scroll-responsive animations that stay buttery smooth on any device.",
          "Automatic graceful fallback for users with reduced-motion settings."
        ]
      },
      {
        title: "Generación Automática de Presupuestos y Facturas en PDF",
        titleEn: "Instant Commercial Proposal & Invoice Generation",
        tag: "Automatización de Negocio",
        description: "Transforma cada solicitud de cliente en un documento formal descargable con desglose impositivo y medidas exactas.",
        descriptionEn: "Converts customer requests into formal downloadable PDF documents with itemized taxes and technical dimensions.",
        bullets: [
          "Crea documentos profesionales con la identidad visual de la marca en un segundo.",
          "Facilita la confirmación rápida del pedido tanto al cliente como al taller de producción.",
          "Evita errores manuales en el cálculo de impuestos y metros de material."
        ],
        bulletsEn: [
          "Generates branded commercial PDF proposals in under a second.",
          "Streamlines order approval for both the buyer and the manufacturing workshop.",
          "Eliminates manual pricing and tax calculation errors."
        ]
      }
    ],
    engineeringDecisions: [
      {
        title: "Cotización Dinámica por Superficie en Tiempo Real",
        titleEn: "Real-Time Surface Area Pricing Engine",
        context: "Los clientes solicitan neones con medidas muy diversas que no encajan en una lista fija de precios.",
        contextEn: "Customers demand unique custom sizes that cannot be mapped to a static catalog price list.",
        decision: "Creamos un motor de cálculo matemático automático que cotiza en vivo según el área exacta del letrero.",
        decisionEn: "Engineered an automated formula calculating quotes on-the-fly based on exact sign surface area.",
        tradeoff: "Mayor tiempo de desarrollo inicial a cambio de que el 100% de las ventas personalizadas se coticen sin intervención humana.",
        tradeoffEn: "Higher initial development investment in exchange for 100% automated custom quote generation."
      },
      {
        title: "Navegación Instantánea sin Pantallas en Blanco",
        titleEn: "Instant Navigation with Zero White Flashes",
        context: "En tiendas online, las pantallas de carga blancas hacen que los usuarios abandonen la compra.",
        contextEn: "In e-commerce, jarring blank loading screens cause prospective buyers to drop off.",
        decision: "Implementamos una barra de carga de neón que solo se muestra si una acción tarda más de lo normal, manteniendo la web siempre visible.",
        decisionEn: "Crafted an intelligent progress indicator that only appears during noticeable network delays, keeping the UI visible at all times.",
        tradeoff: "Requiere calibrar los tiempos de respuesta pero ofrece una experiencia de compra premium y rápida.",
        tradeoffEn: "Requires fine-tuned response timing in exchange for a premium, uninterrupted shopping flow."
      }
    ],
    gallery: [
      {
        title: "Panel de Control y Analítica de Pedidos",
        titleEn: "Operational Admin Dashboard & Analytics",
        description: "Consola de administración con métricas de ventas mensuales, ticket medio, seguimiento de pedidos en preparación y desglose de clientes.",
        descriptionEn: "Administrative console with monthly revenue KPIs, average order value, production order tracker, and customer records.",
        image: "/projects/neoon-admin.png"
      },
      {
        title: "Catálogo Online e Identidad Visual Neón",
        titleEn: "Online Catalog & Neon Visual Identity",
        description: "Showcase interactivo de productos prediseñados y personalizados con estética Dark Theme de alta gama.",
        descriptionEn: "Interactive showcase of pre-designed and custom neon signs with a luxury dark aesthetic.",
        image: "/projects/neoon.png"
      }
    ]
  },
  {
    id: "nuevo-estilo",
    title: "Nuevo Estilo Unisex",
    tagline: "Presencia Digital Editorial con Objeto 3D Interactivo en Tiempo Real",
    taglineEn: "Editorial Digital Experience with Real-Time Interactive 3D Object",
    image: "/projects/pelu.webp",
    github: null,
    live: "https://nuevoestilounisex.es",
    technologies: ["NextJS", "TypeScript", "Three.js", "Tailwind", "CSS3"],
    category: "Frontend",
    isProfessional: true,
    inProgress: false,
    sellingAngle: "Diseño Editorial & Experiencia 3D",
    sellingAngleEn: "Editorial Design & 3D Experience",
    headlineMetric: {
      value: "60 FPS",
      label: "3D en el Navegador",
      sublabel: "Sin descargas pesadas"
    },
    headlineMetricEn: {
      value: "60 FPS",
      label: "Browser 3D Experience",
      sublabel: "No heavy downloads"
    },
    quickHighlights: [
      "Objeto 3D interactivo en Three.js: tijeras de peluquería que flotan y giran con reflejos metálicos realistas en la portada.",
      "Desplazamiento suave de alta gama: navegación continua y elegante que eleva la percepción de calidad del negocio.",
      "Web bilingüe completa (Español / Inglés): carta de servicios clara y adaptada a clientes locales e internacionales."
    ],
    quickHighlightsEn: [
      "Real-time interactive 3D object in Three.js: barber shears floating with specular metallic reflections right in the hero.",
      "Studio-grade smooth scrolling: luxurious, continuous navigation elevating brand prestige and trust.",
      "Full bilingual presence (Spanish / English): transparent service menu tailored for both local and international clients."
    ],
    overview: {
      problem: "Los negocios locales de estética suelen tener páginas web anticuadas o plantillas prefabricadas que no transmiten la profesionalidad ni el estilo que ofrecen en su salón físico.",
      problemEn: "Local salons and studios often rely on outdated templates that fail to communicate the artistry, cleanliness, and style of their physical space.",
      solution: "Una web con diseño editorial moderno, tipografía elegante y una experiencia 3D fluida que capta la atención del cliente al instante y facilita consultar precios y reservar cita.",
      solutionEn: "An editorial web experience combining modern typography and an eye-catching 3D element that captivates visitors immediately while making pricing clear."
    },
    architecture: {
      summary: "Sitio web de alto rendimiento construido con Next.js, renderizado 3D optimizado y soporte completo para múltiples idiomas.",
      summaryEn: "High-performance web experience built with Next.js, optimized 3D canvas rendering, and full internationalization.",
      layers: [
        {
          name: "Experiencia 3D en Tiempo Real",
          nameEn: "Real-Time 3D Experience",
          details: "Escena 3D ligera con Three.js que añade dinamismo visual sin penalizar la velocidad de carga en teléfonos móviles.",
          detailsEn: "Lightweight 3D scene built with Three.js adding visual excitement without slowing down mobile page load.",
          stack: ["Three.js", "Iluminación 3D", "Shaders Metálicos"]
        },
        {
          name: "Diseño Editorial & Navegación Suave",
          nameEn: "Editorial Design & Smooth Motion",
          details: "Navegación inercial pausada y elegante, carrusel continuo de reseñas de clientes y tipografía de alta legibilidad.",
          detailsEn: "Inertial smooth scrolling cadence, infinite client review carousel, and editorial typography.",
          stack: ["Next.js", "Tailwind CSS", "Animaciones Suaves"]
        },
        {
          name: "Internacionalización & Posicionamiento",
          nameEn: "Localization & Local SEO",
          details: "Traducción completa en español e inglés y optimización para búsquedas locales en Google Maps y motores de búsqueda.",
          detailsEn: "Complete bilingual content (ES/EN) and local SEO optimization for Google Maps search presence.",
          stack: ["next-intl (ES/EN)", "SEO Local", "OpenGraph"]
        }
      ]
    },
    technicalHighlights: [
      {
        title: "Animación 3D Interactiva sin Cargas Pesadas",
        titleEn: "Interactive 3D Experience Without Sluggish Loading",
        tag: "Innovación Visual",
        description: "Elemento 3D de tijeras artesanales que capta el interés del visitante nada más entrar en la página.",
        descriptionEn: "Hero 3D shears capturing visitor curiosity and setting a modern tone from the very first second.",
        bullets: [
          "Reflejos realistas que reaccionan a la luz virtual del entorno.",
          "Carga ultrarrápida: optimizado para no consumir datos móviles ni batería.",
          "Giro suave y fluido a 60 fotogramas por segundo."
        ],
        bulletsEn: [
          "Realistic metallic reflections responding to simulated ambient lighting.",
          "Ultra-fast startup engineered to preserve mobile battery and data.",
          "Smooth 60 FPS motion across modern desktop and mobile browsers."
        ]
      },
      {
        title: "Carta de Servicios Transparente y Atractiva",
        titleEn: "Transparent & Clean Service Menu",
        tag: "Conversión de Clientes",
        description: "Presenta con claridad los cortes, peinados y tratamientos con precios detallados para generar confianza inmediata.",
        descriptionEn: "Clearly communicates haircut, styling, and color treatments with transparent pricing to build trust.",
        bullets: [
          "Estructura visual limpia y fácil de consultar en cualquier tamaño de pantalla.",
          "Diseño bilingüe para atender a clientes que visitan la ciudad o no dominan el español.",
          "Acceso directo a contacto, ubicación del salón y reserva rápida."
        ],
        bulletsEn: [
          "Clean visual layout that is effortless to scan on mobile screens.",
          "Bilingual toggle ensuring foreign visitors feel welcome.",
          "Direct shortcuts to phone contact, salon map location, and bookings."
        ]
      }
    ],
    engineeringDecisions: [
      {
        title: "Carga Inteligente del 3D para Máxima Velocidad",
        titleEn: "Smart 3D Initialization for Instant Page Load",
        context: "Los gráficos 3D pueden hacer que una web tarde en abrirse en teléfonos más modestos.",
        contextEn: "Complex 3D graphics can delay initial page appearance on mobile connections.",
        decision: "Hicimos que el texto y los precios aparezcan al instante, mientras el 3D se activa de forma suave en segundo plano.",
        decisionEn: "Prioritized instant text and price rendering, allowing the 3D scene to gracefully fade in once ready.",
        tradeoff: "El elemento 3D tarda una fracción de segundo en iniciar, pero el cliente nunca espera frente a una pantalla vacía.",
        tradeoffEn: "The 3D element initializes moments later, but the visitor never experiences a blank waiting screen."
      }
    ],
    gallery: [
      {
        title: "Portada Principal con Elemento 3D y Carta de Servicios",
        titleEn: "Hero Section with 3D Object & Service Menu",
        description: "Presentación visual de la peluquería con objeto 3D dinámico, diseño editorial y navegación bilingüe.",
        descriptionEn: "Visual presentation of the salon with dynamic 3D element, editorial styling, and bilingual navigation.",
        image: "/projects/pelu.webp"
      }
    ]
  }
];

export const freelanceProjects: ProjectProps[] = featuredProjects;
export const personalProjects: ProjectProps[] = [];
