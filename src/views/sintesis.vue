<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      h1 Síntesis
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/sintesis/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El proceso de #[i software] no termina con la construcción de la aplicación; existe, también, una fase de despliegue y mantenimiento del producto desarrollado, la cual es, quizás, uno de los componentes más olvidados por los desarrolladores de #[i software], pero el más importante para los clientes. El proceso de despliegue, particularmente en las aplicaciones #[i web], requiere la adquisición de servicios de #[i hosting] y de dominio, los cuales deben también ceñirse a las características particulares de los requerimientos funcionales y, principalmente, a los requisitos no funcionales establecidos.
      .col-lg-10
        p.text-center Analice el mapa de conceptos que se muestra a continuación y haga su propia síntesis del contenido trabajado en este componente formativo. Procure hacer registro de ello en su libreta personal de apuntes:

    figure
      img(src='@/assets/curso/sintesis/img02.png')
    separador

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
