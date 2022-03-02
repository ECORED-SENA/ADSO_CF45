<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Servicios de dominio
     
    .row.justify-content-center.BGIMG01.p-4.mb-4
      .col-lg-10
        .row
          .col-lg-7.mb-4
            <br><br><br><br><br><br><br><br><br><br><br>
            p El dominio corresponde al segundo elemento clave al momento de publicar una aplicación o servicio #[i web], y se trata de un nombre único mediante el cual todos los servicios #[i web] podrán ser localizados en Internet. Al trabajar en la red, todos los elementos tienen una dirección por medio de la cual pueden ser ubicados, esta dirección corresponde a un conjunto de números y se le conoce con el nombre de dirección IP.
          .col-12.cajon.color-acento-contenido.mb-4.p-4
            p La dirección IP puede ser de difícil recordación para la mayoría de las personas, por lo que es indispensable asociarla con un nombre que facilite el acceso de los usuarios y clientes. Este nombre es lo que se conoce como #[strong dominio]. 
          .col-12.mb-0
            p En el siguiente recurso, profundice en los aspectos y generalidades más importantes de los servicios de dominio:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/zj3yQ9nqCf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.justify-content-center.mb-5
      .col-lg-10.BG03.p-0
        .row.align-items-center.mb-4
          .col-lg-4.p-0
            figure.mb-0
              img(src='@/assets/curso/tema2/img02.png')
          .col-lg-8.p-4
            p.mb-0 Generalmente, los servicios de #[i hosting] y de dominio son ofrecidos por las mismas compañías, debido a que ambos son elementos indispensables para poder publicar en Internet. Sin embargo, dependiendo de las necesidades y requerimientos, estos servicios pueden ser adquiridos a proveedores diferentes y, sencillamente, se asocian en los servidores DNS utilizados por el #[i hosting] a los registros del servicio de dominio, de forma que cada vez que en Internet se pregunte por un nombre particular, este nombre (dominio) referencia a los archivos alojados en el #[i hosting].

    .row.justify-content-center.mb-5
      .col-lg-6.BG04.p-2
        p.text-center.mb-0 Tenga presentes estos aspectos relativos a servicios de dominio:

    LineaTiempoD.color-acento-contenido
      .row.BG02.p-4(numero="1" titulo="Dominios de orden superior")
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Para el caso de los dominios de orden superior no comerciales restringidos como, por ejemplo, edu, mil y gov, existen otras organizaciones encargadas de administrarlos. Estos solicitan, además del pago, el cumplimiento de algunos requisitos adicionales que demuestren que, efectivamente, se trata de una organización afín a cada dominio.
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema2/img03.svg')

      .row.BG02.p-4(numero="2" titulo="Dominio .edu")
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Para el caso particular del dominio .edu en el dominio geográfico .co, deberá demostrar que es una institución educativa debidamente registrada y avalada por el ministerio de educación, por medio de resolución, y una copia del registro tributario. Los trámites pueden ser realizados directamente desde Internet, en la dirección: <a href="https://www.cointernet.com.co" target="_blank">https://www.cointernet.com.co</a>
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema2/img04.svg')

      .row.BG02.p-4(numero="3" titulo="Servidores DNS")
        .col-md-8.mb-4.mb-md-0
          p.mb-0 Los servidores DNS son los encargados de almacenar todos los nombres de dominio que están asociados a una dirección de IP, donde se alojan los contenidos de las aplicaciones #[i web]. Es decir, cuando se registra un dominio a una aplicación, se crea un registro en el servidor DNS donde se almacena el dominio junto con la IP, para que cuando alguien consulte en Internet con ese dominio pueda encontrarlo.
        .col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/tema2/img05.svg')
      
      .row.BG02.p-4(numero="4" titulo="Búsqueda de dominio en navegador <em>web</em>")
        .col-md-12
          p.mb-0 Al buscar un dominio en un navegador #[i web], se encontrará primero la dirección IP asociada a este dominio, por lo cual se conectará con el servidor DNS primario, para ver si este registro existe. Si el registro no existe en el DNS primario, el servidor DNS consultará con el servidor DNS raíz, quien le indicará si dicho registro existe o si debe recurrir a otro DNS para continuar la búsqueda. Al final, si el registro de dicho dominio existe, la información de la IP es retornada recursivamente a la fuente de la consulta y, entonces, el navegador usa dicha dirección IP para establecer la conexión con el servidor donde está alojada la aplicación #[i web].

    separador     
</template>
<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema2',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({}),
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
