/*
 * Modelo
 */
var Modelo = function() {
  this.preguntas = [];
  this.ultimoId = 0;

  //inicializacion de eventos
  this.preguntaAgregada = new Evento(this);
};

Modelo.prototype = { 
  //se obtiene el id más grande asignado a una pregunta
  obtenerUltimoId: function() {
    
    console.log('obtenerUltimoId') //!despues borrar

    for (var i = 0; i < this.preguntas.length; ++i) {
      if(this.preguntas[i].id > this.ultimoId){
        this.ultimoId = this.preguntas[i].id;
      }
    }
    return this.ultimoId;
  },

  //se agrega una pregunta dado un nombre y sus respuestas
  agregarPregunta: function(nombre, respuestas) {
    var id = this.obtenerUltimoId();
    id++;

    console.log('agregarPregunta',id) //!despues borrar

    var nuevaPregunta = {'textoPregunta': nombre, 'id': id, 'cantidadPorRespuesta': respuestas};
    this.preguntas.push(nuevaPregunta);
    this.guardar();
    this.preguntaAgregada.notificar();
  },

  //se guardan las preguntas
  guardar: function(){
  },
};