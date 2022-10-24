<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-down-left") Las actividades recreativas y vivenciales desarrolladas a campo abierto posibilitan en el ser humano la 
      span.resaltado.text-bold interacción con la naturaleza
      span , el encuentro consigo mismo y el trabajo colaborativo con otros individuos, logrando implementar el método de 
      span.resaltado.text-bold aprender haciendo
      span . Por tal razón, las salidas de campo y las técnicas de campismo permiten desarrollar las competencias del hacer de forma práctica y dinámica, atendiendo las necesidades de un mercado cada vez más exigente en el desarrollo de actividades al aire libre. Para conocer más sobre la temática a tratar en este componente formativo se invita a ver el siguiente video.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YWFXIAgfb5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
