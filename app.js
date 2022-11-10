Vue.createApp({
    data(){
        return{
            goals:['Goal1','Goal2'],
            testText : 'Test',
            goalA : 'Goal A',
/*
            goalB : '<h2>Goal B</h2>',
*/
            goalB : 'Goal B',
            vueLink:"/vue/about.html"

        }
    },

    methods:{
        changeTestText(){
            this.testText = 'Changed text ))'
        },

        outputGoal(){

            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.goalA;
            }else{
                return this.goalB;
            }
        }

    }

}).mount('#user-goal');



Vue.createApp({
    data(){
        return{
            name:'Nastya',
            age:26,
            url:'image.jpg'
        }
    },
    methods: {
        ageIn5Years(){
            return this.age + 5;
        },
        randomNumberBetween0And1(){
            return Math.random();
        },
        saveName(){
            this.name = document.getElementById('name').value;
        },
    }
}).mount('#assignment');


Vue.createApp({
    data(){
        return{
            counter:0,
            name:'',
            lastName:'',
            confirmedName:'',
          /*  fullName:''*/

        }
    },
    watch:{
        counter(value){
            if(value == 20){
                this.counter = 0;
            }
        }
      /*  name(value){
            if(value === ''){
                this.fullName = '';
            }else{
                this.fullName = value + ' ' + this.lastName;
            }
        } ,
        lastName(value){
            if(value === ''){
                this.fullName = '';
            }else{
                this.fullName = this.name + ' ' + value;
            }
        }*/
    },
    computed:{
        fullName(){
            return this.name + ' '+ this.lastName;
        }
    },
    methods: {

        add(amount){
        this.counter = this.counter + 5;
     },
        subtract(amount){
         this.counter = this.counter - 5;

     },
        resetInput(){
         this.name = '';
         this.lastName = '';

     },
        confirmName(){
         this.confirmedName = this.name;
     },

     saveName(event){
            console.log('saveName');
         this.name = event.target.value;
     },
     submitForm(){
         alert('Submit');
     }

    }
}).mount('#events');


Vue.createApp({
    data(){
        return{
            content:'',
            content2:'',
        }
    },
    methods: {
        showAlert(){
            alert('Text');
        },
        registerInput(event){
            this.content = event.target.value;
        },
        registerInput2(event){
            this.content2 = event.target.value;
        },
    }
}).mount('#assignment2');


Vue.createApp({
    data(){
        return{
            number:0,
        }
    },
    computed:{
        result(){
            if(this.number < 37){
                return 'Not there yet!';
            }
            if(this.number > 37){
                return 'Too much!';
            }
            return this.number;
        }
    },
    watch:{
        result(){
            const that = this;
            setTimeout(function (){
                that.number = 0;
            },5000);
        }
    },
    methods: {
        add(amount){
            this.number = this.number + amount;
        }
    }
}).mount('#assignment3');



Vue.createApp({
    data(){
        return{
            boxASelected : false,
            boxBSelected : false,
            boxCSelected : false,
        }
    },
    computed:{

        boxAClasses(){
            if(this.boxASelected){
                return 'active';
            }
        }

    },
    watch:{

    },
    methods: {

        boxSelected(box){
            if(box == 'A'){
                 this.boxASelected = !this.boxASelected;
            }
            if(box == 'B'){
                 this.boxBSelected = !this.boxBSelected;
            }
            if(box == 'C'){
                 this.boxCSelected = !this.boxCSelected;
            }
        }

    }
}).mount('#styling');



Vue.createApp({
    data(){
        return{
            isHide:false,
            bgColor:'',
            inputClass:''
        }
    },
    computed:{
        pClasses(){
            return [this.inputClass,this.isHide ? 'hidden': 'block'];
        },
        myStyle(){
            return {'backgroundColor':this.bgColor};
        },
    },
    methods: {
        toogleP(){
            this.isHide = !this.isHide;
        }
    }
}).mount('#assignment7');



Vue.createApp({
    data(){
        return{
            enteredGoalValue:'',
            goals:[],
            arrObj:[
                {name:'Nastya','age':27},
                {name:'Kostya','age':37}
            ]
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredGoalValue);
            this.enteredGoalValue = '';
        },
        removeGoal(index){
            this.goals.splice(index,1);
        }
    }
}).mount('#user-goals');









Vue.createApp(
    {

        data(){
            return{
                tasks: [],
                isVisible: true,
                enteredTaskText: ''

            }

        },


        methods:{
            addTask(){
                this.tasks.push(this.enteredTaskText)
            },
            toggleList(){
                this.isVisible = !this.isVisible;
            },
            showButtonText(){

                return this.isVisible ? 'Hide' : 'Show';

            }
        }






    }
).mount('#tasks');