import { objectUtil } from '../data/default/ObjectUtil';
import { randomizerData } from  "../data/randomizer/RandomizerData";
import { forbiddenEnemyData } from '../data/randomizer/ForbiddenEnemyData';
import { forbiddenPalleteData } from  "../data/randomizer/pallete/ForbiddenPalleteData";
import { randomizerPalleteData } from  "../data/randomizer/pallete/RandomizerPalleteData";


class ForbiddenService
{
  getValidPalleteIdList = (enemyKey, forbiddenPalleteKey) =>
  {
    const fpm = forbiddenPalleteData[forbiddenPalleteKey] ?? {};
    let palleteIds = randomizerPalleteData[enemyKey] ?? [0];
    const ekl = enemyKey.toLowerCase();
    Object.keys(fpm).forEach((ek) => {
      if(ekl.includes(ek.toLowerCase()))
      {
        const fp = fpm[ek];
        palleteIds = palleteIds.filter((id) => !fp.includes(id));
      }
    });

    return palleteIds;
  }

  getValidEnemyIndexList = (enemyKeyList, forbiddenEnemyKeyList) =>
  {
    const fekSet = new Set();
    const fekl = forbiddenEnemyKeyList ?? [];
    fekl.forEach((k) => forbiddenEnemyData[k]?.forEach((ek) => fekSet.add(ek)));
    let veil = [];

    enemyKeyList.forEach((ek, index) =>
    {
      if(!fekSet.has(ek))
        veil.push(index);
    });

    return veil;
  }

  getValidPositionRangeList = (enemyKey, forbiddenRangeList, isLockGroup) =>
  {
    let rangeList = objectUtil.deepCopy(randomizerData.positionRange);
    let frl = forbiddenRangeList ? forbiddenRangeList : [];
    frl.forEach((fk) => {delete rangeList[fk];});

    if(enemyKey.includes("Falling"))
    {
      delete rangeList.outsideLeft;
      delete rangeList.outsideRight;
    }
    else if(rollingBarrelSet.has(enemyKey))
    {
      delete rangeList.inside;

      if(!isLockGroup)
        delete rangeList.outsideLeft; 
    }
    else if(enemyKey.includes("Foot") || staticBarrelSet.has(enemyKey))
    {
      delete rangeList.inside;
      delete rangeList.outsideLeft;
    }
    else
      delete rangeList.inside;

    if(Object.keys(rangeList).length < 1)
      rangeList.inside = randomizerData.positionRange.inside;

    return rangeList;
  }
}


const staticBarrelSet = new Set([
  // Barrels
  "smallMetalBarrel", "metalBarrel",
  "statue", "woodenBarrel", "tires",
  "sharpRock", "roundRock",
 
  // Explosive Barrels
  "explosiveMetalBarrel", "explosiveWoodenBarrel",
  "explosiveStatue", "explosiveTires",
]);

const rollingBarrelSet = new Set([
  "rollingSmallMetalBarrel", "rollingWoodenBarrel"
]);

export const forbiddenService = new ForbiddenService();