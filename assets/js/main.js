var pixi = window.pixi = require('pixi.js')

class Sprite {
  // Construct sprite instance
  constructor(texture) {
    this.texture = pixi.Texture.fromImage(texture)
    this.sprite = new pixi.Sprite(this.texture)
  }

  // Proxy position
  get position () {
    return this.sprite.position
  }
  set position (pos) {
    this.sprite.position.x = pos.x
    this.sprite.position.y = pos.y
  }

  // Proxy scale
  get scale () {
    return this.sprite.scale
  }
  set scale (s) {
    this.sprite.scale.x = s.x
    this.sprite.scale.y = s.y
  }

  // Proxy rotation
  get rotation () {
    return this.sprite.rotation
  }
  set rotation (rot) {
    this.sprite.rotation = rot
  }
}

window.onload = () => {
  var renderer = pixi.autoDetectRenderer(800, 600)
  document.body.appendChild(renderer.view)

  var stage = new pixi.Stage()

  var bunny = new Sprite("img/bunny.png")
  bunny.position = { x: 400, y: 300 }
  bunny.scale = { x: 2, y: 2 }

  stage.addChild(bunny.sprite)

  var animate = () => {
    bunny.rotation += 0.01
    renderer.render(stage)
    requestAnimationFrame(animate)
  }

  requestAnimationFrame(animate)
}
