var app1 = new Vue({
    el: '#app-1',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
                id: 0,
                text: 'Vegetables'
            },
            {
                id: 1,
                text: 'Cheese'
            },
            {
                id: 2,
                text: 'Whatever else humans are supposed to eat'
            }
        ]
    }
})

var app = new Vue({
    el: '#app',
    data: {
        rawHtml:"<button>test</button>",
        isButtonDisabled:true,
        number:10,
        ok: true,
        message: "message",
        id: "123",
        seen: false,
        url:"/",
        doSomething:function(){
            console.log("aaa");
        },
        attributeName:function(url){
            console.log(url);
        }
    }
})

var example = new Vue({
    el:'#example',
    data:{
        message : 'Hello Vue'
    },
    computed:{
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        }
    },
    methods:{
        reverseMessage: function(){
            return this.message.split('').reverse().join('')
        }
    }
})


var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
        // getter 関数
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        // setter 関数
        set: function (newValue) {
          var names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
  }
})

var watchExampleVM = new Vue({
    el: '#watch-example',
    data: {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    },
    watch: {
      // この関数は question が変わるごとに実行されます。
      question: function (newQuestion, oldQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.debouncedGetAnswer()
      }
    },
    created: function () {
      // _.debounce は特にコストの高い処理の実行を制御するための
      // lodash の関数です。この場合は、どのくらい頻繁に yesno.wtf/api
      // へのアクセスすべきかを制限するために、ユーザーの入力が完全に
      // 終わるのを待ってから ajax リクエストを実行しています。
      // _.debounce (とその親戚である _.throttle )  についての詳細は
      // https://lodash.com/docs#debounce を見てください。
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      }
    }
  })
  