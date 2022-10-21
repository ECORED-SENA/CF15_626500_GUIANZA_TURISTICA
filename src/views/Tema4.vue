<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 4
      h1 Carpas
    .row.justify-content-center
      .col-lg-8.col-md-12(data-aos="fade-down-right")
        .cajon.fondocuadrado1.p-4.fondo-4
          p.text-bold.mb-0 Es importante partir del concepto de la palabra "carpa", que es una tienda de campaña con paredes, techo, suelo, ventanas y puertas con cremallera; otra definición dice que está compuesta por materiales ligeros, resistentes e impermeables, que es un artefacto o accesorio portátil donde se acampa, de fácil instalación, por lo que en general la carpa es el elemento principal e indispensable en un campamento.
        p.mt-4(data-aos="fade-down-left") Para elegir una carpa es necesario tener en cuenta las características climatológicas de los lugares que frecuenta acampar y el tamaño de esta dependerá del número de personas que acamparán.  Los aspectos más relevantes para seleccionar una carpa están relacionados con la calidad, el tamaño, la facilidad para armarla, desarmarla y para transportarla entre lugares.
        p(data-aos="fade-down-right") Las partes de una carpa se describen en un contenido más adelante, pero el más clásico es el tipo de carpa con techo a dos aguas, este es uno de las más conocidos en campismo, hay que destacar que actualmente existen diferentes tipos con diversas estructuras y protocolos de armado, por lo que todas  las partes o piezas de la carpa se describen a nivel general, para que al momento de armarla con su equipo de trabajo o con otros pueda transmitir estos conocimientos de manera fácil y amigable:
      .col-lg-4.col-md-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema4/figura1.png')
      ImagenInfografica.color-acento-botones.my-5(data-aos="fade-down-left")
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/figura2.svg', alt='Carpas')
        .tarjeta.fondo-20.p-3(x="67%" y="90%" numero="+")
          .h4.mb-2 Bolsa de la carpa o maleta porta equipos:
          p.mb-0 estuche de material resistente (lona o cuero), también puede ser una maleta de camping donde se introduce el cuerpo de la carpa, el sobretecho y todos los elementos necesarios como la estructuras y accesorios que forman parte de la carpa. 
        .tarjeta.fondo-20.p-3(x="80.5%" y="12.5%" numero="+")
          .h4.mb-2 Cuerpo de la carpa
          p.mb-0 es en materiales de lona, impermeable y resistente, debe permitir buena ventilación, y generalmente de colores mixtos, este se compone de las paredes, techo y suelo de la carpa.
        .tarjeta.fondo-20.p-3(x="37%" y="74.2%" numero="+")
          .h4.mb-2 Piso
          p.mb-0 es de material impermeable, lona firme y resistente para que no penetre la humedad del suelo.  
        .tarjeta.fondo-20.p-3(x="49.5%" y="4.2%" numero="+")
          .h4.mb-2 Sobretecho
          p.mb-0 es de tela impermeabilizada para proteger a la carpa de las inclemencias del tiempo, se usan los sobretechos de colores vivos para identificar el campamento, importante aclarar que para actividades de camping especializadas como observación de aves o cuando se acampa dentro de un bosque, las carpas y sobretechos son de colores verdes, camuflados u oscuros para ir en contraste con el medio natural.
        .tarjeta.fondo-20.p-3(x="23%" y="31%" numero="+")
          .h4.mb-2 Vientos
          p.mb-0 son cuerdas o cordinos de espesor delgado, se utilizan para mantener desplegada y templada la carpa y el sobretecho de la misma.
        .tarjeta.fondo-20.p-3(x="47%" y="86.8%" numero="+")
          .h4.mb-2 Ojales
          p.mb-0 son argollas o anillos metálicos, se utilizan para fijar los vientos y el piso de la carpa al suelo, también son los orificios de los extremos externos del piso de la carpa por donde se introducen las estacas o anclajes.
        .tarjeta.fondo-20.p-3(x="9.5%" y="81%" numero="+")
          .h4.mb-2 Bolsa de herrajes
          p.mb-0 estuche o forro donde se guardan las estacas, parantes y cumbreras.
        .tarjeta.fondo-20.p-3(x="25%" y="6.5%" numero="+")
          .h4.mb-2 Cumbreras y parantes
          p.mb-0 constituyen la estructura rígida de la carpa, se construyen de aluminio o de hierro, para la comodidad del traslado se separan en tramos, esta estructura también se puede conocer como el esqueleto de la carpa.
        .tarjeta.fondo-20.p-3(x="23.4%" y="91%" numero="+")
          .h4.mb-2 Estacas
          p.mb-0 sirven para fijar el piso, los vientos y el sobretecho de la carpa, son en aluminio, hierro, plástico o madera.
    p.mb-5(data-aos="fade-down-right") Existen otros tipos de carpas que se encuentran en el mercado, los cuales se presentan a continuación.
    .row.align-items-center.my-5
      .col-1(data-aos="fade-down")
        img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
      .col-auto.ps-0.correrizq(data-aos="fade-down")
        h4.subrayado.ms-0.mb-0 Tipos de carpas comerciales
    SlyderA.fondo-7.my-5(data-aos="fade-down").p-5(tipo="b")
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpas convencionales o fijas
          p se caracterizan por ser de grandes superficies, se instalan para eventos prolongados o albergues temporales, además tienen capacidad para grupos grandes.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen2.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpas de campaña
          p se caracterizan por tener una mayor superficie; por lo tanto, más volumen y peso, también se utilizan para campamentos prolongados, es muy común que este tipo de carpas sean con techo a dos aguas. 
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen3.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpas de expedición
          p son aptas para llegar a territorios alejados y de difícil acceso, son utilizadas para las caminatas prolongadas para expedición, ya que sus materiales son livianos, resistentes y su estructura es de fácil armado.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen4.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpas estructurales
          p se caracterizan por su gran superficie cubierta, está compuesta de tramos ensamblables, en su mayoría unidos entre sí para facilitar su armado, van fijas al piso y usualmente no usan vientos.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen5.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpas por marcas y estaciones
          p estas se caracterizan por estar fabricadas con materiales altamente resistentes e impermeables ante los climas más fríos y la alta montaña (cm3 de agua 1.100, referencia técnica para la carpa 4 estaciones, son las más costosas y finas del mercado).
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen6.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpas por tendencias y experiencias
          p aquí se pueden mencionar los campamentos temáticos y en especial una tendencia reciente que es el <em>glamping</em> (campamentos con <em>glamur</em> y <em>confort</em>) y campamentos temáticos, como un tipo de alojamiento en el medio natural, acampando con todas las comodidades de un hotel.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen7.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpas para <em>glamping</em>
          p <em>glamping</em> o <em>glamorous camping</em> es un creciente fenómeno global que combina la experiencia de acampar al aire libre con el lujo y las condiciones propias de los mejores hoteles. El término acuñado a finales del Siglo XIX es una fusión de las palabras <em>glamour</em> y <em>camping</em>.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen8.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpa canadiense
          p es aquella que tiene la forma clásica de una carpa, está compuesta por mástiles o varillas, y en su mayoría cuentan con una transversal en la parte superior que le da soporte a la carpa, manteniéndola templada con la ayuda de los vientos, no se recomienda para lugares caracterizados por fuertes corrientes de aire.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen9.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpa tipo <em>“Igloo”</em>
          p este tipo de carpa se caracteriza por su flexibilidad, debido a que su forma esférica y la elasticidad de su varillaje le permite soportar fuertes vientos. Suelen ser resistentes y fáciles de transportar gracias a que sus materiales de fabricación son muy ligeros.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen10.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpa estructural
          p se caracteriza por contar con grandes dimensiones en cuanto a su estructura, suele asemejarse a casas, contando con varias subdivisiones para separar ambientes. 
          p Es utilizada generalmente para campamentos base prolongados, enfermería, refugios, bodega o eventos como el circo, etc.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen11.png')
      .row
        .col-lg-4.col-md-12.mb-4.mb-md-0
          h4 Carpa especial
          p son carpas confeccionadas para condiciones climáticas específicas, por ejemplo, la Antártida, la selva, alta montaña, etc., también se clasifican por estaciones de uno a cuatro, es decir, se adapta a cada una de ellas, es utilizada generalmente para zona naval, glacial o para climas muy fríos.
        .col-lg-8.col-md-12
          figure
            img(src='@/assets/curso/tema4/imagen12.png')
    .row.fondo-23.mostrar1(data-aos="fade")
      .col-12
        .row.align-items-center
          .col-lg-8.pt-5.ps-3.ps-xl-5
            h4.mt-5.pt-4 ¡Importante!
            p.mb-5 El tipo de carpa deberá ser elegido según el contexto y las condiciones climáticas en las cuales el campista vaya a hacer uso de esta en determinado campamento. Las carpas se clasifican en diferentes tipos de acuerdo con sus usos, los materiales, las estructuras, las marcas, los tamaños y los tipos a utilizar en un campamento, por lo que se recomienda hacer la valoración técnica para su correcta selección.
          .col-lg-4
    .row.mostrar2.justify-content-center
      .col-10.correrabajo(data-aos="fade-up-right")
        img(src='@/assets/curso/tema4/imagen13.png')
      .col-12(data-aos="fade")
        .row.justify-content-center.py-5.fondo-10
          .col-12
            h4 ¡Importante!
            p El tipo de carpa deberá ser elegido según el contexto y las condiciones climáticas en las cuales el campista vaya a hacer uso de esta en determinado campamento. Las carpas se clasifican en diferentes tipos de acuerdo con sus usos, los materiales, las estructuras, las marcas, los tamaños y los tipos a utilizar en un campamento, por lo que se recomienda hacer la valoración técnica para su correcta selección.
</template>

<script>
export default {
  name: 'Tema4',
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
