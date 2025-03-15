let metal_ores_chunks = (block_id, chunk_id, minC, maxC) => {
  let ore_chunks = {
    "type": "minecraft:block",
    "pools": [
      {
        "rolls": 1,
        "entries": [
          {
            "type": "minecraft:alternatives",
            "children": [
              {
                "type": "minecraft:item",
                "conditions": [
                  {
                    "condition": "minecraft:match_tool",
                    "predicate": {
                      "enchantments": [
                        {
                          "enchantment": "minecraft:silk_touch",
                          "levels": {
                            "min": 1
                          }
                        }
                      ]
                    }
                  }
                ],
                "name": block_id
              },
              {
                "type": "minecraft:item",
                "functions": [
                  {
                    "function": "minecraft:apply_bonus",
                    "enchantment": "minecraft:fortune",
                    "formula": "minecraft:uniform_bonus_count",
                    "parameters": {
                      "bonusMultiplier": 1
                    }
                  }
                ],
                "name": chunk_id
              }
            ]
          }
        ]
      }
    ]
  };

  if (minC !== undefined && maxC !== undefined) {
    ore_chunks.pools[0].entries[0].children[1].functions.push({
      "function": "minecraft:set_count",
      "count": {
        "min": minC,
        "max": maxC,
        "type": "minecraft:uniform"
      }
    });
  }

  return ore_chunks;
};

let ore_names = ['iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'zinc', 'aluminum', 'nickel', 'uranium', 'cobalt', 'iridium', 'arcane', 'dimensional', 'sapphire', 'coal', 'emerald', 'diamond', 'lapis_lazuli', 'redstone', 'quartz'];

let ore_variants = ['ore', 'andesite_ore', 'granite_ore', 'diorite_ore', 'sand_ore', 'gravel_ore', 'netherrack_ore', 'blackstone_ore', 'basalt_ore', 'soul_soil_ore', 'end_stone_ore', 'gabbro_ore', 'c_limestone_ore', 'scoria_ore', 'weathered_limestone_ore', 'jasper_ore', 'marble_ore', 'slate_ore', 'deepslate_ore', 'mossy_stone_ore', 'brimstone_ore', 'subzero_ash_ore', 'blue_netherrack_ore', 'nylium_soul_soil_ore', 'ether_stone_ore', 'cryptic_stone_ore', 'flavolite_ore', 'sulphuric_rock_ore', 'violecite_ore', 'raw_marble_ore'];

onEvent('block.loot_tables', event => {

	ore_names.forEach(o => {
		ore_variants.forEach(v => {
			if (['iron', 'gold', 'copper', 'tin', 'lead', 'silver', 'zinc', 'aluminum', 'nickel', 'uranium', 'cobalt', 'iridium'].includes(o)) {
				event.addJson('emendatusenigmatica:'+o+'_'+v, metal_ores_chunks('emendatusenigmatica:'+o+'_'+v, 'emendatusenigmatica:'+o+'_chunk'))
			}
			if (['arcane', 'dimensional', 'sapphire'].includes(o)) {
				event.addJson('emendatusenigmatica:'+o+'_'+v, metal_ores_chunks('emendatusenigmatica:'+o+'_'+v, 'emendatusenigmatica:'+o+'_gem'))
			}
			if (['coal', 'emerald', 'diamond', 'quartz'].includes(o)) {
				event.addJson('emendatusenigmatica:'+o+'_'+v, metal_ores_chunks('emendatusenigmatica:'+o+'_'+v, 'minecraft:'+o))
				event.addJson('minecraft:'+o+'_ore', metal_ores_chunks('minecraft:'+o+'_ore', 'minecraft:'+o))
			}
			if (['redstone'].includes(o)) {
				event.addJson('emendatusenigmatica:'+o+'_'+v, metal_ores_chunks('emendatusenigmatica:'+o+'_'+v, 'minecraft:'+o, 4, 5))
				event.addJson('minecraft:'+o+'_ore', metal_ores_chunks('minecraft:'+o+'_ore', 'minecraft:'+o, 4, 5))
			}
			if (['lapis_lazuli'].includes(o)) {
				let l = o.replace('lapis_lazuli', 'lapis')
				event.addJson('emendatusenigmatica:'+l+'_'+v, metal_ores_chunks('emendatusenigmatica:'+l+'_'+v, 'minecraft:'+o, 4, 9))
				event.addJson('minecraft:'+l+'_ore', metal_ores_chunks('minecraft:'+l+'_ore', 'minecraft:'+o, 4, 9))
			}
			if (['iron', 'gold'].includes(o)) {
				event.addJson('minecraft:'+o+'_ore', metal_ores_chunks('minecraft:'+o+'_ore', 'emendatusenigmatica:'+o+'_chunk'))
			}
		})
	})
	//SOULSTONE TO SOUL-GEMS
	event.addJson('malum:soulstone_ore', metal_ores_chunks('malum:soulstone_ore', 'malum:soulstone'))
	//VINTEUM ORE TO DUST
	event.addJson('mana-and-artifice:vinteum_ore', metal_ores_chunks('mana-and-artifice:vinteum_ore', 'mana-and-artifice:vinteum_dust'))
	//ADD BONUS DROP - FIX
	event.addJson('forbidden_arcanus:xpetrified_ore', metal_ores_chunks('forbidden_arcanus:xpetrified_ore', 'forbidden_arcanus:xpetrified_orb'))
	
	//GOBBER ORES TO GLOBS
	event.addJson('gobber2:gobber2_ore', metal_ores_chunks('gobber2:gobber2_ore', 'gobber2:gobber2_glob'))
	event.addJson('gobber2:gobber2_ore_nether', metal_ores_chunks('gobber2:gobber2_ore_nether', 'gobber2:gobber2_glob_nether'))
	event.addJson('gobber2:gobber2_ore_end', metal_ores_chunks('gobber2:gobber2_ore_end', 'gobber2:gobber2_glob_end'))
})