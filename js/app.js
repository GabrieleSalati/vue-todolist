const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "To do list",
            todo: [
                {
                    text: "Recuperare l'equipaggiamento.",
                    done: true
                },
                {
                    text: "Riunirsi con la squadra.",
                    done: true
                },
                {
                    text: "Assaltare la base.",
                    done: false
                },
                {
                    text: "Conquistare la bandiera.",
                    done: false
                },
                {
                    text: "Preparare le difese.",
                    done: false
                }
            ],

            newTask: {
                text: "",
                done: false
            },
        };
    },

    methods: {
        addTask() {
            this.todo.push(this.newTask);
        },

        removeTask(index) {
            this.todo.splice(index, 1);
        },
    },
});

app.mount("#app");