import { Types as T, defineComponent } from 'bitecs'

const Size = defineComponent({
  //width
  w: T.i8,
  //height 
  h: T.i8,
  //padding (radius)
  p: T.i8
})

const Position = defineComponent({
  x: T.f32,
  y: T.f32,
  //Rotation: {R: r > 0 < 2PI}
  r: T.f32,
})

const Collides = defineComponent({
  //Store the last updated collision map key for x and y
  yKey: T.f32,
  xKey: T.f32,
  frame: T.f64,
  //Collision box distance from position  
  x: T.f32,
  y: T.f32,
})

const Acceleration = defineComponent({
  xy: T.f32,
})

const Velocity = defineComponent({
  x: T.f32,
  y: T.f32,
  //Angular velocity
  a: T.f32,
  maxa: T.f32
})

const Controls = defineComponent({
  left: T.i8,
  right: T.i8,
  thrust: T.i8,
  action: T.i8,
})

const Weapon = defineComponent({
  lastFire: T.i32,
  fireRate: T.i32
})

const Player = defineComponent()

const Npc = defineComponent({
  wallTurnThreshold: T.f32,
  enemyRangeThreshold: T.f32,
  maxSpeed: T.f32,
  actionPending: T.i8,
  targetEid: T.i16,
  distanceToTarget: T.f32,
  targetDirection: T.f32,
  vectorDirection: T.f32,
  speed: T.f32,
})

const Laser = defineComponent({
  type: T.i8,
})

const Sprite = defineComponent({
  //index x for the crop width
  ix: T.i8,
  //Animation
  tickGap: T.i32,
  lastUpdate: T.i32,
  maxFrames: T.i8,
  //image height and width 
  h: T.f32,
  w: T.f32,
})

const Spawn = defineComponent({
  created: T.i32,
  destroyed: T.i32,
})

const Destroy = defineComponent()

const Enemy = defineComponent({
  //What image to render
  type: T.i8,
  scoreValue: T.i8,
})

const ExplosionParticle = defineComponent({
  lifeTime: T.i32,
  fade: T.f32
})

const Color = defineComponent({
  r: T.i16,
  g: T.i16,
  b: T.i16,
  a: T.f32
})

export default {
  Size,
  Position,
  Velocity,
  Controls,
  Player,
  Npc,
  Enemy,
  ExplosionParticle,
  Acceleration,
  Laser,
  Spawn,
  Collides,
  Weapon,
  Color,
  Sprite,
  Destroy,
}
