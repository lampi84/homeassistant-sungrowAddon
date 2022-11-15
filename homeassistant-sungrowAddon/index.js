const WebSocket = require('ws')
const ws = new WebSocket('ws://192.168.0.184:8082/ws/home/overview')

ws.on('open', function open () {
  ws.send('{"lang":"de_de","service":"real","dev_id":"1"}')
})

ws.on('message', function incoming (data) {
  console.log(data.toString())
  ws.close()
})
