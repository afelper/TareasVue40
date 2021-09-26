Vue.component('GestorTareas', {
    template:  `
    <div>
        <!-- formulario agregar tareas -->
        <section class="mb-3">
            <form v-on:submit.prevent="agregarTarea">
                <div class="mb-3">
                    <label for="agregarTarea" class="form-label">Escriba el nombre de su tarea</label>
                    <input v-model="nuevaTarea" type="text" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">Debe ingresar el nombre de la tarea para crearla</div>
                </div>
                <button v-on:click="agregarTarea" type="button" v-show="nuevaTarea"
                    class="btn btn-success w-100">Agregar tarea</button>
            </form>
        </section>

        <!-- mostrar tareas -->
        <section>
            <div>

                <div class="row text-center align-items-center alert alert-light" role="alert">
                    <div class="col-12 col-md-4">
                        <span>
                            Nombre
                        </span>
                    </div>
                    <div class="col-12 col-md-4">
                        <span>
                            Estado
                        </span>
                    </div>
                    <div class="col-12 col-md-4">
                        <span>
                            Acciones
                        </span>
                    </div>
                </div>

                <div v-for="(item,index) in tareas" :key="index"
                    :class="['row', 'text-center', 'align-items-center', 'alert', item.estado? 'alert-success' : 'alert-warning'] "
                    role="alert">
                    <div class="col-12 col-md-4">
                        <span>
                            {{item.nombre}}
                        </span>
                    </div>
                    <div class="col-12 col-md-4">
                        <span>
                            {{item.estado? 'Finalizado' : 'Pendiente'}}
                        </span>
                    </div>
                    <div class="col-12 col-md-4">
                        <button v-on:click="cambiarEstado(index)" class="btn btn-light btn-sm">Cambiar
                            estado</button>
                        <button v-on:click="eliminarTarea(index)" class="btn btn-dark btn-sm">Eliminar</button>
                    </div>
                </div>

            </div>

        </section>
    </div>
    `,
    data(){
        return {
            //nombre, estado
            tareas: [],
            // en el localStorage vamos a llamar el item como tareasBD
            nuevaTarea: '',
            disabledButton: {
                estado: true,
                backgroundColor: '#81cc9'
            }
        }
    },

    methods: {
        agregarTarea() {
            // console.log(this.nuevaTarea);
            this.tareas.push({
                estado: false,
                nombre: this.nuevaTarea
            });
            this.nuevaTarea = '';
            localStorage.setItem('tareasBD', JSON.stringify(this.tareas));
        },
    
        cambiarEstado(index) {
            this.tareas[index].estado = !this.tareas[index].estado;
            localStorage.setItem('tareasBD', JSON.stringify(this.tareas));
        },
    
        eliminarTarea(index) {
            this.tareas.splice(index, 1);
            localStorage.setItem('tareasBD', JSON.stringify(this.tareas));
        }
    },

    created() {
        // Si en el localStorage existe el objeto que yo acaba de crear (tareasBD) entonces asigne las tareas en el vector  tareas (tareas: []).
        // si no existe el array de tareas debe inicializar vacío
        //parsee a objeto
        const storage = JSON.parse(localStorage.getItem('tareasBD')); 
        this.tareas = storage? storage : [];
    }
    
 
})