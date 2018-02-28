import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import GameState from './states/Game'

class Game extends Phaser.Game {
  constructor() {
    super(window.innerWidth, window.innerHeight, Phaser.AUTO);
    this.state.add('BootState', BootState);
    this.state.add('SplashState', SplashState);
    this.state.add('GameState', GameState);
    this.state.start('BootState');
  }
}

new Game();