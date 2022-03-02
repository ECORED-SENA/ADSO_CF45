<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Conceptos clave relacionados con el servicio de #[i hosting]
        p.mb-4 Afianzar los conceptos clave más importantes relacionados con los servicios de #[i hosting].
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar el concepto con la descripción que lo identifica.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/AD1/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/completar.svg")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Servicios de dominio
        p.mb-4 Identificar las principales características asociadas a los dominios de un sitio #[i web].
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar los espacios en blanco.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/AD2/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

 
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
