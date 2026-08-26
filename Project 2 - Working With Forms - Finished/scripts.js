members = [
    {
        fname: 'David',
        lname: 'Loca',
        instrument: 'Guitarra'
    },
    {
        fname: 'Wally',
        lname: 'Byers',
        instrument: 'Baixo'
    },
    {
        fname: 'Robert',
        lname: 'Dozal',
        instrument: 'Guitarra'
    },
    {
        fname: 'Billy',
        lname: 'Trujillo',
        instrument: 'Teclado'
    },
    // {
    //     fname: 'Tony',
    //     lname: 'Leal',
    //     instrument: 'Bateria'
    // }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {
            }
        }
    },

    methods: {
        addMember: function() {
            // if (!(this.newMember.instrument && this.newMember.fname && this.newMember.lname)) {
            if ((this.newMember.fname && this.newMember.lname && this.newMember.instrument)) {
            //     alert("All fields must be filled")
            this.members.push(this.newMember);
            this.newMember = {};
            } else {
                // this.members.push(this.newMember);
                // this.newMember = {};
                alert("All fields must be filled");
            }
        }
    }
};

Vue.createApp(handlingForms).mount('#app');
