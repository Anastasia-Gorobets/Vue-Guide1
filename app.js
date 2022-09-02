Vue.createApp({
    data() {

        return {
            goals: [],
            enteredValue: '',

        }
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = '';
        },

    }
}).mount('#app');


/*
const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal(){

   const enteredVal = inputEl.value;
   const listItemEl = document.createElement('li');
   listItemEl.textContent = enteredVal;
   listEl.append(listItemEl);
    inputEl.value = '';
}

buttonEl.addEventListener('click',addGoal);*/



