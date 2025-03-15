let lt_vanilla = [
	'simple_dungeon',
	'abandoned_mineshaft',
	'bastion_hoglin_stable',
	'bastion_bridge',
	'bastion_other',
	'bastion_treasure',
	'nether_bridge',
	'ruined_portal',
	'end_city_treasure',
	'pillager_outpost',
	'shipwreck_supply',
	'shipwreck_treasure',
	'shipwreck_map',
	'underwater_ruin_small',
	'underwater_ruin_big',
	'buried_treasure',
	'igloo_chest',
	'desert_pyramid',
	'jungle_temple',
	'woodland_mansion',
	'stronghold_corridor',
	'stronghold_crossing',
	'stronghold_library'
];

onEvent('chest.loot_tables', event => {
	for (let i of lt_vanilla) {
		event.addChest('minecraft:' + i, table => {
			if (['stronghold_corridor', 'stronghold_crossing', 'stronghold_library'].includes(i)) {
				//CURIO_STRONGHOLD
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('enigmaticlegacy:animal_guide', 1)
					pool.addItem('enigmaticlegacy:hunter_guide', 1)
					pool.addItem('relics:spider_necklace', 1)
					pool.addItem('relics:spatial_sign', 1)
					pool.addItem('relics:slime_heart', 1)
					pool.addItem('relics:out_runner', 1)
					pool.addItem('relics:midnight_robe', 1)
					pool.addItem('relics:leather_belt', 1)
					pool.addItem('relics:infinity_ham', 1)
					pool.addEmpty(40)
				})
				if (['stronghold_corridor'].includes(i)) {
					table.addPool(pool => {
						pool.rolls = [2, 3];
						pool.addItem('minecraft:ender_pearl', 10)
						pool.addItem('#forge:dusts/redstone', 5, [4, 9])
						pool.addItem('minecraft:diamond_horse_armor', 1)
						pool.addItem('minecraft:golden_horse_armor', 2)
						pool.addItem('minecraft:iron_horse_armor', 3)
						pool.addItem('minecraft:saddle', 1)
						pool.addItem('minecraft:book', 1).addFunction(enchant_levels(50, true))
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyfood",
							"weight": 15,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 3
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear2",
							"weight": 5
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_gems",
							"weight": 3
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 10
						})
					})
				}
				if (['stronghold_crossing'].includes(i)) {
					table.addPool(pool => {
						pool.rolls = [1, 4];
						pool.addItem('#minecraft:coals/coal', 10, [3, 8])
						pool.addItem('minecraft:book', 1).addFunction(enchant_levels(50, true))
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyfood",
							"weight": 15,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 3
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear2",
							"weight": 1
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_gems",
							"weight": 3
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 10
						})
					})
				}
				if (['stronghold_library'].includes(i)) {
					table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('enigmaticlegacy:animal_guide', 1)
					pool.addItem('enigmaticlegacy:hunter_guide', 1)
					pool.addEmpty(20)
					})
					table.addPool(pool => {
						pool.rolls = [2, 10];
						pool.addItem('minecraft:compass', 1)
						pool.addItem('minecraft:map', 1)
						pool.addItem('charm:atlas', 1)
						pool.addItem('minecraft:paper', 20, [2, 7])
						pool.addItem('minecraft:book', 20, [1, 3])
					})
					table.addPool(pool => {
						pool.rolls = [1, 3];
						pool.addItem('minecraft:book', 1).addFunction(enchant_levels(50, true))
					})
				}
			}
			if (['woodland_mansion'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 3];
					pool.addItem('minecraft:lead', 20)
					pool.addItem('minecraft:enchanted_golden_apple', 2)
					pool.addItem('minecraft:music_disc_13', 15)
					pool.addItem('minecraft:music_disc_cat', 15)
					pool.addItem('minecraft:name_tag', 20)
					pool.addItem('minecraft:book', 10).addFunction(function_enchant_r)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyapple",
						"weight": 15
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools3",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor3",
						"weight": 5
					})
				})
				table.addPool(pool => {
					pool.rolls = [1, 4];
					pool.addItem('minecraft:bucket', 10)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycrops",
						"weight": 20
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyseeds",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyredstone",
						"weight": 15
					})
				})
				//MOB DROPS
				table.addPool(pool => {
					pool.rolls = 3;
					pool.addItem('minecraft:bone', 10, [1, 8])
					pool.addItem('minecraft:rotten_flesh', 10, [1, 8])
					pool.addItem('minecraft:gunpowder', 10, [1, 8])
					pool.addItem('minecraft:string', 10, [1, 8])
					pool.addItem('xreliquary:zombie_heart', 4)
					pool.addItem('xreliquary:rib_bone', 4)
					pool.addItem('xreliquary:catalyzing_gland', 4)
					pool.addItem('xreliquary:chelicerae', 4)
					pool.addItem('xreliquary:slime_pearl', 4)
					pool.addItem('xreliquary:nebulous_heart', 2)
					pool.addItem('xreliquary:withered_rib', 2)
				})
			}
			if (['jungle_temple'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('enigmaticlegacy:angel_blessing', 1)
					pool.addItem('enigmaticlegacy:golem_heart', 1)
					pool.addItem('relics:camouflage_ring', 1)
					pool.addItem('relics:fragrant_flower', 1)
					pool.addItem('relics:spore_sack', 1)
					pool.addItem('relics:rune_of_earth', 2)
					pool.addItem('relics:rune_of_luck', 2)
					pool.addEmpty(40)
				})
				table.addPool(pool => {
					pool.rolls = [2, 6];
					pool.addItem('#forge:gems/diamond', 3, [1, 3])
					pool.addItem('minecraft:bamboo', 15, [1, 3])
					pool.addItem('minecraft:bone', 25, [4, 6])
					pool.addItem('minecraft:rotten_flesh', 25, [3, 7])
					pool.addItem('immersivecooking:monster_tuft', 25, [1, 3])
					pool.addItem('minecraft:spider_eye', 25, [1, 3])
					pool.addItem('immersivecooking:raw_spider_shank', 25, [1, 3])
					pool.addItem('minecraft:saddle', 3)
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(30, true))
					pool.addItem('neapolitan:small_banana_frond', 12, [2, 6])
					pool.addItem('neapolitan:banana_frond', 11, [2, 6])
					pool.addItem('neapolitan:large_banana_frond', 10, [2, 6])
					pool.addItem('minecraft:cocoa_beans', 22, [2, 6])
					pool.addItem('quark:cocoa_beans_sack', 10, [1, 2])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 5
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 15,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 3
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 15,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 2,
								"max": 7
							}
						}]
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					Ingredient.of([
						'neapolitan:banana',
						'cookielicious:chocolate_cookie',
						'seasonals:chocolate_pumpkin_muffin',
						'cyclic:apple_chocolate',
						'abnormals_delight:chocolate_cake_slice',
						'createaddition:chocolate_cake',
						'largemeals:chocolate_popsicle',
						'largemeals:chocolate_pudding',
						'neapolitan:chocolate_spider_eye',
						'create_confectionery:bar_of_black_chocolate',
						'create_confectionery:bar_of_white_chocolate',
						'create_confectionery:bar_of_ruby_chocolate',
						'create:bar_of_chocolate',
						'neapolitan:mint_chocolate',
						'neapolitan:vanilla_chocolate_fingers',
						'neapolitan:chocolate_strawberries',
						'neapolitan:chocolate_milkshake',
						'neapolitan:chocolate_ice_cream',
						'farmersdelight:chocolate_pie',
						'farmersdelight:chocolate_pie_slice',
						'neapolitan:chocolate_bar',
						'neapolitan:banana_ice_cream',
						'neapolitan:banana_cake',
						'neapolitan:dried_banana',
						'neapolitan:banana_milkshake',
						'neapolitan:banana_bread',
						'neapolitan:strawberry_banana_smoothie',
						'pamhc2foodextended:bananasplititem',
						'pamhc2foodextended:banananutbreaditem',
						'pamhc2foodextended:peanutbutterbananasandwichitem',
						'pamhc2foodextended:bananajuiceitem',
						'pamhc2foodextended:bananajellyitem',
						'pamhc2foodextended:bananasmoothieitem',
						'pamhc2foodextended:bananapieitem',
						'pamhc2foodextended:bananajellytoastitem',
						'pamhc2foodextended:bananayogurtitem',
						'pamhc2foodextended:bananajellysandwichitem',
						'cookielicious:banana_cookie',
						'abnormals_delight:banana_cake_slice',
						'farmersdelight:hot_cocoa'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 1, [1, 3])
					})
				})
			}
			if (['desert_pyramid'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('enigmaticlegacy:angel_blessing', 1)
					pool.addItem('enigmaticlegacy:golem_heart', 1)
					pool.addItem('relics:scarab_talisman', 1)
					pool.addItem('relics:holy_locket', 1)
					pool.addItem('relics:rune_of_sun', 2)
					pool.addItem('relics:rune_of_explosion', 2)
					pool.addItem('relics:rune_of_redstone', 2)
					pool.addEmpty(40)
				})
				table.addPool(pool => {
					pool.rolls = [2, 4];
					pool.addItem('#forge:gems/diamond', 5, [1, 3])
					pool.addItem('minecraft:bone', 25, [4, 6])
					pool.addItem('minecraft:rotten_flesh', 25, [3, 7])
					pool.addItem('immersivecooking:monster_tuft', 25, [1, 3])
					pool.addItem('minecraft:spider_eye', 25, [1, 3])
					pool.addItem('immersivecooking:raw_spider_shank', 25, [1, 3])
					pool.addItem('minecraft:enchanted_golden_apple', 2)
					pool.addItem('minecraft:book', 20).addFunction(function_enchant_r)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyapple",
						"weight": 15
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 5
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 15,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 3
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 15,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 2,
								"max": 7
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 18
					})
					pool.addEmpty(15)
				})
				//DUSTY_LOOT
				table.addPool(pool => {
					pool.rolls = 4;
					pool.addItem('minecraft:bone', 10, [1, 8])
					pool.addItem('minecraft:rotten_flesh', 10, [1, 8])
					pool.addItem('minecraft:gunpowder', 10, [1, 8])
					pool.addItem('minecraft:string', 10, [1, 8])
					pool.addItem('minecraft:sand', 10, [1, 8])
				})
			}
			if (['igloo_chest'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('relics:wool_mitten', 1)
					pool.addItem('relics:ice_breaker', 1)
					pool.addItem('relics:ice_skates', 1)
					pool.addItem('relics:rune_of_cold', 2)
					pool.addItem('xreliquary:frozen_core', 3, [1, 2])
					pool.addEmpty(20)
				})
				table.addPool(pool => {
					pool.rolls = [2, 8];
					pool.addItem('#minecraft:coals/coal', 15, [1, 4])
					pool.addItem('minecraft:rotten_flesh', 10)
					pool.addItem('iceandfire:frost_lily', 3)
					pool.addItem('#forge:ices/snowball', 9, [8, 16])
					pool.addItem('neapolitan:ice_cubes', 12, [8, 16])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyapple",
						"weight": 15
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycrops",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 1
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools1",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 12
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('minecraft:golden_apple', 1)
				})
			}
			if (['simple_dungeon'].includes(i)) {
				//MAIN
				table.addPool(pool => {
					pool.rolls = 2;
					Ingredient.of(['#minecraft:music_discs']).filter(Ingredient.of(['@minecraft'])).stacks.forEach(item => {
						pool.addItem(item, 1)
					})
					pool.addItem('minecraft:string', 10, [1, 8])
					pool.addItem('minecraft:rotten_flesh', 10, [1, 8])
					pool.addItem('minecraft:gunpowder', 10, [1, 8])
					pool.addItem('minecraft:saddle', 9)
					pool.addItem('minecraft:name_tag', 12)
					pool.addItem('more_jellyfish:emerald_fragment', 8, [3, 12])
					pool.addItem('more_jellyfish:diamond_shard', 9, [3, 12])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyapple",
						"weight": 9
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 13
					})
				})

				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables"
					})
				})

				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio"
					})
					pool.addEmpty(80)
				})
			}
			if (['abandoned_mineshaft'].includes(i)) {
				table.addPool(pool => {
					//LIGHTS
					pool.rolls = [3, 5];
					pool.addItem('minecraft:torch', 5, [4, 12])
					pool.addItem('tconstruct:glow_ball', 4, [4, 12])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyseeds",
						"weight": 1
					})

					//FA_LOOT
					pool.addItem('forbidden_arcanus:edelwood_bucket', 4)
					pool.addItem('forbidden_arcanus:edelwood_lava_bucket', 3)
					pool.addItem('forbidden_arcanus:edelwood_lava_bucket', 1).addFunction({
						"function": "minecraft:enchant_randomly",
						"enchantments": ["forbidden_arcanus:permafrost"]
					})

					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 2
					})
				})
				//MINESHAFT
				table.addPool(pool => {
					pool.rolls = 3;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrails",
						"weight": 3
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycarts",
						"weight": 1
					})
				})
				//CURIO
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables"
					})
				})
			}
			//BASTION
			if (['bastion_hoglin_stable', 'bastion_bridge', 'bastion_other', 'bastion_treasure', 'nether_bridge', 'ruined_portal'].includes(i)) {
				if (['nether_bridge'].includes(i)) {
					//CURIO-NETHER-BRIDGE
					table.addPool(pool => {
						pool.rolls = 1;
						//MAIN-CURIO
						pool.addItem('relics:rage_glove', 1)
						pool.addItem('relics:magma_walker', 1)
						pool.addItem('relics:blazing_flask', 1)
						pool.addItem('enigmaticlegacy:magma_heart', 1)
						pool.addItem('artifacts:flame_pendant', 1)
						pool.addItem('artifacts:fire_gauntlet', 1)
						pool.addItem('artifacts:obsidian_skull', 1)
						pool.addItem('relics:reflection_necklace', 1)
						pool.addItem('relics:ghost_skin_talisman', 1)
						//SECONDARY
						pool.addItem('enigmaticlegacy:withered_tome', 1)
						pool.addItem('enigmaticlegacy:darkest_scroll', 1)
						pool.addItem('relics:rune_of_fire', 2)
						pool.addItem('xreliquary:infernal_claw', 3, [1, 2])
						pool.addEmpty(40)
					})
					table.addPool(pool => {
						pool.rolls = [2, 4];
						pool.addItem('infernalexp:glowcoal', 16, [3, 6])
						pool.addItem('infernalexp:ascus_bomb', 14, [1, 3])
						pool.addItem('minecraft:diamond_horse_armor', 3).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_horse_armor', 8).addFunction(function_enchant_r)
						pool.addItem('#forge:ingots/gold', 18, [1, 3])
						pool.addItem('minecraft:golden_apple', 6, [1, 2])
						pool.addItem(Item.of('tconstruct:flint_and_bronze', '{tic_multipliers:{},tic_stats:{"tconstruct:durability":100.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:fiery",level:1s},{name:"tconstruct:firestarter_hidden",level:1s}],Damage:0,tic_persistent_data:{upgrades:1}}'), 4)
						pool.addItem('minecraft:flint_and_steel', 5)
						pool.addItem('minecraft:saddle', 10, [2, 6])
						pool.addItem('minecraft:obsidian', 2, [3, 6])
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 5,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 5
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_gems",
							"weight": 5,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 3
								}
							}]
						})
					})
					//AGRICULTURE
					table.addPool(pool => {
						pool.rolls = 2;
						pool.addItem('minecraft:crimson_fungus', 3, [1, 4])
						pool.addItem('minecraft:crimson_roots', 3, [1, 4])
						pool.addItem('minecraft:nether_wart', 3, [1, 4])
						pool.addItem('nethers_exoticism:jaboticaba', 3, [1, 4])
						pool.addItem('nethers_exoticism:pitaya', 3, [1, 4])
						pool.addItem('nethers_exoticism:ramboutan', 3, [1, 4])
						pool.addItem('nethers_delight:propelplant_cane', 3, [1, 4])
						pool.addItem('nethers_delight:mimicarnation', 3, [1, 4])
					})
				}
				if (['ruined_portal'].includes(i)) {
					table.addPool(pool => {
						pool.rolls = [4, 8];
						pool.addItem('minecraft:obsidian', 40, [1, 2])
						pool.addItem('forbidden_arcanus:obsidian_with_iron', 20, [1, 2])
						pool.addItem('minecraft:flint', 40, [1, 4])
						pool.addItem('#forge:nuggets/iron', 40, [9, 18])
						pool.addItem('#forge:nuggets/gold', 15, [4, 24])
						pool.addItem('#forge:ingots/gold', 5, [2, 8])
						pool.addItem('minecraft:fire_charge', 40)
						pool.addItem('minecraft:golden_horse_armor', 5)
						pool.addItem('minecraft:golden_sword', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_pickaxe', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_axe', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_shovel', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_hoe', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_helmet', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_chestplate', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_leggings', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:golden_boots', 15).addFunction(function_enchant_r)
						pool.addItem('minecraft:light_weighted_pressure_plate', 5)
						pool.addItem('supplementaries:gold_door', 5)
						pool.addItem('supplementaries:candelabra', 5)
						pool.addItem('supplementaries:gold_trapdoor', 5)
						pool.addItem('supplementaries:gold_gate', 5)
						pool.addItem('dustrial_decor:large_gold_chain', 5, [2, 8])
						pool.addItem('dustrial_decor:gold_chain', 5, [2, 8])
						pool.addItem('#forge:storage_blocks/gold', 1)
						pool.addItem('#forge:ores_cluster/gold', 3)
						pool.addItem(Item.of('tconstruct:flint_and_bronze', '{tic_multipliers:{},tic_stats:{"tconstruct:durability":100.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:fiery",level:1s},{name:"tconstruct:firestarter_hidden",level:1s}],Damage:0,tic_persistent_data:{upgrades:1}}'), 5)
						pool.addItem('minecraft:flint_and_steel', 30)
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 15
						})
					})
				}
				if (!['nether_bridge'].includes(i)) {
					if (!['nether_bridge', 'ruined_portal'].includes(i)) {
						//GOLDEN
						table.addPool(pool => {
							pool.rolls = 2;
							pool.addItem('#forge:ores_cluster/gold', 2, [1, 2])
							pool.addItem('#forge:nuggets/gold', 16, [9, 24])
							pool.addItem('#forge:chunks/gold', 10, [4, 8])
							pool.addItem('minecraft:gold_block', 6, [1, 4])
							pool.addItem('minecraft:gilded_blackstone', 12, [2, 6])
							pool.addItem('minecraft:golden_apple', 6, [1, 2])
						})
					}
					//CURIO-BASTION
					table.addPool(pool => {
						pool.rolls = 1;
						//MAIN-CURIO
						pool.addItem('relics:rage_glove', 1)
						pool.addItem('relics:magma_walker', 1)
						pool.addItem('relics:blazing_flask', 1)
						pool.addItem('enigmaticlegacy:magma_heart', 1)
						pool.addItem('artifacts:flame_pendant', 1)
						pool.addItem('artifacts:fire_gauntlet', 1)
						pool.addItem('artifacts:obsidian_skull', 1)
						pool.addItem('relics:reflection_necklace', 1)
						pool.addItem('relics:ghost_skin_talisman', 1)
						pool.addItem('relics:bastion_ring', 1)
						//SECONDARY
						pool.addItem('relics:rune_of_fire', 2)
						pool.addItem('xreliquary:infernal_claw', 3, [1, 2])
						pool.addEmpty(40)
					})
				}
				if (['bastion_other'].includes(i)) {
					//RESOURCES
					table.addPool(pool => {
						pool.rolls = [3, 4];
						pool.addItem('minecraft:crying_obsidian', 2, [3, 8])
						pool.addItem('minecraft:obsidian', 1, [4, 6])
						pool.addItem('minecraft:magma_cream', 2, [2, 6])
						pool.addItem('minecraft:bone_block', 1, [3, 6])
						pool.addItem('minecraft:string', 1, [3, 6])
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 24
								}
							}]
						})
					})
				}
				if (['bastion_bridge'].includes(i)) {
					//RESOURCES
					table.addPool(pool => {
						pool.rolls = [2, 3];
						pool.addItem('minecraft:crying_obsidian', 2, [3, 8])
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarrows",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 10,
									"max": 24
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 24
								}
							}]
						})
					})
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addItem('minecraft:lodestone', 1, [1, 1])
					})
				}
				if (['bastion_hoglin_stable'].includes(i)) {
					//RESOURCES
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addItem('#forge:ingots/netherite_scrap', 4, [1, 2])
						pool.addItem('#forge:ores/netherite_scrap', 6, [1, 1])
						pool.addItem('minecraft:crying_obsidian', 15, [3, 8])
						pool.addItem('minecraft:lodestone', 5, [1, 1])
					})
					//STABLES
					table.addPool(pool => {
						pool.rolls = [2, 3];
						pool.addItem('farmersdelight:ham', 20, [2, 3])
						pool.addItem('farmersdelight:smoked_ham', 9, [1, 2])
						pool.addItem('nethers_delight:hoglin_loin', 15, [1, 3])
						pool.addItem('nethers_delight:hoglin_sirloin', 8, [1, 2])
						pool.addItem('nethers_delight:hoglin_ear', 12, [1, 2])
						pool.addItem('nethers_delight:hoglin_hide', 6, [2, 2])
						pool.addItem('minecraft:saddle', 10, [1, 1])
					})
					//AGRICULTURE
					table.addPool(pool => {
						pool.rolls = 2;
						pool.addItem('minecraft:crimson_fungus', 3, [1, 4])
						pool.addItem('minecraft:crimson_roots', 3, [1, 4])
						pool.addItem('minecraft:nether_wart', 3, [1, 4])
						pool.addItem('nethers_exoticism:jaboticaba', 3, [1, 4])
						pool.addItem('nethers_exoticism:pitaya', 3, [1, 4])
						pool.addItem('nethers_exoticism:ramboutan', 3, [1, 4])
						pool.addItem('nethers_delight:propelplant_cane', 3, [1, 4])
						pool.addItem('nethers_delight:mimicarnation', 3, [1, 4])
					})
					//TOOLS_COMMON
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addItem('minecraft:golden_sword', 7).addFunction(function_enchant(6, 19))
						pool.addItem('minecraft:golden_pickaxe', 7).addFunction(function_enchant(6, 19))
						pool.addItem('minecraft:golden_axe', 7).addFunction(function_enchant(6, 19))
						pool.addItem('minecraft:golden_shovel', 7).addFunction(function_enchant(6, 19))
						pool.addItem('minecraft:golden_hoe', 9).addFunction(function_enchant(6, 19))

						pool.addItem('farmersdelight:golden_knife', 2).addFunction(function_enchant(6, 19))
						pool.addItem('farmersdelight:diamond_knife', 1).addFunction(function_enchant(6, 19)).addFunction(set_dmg(0.15, 0.8))
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools2",
							"weight": 5,
							"functions": [{
								"function": "minecraft:set_damage",
								"damage": {
									"min": 0.70,
									"max": 1.00
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor2",
							"weight": 5,
							"functions": [{
								"function": "minecraft:set_damage",
								"damage": {
									"min": 0.70,
									"max": 1.00
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools4",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_damage",
								"damage": {
									"min": 0.20,
									"max": 1.00
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor4",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_damage",
								"damage": {
									"min": 0.20,
									"max": 1.00
								}
							}]
						})
						pool.addEmpty(10)
					})
				}
				if (['bastion_treasure'].includes(i)) {
					//RESOURCES
					table.addPool(pool => {
						pool.rolls = 3;
						pool.addItem('#forge:ingots/netherite', 15)
						pool.addItem('#forge:ores/netherite_scrap', 10)
						pool.addItem('#forge:ingots/netherite_scrap', 2, [2, 2])
						pool.addItem('#forge:ingots/cobalt', 12)
						pool.addItem('emendatusenigmatica:cobalt_netherrack_ore', 8)
						pool.addItem('#forge:gems/diamond', 5, [2, 6])
						pool.addItem('minecraft:enchanted_golden_apple', 2)
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools4",
							"weight": 6,
							"functions": [{
								"function": "minecraft:set_damage",
								"damage": {
									"min": 0.80,
									"max": 1.00
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor4",
							"weight": 6,
							"functions": [{
								"function": "minecraft:set_damage",
								"damage": {
									"min": 0.80,
									"max": 1.00
								}
							}]
						})
					})
					//MORE RESOURCES
					table.addPool(pool => {
						pool.rolls = [3, 4];
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_gems",
							"weight": 2
						})
						pool.addItem('minecraft:crying_obsidian', 3, [3, 8])
						pool.addItem('#forge:gems/quartz', 3, [8, 23])
						pool.addItem('minecraft:magma_cream', 2, [3, 8])
						pool.addItem('#forge:storage_blocks/iron', 1, [2, 5])
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 2,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 40
								}
							}]
						})
					})
				}
			}
			if (['end_city_treasure'].includes(i)) {
				//CURIO_AQUA
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('enigmaticlegacy:void_pearl', 1)
					pool.addItem('enigmaticlegacy:eye_of_nebula', 1)
					pool.addItem('relics:chorus_inhibitor', 1)
					pool.addItem('relics:space_dissector', 1)
					pool.addItem('relics:elytra_booster', 1)
					pool.addItem('relics:shadow_glaive', 1)
					pool.addItem('relics:reflection_necklace', 1)
					pool.addItem('relics:stellar_catalyst', 1)
					pool.addItem('relics:soul_devourer', 1)
					pool.addItem('relics:enders_hand', 1)
					pool.addItem('relics:delay_ring', 1)
					pool.addEmpty(20)
				})
				//MAIN
				table.addPool(pool => {
					pool.rolls = [3, 6];
					pool.addItem('minecraft:diamond_horse_armor', 2).addFunction(function_enchant(50, 100))
					pool.addItem('minecraft:iron_horse_armor', 2).addFunction(function_enchant(50, 100))
					pool.addItem('byg:ametrine_horse_armor', 1).addFunction(function_enchant(50, 100))
					pool.addItem('byg:pendorite_horse_armor', 2).addFunction(function_enchant(50, 100))
					pool.addItem('enigmaticlegacy:astral_dust', 2, [2, 8])
					pool.addItem('enigmaticlegacy:recall_potion', 1)
					pool.addItem('enigmaticlegacy:etherium_ore', 2, [1, 4])
					pool.addItem('outer_end:music_disc_galactic_wave', 1)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools5",
						"weight": 3
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor5",
						"weight": 3
					})
				})
				//E-STELLAR
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('forbidden_arcanus:eternal_stella', 1)
				})
				table.addPool(pool => {
					pool.rolls = 2;
					pool.addItem('minecraft:book', 1).addFunction(function_enchant(50, 100))
					pool.addItem('enigmaticlegacy:corrupted_tome', 2)
					pool.addItem('forbidden_arcanus:chorus_pearl', 3, [2, 3])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 3
					})
				})
			}
			if (['pillager_outpost'].includes(i)) {
				//C-BOWS
				table.addPool(pool => {
					pool.rolls = [0, 1];
					pool.addItem('minecraft:crossbow', 3)
					pool.addItem('minecraft:crossbow', 1).addFunction(function_enchant(5, 20))
				})
				//CROPS
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycrops"
					})
				})
				//LOG-BY-BIOME
				table.addPool(pool => {
					pool.rolls = [1, 3];
					pool.addItem('minecraft:dark_oak_log', 5, [2, 3])
				})
				//MAIN
				table.addPool(pool => {
					pool.rolls = [3, 4];
					pool.addItem('quark:ravager_hide', 1, [1, 2])
					pool.addItem('omnis:ravaged_scrap', 6, [1, 3])
					pool.addItem('omnis:tear_of_vex', 4, [1, 3])
					pool.addItem('dustrial_decor:cardboard', 9, [3, 8])
					pool.addItem('dustrial_decor:rusty_sheet_metal', 8, [2, 8])
					pool.addItem('dustrial_decor:sheet_metal', 7, [2, 8])
					pool.addItem('minecraft:experience_bottle', 10)
					pool.addItem('minecraft:string', 9, [1, 6])
					pool.addItem('minecraft:tripwire_hook', 8, [1, 3])
					pool.addItem('minecraft:book', 6).addFunction(function_enchant_r)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 3,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 2,
								"max": 7
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2
					})
				})
			}

			if (['shipwreck_supply', 'shipwreck_treasure', 'shipwreck_map', 'underwater_ruin_small', 'underwater_ruin_big', 'buried_treasure'].includes(i)) {
				if (!['shipwreck_supply', 'shipwreck_map'].includes(i)) {
					//CURIO_AQUA
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addItem('artifacts:helium_flamingo', 1)
						pool.addItem('artifacts:plastic_drinking_hat', 1)
						pool.addItem('artifacts:novelty_drinking_hat', 1).addCondition(condition_location([{
							predicateType: 'biome',
							ids: ['jellyfishing:jellyfish_fields', 'more_jellyfish:kelp_forest', 'more_jellyfish:rock_bottom']
						}]))
						pool.addItem('artifacts:snorkel', 1)
						pool.addItem('artifacts:flippers', 1)
						pool.addItem('artifacts:aqua_dashers', 1)
						pool.addItem('artifacts:charm_of_sinking', 1)
						pool.addItem('relics:jellyfish_necklace', 1)
						pool.addItem('relics:amphibian_boot', 1)
						pool.addItem('relics:drowned_belt', 1)
						pool.addItem('enigmaticlegacy:ocean_stone', 1)
						pool.addItem('relics:rune_of_cold', 2)
						pool.addItem('relics:rune_of_water', 2)
						pool.addItem('xreliquary:squid_beak', 3, [1, 2])
						pool.addEmpty(40)
					})
				}
				if (['buried_treasure'].includes(i)) {
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addItem('minecraft:heart_of_the_sea', 1)
					})
					table.addPool(pool => {
						pool.rolls = [5, 8];
						pool.addItem('upgrade_aquatic:thrasher_tooth', 1)
						pool.addItem('#forge:ingots/gold', 10, [1, 4])
						pool.addItem('#forge:ingots/iron', 20, [1, 4])
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 10,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 4
								}
							}]
						})
					})
					table.addPool(pool => {
						pool.rolls = [0, 1];
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear2"
						})
					})
					table.addPool(pool => {
						pool.rolls = 2;
						Ingredient.of(['#forge:cooked_fishes']).filter(Ingredient.of(['@betterendforge']).not()).stacks.forEach(item => {
							pool.addItem(item, 1, [2, 4])
						})
					})
					table.addPool(pool => {
						pool.rolls = [1, 3];
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_gems",
							"weight": 5,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 2
								}
							}]
						})
					})
				}

				if (['underwater_ruin_big'].includes(i)) {
					//MAIN
					table.addPool(pool => {
						pool.rolls = [2, 8];
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools1",
							"weight": 2
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 10
						})
						pool.addItem('#minecraft:coals/coal', 10, [1, 4])
						pool.addItem('minecraft:rotten_flesh', 10, [1, 4])
						pool.addItem('#forge:gems/emerald', 1)
					})
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor1",
							"weight": 1
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1
						})
						pool.addEntry({
							"type": "minecraft:item",
							"weight": 5,
							"functions": [{
								"function": "minecraft:exploration_map",
								"decoration": "red_x",
								"zoom": 1,
								"skip_existing_chunks": false
							}],
							"name": "minecraft:map"
						})
						pool.addItem('minecraft:fishing_rod', 5).addFunction(function_enchant_r)
						pool.addItem('minecraft:book', 5).addFunction(function_enchant_r)
						pool.addItem('aquaculture:iron_hook', 2)
						pool.addItem('aquaculture:gold_hook', 2)
						pool.addItem('aquaculture:light_hook', 2)
						pool.addItem('aquaculture:heavy_hook', 2)
						pool.addItem('aquaculture:double_hook', 2)
						pool.addItem('aquaculture:redstone_hook', 2)
						pool.addItem('aquaculture:note_hook', 2)
						pool.addItem('upgrade_aquatic:thrasher_tooth', 1)
						pool.addItem(Item.of('botania:brew_vial', '{brewKey:"botania:allure"}'), 1)
					})
				}

				if (['underwater_ruin_small'].includes(i)) {
					//MAIN
					table.addPool(pool => {
						pool.rolls = [2, 8];
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools1",
							"weight": 2
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 10
						})
						pool.addItem('#minecraft:coals/coal', 10, [1, 4])
						pool.addItem('minecraft:rotten_flesh', 10, [1, 4])
						pool.addItem('#forge:gems/emerald', 1)
					})
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor1",
							"weight": 1
						})
						pool.addEntry({
							"type": "minecraft:item",
							"weight": 5,
							"functions": [{
								"function": "minecraft:exploration_map",
								"decoration": "red_x",
								"zoom": 1,
								"skip_existing_chunks": false
							}],
							"name": "minecraft:map"
						})
						pool.addItem('minecraft:fishing_rod', 5).addFunction(function_enchant_r)
					})
				}

				if (['shipwreck_map'].includes(i)) {
					//MAIN
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addEntry({
							"type": "minecraft:item",
							"functions": [{
								"function": "minecraft:exploration_map",
								"decoration": "red_x",
								"zoom": 1,
								"skip_existing_chunks": false
							}],
							"name": "minecraft:map"
						})
					})
					table.addPool(pool => {
						pool.rolls = 3;
						pool.addItem('aquaculture:treasure_chest', 1)
						pool.addItem('minecraft:compass', 1)
						pool.addItem('inspirations:north_compass', 1)
						pool.addItem('minecraft:map', 1)
						pool.addItem('minecraft:clock', 1)
						pool.addItem('charm:atlas', 1)
						pool.addItem('minecraft:paper', 20, [1, 10])
						pool.addItem('minecraft:book', 5, [1, 5])
					})
				}

				if (['shipwreck_treasure'].includes(i)) {
					//MAIN
					table.addPool(pool => {
						pool.rolls = [3, 6];
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_metals",
							"weight": 10,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 10
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/more_gems",
							"weight": 5,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 3
								}
							}]
						})
					})
					table.addPool(pool => {
						pool.rolls = [2, 5];
						pool.addItem('#forge:ingots/gold', 10, [1, 5])
						pool.addItem('#forge:ingots/iron', 90, [1, 5])
						pool.addItem('#forge:gems/diamond', 5)
						pool.addItem('#forge:gems/emerald', 40, [1, 5])
						pool.addItem('#forge:gems/lapis', 20, [1, 10])
					})
				}

				if (['shipwreck_supply'].includes(i)) {
					//MAIN
					table.addPool(pool => {
						pool.rolls = [3, 10];
						pool.addItem('upgrade_aquatic:blue_pickerelweed', 4, [1, 3])
						pool.addItem('upgrade_aquatic:purple_pickerelweed', 4, [1, 3])
						pool.addItem('minecraft:paper', 8, [1, 12])
						pool.addItem('minecraft:poisonous_potato', 7, [2, 6])
						pool.addItem('minecraft:tnt', 1)
						pool.addItem('more_jellyfish:sponge_chunk', 1)
						pool.addItem('minecraft:gunpowder', 3, [1, 5])
						pool.addItem('minecraft:name_tag', 1)
						pool.addItem('minecraft:bamboo', 7, [2, 6])
						pool.addItem('minecraft:pumpkin', 7, [2, 6])
						pool.addItem('minecraft:rotten_flesh', 7, [2, 6])
						pool.addItem('#minecraft:coals/coal', 7, [2, 6])
						Ingredient.of(['/.+helmet/', '/.+chestplate/', '/.+leggings/', '/.+boots/']).filter(Ingredient.of(['/minecraft:leather.+/', '/mysticalworld.+copper.+/', '/.+cardboard.+/', '/.+clay.+/'])).stacks.forEach(item => {
							pool.addItem(item, 2).addFunction(function_enchant_r)
						})
						Ingredient.of([
							'jellyfishing:jellyfish',
							'jellyfishing:blue_jellyfish'
						]).stacks.forEach(item => {
							pool.addItem(item, 4).addCondition(condition_location([{
								predicateType: 'biome',
								ids: ['jellyfishing:jellyfish_fields', 'more_jellyfish:kelp_forest', 'more_jellyfish:rock_bottom']
							}]))
						})
						Ingredient.of([
							'more_jellyfish:diamond_jellyfish',
							'more_jellyfish:emerald_jellyfish',
							'more_jellyfish:iron_jellyfish',
							'more_jellyfish:gold_jellyfish',
							'more_jellyfish:coal_jellyfish',
							'more_jellyfish:redstone_jellyfish',
							'more_jellyfish:lapis_lazuli_jellyfish',
							'more_jellyfish:slime_jellyfish',
							'more_jellyfish:sponge_jellyfish'
						]).stacks.forEach(item => {
							pool.addItem(item, 3).addCondition(condition_location([{
								predicateType: 'biome',
								ids: ['jellyfishing:jellyfish_fields', 'more_jellyfish:kelp_forest', 'more_jellyfish:rock_bottom']
							}]))
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anystews",
							"weight": 10
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 7,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 2,
									"max": 6
								}
							}]
						})
						pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyseeds",
							"weight": 6,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 2,
									"max": 6
								}
							}]
						})
					})
				}
			}
		})
	}
})