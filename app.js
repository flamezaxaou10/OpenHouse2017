var access_token = 'EAASIjnu3HS8BADme5rhMLYmH0mvKMHoniHgdSx4AbVVxjiIfXjOep4Kgo4lyIe2rUf5VX6kxuJ9xAj4ZAXrUcZCpomWGRy8OZClDZCzh3y9V7TQj9ydlbX2Na7vMTDBwBV4w08uluCkEhm32An8e7tI9SsUZC02irS6f1KVWkiwZDZD'
var urla = 'https://graph.facebook.com/v2.10/NetworkKMUTNB/feed?fields=full_picture%2Ccreated_time%2Cname%2Cpicture&limit=10&access_token='+access_token
new Vue({
  el: '#app',
  data: {
    result: 'test',
    url:urla,
    check:0,
    temp:urla
  },
  methods: {
    getApi: function () {
      var vm = this
      this.$http.get(this.url).then(function (res) {
        vm.result = JSON.parse(res.data).data
        vm.url = JSON.parse(res.data).paging.next
        if (typeof(vm.url) == "undefined")
        vm.url=vm.temp
        console.log(vm.url)
      })
    },
    page: function () {
      location.href='https://www.facebook.com/NetworkKMUTNB/?fref=ts'
    }
  },
  ready: function () {
    this.getApi()
    var v = this
    setInterval(function () {
      v.getApi()
    }, 10000)
  }
})
