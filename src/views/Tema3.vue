<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 FTP

    .row.BGIMG02.justify-content-center.p-4.mb-4
      .col-lg-8.p-0.mb-4
        img(src='@/assets/curso/tema3/img02.svg')
      .col-lg-8.mb-4
        p.mb-0 FTP hace referencia a un #[strong protocolo de transferencia de archivos] que tiene más de 50 años de antigüedad, pero ampliamente utilizado para la transferencia de información entre equipos conectados por red. Por medio de este protocolo, una máquina conectada en red con otra podrá visualizar y compartir información.
      .col-lg-8.mb-4
        img(src='@/assets/curso/tema3/img03.png')
      .col-lg-6.mb-4
        p.mb-0 Para la transferencia de archivos, se utiliza una estructura de tipo cliente servidor, donde la máquina cliente se conecta a la máquina servidora, para visualizar y hacer envío de datos utilizando los puertos 20 y 21.
      .col-lg-7.mb-0
        img(src='@/assets/curso/tema3/img04.png')
      .col-lg-6.BG04.p-2
        p.text-center.mb-0 Tenga en cuenta los siguientes aspectos de la transferencia de archivos:

    .row.mb-5
      BotonesA  

    separador
         
</template>
<script>
import BotonesA from '../components/BotonesA.vue'
export default {
  name: 'Tema3',
  components: {
    BotonesA,
  },
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
