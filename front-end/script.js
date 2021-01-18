const url = " http://localhost:3000"
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
        },
        async register(){
            if(first_name.value === "" || last_name.value === "" || avatar.value === "" || email.value === "" || password.value === ""){
                alert("Заполните данные полностью");
                return;
            }
            if(check.checked===false){
                alert("Согласись с нашими условиями");
                return;
            }
            else{
            await axios.post("http://localhost:3000/users",{"first_name":`${first_n.value}`,"last_name":`${last_n.value}`,"avatar":`${avatarka.value}`,"email":`${email.value}`,"password":`${password.value}`})
            alert("Пользователь создан")
            first_n.value=null;
            last_n.value=null;
            avatarka.value=null;
            email.value=null;
            password.value=null;
            }
        }
    }
});