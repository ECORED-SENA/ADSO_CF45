export default {
  global: {
    componenteFormativo: 'Publicación de aplicaciones tradicionales',
    descripcionCurso:
      'Con el estudio de este componente, el aprendiz estará más y mejor capacitado en lo relativo a publicación de aplicaciones, vida útil de las mismas, redes locales, pruebas de sitios y servicios de <em>hosting</em>. Se afianzará en los conceptos más importantes para realizar el proceso de publicación tradicional de un sitio <em>web</em>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Servicios de <em>hosting</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Servicios de dominio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'FTP',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Publicación y prueba de sitios',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
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
        'Comparahosting (2020). El <em>hosting web</em>: ¿Qué es, para qué sirve y qué tipos hay?',
      link: 'https://www.comparahosting.com/hosting/',
    },
    {
      referencia:
        'De Souza, I. (2019). Aprende sobre los tipos de <em>hosting</em> más importantes de la actualidad y sus funciones. RockContent',
      link: 'https://rockcontent.com/es/blog/tipos-de-hosting/',
    },
    {
      referencia:
        'Kinsta. (2019). ¿Qué es un TLD? Los Top-Level Domains Explicados.',
      link: 'https://kinsta.com/es/base-de-conocimiento/que-es-un-tld/',
    },
    {
      referencia:
        'Luisescoffie. (2017). 4 herramientas gratuitas para conocer el <em>Uptime</em> de tu sitio <em>web</em>.',
      link:
        'https://luisescoffie.com/4-herramientas-gratuitas-para-conocer-el-uptime-de-tu-sitio-web/',
    },
  ],
  glosario: [
    {
      termino: 'Ancho de banda',
      significado:
        'medida que hace referencia a la cantidad de información que puede ser recibida por segundo.',
    },
    {
      termino: '<em>Datacenter</em>',
      significado:
        'lugar donde se concentran los recursos necesarios para el procesamiento de información.',
    },
    {
      termino: 'Internet',
      significado:
        'red de equipos de cómputo interconectados, por medio de los cuales se ofrece acceso a servicios utilizando un lenguaje común.',
    },
    {
      termino: 'IP',
      significado:
        'una dirección IP hace referencia a una dirección única que identifica a cualquier dispositivo en una red.',
    },
    {
      termino: 'Servidor',
      significado:
        'equipo o conjunto de equipos especiales que puede recibir peticiones por parte de un cliente, procesar la información y devolver respuesta de acuerdo con las características de la solicitud.',
    },
  ],
  complementario: [
    {
      texto:
        'Corporación para la Asignación de Nombres y Números en Internet [ICANN]. (2015). Las funciones de la IANA.',
      tipo: 'Reporte',
      link:
        'https://www.icann.org/es/system/files/files/iana-functions-18dec15-es.pdf',
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
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jonathan Guerrero Astaiza',
        cargo: 'Experto Temático',
        centro:
          'Regional Cauca - Centro de teleinformática y producción industrial',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja, Regional Tolima',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica.',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Diseño <em>web</em>',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
