<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-lg-8(data-aos="fade-right")
        img.mb-4(src='@/assets/curso/intro01.svg')
    
    figure.mb-5
      .video(data-aos="flip-up")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/uzf8RW-GvTw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
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
