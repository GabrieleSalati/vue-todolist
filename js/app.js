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
            ]
        };
    },

});

app.mount("#app");