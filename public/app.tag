<app>

  <header>
    <button onclick={ turnOn }>ON</button>
    <button onclick={ turnOff }>OFF</button>
  </header>
  <section if={ response }>
    <h3>Response</h3>
    <p>{ response }</p>
  </section>

  <script>
    var self = this
    self.response = ''
    turnOn(e) {
      fetch('/dali/on')
        .then(function(response){
          return response.text()
        })
        .then(function(body){
          self.response = body
        })
    }
    turnOff(e) {
      fetch('/dali/off')
        .then(function(response){
          return response.text()
        })
        .then(function(body){
          self.response = body
        })
    }
  </script>

</app>
