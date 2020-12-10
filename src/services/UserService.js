export default (axios) => {
    return {
        getAll() {
            return axios.get("http://dummy.restapiexample.com/api/v1/employees")
        },
        get(id) {
            return axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
        },
        create(params) {
            console.log("usuario creado");
            return axios.post(`	http://dummy.restapiexample.com/api/v1/create`, params)
        },
        update(id, params) {
            console.log("usuario actualizado");
            return axios.put(`http://dummy.restapiexample.com/api/v1/update/${id}`, params)
            
        },
        eliminate(id) {
            console.log("usuario eliminado");
            return axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
        }
    }
}