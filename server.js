const
  express = require('express'),
  net = require('net')

/** dali commands */
const
  TURN_ON_ALL = '#255,5',
  TURN_OFF_ALL = '#255,0'

const
  address = '192.168.2.222',
  app = express(),
  client = new net.Socket()

client.connect(8421, address, () => {
  console.log('Connected')
  app.get('dali/on', () => { client.write(TURN_ON_ALL) })
  app.get('dali/off', () => { client.write(TURN_OFF_ALL) })
  app.use(express.static('public'))
  app.listen(3000)
})

client.on('data', (data) => { console.log('Received: ' + data) })
client.on('close', () => { console.log('Connection closed') })
