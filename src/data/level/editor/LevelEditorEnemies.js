import { bikerTypeData } from "./BikerTypeData";
import { hunterTypeData } from "./HunterTypeData";
import { fatTypeData } from "./FatTypeData";
import { dwarfTypeData } from "./DwarfTypeData";
import { kniverTypeData } from "./KniverTypeData";
import { dinosaurTypeData } from "./DinosaurTypeData";
import { severalTypeData } from "./SeveralTypeData";
import { subbossTypeData } from "./SubbossTypeData";
import { bossTypeData } from "./BossTypeData";
import { barrelTypeData } from "./BarrelTypeData";
import { weaponTypeData } from "./WeaponTypeData";
import { foodTypeData } from "./FoodTypeData";
import { treasureTypeData } from "./TreasureTypeData";
import { otherTypeData } from "./OtherTypeData";


export const levelEditorEnemies =
{
  // Biker
  ferris: bikerTypeData.ferris,
  ferrisRunning: bikerTypeData.ferrisRunning,
  ferrisCrouch: bikerTypeData.ferrisCrouch,
  ferrisWalkingIn: bikerTypeData.ferrisWalkingIn,
  ferrisFalling: bikerTypeData.ferrisFalling,
  
  driver: bikerTypeData.driver,
  driverRunning: bikerTypeData.driverRunning,
  driverCrouch: bikerTypeData.driverCrouch,
  driverWalkingIn: bikerTypeData.driverWalkingIn,
  driverFalling: bikerTypeData.driverFalling,
  
  gneiss: bikerTypeData.gneiss,
  gneissRunning: bikerTypeData.gneissRunning,
  gneissCrouch: bikerTypeData.gneissCrouch,
  gneissWalkingIn: bikerTypeData.gneissWalkingIn,
  gneissFalling: bikerTypeData.gneissFalling,
  
  gneissRidingBike: bikerTypeData.gneissRidingBike,
  gneissJumpingBike: bikerTypeData.gneissJumpingBike,


  // Hunter
  poacherJ: hunterTypeData.poacherJ,
  poacherJCrouch: hunterTypeData.poacherJCrouch,
  poacherJWalkingIn: hunterTypeData.poacherJWalkingIn,
  poacherJFalling: hunterTypeData.poacherJFalling,
  poacherJRollingAttack1: hunterTypeData.poacherJRollingAttack1,
  poacherJRollingAttack2: hunterTypeData.poacherJRollingAttack2,
  poacherJRunning: hunterTypeData.poacherJRunning,
  poacherJRollingAttack3: hunterTypeData.poacherJRollingAttack3,
  poacherJJumpingIn1: hunterTypeData.poacherJJumpingIn1,
  poacherJJumpingIn2: hunterTypeData.poacherJJumpingIn2,

  skinner: hunterTypeData.skinner,
  skinnerCrouch: hunterTypeData.skinnerCrouch,
  skinnerWalkingIn: hunterTypeData.skinnerWalkingIn,
  skinnerFalling: hunterTypeData.skinnerFalling,
  skinnerRollingAttack1: hunterTypeData.skinnerRollingAttack1,
  skinnerRollingAttack2: hunterTypeData.skinnerRollingAttack2,
  skinnerRunning: hunterTypeData.skinnerRunning,
  skinnerRollingAttack3: hunterTypeData.skinnerRollingAttack3,
  skinnerJumpingIn1: hunterTypeData.skinnerJumpingIn1,
  skinnerJumpingIn2: hunterTypeData.skinnerJumpingIn2,

  gutter: hunterTypeData.gutter,
  gutterCrouch: hunterTypeData.gutterCrouch,
  gutterWalkingIn: hunterTypeData.gutterWalkingIn,
  gutterFalling: hunterTypeData.gutterFalling,
  gutterRollingAttack1: hunterTypeData.gutterRollingAttack1,
  gutterRollingAttack2: hunterTypeData.gutterRollingAttack2,
  gutterRunning: hunterTypeData.gutterRunning,
  gutterRollingAttack3: hunterTypeData.gutterRollingAttack3,
  gutterJumpingIn1: hunterTypeData.gutterJumpingIn1,
  gutterJumpingIn2: hunterTypeData.gutterJumpingIn2,


  // Fat
  hammerT: fatTypeData.hammerT,
  hammerTShoulderAttack: fatTypeData.hammerTShoulderAttack,
  hammerTShoulderAndJumpAttack: fatTypeData.hammerTShoulderAndJumpAttack,
  hammerTIdle: fatTypeData.hammerTIdle,
  hammerTFalling: fatTypeData.hammerTFalling,
  hammerTDinoAbuser: fatTypeData.hammerTDinoAbuser,

  blackElmer: fatTypeData.blackElmer,
  blackElmerShoulderAttack: fatTypeData.blackElmerShoulderAttack,
  blackElmerShoulderAndJumpAttack: fatTypeData.blackElmerShoulderAndJumpAttack,
  blackElmerIdle: fatTypeData.blackElmerIdle,
  blackElmerFalling: fatTypeData.blackElmerFalling,
  blackElmerDinoAbuser: fatTypeData.blackElmerDinoAbuser,

  wrenchT: fatTypeData.wrenchT,
  wrenchTShoulderAttack: fatTypeData.wrenchTShoulderAttack,
  wrenchTShoulderAndJumpAttack: fatTypeData.wrenchTShoulderAndJumpAttack,
  wrenchTIdle: fatTypeData.wrenchTIdle,
  wrenchTFalling: fatTypeData.wrenchTFalling,
  wrenchTDinoAbuser: fatTypeData.wrenchTDinoAbuser,


  // Dwarf
  punk: dwarfTypeData.punk,
  punkRunning: dwarfTypeData.punkRunning,
  punkCrouch1: dwarfTypeData.punkCrouch1,
  punkCrouch2: dwarfTypeData.punkCrouch2,
  punkWalkingIn: dwarfTypeData.punkWalkingIn,
  punkFalling: dwarfTypeData.punkFalling,
  punkThrowingGrenade: dwarfTypeData.punkThrowingGrenade,

  thug: dwarfTypeData.thug,
  thugRunning: dwarfTypeData.thugRunning,
  thugCrouch1: dwarfTypeData.thugCrouch1,
  thugCrouch2: dwarfTypeData.thugCrouch2,
  thugWalkingIn: dwarfTypeData.thugWalkingIn,
  thugFalling: dwarfTypeData.thugFalling,
  thugThrowingDynamite: dwarfTypeData.thugThrowingDynamite,


  // Kniver
  blade: kniverTypeData.blade,
  bladeCrouch: kniverTypeData.bladeCrouch,
  bladeIdle: kniverTypeData.bladeIdle,
  bladeFalling1: kniverTypeData.bladeFalling1,
  bladeFalling2: kniverTypeData.bladeFalling2,
  bladeRunning1: kniverTypeData.bladeRunning1,
  bladeRunning2: kniverTypeData.bladeRunning2,
  bladeThrowingKnife: kniverTypeData.bladeThrowingKnife,

  razor: kniverTypeData.razor,
  razorCrouch: kniverTypeData.razorCrouch,
  razorIdle: kniverTypeData.razorIdle,
  razorFalling1: kniverTypeData.razorFalling1,
  razorFalling2: kniverTypeData.razorFalling2,
  razorRunning1: kniverTypeData.razorRunning1,
  razorRunning2: kniverTypeData.razorRunning2,


  // Dinosaur
  rHopper: dinosaurTypeData.rHopper,
  rHopperAngry: dinosaurTypeData.rHopperAngry,
  rHopperTied: dinosaurTypeData.rHopperTied,

  zeke: dinosaurTypeData.zeke,

  mack: dinosaurTypeData.mack,
  mackJumper: dinosaurTypeData.mackJumper,
  mackSleeping: dinosaurTypeData.mackSleeping,

  shivatSleeping: dinosaurTypeData.shivatSleeping,
  shivatAngry: dinosaurTypeData.shivatAngry,
  
  dinoFoot: dinosaurTypeData.dinoFoot,

  smallDinosaur: dinosaurTypeData.smallDinosaur,


  // Several
  bludge: severalTypeData.bludge,
  bludgeJumping: severalTypeData.bludgeJumping,
  bludgeCrouch: severalTypeData.bludgeCrouch,
  bludgeJumpingIn: severalTypeData.bludgeJumpingIn,

  lashT: severalTypeData.lashT,

  walther: severalTypeData.walther,


  // Subbboss
  waltherExtra1: subbossTypeData.waltherExtra1,
  tyrog2Extra1: subbossTypeData.tyrog2Extra1,
  tyrog2: subbossTypeData.tyrog2,
  butcherSubboss1: subbossTypeData.butcherSubboss1,
  hoggSubboss1: subbossTypeData.hoggSubboss1,
  morganSubboss1: subbossTypeData.morganSubboss1,
  morgueSubboss1: subbossTypeData.morgueSubboss1,
  slisaurSubboss1: subbossTypeData.slisaurSubboss1,
  fessenden2Subboss1: subbossTypeData.fessenden2Subboss1,

  butcherSubboss2: subbossTypeData.butcherSubboss2,
  hoggSubboss2: subbossTypeData.hoggSubboss2,
  morganSubboss2: subbossTypeData.morganSubboss2,
  morgueSubboss2: subbossTypeData.morgueSubboss2,
  slisaurSubboss2: subbossTypeData.slisaurSubboss2,
  fessenden2Subboss2: subbossTypeData.fessenden2Subboss2,


  // Boss
  viceT: bossTypeData.viceT,
  butcher: bossTypeData.butcher,
  hogg: bossTypeData.hogg,
  slice: bossTypeData.slice,
  morgan: bossTypeData.morgan,
  tyrog: bossTypeData.tyrog,
  slisaur: bossTypeData.slisaur,
  fessenden: bossTypeData.fessenden,


  // Barrels
  smallMetalBarrel: barrelTypeData.smallMetalBarrel,
  metalBarrel: barrelTypeData.metalBarrel,
  woodenBarrel: barrelTypeData.woodenBarrel,
  sharpRock: barrelTypeData.sharpRock,
  roundRock: barrelTypeData.roundRock,
  statue: barrelTypeData.statue,
  tires: barrelTypeData.tires,
  explosiveMetalBarrel: barrelTypeData.explosiveMetalBarrel,
  explosiveWoodenBarrel: barrelTypeData.explosiveWoodenBarrel,
  explosiveStatue: barrelTypeData.explosiveStatue,
  explosiveTires: barrelTypeData.explosiveTires,
  rollingSmallMetalBarrel: barrelTypeData.rollingSmallMetalBarrel,
  fallingRollingSmallMetalBarrel: barrelTypeData.fallingRollingSmallMetalBarrel,
  rollingWoodenBarrel: barrelTypeData.rollingWoodenBarrel,
  fallingRollingWoodenBarrel: barrelTypeData.fallingRollingWoodenBarrel,
  fallingRoundRock: barrelTypeData.fallingRoundRock,


  // Weapons
  rifle: weaponTypeData.rifle,
  revolver: weaponTypeData.revolver,
  knife: weaponTypeData.knife,
  uzi: weaponTypeData.uzi,
  m16: weaponTypeData.m16,
  shotgun: weaponTypeData.shotgun,
  bazooka: weaponTypeData.bazooka,
  rod: weaponTypeData.rod,
  stick: weaponTypeData.stick,
  machete: weaponTypeData.machete,
  club: weaponTypeData.club,
  torch: weaponTypeData.torch,
  dynamite: weaponTypeData.dynamite,
  grenade: weaponTypeData.grenade,
  ammo: weaponTypeData.ammo,
  stone1: weaponTypeData.stone1,
  stone2: weaponTypeData.stone2,
  stone3: weaponTypeData.stone3,


  // Foods
  barbecue: foodTypeData.barbecue,
  steak: foodTypeData.steak,
  lobster: foodTypeData.lobster,
  sushi: foodTypeData.sushi,
  hamburger: foodTypeData.hamburger,
  hotdog: foodTypeData.hotdog,
  pizza: foodTypeData.pizza,
  salad: foodTypeData.salad,
  cake: foodTypeData.cake,
  paffe: foodTypeData.paffe,
  pudding: foodTypeData.pudding,
  potato: foodTypeData.potato,
  gum: foodTypeData.gum,
  chocolate: foodTypeData.chocolate,
  donut: foodTypeData.donut,
  coffee: foodTypeData.coffee,
  croissant: foodTypeData.croissant,


  // Treasures
  goldBars: treasureTypeData.goldBars,
  diamond: treasureTypeData.diamond,
  cup: treasureTypeData.cup,
  dinosaurEgg: treasureTypeData.dinosaurEgg,
  goldDust: treasureTypeData.goldDust,
  dinosaurSkull: treasureTypeData.dinosaurSkull,
  ammonite: treasureTypeData.ammonite,
  pearl: treasureTypeData.pearl,
  necklace: treasureTypeData.necklace,
  ring: treasureTypeData.ring,
  watch: treasureTypeData.watch,
  radio: treasureTypeData.radio,
  coin: treasureTypeData.coin,
  cash: treasureTypeData.cash,
  sunglasses: treasureTypeData.sunglasses,
  glove: treasureTypeData.glove,
  ticket: treasureTypeData.ticket,


  // Others
  none: otherTypeData.none,
  groupLimit: otherTypeData.groupLimit,
  horizontalGroupLimit: otherTypeData.horizontalGroupLimit,
  cameraFOV: otherTypeData.cameraFOV,
  elevator: otherTypeData.elevator
}