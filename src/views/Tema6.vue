<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 6
      h1 Menú de cocina y campamento
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/imagen1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La alimentación en los campamentos es uno de los servicios que requiere 
          span.text-bold.resaltado conocimientos y seguir la normativa, como es la manipulación de alimentos y el equilibrio nutricional que exige inclusive, certificación
          span .  Este servicio debe estar acorde al clima del lugar donde se va a realizar el campamento, así como conocer el tipo de alimentación que consumen los campistas o si tienen alguna dieta especial según su edad, número de personas que asistirán a este y la duración del mismo. 
        p Generalmente, se considera un buen menú aquel compuesto por 
          span.text-bold.resaltado comidas fáciles de cocinar
          span , pero que a su vez sean 
          span.text-bold.resaltado saludables y balanceadas
          span , brindando la energía necesaria para el buen desarrollo de las actividades que se llevan a cabo mientras se acampa.
    p.my-5(data-aos="fade-down-right") Al planear una actividad turística como un campamento o <em>camping</em> debe pensar en un tipo de alimentos fáciles de preparar,  que sean nutritivos para el equipo y que no se dañen con rapidez, por lo que aquí se muestran algunas alternativas:
    SlyderA.fondo-10.my-5(data-aos="fade-down").p-5(tipo="b")
      .row
        .col-lg-8.col-md-12.mb-4.mb-md-0
          h4 Desayunos
          .row
            .col-6
              ul.lista-ul
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Cereal, puede ser avena
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Hojuelas de maíz con leche
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Rebanadas de pan y galletas de soda
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Barras de granola
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Café, chocolate o té instantáneo
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Frutas picadas
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Yogurt
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Galletas saladas
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Salchichas
            .col-6
              ul.lista-ul
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Queso crema o mantequilla
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Leche en polvo
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Huevos
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Arepas
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Salchichas
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Frutas, tomate y cebolla
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Queso
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Jamón
        .col-lg-4.col-md-12
          figure
            img(src='@/assets/curso/tema6/imagen2.png')
      .row
        .col-lg-8.col-md-12.mb-4.mb-md-0
          h4 Refrigerios
          .row
            .col-6
              ul.lista-ul
                li 
                  i.otrocolor2.fas.fa-angle-right
                  span Salpicón con galletas: piña, fresas, papaya, sandía, mango, banano, uvas, jugo instantáneo de  frutas tropicales o gaseosa de manzana o premio roja, galletas tipo #[i waffer.]
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Bocadillo con queso cuajada
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Galletas con mantequilla o mermelada
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Frutos secos
            .col-6
              ul.lista-ul
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Ensalada de frutas: piña, fresas, papaya, sandía, mango, banano, uvas, crema de leche.
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Barras energéticas
                li 
                  i.otrocolor2.fas.fa-angle-right
                  | Plátano maduro
        .col-lg-4.col-md-12
          figure
            img(src='@/assets/curso/tema6/imagen3.png')
      .row
        .col-lg-8.col-md-12.mb-4.mb-md-0
          h4 Almuerzos o cenas
          ul.lista-ul
            li 
              i.otrocolor2.fas.fa-angle-right
              | Papa fina, cebollas, berenjenas, pollo, zanahorias, aceite, sal, pimienta, pimentones, tomates, aceitunas, maíz dulce, atún, huevos, aceite, semillas de chía, limón, panela, chuletas, lechuga, vinagre, arroz, mayonesa, carne, orégano, ajo, queso, perejil, tocineta, salchichas, pan, filetes de lomo de cerdo, pechugas.
        .col-lg-4.col-md-12
          figure
            img(src='@/assets/curso/tema6/imagen4.png')
    p.my-5(data-aos="fade-down-right") Y se deben tener en cuenta las siguientes recomendaciones:
    .row.justify-content-center
      .col-lg-4.col-md-8.col-sm-10.col-12.mb-4(data-aos="fade-down-right")
        img(src='@/assets/curso/tema6/imagen5.png')
      .col-lg-8.col-md-12(data-aos="fade-down-right") 
        p Alimentos que se pueden llevar a un campamento, de acuerdo con su tipo de conservación y propiedades:
        ul.lista-ul--color
          li 
            i.fas.fa-location-arrow
            | Los enlatados en conserva: sardinas y atún se mantienen en buenas condiciones sin necesidad de refrigeración previa. 
          li 
            i.fas.fa-location-arrow
            | Arroz: puede consumirse con una gran cantidad de alimentos y es muy energético.
          li 
            i.fas.fa-location-arrow
            | Pastas en general.
          li 
            i.fas.fa-location-arrow
            | Bolsa de sal, bolsa de azúcar, condimentos.
          li 
            i.fas.fa-location-arrow
            | Avena en hojuelas, hojuelas de maíz.
          li 
            i.fas.fa-location-arrow
            | Sopas instantáneas de sobre.
          li 
            i.fas.fa-location-arrow
            | Leche en polvo.
          li 
            i.fas.fa-location-arrow
            | Galletas, frutos secos, chocolates en barra, frutas frescas.
          li 
            i.fas.fa-location-arrow
            | Café instantáneo.
    .row.justify-content-center.my-4
      .col-lg-8.col-md-12(data-aos="fade-down-right") 
        p Alimentos más propensos a contaminarse:  
        ul.lista-ul--color
          li 
            i.fas.fa-location-arrow
            | Carnes de aves como el pollo.
          li 
            i.fas.fa-location-arrow
            | Ensaladas.
          li 
            i.fas.fa-location-arrow
            | Leche líquida.
          li 
            i.fas.fa-location-arrow
            | Pastelería.
        p Preparaciones de alimentos sin utensilios: harina, aceite, mantequilla, azúcar, sal, maracuyás o naranjas, huevos, maíz pira para palomitas o crispetas, carne, repollo, salchichas o chorizos, plátanos maduros, zanahoria, cebollas, brócolis, berenjenas, espárragos, pimienta, papas, queso, jamón y malvaviscos, palos para chuzos y papel aluminio.
      .col-lg-4.col-md-8.col-sm-10.col-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema6/imagen6.png')
    .row.align-items-center.mt-5
      .col-1(data-aos="fade-down-right")
        img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
      .col-auto.ps-0.correrizq(data-aos="fade-down-left")
        h4.subrayado.ms-0.mb-0 Cocinas, fogones y fogatas
    .row.justify-content-center.my-5
      .col-lg-7.p-4.fondo-33(data-aos="fade-down-right")
        p Cocinar en un <em>camping</em> implica que los alimentos para un campamento deben caracterizarse por su facilidad para ser 
          span.text-bold transportados, preparados, almacenados y contar a su vez con una buena conservación.
        p Para 
          span.text-bold transportar y conservar 
          span los alimentos se recomienda contar con una nevera portátil, la cual permite mantenerlos de manera higiénica preservando su calidad nutricional y evitando problemas de salud, debido a la contaminación de los alimentos.
        p Tener en cuenta que los 
          span.text-bold alimentos no deben almacenarse directamente a la luz del sol, ni cerca del calor o de la humedad
          span , porque tenderán a descomponerse con mayor facilidad;  sin embargo, existen diversas técnicas de conservación que permiten mantener la calidad de los alimentos para su posterior consumo.
      .col-lg-5.m-0.p-0(data-aos="fade-down-left")
        img(src='@/assets/curso/tema6/nevera.png')

    .row.fondo-32.px-5.ampliar
      .col-12
        p.mb-5(data-aos="fade-down-right") La técnica de conservación en ahumado es antigua y debe conocerla para poder aplicarla en cualquier momento o enseñarla en su trabajo como guía turístico.
        .row
          .col-12.fondo-34
            .row.align-items-center.mt-5.px-5
              .col-1(data-aos="fade-down-right")
                img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
              .col-auto.ps-0.correrizq(data-aos="fade-down-left")
                h4.subrayado.ms-0.mb-0 Métodos de cocina para acampar: el método ahumar
            p.my-5.px-5(data-aos="fade-down-right") Como parte de la planeación de la salida de campo ya tenemos definidos los alimentos que se van a consumir; sin embargo, sí me interesa reforzar algunos conocimientos sobre las diferentes técnicas de cocina que se puede usar en este tipo de eventos, ya que esta debe ser nutritiva, rápida y fácil de preparar.
            PasosA.color-acento-contenido(data-aos="fade-down-left").mb-5.px-5(tipo="n")
              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  p Es por esa razón que se deben recurrir a técnicas de preservación de comida ancestral y aún más a formas de cocinar y consumir comida de forma rápida, como las que sus compañeros ya mencionaron.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema6/Imagen7.png')

              .row.align-items-center
                .col-md-4.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/tema6/Imagen8.png')
                .col-md-8.text-start
                  p Para salir de campamento es necesario conocer varias técnicas para preparar alimentos, porque lo que no se tiene a la mano son elementos que conserven los alimentos, ya que el objetivo es pasar tiempo con la naturaleza entre ellas tenemos el secado, el salado y el ahumado
                  

              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  p El secado, Consiste en extraer el agua de los alimentos mediante el sol y el viento. El salado o salazón permite preservar alimentos usando la sal para deshidratar.
                  p Por otro lado, se encuentra el método de ahumar los alimentos… el cual se revisará a continuación.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema6/Imagen9.png')

              .row.align-items-center
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema6/Imagen10.png')
                .col-md-8.mb-4.mb-md-0.text-start
                  p Este consiste en deshidratar la carne mediante la exposición al humo generado por el fogón, creando una capa protectora sobre esta el ahumar ejerce varias funciones como: el color, el sabor, la conservación y la eliminación de microbios.
                  p Es utilizado generalmente para la carne y el pescado.

              .row.align-items-center
                .col-md-8.mb-4.mb-md-0
                  p este es uno de los métodos más conocidos, gracias a su función de erradicar total o parcialmente las enzimas, toxinas y microrganismos, cuya aparición podría alterar el alimento e incluso volverlo no apto para el consumo.
                  p Se realiza en un fogón, haciendo una construcción de madera básica, que le permita colgar la carne finamente cortada, con el fin de que esta reciba el humo, puede usar hojas como combustible debido a la gran cantidad de humo que generan.
                .col-md-4
                  figure
                    img(src='@/assets/curso/tema6/imagen11.png')
            p.my-5.px-5(data-aos="fade-down-right") Si en alguna oportunidad puede participar en un campamento no dude en vivir esta gran experiencia con familiares y amigos… será un recuerdo para toda la vida
    .row.align-items-center.mt-5
      .col-1(data-aos="fade-down-right")
        img.sizeimg2(src='@/assets/curso/tema3/brujula.svg')
      .col-auto.ps-0.correrizq(data-aos="fade-down-left")
        h4.subrayado.ms-0.mb-0 Limpieza e higiene
    .row.justify-content-center.my-5
      .col-lg-8.col-md-12(data-aos="fade-down-right")
        p La preparación de alimentos en un campamento es de especial cuidado, debido a que estos son preparados al aire libre, en un entorno natural expuesto a la contaminación. Por lo anterior, la higiene tanto del área de la cocina, como de los utensilios y de las personas que tienen contacto directo con estos durante la preparación es fundamental.
        .cajon.fondocuadrado1.p-4.fondo-4
          p.text-bold.mb-0 Antes de consumir cualquier alimento que no esté envasado o empaquetado industrialmente debe lavarse muy bien, teniendo presente que así el alimento esté fresco no significa que esté precisamente limpio.
      .col-lg-4.col-md-12(data-aos="fade-down-right")
        img(src='@/assets/curso/tema6/imagen12.png')
    p.mb-5(data-aos="fade-down-left") Adicionalmente,, las personas que van a establecer contacto directo con los alimentos deben seguir en la medida de lo posible una serie de recomendaciones en cuanto a la higiene, tales como:
    .row.fondo-35.mostrar1
      .col-12(data-aos="fade-up-right")
        .row.align-items-center.py-5
          .col-lg-4
          .col-lg-7
            ul.lista-ul
              li 
                i.fas.fa-location-arrow
                | Limpieza de la ropa.
              li 
                i.fas.fa-location-arrow
                | Cabello recogido o con gorra para la cocina.
              li 
                i.fas.fa-location-arrow
                | Protección de la boca y nariz con el respectivo tapabocas, principalmente si la persona presenta algún quebranto de salud que pueda contaminar los alimentos.
              li 
                i.fas.fa-location-arrow
                | Manos limpias con uñas cortas, usar desinfectante y guantes por normas de manejo de los alimentos. 
    .row.mostrar2.justify-content-center
      .col-10.correrabajo(data-aos="fade-up-right")
        img(src='@/assets/curso/tema6/imagen13.png')
      .col-12(data-aos="fade-up-left")
        .row.justify-content-center.py-5.fondo-36
          .col-lg-4
          .col-lg-8
            ul.lista-ul
              li 
                i.fas.fa-location-arrow
                | Limpieza de la ropa.
              li 
                i.fas.fa-location-arrow
                | Cabello recogido o con gorra para la cocina.
              li 
                i.fas.fa-location-arrow
                | Protección de la boca y nariz con el respectivo tapabocas, principalmente si la persona presenta algún quebranto de salud que pueda contaminar los alimentos.
              li 
                i.fas.fa-location-arrow
                | Manos limpias con uñas cortas, usar desinfectante y guantes por normas de manejo de los alimentos. 
    p.my-5(data-aos="fade-down-right") Otro factor importante en las salidas de campo es tener conocimientos básicos sobre tipos de fogones a continuación puede conocer algunas estructuras básicas:
    SlyderF.anchotar(data-aos="fade-down").mb-5(columnas="col-lg-6 col-xl-4 col-md-6")
      .tarjeta-avatar
        img(src='@/assets/curso/tema6/pastor.svg')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center El pastor

      .tarjeta-avatar
        img(src='@/assets/curso/tema6/trampero.svg')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Fuego trampero
      .tarjeta-avatar
        img(src='@/assets/curso/tema6/cazador.svg')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Fogón de cazador

      .tarjeta-avatar
        img(src='@/assets/curso/tema6/trinchera.svg')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Fogón de trinchera

      .tarjeta-avatar
        img(src='@/assets/curso/tema6/grua.svg')
        .tarjeta.fondo-20
          .text-dark.px-4.py-4
            h4.text-center Fogón con grúa

      .tarjeta-avatar
        img(src='@/assets/curso/tema6/excavador.svg')
        .tarjeta.fondo-20
          .text-dark.p-4
            h4.text-center Fogón excavador o tipo codo
    p.my-5(data-aos="fade-down-right") Además de conocer cuáles tipos de fogones puede usar para acampar, también es indispensable saber cuáles tipos de fogatas se pueden hacer, información que encontrará en la siguiente figura.
    .row.px-5.ampliar.fondo-37
      .col-12
        .row.justify-content-center
          .col-10
            .titulo-sexto.color-acento-contenido(data-aos="fade-up")
              h5 Figura 4 
              span Tipos de fogata
        .row.justify-content-around.align-items-center.my-5.flex-container
          .col-lg-6.col-md-12.fondo-38.p-4.mb-4(data-aos="fade-down-right")
            .row.align-items-center
              .col-4
                img(src='@/assets/curso/tema6/estrella.svg')
              .col-8
                h4 Fogata tipo estrella
                p Es una fogata que no produce mucho humo. Se hace colocando desde tres hasta cinco leños gruesos en forma de estrella y se enciende en medio de ellos una fogata de menor tamaño en forma de pirámide. Conforme se consuma la leña se empujan los maderos gradualmente, controlando así el humo y el calor.
          .col-lg-6.col-md-12.fondo-38.p-4.mb-4(data-aos="fade-down-left")
            .row.align-items-center
              .col-4
                img(src='@/assets/curso/tema6/piramidal.svg')
              .col-8
                h4 Fogata tipo consejo o piramidal
                p Es una fogata que da gran calor y usualmente es ideal para actividades socioculturales en los campamentos.
                p Los troncos o leños se apilan a amontonándoos entrecruzados de forma perpendicular de mayor a menor hasta formar una pirámide.
          .col-lg-8.col-12.my-4.fondo-20.p-4(data-aos="fade-down")
            .row.align-items-center
              .col-4
                img(src='@/assets/curso/tema6/deflector.svg')
              .col-8
                h4 Fogata tipo deflector
                p Esta fogata es útil sobre todo para calentar la carpa, se debe usar troncos de buen grosor, de unos 20 cm aproximadamente, dos de estos se clavan un poco inclinados hacia atrás y sobre ellos, se colocan los otros uno sobre el otro hasta formar la espalda del ¨reflector¨ el cual apuntará hacia la carpa o lo que se dese calentar.
                p A cada lado se coloca dos de los troncos más gruesos y en medio de esta pequeña estructura se enciente una fogata en pirámide, es de aclarar que una fogata funciona mejor contra el viento.          
    .row.justify-content-center
      .col-10(data-aos="fade-down-right")
        .tarjeta.fondo-15.p-1.my-5
          .row.justify-content-center.align-items-center
            .col-4.col-sm-3.col-lg-2.col-xl-2.col-xxl-2.p-4
              img(src="@/assets/curso/tema6/figura1.svg")
            .col-8-col-sm-9.col-lg-10.col-xl-10.col-xxl-10
              .row.justify-content-center.align-items-center
                .col.mb-3.mb-sm-0.ps-5.ps-lg-0
                  h3.mb-1 Manual para acampar conservando 
                  p Es de vital importancia aprender a acampar conservando el medio ambiente, porque de esto depende que las nuevas generaciones puedan disfrutar de la naturaleza que hoy disfruta, por lo que se invita a revisar el documento del SENA sobre el tema ¨Manual para acampar conservando¨.
                .col-sm-auto.pe-4.ps-5.ps-sm-0.mb-4.mb-sm-0
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/manual_acampar_conservando.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 

</template>

<script>
export default {
  name: 'Tema6',
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
