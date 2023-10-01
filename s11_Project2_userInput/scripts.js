/*
if you define like: "let members = [...]"
then you need to use it like :

    data() {
        return {
            members: members,
            newMember: {

            }
        }
    },

you can not use "windows." because  let and const do not create properties on the window object in the way that var does when declared in the global scope.



*/

var members = [
    {
        fname: 'John',
        lname: 'Lennon',
        instrument: 'Acoustic Guitar'
    },
    {
        fname: 'George',
        lname: 'Harrison',
        instrument: 'Electric Guitar'
    }
]

const handlingForms = {

    data() {
        return {
            members: members,
            newMember: {

            }
        }
    },

    methods: {
        addMember: function() {
            if (!(this.newMember.instrument && this.newMember.fname && this.newMember.lname)) {
                alert("All fields must be filled")
            } else {
                this.members.push(this.newMember);
                // 这样 html 里面的input 会被置 empty，==> because of 2 way binding
                this.newMember = {};
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
