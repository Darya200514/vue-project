const url = "https://reqres.in/api/users?page=2"
const vm = new Vue({
    el:"#app",
    data:{
        results:[]
    },
    mounted(){
        axios.get(url).then(res => {
            this.results = res.data.data
            console.log(this.results);
        })
    },
    methods:{
        async deleteUser(index){
            this.results.splice(index,1)
            alert('delted ' + id)
        }
    
    }
    
});