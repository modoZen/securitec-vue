export default {
    methods: {
        getUser() {
            this.$service.userService.get(this.$route.params.id).then(r => {
                console.log(r.data.data);
                this.user = r.data.data;
            });
        },
    },
    filters: {
        toUppercase(value) {
            if (typeof value !== "string") {
                value = toString(value);
            }
            return value.toUpperCase();
        },
        currency(value) {
            if (typeof (value) !== 'number') {
                value = parseFloat(value);
            }
            return value.toLocaleString("es-PE", { style: "currency", currency: "PEN" });
        }
    }
}