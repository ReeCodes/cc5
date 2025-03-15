// priority: 300

const function_enchant = (minLevels, maxLevels) => ({
	"function": "minecraft:enchant_with_levels",
	"levels": {
		"min": minLevels,
		"max": maxLevels
	}
})

const function_enchant_r = ({
	"function": "minecraft:enchant_randomly"
})

const apply_bonus = (enchantment, bonusMultiplier) => ({
	"function": "minecraft:apply_bonus",
	"enchantment": enchantment,
	"formula": "minecraft:uniform_bonus_count",
	"parameters": {
		"bonusMultiplier": bonusMultiplier
	}
})

const set_stew = (stewEffects) => {
  const effectsArray = stewEffects.map(effect => {
    return {
      type: `${effect.type}`,
      duration: {
        min: effect.minD,
        max: effect.maxD
      }
    };
  });

  return {
    function: "minecraft:set_stew_effect",
    effects: effectsArray
  }
}

const set_multiple_stew_effects = ({
	"function": "dungeoncrawl:suspicious_stew"
})

const set_shield = (shield_level) => ({
	"function": "dungeoncrawl:shield",
	"loot_level": shield_level
})

const enchant_levels = (lvls, treasureB) => ({
	"function": "minecraft:enchant_with_levels",
	"levels": lvls,
	"treasure": treasureB
})

const set_dmg = (minF, maxF) => ({
	"function": "minecraft:set_damage",
	"damage": {
		"min": minF,
		"max": maxF
	}
})