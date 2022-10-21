<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 5
      h1 Equipos
    p(data-aos="fade-down-left") Se define como el conjunto de elementos necesarios para la realización y montaje del campamento, teniendo en cuenta que la cantidad de estos dependerá de la duración y del número de personas que asistirán al mismo.
    p.mb-5(data-aos="fade-down-right") Los equipos que se deben llevar al <em>camping</em> son:
    .row.align-items-center.mt-5
      .col-1(data-aos="fade-down-right")
        img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
      .col-auto.ps-0.correrizq(data-aos="fade-down-left")
        h4.subrayado.ms-0.mb-0 Equipos requeridos para un <em>camping</em>
    .row.px-5.ampliar.fondo-25
      .col-12
        img.mostrar1(src='@/assets/curso/tema5/figura2.svg')  
      .row.justify-content-center.align-items-center.mostrar2.my-5
        .col-md-4.col-sm-4.col-4.adelante.p-3
          img(src='@/assets/curso/tema5/figura3.png')
        .col-md-6.col-sm-6.col-8.correrizq2
          <p class="text-bold mb-0 fondo-10 py-4 ps-5 pe-4 redondear">Herramientas<br/><span class="mb-0" style="font-weight:500;">Todo debe estar bien afilado y con sus respectivas fundas.</span></p>
      .row.justify-content-center.mostrar2
        .col-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema5/lima.svg')
            .tarjeta.fondo-8
              .p-4
                h2 Lima
                p Es una herramienta de mano que se utiliza para el desgaste y posterior afilado de piezas de distintos materiales como la madera, el plástico y el metal. Está compuesta por una barra de acero al carbono templado, también llamada caña de corte, la cual posee unas ranuras o dientes y en la parte superior cuenta con una empuñadura o mango.
        .col-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema5/machete.png')
            .tarjeta.fondo-8
              .p-4
                h2 Machete o peinilla
                p Es una herramienta que sirve para realizar cortes; cuenta con una longitud de al menos 60 centímetros y su filo se encuentra ubicado a un solo lado; es más largo que un cuchillo, pero más corto que una espada. Su mayor utilidad en los campamentos radica en el corte tanto de hierba como de madera.
        .col-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema5/navaja.png')
            .tarjeta.fondo-8
              .p-4
                h2 Navaja multiusos
                p Es una de las herramientas más útiles, puesto que tiene diversas funcionalidades, tales como: cortar; servir también como cuchara, tenedor, destapa botellas y lima en caso de ser multiusos y de no tener utensilios de cocina como el cuchillo.
        .col-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema5/cuchillo.png')
            .tarjeta.fondo-8
              .p-4
                h2 Cuchillo
                p Utensilio cuya principal utilidad es la de cortar, está conformado por una hoja de metal generalmente alargada y afilada por un solo lado, en ocasiones puntiaguda, con un mango de materiales como el metal, la madera, el plástico u otro material.
        .col-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema5/hacha.png')
            .tarjeta.fondo-8
              .p-4
                h2 Hacha
                p Es una herramienta con un filo metálico fijado de manera segura a un mango, en su mayoría de madera, cuya finalidad principal es el corte mediante golpes, facilitando esta labor con la madera y en especial con los troncos.
        .col-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema5/pala.png')
            .tarjeta.fondo-8
              .p-4
                h2 Pala
                p Es una herramienta que consta de una lámina plana con una curvatura ligera y un mango de madera o de metal, con la cual es manejada. En campismo se han diseñado y fabricado nuevas palas de tamaños pequeños, desarmables y portátiles, para mayor facilidad de los campistas; es una herramienta clave en las actividades a campo abierto.
        .col-12
          .tarjeta-avatar-b.mb-4
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema5/recaton.png')
            .tarjeta.fondo-8
              .p-4
                h2 Recatón
                p Herramienta conformada por un mango largo de madera, fijado a una hoja metálica gruesa de hierro o acero. Es utilizado en campismo para hacer perforaciones y huecos pequeños y profundos, para clavar estacas, palos y troncos delgados que se utilizan como base para realizar anclajes en el montaje de construcciones y amarrar cuerdas para actividades de descenso.
    p.my-5 Cuando está en el <em>camping</em> debe tener en cuenta los siguientes equipos para poder dormir cómodamente:
    .row.ampliar.px-5.fondo-26
      .col-12
        .row.align-items-center.mt-5
          .col-1(data-aos="fade-down-right")
            img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
          .col-auto.ps-0.correrizq(data-aos="fade-down-left")
            h4.subrayado.ms-0.mb-0 Equipos requeridos en un <em>camping</em> para dormir
        .row.my-5.justify-content-center
          .col-lg-5.col-md-6.col-sm-10.col-12.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/sleeping.png')
              .tarjeta.fondo-22
                .p-4
                  h2.text-center <em>Sleeping</em> o saco de dormir
                  p Es un equipo imprescindible y fundamental para acampar, ya que posibilita un mayor descanso, debido a sus características esenciales como conservar el calor del cuerpo, sin condensar el sudor, ni dificultar la transpiración.
                  p Para elegir el saco de dormir adecuado es necesario tener en cuenta aspectos como: el clima; el lugar en el que va a acampar; las temperaturas extremas del mismo; qué tan bueno es para soportar climas fríos; cuánto peso puede llevar al campamento; cuánto espacio puede ocupar y de cuánto dinero dispone para la compra de este.

          .col-lg-5.col-md-6.col-sm-10.col-12.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema5/colchoneta.png')
              .tarjeta.fondo-22
                .p-4
                  h2.text-center El aislante o colchoneta
                  p Este cumple una función complementaria a la del <em>sleeping</em>, se encarga de aislar el cuerpo de la humedad y frío del suelo. Estos dos elementos son clave para el campista, ya que le aseguran un buen descanso en el campamento.
                  p Es un equipo de material fuerte y resistente a la fricción e impermeable; algunos aislantes tienen espuma interna, materiales acolchados, sintéticos, goma y plástico; mientras que otros, son inflables a través del sistema de válvula. Se recomienda que el aislante sea del tamaño del saco de dormir.
        p.my-5 Y para poder cocinar se requieren los siguientes elementos:

    SlyderF.anchotar(data-aos="fade-down").mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
      .tarjeta-avatar
        img(src='@/assets/curso/tema5/ollas.png')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Diverso tipo de ollas, sartenes, chocolatera, etc.

      .tarjeta-avatar
        img(src='@/assets/curso/tema5/lozas.png')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Elementos para comer: cubiertos, loza, etc.
      .tarjeta-avatar
        img(src='@/assets/curso/tema5/aluminio.png')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Papel aluminio o plástico para cubrir alimentos.

      .tarjeta-avatar
        img(src='@/assets/curso/tema5/estufagas.png')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Estufa a gas con cilindro. 

      .tarjeta-avatar
        img(src='@/assets/curso/tema5/estufa.png')
        .tarjeta.fondo-20
          .text-dark.px-4.py-4
            h4.text-center Estufa portátil.

      .tarjeta-avatar
        img(src='@/assets/curso/tema5/nevera.png')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Nevera portátil.
    p.my-5 Ahora, cuando se habla del menaje se encuentran elementos que son imprescindibles como:
    .row.align-items-center.mt-5
      .col-1(data-aos="fade-down-right")
        img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
      .col-auto.ps-0.correrizq(data-aos="fade-down-left")
        h4.subrayado.ms-0.mb-0 Equipos requeridos para un <em>camping</em> - <em>Menage</em>
    .row.px-5.ampliar.fondo-27
      .col-12
        ImagenInfografica.color-acento-botones.my-5(data-aos="fade-down-left")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema5/menage.svg', alt='Equipos requeridos para un camping - Menage')
          .tarjeta.fondo-20.p-3(x="16%" y="65%" numero="+")
            .h4.mb-2 1. Cantimplora o caramañola
            p.mb-0 Permite transportar agua u otras bebidas hidratantes. Debe ser ligera, con capacidad para uno o dos litros de contenido. Se recomienda no llevarla colgada en el morral, ya que suele golpear al campista, además de quedar expuesta al sol y a las condiciones del ambiente.

          .tarjeta.fondo-20.p-3(x="32%" y="12.5%" numero="+")
            .h4.mb-2 2. Elementos de cocina
            p.mb-0 Está compuesto por: plato, pocillo y cuchara, preferiblemente en material metálico, ya que en caso de ser necesario este material posibilita cocinar en ellos. Por otro lado, se recomienda la marmita como recipiente tipo olla que cuenta con uno o dos mangos y una tapa para aprovechar el vapor.
          .tarjeta.fondo-20.p-3(x="49%" y="64%" numero="+")
            .h4.mb-2 3. Pito o silbato
            p.mb-0 Este elemento es muy utilizado en las actividades de campismo y es a su vez de gran importancia en caso de estar extraviado o haberse alejado de los demás campistas; el pito o silbato gracias al sonido que genera se convierte en una herramienta para facilitar la ubicación, también sirve como alarma en caso de una contingencia en la que se requiera evacuar el campamento con pitazo S.O.S.
          .tarjeta.fondo-20.p-3(x="63%" y="12.5%" numero="+")
            .h4.mb-2 4. Morral o mochila
            p.mb-0 El morral permite guardar y transportar todos los implementos necesarios para realizar la actividad de campismo, bien sea de corta o larga duración.
          .tarjeta.fondo-20.p-3(x="81%" y="64%" numero="+")
            .h4.mb-2 5. Linterna con repuestos
            p.mb-0 Para actividades como el campismo se sugiere que la linterna a utilizar sea de pilas, por lo cual se recomienda llevar algunos pares de repuesto, porque aquella que requiere energía eléctrica dificulta su uso por falta de batería, dadas las condiciones de un campamento. 
            p Se recomienda a su vez, tener en cuenta la linterna tipo manos libres, ya que por su ubicación en la frente la luz se dirige hacia donde se está mirando, facilitando de esta manera el desarrollo de cualquier actividad que requiera de la misma.
          .tarjeta.fondo-20.p-3(x="97%" y="12.5%" numero="+")
            .h4.mb-2 6. Candela, velas, pedernal, fósforos o lupa
            p.mb-0 Son esenciales para poder encender fuego en las actividades de un campamento que así lo requieran. Se recomienda impermeabilizar los fósforos usando parafina, con la cual se cubren para posteriormente guardarlos en una bolsa plástica o en una caja metálica, logrando una mayor protección de estos.
            p Además, se puede fabricar desde casa una mecha de cartón o tela, impregnándola de alcohol o de combustible y dejándola secar para guardarla cuando haya disminuido el olor y utilizarla durante el campamento; finalmente y como equipo opcional está la lupa con la cual se puede hacer fuego mediante la exposición a los rayos del sol.
    p.my-5 A continuación conozca los elementos de amarre que son indispensables en cualquier campamento:
    .row.ampliar.px-5.fondo-26
      .col-12
        .row.align-items-center.mt-5
          .col-1(data-aos="fade-down-right")
            img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
          .col-auto.ps-0.correrizq(data-aos="fade-down-left")
            h4.subrayado.ms-0.mb-0 Tipos de elementos de amarre
          .row.justify-content-center
            .col-lg-10.col-md-12
              ImagenInfografica.color-acento-botones.my-5(data-aos="fade-down-left")
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema5/amarres.png', alt='Elementos de amarre')
                .tarjeta.fondo-20.p-3(x="26%" y="60%" numero="+")
                  .h4.mb-2 Cuerdas
                  p.mb-0 Las recomendaciones técnicas frente a las cuerdas es que sean elaboradas en materiales como nylon, algodón, polipropileno y poliéster. Su longitud va desde 20 hasta 60 metros, con diámetros de 8 a 13 mm.

                .tarjeta.fondo-20.p-3(x="64%" y="84%" numero="+")
                  .h4.mb-2 Cordinos
                  p.mb-0 Deben ser en los mismos materiales, son el equipo personal del campista, sus medidas están entre los 3 y 5 metros de longitud, con un diámetro de 3 a 7 mm; también se usan cordinos muy delgados llamados <em>“paracord”</em> de gran resistencia, y livianos, que pueden llegar a tener entre 15 y 20 metros de longitud por 0.5 a 1 mm de grosor o diámetro, estos son muy utilizados para las construcciones en el campamento.

                .tarjeta.fondo-20.p-3(x="76%" y="74%" numero="+")
                  .h4.mb-2 Cabuya
                  p.mb-0 Cuerda delgada de fibra vegetal procesada, es utilizada para ayudar a sujetar las construcciones.
    p.my-5 En un campamento son indispensables los equipos para la orientación con un alto grado de precisión, generándole tranquilidad y facilidad al campista durante sus desplazamientos. Estos son:


</template>

<script>
export default {
  name: 'Tema5',
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
