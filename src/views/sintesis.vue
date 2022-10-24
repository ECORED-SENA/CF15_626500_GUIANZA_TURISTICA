<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p(data-aos="fade-down-right") La dirección de salidas de campo y técnicas de campismo es un área importante dentro del proceso de formación del aprendiz del programa Guianza turística, por lo que es vital que al final del proceso de formación alcance las competencias para planificar, organizar, gestionar, ejecutar, evaluar y hacer seguimiento a eventos de campismo en su vida laboral como se evidencia en el siguiente mapa conceptual:

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-down-left")
        figure
          img(src="@/assets/curso/sintesis/sintesis.svg", alt="alt")
      .col-auto(data-aos="fade-down-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
