<template lang="pug">
.btns
  .row.justify-content-center
    .col-md-8
      img(src='@/assets/curso/botones/img01.svg')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    :class="[`btns_item--${index}`]"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.p-4(v-if="index === hover")  
      h4 {{boton.titulo}}
        italic {{boton.italic}}
      p {{boton.texto1}}

</template>

<script>
export default {
  name: 'BotonesA',
  data: () => ({
    indicador: true,
    hover: null,
    size: '20%',
    botones: [
      {
        img: require('@/assets/curso/botones/img02.svg'),
        img_h: require('@/assets/curso/botones/img03.svg'),
        pos_x: '15.9%',
        pos_y: '2.7%',
        titulo: 'Variedad de aplicaciones',
        texto1:
          'Hoy existen muchas aplicaciones que encapsulan toda la lógica asociada a las conexiones cliente y servidor por lo que la transferencia de archivos es mucho más simple.',
      },
      {
        img: require('@/assets/curso/botones/img04.svg'),
        img_h: require('@/assets/curso/botones/img05.svg'),
        pos_x: '31.9%',
        pos_y: '2.7%',
        titulo: 'Sistema de autenticación',
        texto1:
          'Para proteger estas conexiones, debe existir un sistema de autenticación que le permita al usuario establecer comunicación exitosa con el servidor y el servidor pueda autorizar acceso a un cliente plenamente identificado.',
      },
      {
        img: require('@/assets/curso/botones/img06.svg'),
        img_h: require('@/assets/curso/botones/img07.svg'),
        pos_x: '48.1%',
        pos_y: '2.7%',
        titulo: 'Transferencia de archivos',
        texto1:
          'Para publicar las aplicaciones <em>web</em> y que estén disponibles en Internet, se deben transferir los archivos desde la máquina local hacia el servidor encargado de alojarlos en Internet, es decir el <em>host</em>.',
      },
      {
        img: require('@/assets/curso/botones/img08.svg'),
        img_h: require('@/assets/curso/botones/img09.svg'),
        pos_x: '64.2%',
        pos_y: '2.7%',
        titulo: 'Credenciales de acceso',
        texto1:
          'Para transferir los archivos, generalmente, los servicios de <em>hosting</em> proveen a sus clientes autorizados unas credenciales de acceso y algunas aplicaciones para facilitar el traslado de los archivos, y entre las aplicaciones estándar se debe encontrar una aplicación de FTP.',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>


.btns
  position: relative
  height: 450px
  &__item
    position: absolute
    background-size: contain
    background-repeat: no-repeat
    background-position: center
    cursor: pointer
    transition: background-image 0.2s ease-in-out
  &__text
    border-radius: 20px
    position: absolute
    top: 110%
    left: 50%
    background-color:  #C0E6F8
    width: 500px
    z-index: 100
    line-height: 1.2em
    border-radius: 20px
    transform: translate(-50%)
    p
      line-height: 1.2em
@media (max-width: $bp-max-md)
  .btns__item
    width: 10% !important
    padding: 10%

  .btns_item--0
    top: 0.5% !important
    left: 2.1% !important
  .btns_item--1
    top: 0.5% !important
    left: 21.3% !important
  .btns_item--2
    top: 0.5% !important
    left: 40.3% !important
  .btns_item--3
    top: 0.5% !important
    left: 58.5% !important
  .btns_item--4
    top: 0.5% !important
    left: 78% !important



  .btns__text
    width: 330px
  .btns_item--0 .btns__text
    left: 180% !important
  .btns_item--1 .btns__text
    left: 90%
  .btns_item--2 .btns__text
    left: 10%
  .btns_item--3 .btns__text
    left: -50%
  .btns_item--4 .btns__text
    left: -60%
</style>
