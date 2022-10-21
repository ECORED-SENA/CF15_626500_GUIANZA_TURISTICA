<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    //- Muestras
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 1
      h1 Supervisión logística de la salida de campo
    .row
      .col-12.fondo-3.mostrar1(data-aos="fade-down-right")
        .row
          .col-xxl-7.col-xl-8.col-lg-9
            p.ps-4.pt-3.pe-lg-5.pe-xl-2 Las salidas de campo son actividades de aprendizaje claves para que los guías de turismo interactúen con la vida al aire libre en contacto con la naturaleza, es por ello que se recomienda realizar una excelente planificación logística que conduzca a tener una actividad bien organizada y con propósitos claros que contribuyan al aprendizaje significativo y al trabajo en equipo, resaltando por supuesto, como una tarea clave para el guía de turismo, la estrategia de  conservación, el cuidado del medio ambiente y los recursos naturales renovables.
            p.ps-4.pb-1.pe-lg-5.pe-xl-2 Por este motivo, es importante llamar la atención sobre los tres momentos clave en la supervisión logística de una salida de campo:
    .row.justify-content-center.mostrar2
          .col-12.fondo-6.mb-4(data-aos="fade-down-right")
            p.px-4.pt-4 Las salidas de campo son actividades de aprendizaje claves para que los guías de turismo interactúen con la vida al aire libre en contacto con la naturaleza, es por ello que se recomienda realizar una excelente planificación logística que conduzca a tener una actividad bien organizada y con propósitos claros que contribuyan al aprendizaje significativo y al trabajo en equipo, resaltando por supuesto, como una tarea clave para el guía de turismo, la estrategia de  conservación, el cuidado del medio ambiente y los recursos naturales renovables.
            p.px-4.pb-4 Por este motivo, es importante llamar la atención sobre los tres momentos clave en la supervisión logística de una salida de campo:
          .col-md-8.col-sm-10.col-10(data-aos="fade-down-left")
            img(src='@/assets/curso/tema1/imagen1.jpg')
    SlyderA.fondo-7.my-5(data-aos="fade-down-right").p-5(tipo="b")
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Logística de salida de campo
          p El antes es el momento que requiere mayor dedicación porque implica la planeación de la salida de campo, en este punto se requiere hacer una visita previa al sitio donde se va a desarrollar la actividad, por lo que se realiza la elaboración del mapa del recorrido, se establecen las actividades a desarrollar, los lugares donde se hacen las paradas técnicas y todo el prealistamiento que conlleva  una salida de campo.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen2.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Logística de salida de campo
          p En el antes también se tramitan permisos, pólizas, se recomienda avisar a las autoridades competentes, se sugiere tener previsto un plan de prevención y emergencias, alistar un botiquín de primeros auxilios y  revisar la zona de asistencia médica.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen3.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Logística de salida de campo
          p Por otro lado, se alistan todos los equipos necesarios para la salida de campo y desarrollo de actividades (se debe preparar equipos personales que van en la mochila o morral del aprendiz y los equipos grupales para las actividades).
      
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen4.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Logística de salida de campo
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | Se preparan instrumentos de evaluación de la salida de campo.
            li 
              i.lista-ul__vineta
              | Se preparan los protocolos de servicio y de seguridad para ejecutar la salida de campo.
            li 
              i.lista-ul__vineta
              | Se organiza y verifica el programa que se va a ejecutar.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen5.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Logística de salida de campo
          p Luego, en el durante se da comienzo con las recomendaciones generales y protocolos de inicio, saludo de bienvenida y se ejecutan todas las actividades previstas en el antes, dando coherencia a la planeación previamente elaborada por el equipo de trabajo se desarrolla el programa planteado con pertinencia y se aplican los protocolos establecidos, incluyendo los de bioseguridad en caso de Covid u otra novedad biológica, se hace verificación del cumplimiento de actividades a través de una lista de chequeo, se desarrolla lo contenido en el plan de acción y se atienden contingencias si llegasen a presentarse.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen6.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Logística de salida de campo
          p se corrobora la lista de asistentes con sus respectivos documentos, seguridad social,  se toman registros fotográficos y se ejecuta la salida de campo con las respectivas paradas técnicas y se realizan visitas a los lugares de interés que  estén ubicados sobre el recorrido.
          p En este tiempo el grupo debe estar acompañado de un guía líder, un guía rastrillo y el equipo de trabajo, por otro lado, toda salida de campo debe tener apertura por parte del equipo organizador con una carga motivacional para interactuar con la naturaleza y un cierre donde se debe retroalimentar lo vivido y experimentado en la salida de campo.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen7.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Logística de salida de campo
          p Finalmente, se realiza la evaluación de la salida de campo donde se incluyan medidas correctivas y preventivas para próximos encuentros, tales como: acompañamiento y monitoreo.
          ul.lista-ul.mb-3
            li 
              i.lista-ul__vineta
              | Se entregan memorias y registros fotográficos.

            li 
              i.lista-ul__vineta
              | Se presenta informe y bitácora del campamento.
            li 
              i.lista-ul__vineta
              | Se actualizan y verifican las bases de datos de los asistentes.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen8.png')
    p.my-5(data-aos="fade-down-right") Como parte de su aprendizaje es importante aprender a llenar un modelo de formato para elaborar un plan de acción, instrumento clave para el alistamiento logístico de una salida de campo. El que se presenta a continuación es el desarrollado por el SENA.
    .row.justify-content-center
      .col-lg-10.col-md-12
        .titulo-sexto.color-acento-contenido(data-aos="fade-up")
          h5 Tabla 1
          span Plan de acción para una salida de campo       
        .tabla-c(data-aos="fade-down-right")
          table
            tr.fondo-1
              td.anchocol.ps-5
                img.sizeimg(src='@/assets/curso/tema1/logosena.svg')
              <td colspan="2"> 
                h4.text-center PLAN DE ACCIÓN SALIDAS DE CAMPO
              </td>
              td
                h4.text-center 001
            tr
              td
               p.text-bold DESTINO A VISITAR: 
              td 
                p.text-bold FECHA DE SALIDA: 
              td
                p.text-bold FECHA DE REGRESO: 
              td 
            tr
              td 
                p.text-bold GRUPO:
              td 
                p.text-bold LUGAR DE ENCUENTRO:
              td
                .h6.mb-0 HORA DE SALIDA: 
              td
            tr
              td
                p.text-bold GRUPO:
              td 
                p.text-bold GUÍA 1:
              td
                p.text-bold GUÍA 2:
              td
                p.text-bold VALOR POR PAX: 
            tr
              td
                p.text-bold OBJETIVO:
              td 
                p.text-bold
              td
                p.text-bold
              td
                p.text-bold
            tr
              td
                p.text-bold LA SALIDA DE CAMPO INCLUYE:
              td 
                p.text-bold
              td
                p.text-bold
              td
                p.text-bold
            tr
              td
                p.text-bold MOMENTOS
              td 
                p.text-bold ACTIVIDAD
              td
                p.text-bold RESPONSABLE
              td
                p.text-bold
            tr
              td
                p.text-bold Antes
              td
              td
              td
            tr
              td
                p.text-bold Durante
              td
              td
              td
            tr
              td
                p.text-bold Después
              td
              td
              td
            tr
              td
                p.text-bold FECHA DE ELABORACIÓN:
              td 
                
              td.ps-0
                p.text-bold ELABORADO POR:
              td
                p.text-bold REVISADO POR:
    p.my-5(data-aos="fade-down-left") Después del diseño del plan de acción se realiza el Plan de contingencia, cuyo modelo puede contener los siguientes elementos:
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          h5 Tabla 2
          span Plan de contingencia
        .tabla-c(data-aos="fade-up")
          table
            tr.bordesup
              td 
                p.text-bold Nombre del responsable de la actividad
              td

            tr
              td
               p.text-bold Contingencia identificada
              td 
            tr
              td
               p.text-bold Lugar y escenario
              td   
            tr
              td
               p.text-bold Descripción del incidente
              td   
            tr
              td
               p.text-bold Procedimientos y acciones
              td   
            tr
              td
               p.text-bold Recursos y servicios
              td   
            tr
              td
               p.text-bold Contactos de emergencia
              td 
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-left")
      h2 1.1 Estrategias de gestión
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/imagen9.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las estrategias de gestión del guía turístico frente al desarrollo de la salida de campo y las actividades al aire libre deben propender por la 
          span.resaltado.text-bold preservación del capital natural de Colombia 
          span o de donde quiera que se desarrolle la actividad de guionaje. 
        p Por esa razón, el concepto desde el Viceministerio de Turismo de Capital Natural se refiere a los stocks o reservas de recursos renovables y no renovables, es decir, a los ecosistemas que se combinan para proporcionar espacios a las personas.
    p.mt-5(data-aos="fade-down-left") Es así como la biodiversidad es la clave de las reservas de capital natural, allí también están los ecosistemas, todos los seres vivos y los valores del mundo natural, de acuerdo con la Coalición del capital natural (<em>The natural capital coalition</em>).  
    p(data-aos="fade-down-left") Por eso, es necesario implementar y aplicar buenas prácticas turísticas y sostenibles en el desarrollo de salidas de campo como impulso y apoyo a la estrategia de gestión y sostenibilidad, las cuales se pueden enfocar en las siguientes dimensiones:
    figure.mb-5(data-aos="fade-down-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Roles administrativos del guía de turismo
    
    //-tarjetas slide nuevo
    .row.justify-content-center.mb-5(data-aos="fade")
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            .row.justify-content-center.align-items-center
              .col-10.py-4.mb-5
                figure
                  img.mb-3(src="@/assets/curso/tema1/imagen10.png")
          .crd_hover_txt--body.fondo-2.pt-3
            h4.mb-4.text-center Orientar
            p.mb-0.text-center Orientar al turista, viajero o pasajero acerca de los puntos de referencia generales del destino visitado y ofrecer la información que facilite su desenvolvimiento en el lugar.
      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            .row.justify-content-center.align-items-center
              .col-10.py-4.mb-5
                figure
                  img.mb-3(src="@/assets/curso/tema1/imagen11.png")
          .crd_hover_txt--body.fondo-2.pt-3
            h4.mb-4.text-center Documentar
            p.mb-0.text-center Instruir al turista, viajero o pasajero en forma veraz, acerca de los lugares visitados y su entorno económico, social, cultural y ambiental.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            .row.justify-content-center.align-items-center
              .col-10.py-4.mb-5
                figure
                  img.mb-3(src="@/assets/curso/tema1/imagen12.png")
          .crd_hover_txt--body.fondo-2.pt-3
            h4.mb-4.text-center Direccionar
            p.mb-0.text-center Conducir al turista, viajero o pasajero por los atractivos o sitios turísticos, de acuerdo con el plan de viaje o servicios convenidos.

      .col-xl-3.col-lg-7.col-md-9.col-11.mb-4.mb-xl-4.mb-xxl-4(data-aos="flip-left")
        .crd_hover_txt
          .crd_hover_txt--img
            .row.justify-content-center.align-items-center
              .col-10.py-4.mb-5
                figure
                  img.mb-3(src="@/assets/curso/tema1/imagen13.png")
          .crd_hover_txt--body.fondo-2.pt-3
            h4.mb-4.text-center Apoyar
            p.mb-0.text-center Asistir al turista, viajero o pasajero oportunamente, de acuerdo con el plan de viaje o servicios convenidos, así como en las eventualidades e imprevistos que se deriven de estos.
    .row.justify-content-center
      .col-lg-6.col-md-12(data-aos="fade-up-right")
        .cajon.fondocuadrado.px-4.py-5.mb-4.fondo-8
          span.text-bold La planeación de las salidas de campo requiere y exige que el rol y las funciones del guía se centren en la gestión. 
          span Este es consciente que al realizar una salida de campo se encuentra sujeto a riesgos para los que deberá estar preparado “la supervivencia es el arte de permanecer con vida”, un precepto a tener presente.
      .col-lg-6.col-md-12(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/imagen14.jpg")
    p.my-4(data-aos="fade-down-left") Por lo anterior, en la planificación de la salida de campo se consideran las respuestas a algunos interrogantes y al análisis de los requerimientos:
    .row.justify-content-center.my-5
      .col-lg-4.col-md-6.col-sm-10(data-aos="fade-up-right")
        img(src="@/assets/curso/tema1/imagen15.png")
      .col-lg-8.col-md-12.fondo-9.py-5(data-aos="fade-up-right")
        ul.lista-ul--color
          li 
            i.fas.fa-location-arrow
            | ¿Cuánto tiempo dura la salida o expedición? 
          li 
            i.fas.fa-location-arrow
            | ¿Qué materiales se deben llevar? (Equipo para terreno, comida, agua, emergencias, botiquín, información de los viajeros).
          li 
            i.fas.fa-location-arrow
            | Verificar transporte tipo.
          li 
            i.fas.fa-location-arrow
            | Establecer las condiciones climáticas.
          li 
            i.fas.fa-location-arrow
            | Información sobre alojamiento, refugios, respondientes y autoridades para el auxilio en caso de emergencia (seguridad, hospitales, bomberos, grupos de búsqueda y rescate, Cruz Roja). 
          li 
            i.fas.fa-location-arrow
            | Comprobar los medios de comunicación que se disponen.
          li 
            i.fas.fa-location-arrow
            | La salida de campo debe contar con un mínimo de dos  guías turísticos: un guía coordinador y un guía rastrillo.
    span.resaltado.text-bold.mt-5(data-aos="fade-down-right") El guía y su equipo interdisciplinar son los encargados de levantar la información en terreno, realizar la investigación e identificar los recorridos, definir las condiciones de servicio y los niveles de dificultad en un prerecorrido
    span(data-aos="fade-down-right") , por lo que se deben tener en cuenta los siguientes elementos:
    SlyderA.fondo-7.my-5(data-aos="fade-down-right").p-5(tipo="b")
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Condiciones topográficas
          p Relevar las características del lugar al que se va a trabajar, mediante cartografía, fotografías satelitales, uso de App, GPS y otros elementos disponibles.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen16.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Condiciones hidrográficas y climatológicas
          p Informarse respecto a la topografía del lugar (dirección de ríos, tipos de corrientes hora y altura de mareas, tipo de vegetación, características del clima del lugar, temperaturas máximas y mínimas según la época del año, amplitud térmica entre el día y la noche, vientos y dirección predominante e intensidad).
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen17.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Ubicación servicios de apoyo
          p Identificar la ubicación de los servicios de ayuda esenciales existentes en el lugar en la zona, el directorio de contactos (hospitales, puestos de salud, salas de primeros auxilios, fuerzas de seguridad, grupos de búsqueda y rescate, guarda parques y seguros de accidente).
      
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema1/imagen18.png')
    .row.fondo-11.mostrar1
      .col-12(data-aos="fade-up-right")
        .row.align-items-center.py-5
          .col-lg-4
          .col-lg-6
            h4.mt-5 ¡Importante!
            p.mb-5 El guía en su gestión se adelanta y sabe actuar ante 
              span.text-bold lo inesperado, respondiendo a la pregunta ¿cómo estar preparado frente a lo que no se prevé?
          .col-lg-1(data-aos="fade-up-left")
            img.mt-4(src='@/assets/curso/tema1/figura1.svg')
    .row.mostrar2.justify-content-center
      .col-10.correrabajo(data-aos="fade-up-right")
        img(src='@/assets/curso/tema1/imagen19.png')
      .col-12(data-aos="fade-up-left")
        .row.justify-content-center.py-5.fondo-10
          .col-lg-4
          .col-lg-6
            h4 ¡Importante!
            p El guía en su gestión se adelanta y sabe actuar ante 
              span.text-bold lo inesperado, respondiendo a la pregunta ¿cómo estar preparado frente a lo que no se prevé?
          .col-2
            img.mt-4(src='@/assets/curso/tema1/figura1.svg')
    p.my-5(data-aos="fade-down-right") Para cualquier tipo de expedición es recomendable siempre investigar por medio de libros especializados  en diferentes temas como montañismo, navegación, travesías (ríos, bosques, montañas, valles, desiertos, entre otros).  Todo esto es parte de la investigación y las charlas de planificación que se deben mantener con el grupo de trabajo.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
