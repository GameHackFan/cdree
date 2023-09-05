import { bikerTypeByteMap } from "./BikerTypeByteMap";
import { hunterTypeByteMap } from "./HunterTypeByteMap";
import { fatTypeByteMap } from "./FatTypeByteMap";
import { dwarfTypeByteMap } from "./DwarfTypeByteMap";
import { kniverTypeByteMap } from "./KniverTypeByteMap";
import { dinosaurTypeByteMap } from "./DinosaurTypeByteMap";
import { severalTypeByteMap } from "./SeveralTypeByteMap";
import { subbossTypeByteMap } from "./SubbossTypeByteMap";
import { bossTypeByteMap } from "./BossTypeByteMap";

import { barrelTypeByteMap } from "./BarrelTypeByteMap";
import { weaponTypeByteMap } from "./WeaponTypeByteMap";
import { foodTypeByteMap } from "./FoodTypeByteMap";
import { treasureTypeByteMap } from "./TreasureTypeByteMap";


export const enemyByteMap =
{
  // Biker
  ferris: bikerTypeByteMap.ferris,
  ferrisRunning: bikerTypeByteMap.ferrisRunning,
  ferrisCrouch: bikerTypeByteMap.ferrisCrouch,
  ferrisWalkingIn: bikerTypeByteMap.ferrisWalkingIn,
  ferrisFalling: bikerTypeByteMap.ferrisFalling,
  
  driver: bikerTypeByteMap.driver,
  driverRunning: bikerTypeByteMap.driverRunning,
  driverCrouch: bikerTypeByteMap.driverCrouch,
  driverWalkingIn: bikerTypeByteMap.driverWalkingIn,
  driverFalling: bikerTypeByteMap.driverFalling,
  
  gneiss: bikerTypeByteMap.gneiss,
  gneissRunning: bikerTypeByteMap.gneissRunning,
  gneissCrouch: bikerTypeByteMap.gneissCrouch,
  gneissWalkingIn: bikerTypeByteMap.gneissWalkingIn,
  gneissFalling: bikerTypeByteMap.gneissFalling,
  
  gneissRidingBike: bikerTypeByteMap.gneissRidingBike,
  gneissJumpingBike: bikerTypeByteMap.gneissJumpingBike,


  // Hunter
  poacherJ: hunterTypeByteMap.poacherJ,
  poacherJCrouch: hunterTypeByteMap.poacherJCrouch,
  poacherJWalkingIn: hunterTypeByteMap.poacherJWalkingIn,
  poacherJFalling: hunterTypeByteMap.poacherJFalling,
  poacherJRollingAttack1: hunterTypeByteMap.poacherJRollingAttack1,
  poacherJRollingAttack2: hunterTypeByteMap.poacherJRollingAttack2,
  poacherJRunning: hunterTypeByteMap.poacherJRunning,
  poacherJRollingAttack3: hunterTypeByteMap.poacherJRollingAttack3,
  poacherJJumpingIn1: hunterTypeByteMap.poacherJJumpingIn1,
  poacherJJumpingIn2: hunterTypeByteMap.poacherJJumpingIn2,

  skinner: hunterTypeByteMap.skinner,
  skinnerCrouch: hunterTypeByteMap.skinnerCrouch,
  skinnerWalkingIn: hunterTypeByteMap.skinnerWalkingIn,
  skinnerFalling: hunterTypeByteMap.skinnerFalling,
  skinnerRollingAttack1: hunterTypeByteMap.skinnerRollingAttack1,
  skinnerRollingAttack2: hunterTypeByteMap.skinnerRollingAttack2,
  skinnerRunning: hunterTypeByteMap.skinnerRunning,
  skinnerRollingAttack3: hunterTypeByteMap.skinnerRollingAttack3,
  skinnerJumpingIn1: hunterTypeByteMap.skinnerJumpingIn1,
  skinnerJumpingIn2: hunterTypeByteMap.skinnerJumpingIn2,

  gutter: hunterTypeByteMap.gutter,
  gutterCrouch: hunterTypeByteMap.gutterCrouch,
  gutterWalkingIn: hunterTypeByteMap.gutterWalkingIn,
  gutterFalling: hunterTypeByteMap.gutterFalling,
  gutterRollingAttack1: hunterTypeByteMap.gutterRollingAttack1,
  gutterRollingAttack2: hunterTypeByteMap.gutterRollingAttack2,
  gutterRunning: hunterTypeByteMap.gutterRunning,
  gutterRollingAttack3: hunterTypeByteMap.gutterRollingAttack3,
  gutterJumpingIn1: hunterTypeByteMap.gutterJumpingIn1,
  gutterJumpingIn2: hunterTypeByteMap.gutterJumpingIn2,


  // Fat
  hammerT: fatTypeByteMap.hammerT,
  hammerTShoulderAttack: fatTypeByteMap.hammerTShoulderAttack,
  hammerTShoulderAndJumpAttack: fatTypeByteMap.hammerTShoulderAndJumpAttack,
  hammerTIdle: fatTypeByteMap.hammerTIdle,
  hammerTFalling: fatTypeByteMap.hammerTFalling,
  hammerTDinoAbuser: fatTypeByteMap.hammerTDinoAbuser,

  blackElmer: fatTypeByteMap.blackElmer,
  blackElmerShoulderAttack: fatTypeByteMap.blackElmerShoulderAttack,
  blackElmerShoulderAndJumpAttack: fatTypeByteMap.blackElmerShoulderAndJumpAttack,
  blackElmerIdle: fatTypeByteMap.blackElmerIdle,
  blackElmerFalling: fatTypeByteMap.blackElmerFalling,
  blackElmerDinoAbuser: fatTypeByteMap.blackElmerDinoAbuser,

  wrenchT: fatTypeByteMap.wrenchT,
  wrenchTShoulderAttack: fatTypeByteMap.wrenchTShoulderAttack,
  wrenchTShoulderAndJumpAttack: fatTypeByteMap.wrenchTShoulderAndJumpAttack,
  wrenchTIdle: fatTypeByteMap.wrenchTIdle,
  wrenchTFalling: fatTypeByteMap.wrenchTFalling,
  wrenchTDinoAbuser: fatTypeByteMap.wrenchTDinoAbuser,


  // Dwarf
  punk: dwarfTypeByteMap.punk,
  punkRunning: dwarfTypeByteMap.punkRunning,
  punkCrouch1: dwarfTypeByteMap.punkCrouch1,
  punkCrouch2: dwarfTypeByteMap.punkCrouch2,
  punkWalkingIn: dwarfTypeByteMap.punkWalkingIn,
  punkFalling: dwarfTypeByteMap.punkFalling,
  punkThrowingGrenade: dwarfTypeByteMap.punkThrowingGrenade,

  thug: dwarfTypeByteMap.thug,
  thugRunning: dwarfTypeByteMap.thugRunning,
  thugCrouch1: dwarfTypeByteMap.thugCrouch1,
  thugCrouch2: dwarfTypeByteMap.thugCrouch2,
  thugWalkingIn: dwarfTypeByteMap.thugWalkingIn,
  thugFalling: dwarfTypeByteMap.thugFalling,
  thugThrowingDynamite: dwarfTypeByteMap.thugThrowingDynamite,


  // Kniver
  blade: kniverTypeByteMap.blade,
  bladeCrouch: kniverTypeByteMap.bladeCrouch,
  bladeIdle: kniverTypeByteMap.bladeIdle,
  bladeFalling1: kniverTypeByteMap.bladeFalling1,
  bladeFalling2: kniverTypeByteMap.bladeFalling2,
  bladeRunning1: kniverTypeByteMap.bladeRunning1,
  bladeRunning2: kniverTypeByteMap.bladeRunning2,
  bladeThrowingKnife: kniverTypeByteMap.bladeThrowingKnife,

  razor: kniverTypeByteMap.razor,
  razorCrouch: kniverTypeByteMap.razorCrouch,
  razorIdle: kniverTypeByteMap.razorIdle,
  razorFalling1: kniverTypeByteMap.razorFalling1,
  razorFalling2: kniverTypeByteMap.razorFalling2,
  razorRunning1: kniverTypeByteMap.razorRunning1,
  razorRunning2: kniverTypeByteMap.razorRunning2,


  // Dinosaur
  rHopper: dinosaurTypeByteMap.rHopper,
  rHopperAngry: dinosaurTypeByteMap.rHopperAngry,
  rHopperTied: dinosaurTypeByteMap.rHopperTied,

  zeke: dinosaurTypeByteMap.zeke,

  mack: dinosaurTypeByteMap.mack,
  mackJumper: dinosaurTypeByteMap.mackJumper,
  mackSleeping: dinosaurTypeByteMap.mackSleeping,

  shivatSleeping: dinosaurTypeByteMap.shivatSleeping,
  shivatAngry: dinosaurTypeByteMap.shivatAngry,
  
  dinoFoot: dinosaurTypeByteMap.dinoFoot,

  smallDinosaur: dinosaurTypeByteMap.smallDinosaur,


  // Several
  bludge: severalTypeByteMap.bludge,
  bludgeJumping: severalTypeByteMap.bludgeJumping,
  bludgeCrouch: severalTypeByteMap.bludgeCrouch,
  bludgeJumpingIn: severalTypeByteMap.bludgeJumpingIn,

  lashT: severalTypeByteMap.lashT,

  walther: severalTypeByteMap.walther,


  // Subbboss
  waltherExtra1: subbossTypeByteMap.waltherExtra1,
  tyrog2: subbossTypeByteMap.tyrog2,
  tyrog2Extra1: subbossTypeByteMap.tyrog2Extra1,
  butcherSubboss1: subbossTypeByteMap.butcherSubboss1,
  hoggSubboss1: subbossTypeByteMap.hoggSubboss1,
  morganSubboss1: subbossTypeByteMap.morganSubboss1,
  morgueSubboss1: subbossTypeByteMap.morgueSubboss1,
  slisaurSubboss1: subbossTypeByteMap.slisaurSubboss1,
  fessenden2Subboss1: subbossTypeByteMap.fessenden2Subboss1,

  butcherSubboss2: subbossTypeByteMap.butcherSubboss2,
  hoggSubboss2: subbossTypeByteMap.hoggSubboss2,
  morganSubboss2: subbossTypeByteMap.morganSubboss2,
  morgueSubboss2: subbossTypeByteMap.morgueSubboss2,
  slisaurSubboss2: subbossTypeByteMap.slisaurSubboss2,
  fessenden2Subboss2: subbossTypeByteMap.fessenden2Subboss2,


  // Boss
  viceT: bossTypeByteMap.viceT,
  butcher: bossTypeByteMap.butcher,
  hogg: bossTypeByteMap.hogg,
  slice: bossTypeByteMap.slice,
  morgan: bossTypeByteMap.morgan,
  tyrog: bossTypeByteMap.tyrog,
  slisaur: bossTypeByteMap.slisaur,
  fessenden: bossTypeByteMap.fessenden,


  // Barrels
  smallMetalBarrel: barrelTypeByteMap.smallMetalBarrel,
  metalBarrel: barrelTypeByteMap.metalBarrel,
  woodenBarrel: barrelTypeByteMap.woodenBarrel,
  sharpRock: barrelTypeByteMap.sharpRock,
  roundRock: barrelTypeByteMap.roundRock,
  statue: barrelTypeByteMap.statue,
  tires: barrelTypeByteMap.tires,
  explosiveMetalBarrel: barrelTypeByteMap.explosiveMetalBarrel,
  explosiveWoodenBarrel: barrelTypeByteMap.explosiveWoodenBarrel,
  explosiveStatue: barrelTypeByteMap.explosiveStatue,
  explosiveTires: barrelTypeByteMap.explosiveTires,
  rollingSmallMetalBarrel: barrelTypeByteMap.rollingSmallMetalBarrel,
  fallingRollingSmallMetalBarrel: barrelTypeByteMap.fallingRollingSmallMetalBarrel,
  rollingWoodenBarrel: barrelTypeByteMap.rollingWoodenBarrel,
  fallingRollingWoodenBarrel: barrelTypeByteMap.fallingRollingWoodenBarrel,
  fallingRoundRock: barrelTypeByteMap.fallingRoundRock,


  // Weapons
  rifle: weaponTypeByteMap.rifle,
  revolver: weaponTypeByteMap.revolver,
  knife: weaponTypeByteMap.knife,
  uzi: weaponTypeByteMap.uzi,
  m16: weaponTypeByteMap.m16,
  shotgun: weaponTypeByteMap.shotgun,
  bazooka: weaponTypeByteMap.bazooka,
  rod: weaponTypeByteMap.rod,
  stick: weaponTypeByteMap.stick,
  machete: weaponTypeByteMap.machete,
  club: weaponTypeByteMap.club,
  torch: weaponTypeByteMap.torch,
  dynamite: weaponTypeByteMap.dynamite,
  grenade: weaponTypeByteMap.grenade,
  ammo: weaponTypeByteMap.ammo,
  stone1: weaponTypeByteMap.stone1,
  stone2: weaponTypeByteMap.stone2,
  stone3: weaponTypeByteMap.stone3,


  // Foods
  barbecue: foodTypeByteMap.barbecue,
  steak: foodTypeByteMap.steak,
  lobster: foodTypeByteMap.lobster,
  sushi: foodTypeByteMap.sushi,
  hamburger: foodTypeByteMap.hamburger,
  hotdog: foodTypeByteMap.hotdog,
  pizza: foodTypeByteMap.pizza,
  salad: foodTypeByteMap.salad,
  cake: foodTypeByteMap.cake,
  paffe: foodTypeByteMap.paffe,
  pudding: foodTypeByteMap.pudding,
  potato: foodTypeByteMap.potato,
  gum: foodTypeByteMap.gum,
  chocolate: foodTypeByteMap.chocolate,
  donut: foodTypeByteMap.donut,
  coffee: foodTypeByteMap.coffee,
  croissant: foodTypeByteMap.croissant,


  // Treasures
  goldBars: treasureTypeByteMap.goldBars,
  diamond: treasureTypeByteMap.diamond,
  cup: treasureTypeByteMap.cup,
  dinosaurEgg: treasureTypeByteMap.dinosaurEgg,
  goldDust: treasureTypeByteMap.goldDust,
  dinosaurSkull: treasureTypeByteMap.dinosaurSkull,
  ammonite: treasureTypeByteMap.ammonite,
  pearl: treasureTypeByteMap.pearl,
  necklace: treasureTypeByteMap.necklace,
  ring: treasureTypeByteMap.ring,
  watch: treasureTypeByteMap.watch,
  radio: treasureTypeByteMap.radio,
  coin: treasureTypeByteMap.coin,
  cash: treasureTypeByteMap.cash,
  sunglasses: treasureTypeByteMap.sunglasses,
  glove: treasureTypeByteMap.glove,
  ticket: treasureTypeByteMap.ticket,
}