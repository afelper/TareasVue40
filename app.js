var app = new Vue({
    el: '#app',
    data: {
        //nombre, estado
        tareas: [],
        // en el localStorage vamos a llamar el item como tareasBD
        proyecto: 'Tareas con VUE',
        grupo: 'Grupo 40',
    },
    methods: {
       
    },

    computed: {
        // variables que dependen de algún cálculo
        titulo(){
            return this.proyecto + ' ' + '-' + ' ' + this.grupo;
        }
    },

});