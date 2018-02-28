import Phaser from 'phaser'
import config from '../config';

var image;
//this component loads fonts and background color
export default class extends Phaser.State {
  preload() {
    this.load.image('preloadcircle', '../../assets/images/circle.png');
    this.stage.backgroundColor = '#4488AA';
  }

  create() {
    this.state.start('SplashState');
  }
}
