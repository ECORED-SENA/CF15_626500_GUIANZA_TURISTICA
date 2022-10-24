export default {
  global: {
    componenteFormativo: 'Dirección de salidas de campo y técnicas de campismo',
    descripcionCurso:
      'El presente componente formativo está diseñado para formar competencias en dirección, coordinación y verificación de eventos recreativos, por lo que incluye los conceptos y los fundamentos técnicos para el diseño de salidas de campo, actividades al aire libre y el campismo, además de describir y considerar las recomendaciones y los protocolos esenciales para realizar acciones formativas en la guianza turística.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Supervisión logística de la salida de campo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estrategias de gestión',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Roles administrativos del guía de turismo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Salidas de campo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Montaje de campamentos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Campismo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Procedimientos de montaje de campamentos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Carpas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Equipos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Menú de cocina y campamento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Atehortúa, J. y Miranda, J. (2017). Técnicas de campismo. SENA Regional Caldas. Centro de Comercio y Servicios.',
    },
    {
      referencia:
        'Conicet. (2016). Manual de procedimientos para organizar salidas de campo. Conicet.',
      link:
        'https://www.conicet.gov.ar/wp-content/uploads/Manual-de-procedimientos-para-organizar-salidas-de-campo.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Caminata',
      significado:
        'acción de desplazarse andando sobre los pies, paso tras paso, sin trotar, ni correr, sobre una superficie. Actividad esencial al aire libre.',
    },
    {
      termino: 'Campamento',
      significado:
        'lugar al aire libre especialmente dispuesto para acampar y albergar personas con carpas o tiendas de campaña.',
    },
    {
      termino: 'Campamento base',
      significado:
        'campamento con estaciones fijas, es decir, que siempre permanecen en un lugar.',
    },
    {
      termino: 'Campismo',
      significado:
        'actividad que se realiza al aire libre y que consiste en acampar, en carpas o tiendas de campaña a la intemperie, durante un periodo de tiempo.',
    },
    {
      termino: 'Cantimplora',
      significado:
        'frasco de forma aplanada, de plástico o metal, revestido generalmente de cuero o tela para llevar bebidas en viajes o excursiones.',
    },
    {
      termino: 'Caramañola',
      significado:
        'frasco de forma cilíndrica, de plástico o metal que se utiliza para transportar líquido, especialmente en actividades al aire libre.',
    },
    {
      termino: 'Carpa',
      significado:
        'tienda de campaña, con paredes, techo, suelo, ventanas, puertas con cremallera, conformada por materiales ligeros, resistentes e impermeables, artefacto o accesorio portátil donde se acampa, de fácil instalación, la carpa es el elemento principal e indispensable en un campamento.',
    },
    {
      termino: 'Cocción',
      significado:
        'proceso de cocinar un alimento, exponiéndolo a la acción del calor, con el fin de que este adquiera ciertas características quedando apto para su consumo.',
    },
    {
      termino: 'Conservación',
      significado:
        'cuidados que se le dan a los alimentos con el fin de que no pierdan sus características y propiedades con el paso del tiempo, tanto en el frío como en el calor. Importante aclarar que el término también se relaciona con la conservación de la naturaleza.',
    },
    {
      termino: 'Entorno natural',
      significado:
        'es aquél constituido por elementos naturales como el clima, el aire, el agua, la fauna y la flora, el relieve, el suelo, entre otros, que se relacionan e interactúan entre sí en el tiempo y espacio.',
    },
    {
      termino: 'Estaca',
      significado:
        'objeto contundente que cuenta con una punta en uno de sus extremos, que permite clavarlo en el terreno, con el fin de que este sirva para sujetar o anclar.',
    },
    {
      termino: 'Herramienta',
      significado:
        'objeto elaborado que sirve como extensión del cuerpo de quien lo usa para permitir o facilitar una tarea mecánica, que sin ella no se podría realizar. Este artefacto es esencial en el montaje de campamentos.',
    },
    {
      termino: 'Microorganismos',
      significado:
        'seres vivos diminutos que se pueden apreciar a través de un microscopio, responsables del deterioro de algunos alimentos.',
    },
    {
      termino: 'Soga',
      significado:
        'cuerda de diversos largos y grosores utilizada para diferentes usos.',
    },
    {
      termino: 'Tabú',
      significado:
        'demarcación o límite que se establece alrededor del campamento en el cual se deja un espacio llamado puerta, como la única entrada permisible.',
    },
  ],
  complementario: [
    {
      tema: 'Salidas de campo',
      referencia:
        'Conicet. (2016). Manual de procedimientos para organizar salidas de campo. Gerencia de Administración.  Conicet.',
      tipo: 'PDF',
      link:
        'https://www.conicet.gov.ar/wp-content/uploads/Manual-de-procedimientos-para-organizar-salidas-de-campo.pdf',
    },
    {
      tema: 'Procedimientos de montaje de campamentos',
      referencia:
        'Atehortúa, J. y Miranda, J. (2017). Técnicas de campismo. SENA Regional Caldas. Centro de Comercio y Servicios.',
      tipo: 'Cartilla-PDF',
      descarga: '/downloads/tecnicas_de_campismo.pdf',
    },
    {
      tema: 'Menú y cocina de campamento',
      referencia:
        'SENA. (2017). Manual acampar conservando. SENA Regional Caldas. Centro de Comercio y Servicios.',
      tipo: 'Maniual-PDF',
      descarga: '/downloads/manual_acampar_conservando.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Jorge Eduardo Atehortúa López',
        cargo: 'Instructor',
        centro: 'Regional Caldas - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Fabio Alberto Ramírez Ayala',
        cargo: 'Experto temático',
        centro: 'Regional Tolima - Centro Comercio y Servicios',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jorge Enrique Haylock Calderín',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Ximena Hurtado Villalba',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Erika Viviana Sandoval Rojas',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
}
