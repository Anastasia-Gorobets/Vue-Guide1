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


function generateRandomValue(max,min){
    return Math.floor(Math.random() *  (max-min)) + min;
}

Vue.createApp({

    data(){
        return{

            playerHealth : 100,
            monsterHealth : 100,
            currentRound : 0,
            winner : null,
            logs : []
        }
    },

    computed:{

        monsterBarStyles(){
            if(this.monsterHealth < 0){
                return {width:0 + '%'};
            }
            return {width:this.monsterHealth + '%'};
        },
        playerBarStyles(){
            if(this.playerHealth < 0){
                return {width:0 + '%'};
            }
            return {width:this.playerHealth + '%'};
        },

        disableSpecailAttack(){
            return this.currentRound % 3 !== 0;
        }

    },

    watch:{
        playerHealth(value){

            if(value <= 0 && this.monsterHealth <= 0){
                this.winner = 'draw';
            }else if(value <= 0){
                this.winner = 'monster';
            }

        },

        monsterHealth(value){
            if(value <= 0 && this.playerHealth <= 0){
                this.winner = 'draw';

            }else if(value <= 0){
                this.winner = 'player';
            }

        }
    },

    methods:{

        startNewGame(){

               this.playerHealth = 100;
               this.monsterHealth = 100;
               this.currentRound = 0;
               this.winner = null;

        },

        surrender(){

            this.playerHealth = 0;

        },

        attackMonster(){

            this.currentRound ++ ;
            var damage = generateRandomValue(12,5)
            this.monsterHealth -= damage;

            this.addLogMessage('player', 'attacked', damage);

            this.attackPlayer();

            if(this.playerHealth < 0){
                //Player lost
            }


        },
        attackPlayer(){

            var damage = generateRandomValue(15,8)
            this.playerHealth -= damage;

            this.addLogMessage('monster', 'attacked', damage);


        },

        specialAttackMonster(){
            this.currentRound ++ ;
            var damage = generateRandomValue(10,25);
            this.monsterHealth -= damage;

            this.addLogMessage('player', 'special attack', damage);

            this.attackPlayer();

        },

        healPlayer(){
            this.currentRound ++ ;
            var healValue = generateRandomValue(15,8);
            if((this.playerHealth + healValue) <= 100){
                this.playerHealth += healValue;
                this.addLogMessage('player', 'heal', healValue);
            }


            this.attackPlayer();


        },

        addLogMessage(who, what, value){

            var obj = {};
            obj.who = who;
            obj.what = what;
            obj.value = value;

            this.logs.push(obj);

        }


    }


}).mount('#game');