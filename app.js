function getCar(name,model,year,owner,phone,image){
    return {
        name:name,
        model:model,
        year:year,
        owner:owner,
        phone:phone,
        image:image
    }
}
const cars=[
    getCar("Ford","Focus",2004,"Matt Petue","+7934 234 78 63","images/fordfocus.jpg"),
    getCar("Toyota","Camry",2011,"Lord Hamlet","+7125 434 77 03","images/toyotacamry.jpg"),
    getCar("Porche","Panamera",2017,"Suzi Cone","+7984 200 72 66","images/porchepanamera.jpg")
]
new Vue({
    el:'#app',
    data:{
        cars:cars,
        car:cars[0]
    },
    methods:{
        selectCar:function(index){
            this.car = cars[index];

        }
    }
})