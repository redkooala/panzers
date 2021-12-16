class Game {
    constructor() {
      this.sockets = {};
      this.players = {};
      this.bullets = [];
      this.lastUpdateTime = Date.now();
      this.shouldSendUpdate = false;
      setInterval(this.update.bind(this), 1000 / 60);
    }

    update() {
       // console.log('start')
    }
}

module.exports = Game;