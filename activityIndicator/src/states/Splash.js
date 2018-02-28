import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  create() {
    this.modal = 4;
    this.loaderPerc = 0;
    this.myCircle = this.add.graphics(this.world.centerX, this.world.centerY);
    this.myCircle.lineStyle(8, 0xFFCC00);
    this.myCircle.arc(0, 0, 50, this.math.degToRad(270), this.math.degToRad(270), true);
  }
  update() {
    if (this.loaderPerc < 100) {
      this.loaderPerc += 0.4; // to simulate progress
      if (this.model % 2 == 0) {
        this.myCircle.rotation += 0.1; // rotate the circle
        this.myCircle.arc(0, 0, 50, this.math.degToRad(270), this.math.degToRad(270 - (this.loaderPerc * 3.6)), true); // grow the circle counter-clockwise so that the speed at the front is not influenced by the progress
      } else {
        this.myCircle.arc(0, 0, 50, this.math.degToRad(270.01), this.math.degToRad((270 + (this.loaderPerc * 3.6)) % 360), false); // grow the circle clockwise
      }
    }
  }

}
