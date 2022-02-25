<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Publicación y prueba de sitios

    .row.BGIMG03.justify-content-center.p-4.mb-4
      .col-lg-10.mb-4
        p.mb-4 Teniendo en cuenta los elementos vistos a lo largo de este componente formativo: servicios de hosting, servicios de dominio y los protocolos de transferencia de archivos, es momento de comprender y asimilar los pasos para la publicación de un sitio web.
      .col-lg-10.mb-4
        img(src='@/assets/curso/tema4/img02.png')
      .col-lg-10.mb-4
        p.mb-0 A continuación, conozca los pasos para publicar un sitio web. Procure llevar registro de los aspectos más relevantes en su libreta personal de apuntes:
    
    ImagenInfograficaB.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema4/img03.png')
      
      div(x="28%" y="52%" tooltip="tooltip Alistamiento" numero="+")
        h5 Alistamiento
        p Tener listo el sitio web. Se recomienda utilizar servidores de aplicaciones en la máquina local para hacer pruebas. Hay gran variedad de servidores web que se amoldan fácilmente a los sistemas operativos y a los lenguajes de programación utilizados.
      div(x="28%" y="59%" tooltip="<em>Hosting</em> apropiado" numero="+")
        h5 <em>Hosting</em> apropiado
        p Adquirir servicio de hosting que cumpla con características necesarias para despliegue del sitio. Los servicios de hosting ofrecen un conjunto de beneficios entre los que se debe verificar el sistema operativo, el servidor de aplicaciones, sistemas gestores de bases de datos, lenguajes soportados, espacio de disco, límite de ancho de banda, cantidad de cuentas de correo, calidad de soporte, certificados digitales y copias de seguridad.
      div(x="28%" y="66%" tooltip="Imagen del sitio" numero="+")
        h5 Imagen del sitio
        p Adquirir un servicio de dominio que sirva para representar la imagen del sitio, que sea de fácil recordación y utilice los dominios de primer nivel, de acuerdo con las características del sitio a publicar.
      div(x="28%" y="72%" tooltip="Funcionalidades probadas" numero="+")
        h5 Funcionalidades probadas
        p Una vez desplegado el sitio, verificar que todas las funcionalidades probadas, de manera local, funcionan de la misma forma, una vez que el sitio es montado en Internet. Para evitar inconvenientes, se recomienda utilizar, en las pruebas locales, las mismas características de sistema operativo, servidor de aplicaciones y gestores de bases de datos que el de los servidores de hosting.
      div(x="62%" y="47%" tooltip="tooltip de max 35 caracteres" numero="+")
        h5 titulo
        .tabla-b.color-acento-contenido.mb-5 
          table
            thead
              tr
                th(style="background-color: #FFA726; color: #000").text-center Servidor web
                th(style="background-color: #FFA726; color: #000").text-center Uptime
            tbody
              tr
                td(style="background-color: #D2F3F7; color: #000").text-center GoDaddy MX
                td(style="background-color: #D2F3F7; color: #000").text-center https://httpd.apache.org
              tr
                td(style="background-color: #fff; color: #000").text-center A2 Hosting
                td(style="background-color: #fff; color: #000").text-center https://www.nginx.com
              tr
                td(style="background-color: #D2F3F7; color: #000").text-center TMD Hosting
                td(style="background-color: #D2F3F7; color: #000").text-center https://www.litespeedtech.com
              tr
                td(style="background-color: #fff; color: #000").text-center Siteground Hosting LATAM
                td(style="background-color: #fff; color: #000").text-center https://openresty.org/en/
              tr
                td(style="background-color: #D2F3F7; color: #000").text-center TMD Hosting
                td(style="background-color: #D2F3F7; color: #000").text-center https://www.iis.net

    .row.justify-content-center
      .col-lg-10.BG05.p-4.mb-5
          .row.align-items-center.justify-content-center
            .col.mb-4.mb-lg-0
              p.mb-0 Conozca y profundice en la forma de desplegar un sitio utilizando servicios de hosting y de dominios gratuitos. Visualice con atención el video “Publicación y prueba sitios”. Procure llevar registro de los aspectos más destacados en su libreta personal de apuntes.
            .col-auto
              a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
                figure.efect1
                  img(src="@/assets/curso/tema4/img04.svg", style="width:150px").m-auto

</template>
<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema4',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
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
