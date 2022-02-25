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
            p.mb-0 El servicio de #[i hosting] corresponde a uno de los dos servicios indispensables para la publicación de una aplicación web, y consiste, esencialmente, en un servicio de alojamiento de archivos de los productos y servicios de #[i software] que requieren ser publicados en internet.
              br
              br  
              | Dicho de una manera muy simple, Internet es un gran grupo de servidores interconectados, unos con otros, a los cuales las personas acceden para el consumo de servicios desde sus equipos personales; dentro de esta gran red, hay unos servidores especiales encargados de ofrecer el servicio de #[i hosting]. 

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .BG01.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema1/img02.svg')
        h5.text-center Funcionamiento del servicio #[i hosting]
        
        
      .BG01.p-4
        .row.justify-content-center.mb-4
          .col-8
            h5.text-center Trámites y gestión del servicio de #[i hosting]
            p.text-center Siguiendo la analogía con un servicio de alquiler de un inmueble, cualquier otro servicio, como adquirir una dirección, un número de teléfono, servicios públicos, debe ser tramitado de manera independiente con otros proveedores. Así mismo sucede con Internet: cualquier otro servicio además de sólo almacenamiento de archivos, de productos y servicios de software, debe ser adquirido de forma adicional de acuerdo con las necesidades.

      .BG01.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema1/img03.svg' alt='AvatarTop')
            h5.text-center Modalidades o tipos de #[i hosting]

      .BG01.p-4
        .row.justify-content-center.mb-4
          .col-8
            h5.text-center Funcionamiento del servicio #[i hosting]
            p.text-center El servicio de #[i hosting] es similar al proceso de arrendamiento de inmuebles, es decir, en ambos casos se debe hacer el pago de un alquiler y este pago brinda autorización para utilizar un espacio donde es posible poner cosas, pero solo eso. 

      .BG01.p-4
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
            h5.text-center Trásmites y gestión del servicio de #[i hosting]

      .BG01.p-4
        .row.justify-content-center.mb-4
          .col-8
            h5.text-center Modalidades o tipos de #[i hosting]
            p.text-center El servicio de #[i hosting] es similar al proceso de arrendamiento de inmuebles, es decir, en ambos casos se debe hacer el pago de un alquiler y este pago brinda autorización para utilizar un espacio donde es posible poner cosas, pero solo eso. 

    LineaTiempoD.color-acento-contenido
      .row.BG02.p-4(numero="1" titulo="Hosting compartido")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img05.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Servicio donde el proveedor ofrece alojamiento a varios clientes usando el mismo servidor. Cada cliente tiene un espacio independiente donde guardar sus archivos. Se comparten recursos del servidor como: memoria RAM, CPU, ancho de banda, dirección IP, entre otros. Es el más económico de todos los servicios de hosting, fácil de manejar e instalar; aunque los proyectos alojados en el mismo servidor pueden afectar el rendimiento de los otros y, al tener recursos compartidos, puede haber menor velocidad y disponibilidad.

      .row.BG02.p-4(numero="2" titulo="Servidor dedicado")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img06.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Cada cliente tiene uso exclusivo de un servidor. Los recursos no se comparten, el rendimiento es mucho más alto y ofrece mayor seguridad. Hay mayor flexibilidad, ya que todos los recursos del servidor son administrados por un único cliente; sin embargo, esto puede implicar un trabajo adicional, ya que este proceso de administración suele correr por cuenta del mismo cliente. Este tipo de servicio es muy caro y muchas veces son complicados su configuración y su mantenimiento.

      .row.BG02.p-4(numero="3" titulo="VPS (Servidor privado virtual)")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img07.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Un servidor físico es particionado virtualmente; estas particiones virtuales tienen asignación independiente de parte de los recursos del servidor y solo comparten, entre sí, el sistema operativo. Cada partición es alquilada a diferentes clientes. Este modelo combina características del hosting compartido y del servidor dedicado.  Los clientes comparten un mismo servidor pero las particiones virtuales tienen recursos independizados, por lo cual no deben compartir memoria, disco duro o procesador. El desempeño y velocidad de acceso de cada cliente es comparable al de un servidor dedicado.

      .row.BG02.p-4(numero="4" titulo="Cloud hosting (servidor en la nube)")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img08.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Hosting que usa características de almacenamiento en la nube. Un proyecto es almacenado de forma distribuida en varios servidores interconectados en la nube, por lo que, si existiera una falla en alguno de los servidores, esta es compensada por otro de los servidores de la nube. Este tipo de servicio es más eficiente que el de hosting dedicado, ya que las ventajas de la nube permitirían una mayor disponibilidad, tolerancia a fallos y mayor seguridad. También es de gran capacidad de adaptación en tiempo real, ya que las características de los servicios contratados pueden ser reajustados más fácilmente.  El alquiler se da por los recursos realmente utilizados y no con planes fijos, como en los otros modelos de hosting.
      
      .row.BG02.p-4(numero="5" titulo="Hosting gratuito")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img09.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Muchos proveedores de hosting ofrecen acceso gratuito, con lo cual esperan que los posibles clientes a futuro accedan a paquetes de pago. Este tipo de hosting es ideal para experimentar procesos de aprendizaje, pero no es recomendado para proyectos reales. Algunos de los prestadores de servicio de hosting, en contraprestación de la gratuidad, incorporan espacios de publicidad que se mezclan con el contenido propio, por lo que se desmejora la imagen de los proyectos alojados bajo este servicio y, adicionalmente, tiene un conjunto de limitaciones, como: limitaciones en el espacio de almacenamiento, en ancho de banda, en funciones para realizar copias de seguridad, en concurrencia (personas que pueden acceder al mismo tiempo), en control sobre tipo de publicidad que será transmitida, etc.

      .row.BG02.p-4(numero="6" titulo="Selección de un servicio de hosting")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img10.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-0 No es una decisión que se deba tomar a la ligera; puede impactar positiva o negativamente la perspectiva final de los clientes de un producto software desarrollado. Una mala decisión, en este aspecto, puede borrar todas las buenas prácticas de calidad, diseño y construcción de software utilizadas.
      
      .row.BG02.p-4(numero="7" titulo="Para tener en cuenta")
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema1/img11.svg')
        .col-md-8.mb-4.mb-md-0
          p.mb-4 Para elegir un servicio de hosting se debe considerar:
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Opiniones de clientes del servicio y puntos de atención al cliente existentes y sus horarios, esperando siempre una disponibilidad de 24 horas, los 7 días de la semana.
            li 
              i.fas.fa-circle
              | Métodos de pago habilitados y precios.
            li 
              i.fas.fa-circle
              | Tipo de proveedor, es decir, si es nacional o internacional, pero principalmente, la ubicación de los datacenters, buscando que estén ubicados lo más cerca posible de la ubicación de los clientes.
            li 
              i.fas.fa-circle
              | Verificación del uptime, el cual es una medida que hace referencia al tiempo en el que un sitio está disponible en Internet para que pueda ser accedido. 
            li 
              i.fas.fa-circle
              | Cada proveedor de servicio de hosting debe hacer público el valor del uptime ofrecido a sus clientes dentro de los términos y condiciones de los servicios alquilados.
    
    .row.justify-content-center.mb-4
      .col-lg-6      
        img.mb-4(src='@/assets/curso/tema1/img12.svg')
    
    
      
    


        
          


</template>
<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
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
