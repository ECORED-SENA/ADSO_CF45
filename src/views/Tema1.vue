<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Servicios de #[i hosting]
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El servicio de #[i hosting] corresponde a uno de los dos servicios indispensables para la publicación de una aplicación #[i web], y consiste, esencialmente, en un servicio de alojamiento de archivos de los productos y servicios de #[i software] que requieren ser publicados en internet.
              br
              br  
              | Dicho de una manera muy simple, Internet es un gran grupo de servidores interconectados, unos con otros, a los cuales las personas acceden para el consumo de servicios desde sus equipos personales; dentro de esta gran red, hay unos servidores especiales encargados de ofrecer el servicio de #[i hosting]. 

    p.mb-4.text-center Estos son algunos aspectos generales y de mucha importancia que usted debe tener en cuenta en lo relacionado con los servicios de #[i hosting]:

    .row.justify-content-center.mb-4
      .col-lg-6
        SlyderF.mb-5(columnas="col-12")
          .BGIMG04.p-4
            .row.justify-content-center.mb-4
              .col-10
                img(src='@/assets/curso/tema1/img02.svg')
            h5.text-center Funcionamiento del servicio #[i hosting]
          .BG01.p-4
            h5.text-center Trámites y gestión del servicio de #[i hosting]
            p.text-center Siguiendo la analogía con un servicio de alquiler de un inmueble, cualquier otro servicio, como adquirir una dirección, un número de teléfono, servicios públicos, debe ser tramitado de manera independiente con otros proveedores. Así mismo sucede con Internet: cualquier otro servicio además de solo almacenamiento de archivos, de productos y servicios de #[i software], debe ser adquirido de forma adicional de acuerdo con las necesidades.
          .BGIMG04.p-4
            .row.justify-content-center.mb-4
              .col-10
                img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
                h5.text-center Modalidades o tipos de #[i hosting]
          .BG01.p-4
            .row.justify-content-center.mb-4
              .col-10
                h5.text-center Funcionamiento del servicio #[i hosting]
                p.text-center El servicio de #[i hosting] es similar al proceso de arrendamiento de inmuebles, es decir, en ambos casos se debe hacer el pago de un alquiler y este pago brinda autorización para utilizar un espacio donde es posible poner cosas, pero solo eso. 
          .BGIMG04.p-4
            .row.justify-content-center.mb-4
              .col-10
                img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
                h5.text-center Trásmites y gestión del servicio de #[i hosting]
          .BG01.p-4
            .row.justify-content-center.mb-4
              .col-10
                h5.text-center Modalidades o tipos de #[i hosting]
                p.text-center El servicio de #[i hosting] es similar al proceso de arrendamiento de inmuebles, es decir, en ambos casos se debe hacer el pago de un alquiler y este pago brinda autorización para utilizar un espacio donde es posible poner cosas, pero solo eso. 
    
    p.text-center.mb-4 Dentro de las modalidades o tipos de #[i hosting], destacan las que se muestran a continuación:

    LineaTiempoD.color-acento-contenido
      .row.BG02.p-4(numero="1" titulo="<em>Hosting</em> compartido")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img05.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Servicio donde el proveedor ofrece alojamiento a varios clientes usando el mismo servidor. Cada cliente tiene un espacio independiente donde guardar sus archivos. Se comparten recursos del servidor como: memoria RAM, CPU, ancho de banda, dirección IP, entre otros. Es el más económico de todos los servicios de #[i hosting], fácil de manejar e instalar; aunque los proyectos alojados en el mismo servidor pueden afectar el rendimiento de los otros y, al tener recursos compartidos, puede haber menor velocidad y disponibilidad.

      .row.BG02.p-4(numero="2" titulo="Servidor dedicado")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img06.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Cada cliente tiene uso exclusivo de un servidor. Los recursos no se comparten, el rendimiento es mucho más alto y ofrece mayor seguridad. Hay mayor flexibilidad, ya que todos los recursos del servidor son administrados por un único cliente; sin embargo, esto puede implicar un trabajo adicional, ya que este proceso de administración suele correr por cuenta del mismo cliente. Este tipo de servicio es muy caro y muchas veces son complicados su configuración y su mantenimiento.

      .row.BG02.p-4(numero="3" titulo="VPS (Servidor privado virtual)")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img07.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Un servidor físico es particionado virtualmente; estas particiones virtuales tienen asignación independiente de parte de los recursos del servidor y solo comparten, entre sí, el sistema operativo. Cada partición es alquilada a diferentes clientes. Este modelo combina características del #[i hosting] compartido y del servidor dedicado.  Los clientes comparten un mismo servidor pero las particiones virtuales tienen recursos independizados, por lo cual no deben compartir memoria, disco duro o procesador. El desempeño y velocidad de acceso de cada cliente es comparable al de un servidor dedicado.

      .row.BG02.p-4(numero="4" titulo="<em>Cloud hosting</em> (servidor en la nube)")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img08.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 #[i Hosting] que usa características de almacenamiento en la nube. Un proyecto es almacenado de forma distribuida en varios servidores interconectados en la nube, por lo que, si existiera una falla en alguno de los servidores, esta es compensada por otro de los servidores de la nube. Este tipo de servicio es más eficiente que el de #[i hosting] dedicado, ya que las ventajas de la nube permitirían una mayor disponibilidad, tolerancia a fallos y mayor seguridad. También es de gran capacidad de adaptación en tiempo real, ya que las características de los servicios contratados pueden ser reajustados más fácilmente.  El alquiler se da por los recursos realmente utilizados y no con planes fijos, como en los otros modelos de #[i hosting].
      
      .row.BG02.p-4(numero="5" titulo="<em>Hosting</em> gratuito")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img09.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Muchos proveedores de #[i hosting] ofrecen acceso gratuito, con lo cual esperan que los posibles clientes a futuro accedan a paquetes de pago. Este tipo de #[i hosting] es ideal para experimentar procesos de aprendizaje, pero no es recomendado para proyectos reales. Algunos de los prestadores de servicio de #[i hosting], en contraprestación de la gratuidad, incorporan espacios de publicidad que se mezclan con el contenido propio, por lo que se desmejora la imagen de los proyectos alojados bajo este servicio y, adicionalmente, tiene un conjunto de limitaciones, como: limitaciones en el espacio de almacenamiento, en ancho de banda, en funciones para realizar copias de seguridad, en concurrencia (personas que pueden acceder al mismo tiempo), en control sobre tipo de publicidad que será transmitida, etc.

      .row.BG02.p-4(numero="6" titulo="Selección de un servicio de <em>hosting</em>")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img10.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 No es una decisión que se deba tomar a la ligera; puede impactar positiva o negativamente la perspectiva final de los clientes de un producto #[i software] desarrollado. Una mala decisión, en este aspecto, puede borrar todas las buenas prácticas de calidad, diseño y construcción de #[i software] utilizadas.
      
      .row.BG02.p-4(numero="7" titulo="Para tener en cuenta")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img11.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-4 Para elegir un servicio de #[i hosting] se debe considerar:
          ul.lista-ul
            li 
              <i class="fas fa-circle fa-xs"></i>
              | Opiniones de clientes del servicio y puntos de atención al cliente existentes y sus horarios, esperando siempre una disponibilidad de 24 horas, los 7 días de la semana.
            li 
              <i class="fas fa-circle fa-xs"></i>
              | Métodos de pago habilitados y precios.
            li 
              <i class="fas fa-circle fa-xs"></i>
              | Tipo de proveedor, es decir, si es nacional o internacional, pero principalmente, la ubicación de los datacenters, buscando que estén ubicados lo más cerca posible de la ubicación de los clientes.
            li 
              <i class="fas fa-circle fa-xs"></i>
              p Verificación del <em>uptime</em>, el cual es una medida que hace referencia al tiempo en el que un sitio está disponible en Internet para que pueda ser accedido. 
            li 
              <i class="fas fa-circle fa-xs"></i>
              p Cada proveedor de servicio de #[i hosting] debe hacer público el valor del #[i uptime] ofrecido a sus clientes dentro de los términos y condiciones de los servicios alquilados.  
    
    .row.justify-content-center.mb-4
      .col-lg-6      
        img.mb-4(src='@/assets/curso/tema1/img12.svg')
    
    #MapaGroup01.row.justify-content-center.p-4.mb-4
      .col-lg-5.mb-4
        button.buttom.color-primario.p-3.w-100.position-relative(data-bs-toggle='collapse' data-bs-target='.multi-collapse1' aria-expanded='true' aria-controls='.multi-collapse1')
          .row.justify-content-center
            .col-lg-10.col-sm-6
              h4.mb-0 Proveedores de servicios
      .col-lg-5.mb-4
        button.buttom.color-primario.p-3.w-100.position-relative(data-bs-toggle='collapse' data-bs-target='.multi-collapse2' aria-expanded='true' aria-controls='.multi-collapse2')
          .row.justify-content-center
            .indicador--hover(v-if="indicadorImagenZoom")
            .col-lg-10.col-sm-6
              h4.mb-0 Herramientas de monitoreo  
        
      .col-lg-10.position-relative
        .multi-collapse1.collapse.show(data-bs-parent='#MapaGroup01')
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img.mb-4(src='@/assets/curso/tema1/img15.svg')
              .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
                h5 Tabla 1.
                span Proveedores de #[i hosting]
              
              .tabla-b.color-acento-contenido.mb-5 
                table
                  thead
                    tr
                      th(style="background-color: #FFA726; color: #000").text-center Proveedor
                      th(style="background-color: #FFA726; color: #000").text-center #[i Uptime]
                  tbody
                    tr
                      td(style="background-color: #D2F3F7; color: #000").text-center GoDaddy MX
                      td(style="background-color: #D2F3F7; color: #000").text-center 99.9%
                    tr
                      td(style="background-color: #fff; color: #000").text-center A2 #[i Hosting]
                      td(style="background-color: #fff; color: #000").text-center 99.99%
                    tr
                      td(style="background-color: #D2F3F7; color: #000").text-center TMD #[i Hosting]
                      td(style="background-color: #D2F3F7; color: #000").text-center 99.99% en #[i Hosting] compartido, y 99.9999% en VPS y #[i Cloud Hosting]
                    tr
                      td(style="background-color: #fff; color: #000").text-center Siteground #[i Hosting] LATAM
                      td(style="background-color: #fff; color: #000").text-center 99.99%
                    
                    tr
                      td(style="background-color: #D2F3F7; color: #000").text-center Wix
                      td(style="background-color: #D2F3F7; color: #000").text-center 99.8%
                    tr
                      td(style="background-color: #fff; color: #000").text-center Amazon EC2/EBS
                      td(style="background-color: #fff; color: #000").text-center 99.95%
                    tr
                      td(style="background-color: #D2F3F7; color: #000").text-center Google Compute Engine
                      td(style="background-color: #D2F3F7; color: #000").text-center 99.5%
                    tr
                      td(style="background-color: #fff; color: #000").text-center Hostgator
                      td(style="background-color: #fff; color: #000").text-center 99.99%
        
        .multi-collapse2.collapse(data-bs-parent='#MapaGroup01')
          .row.justify-content-center
            .col-lg-10
              figure.mb-4
                img.mb-4(src='@/assets/curso/tema1/img15.svg') 
              .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
                h5 Tabla 2.
                span Herramientas de monitoreo #[i web]

              .tabla-b.color-acento-contenido.mb-5 
                table
                  thead
                    tr
                      th(style="background-color: #FFA726; color: #000").text-center Proveedor
                      th(style="background-color: #FFA726; color: #000").text-center Dirección
                  tbody
                    tr 
                      td(style="background-color: #D2F3F7; color: #000").text-center Pingdom Free
                      td(style="background-color: #D2F3F7; color: #000").text-center <a href="https://www.pingdom.com/website-monitoring/" target="_blank">https://www.pingdom.com/website-monitoring/</a>
                    tr
                      td(style="background-color: #fff; color: #000").text-center StatusCake Community
                      td(style="background-color: #fff; color: #000").text-center <a href="https://app.statuscake.com/Try/?Plan=FREE" target="_blank">https://app.statuscake.com/Try/?Plan=FREE</a>
                    tr
                      td(style="background-color: #D2F3F7; color: #000").text-center RapidSpike Basic
                      td(style="background-color: #D2F3F7; color: #000").text-center <a href="https://www.rapidspike.com/free-30-day-trial/" target="_blank">https://www.rapidspike.com/free-30-day-trial/</a>
                    tr
                      td(style="background-color: #fff; color: #000").text-center #[i UptimeRobot]
                      td(style="background-color: #fff; color: #000").text-center <a href="https://uptimerobot.com/signUp" target="_blank">https://uptimerobot.com/signUp</a>
  
    separador
</template>
<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorImagenZoom: true,
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
