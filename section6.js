const app = Vue.createApp({
    data(){
        return{
            friends:[
                {id:'nastya', name:'Nastya Gorobets', phone: '12345678', mail:'nastya@gmail.com'},
                {id:'kostya', name:'Kostya Zavizion', phone: '99986787678', mail:'kostya@gmail.com'},
            ]

        }
    },

});

app.component('friend-contact', {
    template:`<li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailsAreVisible ? 'Hide': 'Show'}} details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.mail}}</li>
          </ul>
        </li>`,
    data(){
        return{
            friend: {id:'nastya', name:'Nastya Gorobets', phone: '12345678', mail:'nastya@gmail.com'},
            detailsAreVisible:false
        }
    },

    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }

    }
});

app.mount('#app');