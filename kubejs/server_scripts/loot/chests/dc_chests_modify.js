let lt_dc = [
	'food',
	'forge',
	'library',
	'secret_room',
	'stage_1',
	'stage_2',
	'stage_3',
	'stage_4',
	'stage_5',
	'supply',
	'treasure'
];

onEvent('chest.loot_tables', event => {
	for (let i of lt_dc) {
		event.addChest('dungeoncrawl:' + i, table => {
			if (['food'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 6;
					pool.addItem('minecraft:rotten_flesh', 12, [1, 4])
					pool.addItem('minecraft:spider_eye', 8, [1, 4])
					pool.addItem('inspirations:heartbeet', 3, [1, 2])
					pool.addItem('minecraft:poisonous_potato', 2, [1, 2])
					pool.addItem('pamhc2foodcore:stockitem', 4, [1, 4])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 5
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 6
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "minecraft:chests/village/village_butcher",
						"weight": 2
					})
				})
			}
			if (['forge'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addItem('#forge:gems/coal_coke', 2, [2, 6])
					pool.addItem('#forge:storage_blocks/charcoal', 4)
					pool.addItem('#forge:storage_blocks/coal', 4)
					pool.addItem('#minecraft:coals/charcoal', 12)
					pool.addItem('#minecraft:coals/coal', 12)
				})
				table.addPool(pool => {
					pool.rolls = [2, 4];
					pool.addItem('#forge:storage_blocks/iron', 1)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor2",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools2",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/affixgear2",
						"weight": 1
					})
				})
			}
			if (['library'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [8, 14];
					pool.addItem('minecraft:book', 3, [3, 6])
					pool.addItem('minecraft:ink_sac', 2, [1, 5])
					pool.addItem('mysticalworld:ink_bottle', 1, [1, 3])
					pool.addItem('minecraft:writable_book', 1, [3, 6])
					pool.addItem('minecraft:feather', 2)
					pool.addItem('minecraft:cobweb', 2)
					pool.addItem('minecraft:book', 5).addFunction(enchant_levels(30, true))
					pool.addItem('minecraft:book', 5).addFunction(enchant_levels(45, true)).addCondition(entity_advancement('apotheosis:enchanting/30ench'))
					pool.addItem('minecraft:book', 5).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
					pool.addItem('minecraft:book', 5).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
					pool.addItem('minecraft:book', 5).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
					pool.addItem('minecraft:paper', 5, [1, 3])
				})
			}
			if (['secret_room'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 8;
					pool.addItem('minecraft:book', 3, [1, 12])
					pool.addItem('minecraft:map', 3)
					pool.addItem('charm:atlas', 2)
					pool.addItem('minecraft:cobweb', 9, [4, 8])
					Ingredient.of(['#minecraft:music_discs']).filter(Ingredient.of(['@minecraft'])).stacks.forEach(item => {
						pool.addItem(item, 1)
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 8
					})
				})
			}
			if (['supply'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools1",
							"weight": 3
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor1",
							"weight": 3
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear1",
							"weight": 1
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anypotion"
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('minecraft:torch', 1, [8, 24])
					pool.addItem('tconstruct:glow_ball', 1, [8, 24])
				})
				table.addPool(pool => {
					pool.rolls = [3, 5];
					pool.addItem('#minecraft:coals/coal', 3, [1, 3])
					pool.addItem('minecraft:apple', 5, [1, 4])
					pool.addItem('minecraft:bone', 5, [4, 6])
					pool.addItem('minecraft:rotten_flesh', 5, [2, 4])
					pool.addItem('minecraft:gunpowder', 5, [1, 8])
					pool.addItem('minecraft:string', 4, [2, 8])
					pool.addItem('minecraft:glass_bottle', 2, [1, 5])
					pool.addItem('minecraft:egg', 2, [2, 8])
					pool.addItem('minecraft:brick', 2, [2, 9])
					pool.addItem('minecraft:clock', 1)
					pool.addItem('minecraft:map', 1)
					pool.addItem('minecraft:compass', 1)
					pool.addItem('minecraft:lead', 1)
					pool.addItem('minecraft:spider_eye', 1, [1, 7])
					pool.addItem('minecraft:fermented_spider_eye', 1)
					pool.addItem('xreliquary:zombie_heart', 1)
					pool.addItem('xreliquary:rib_bone', 1)
					pool.addItem('xreliquary:catalyzing_gland', 1)
					pool.addItem('xreliquary:chelicerae', 1)
					pool.addItem('xreliquary:slime_pearl', 1)
					pool.addItem('xreliquary:nebulous_heart', 1)
					pool.addItem('xreliquary:withered_rib', 1)
					pool.addItem('minecraft:ink_sac', 1, [1, 3])
					pool.addItem('minecraft:rabbit_hide', 1)
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(10, true))
					pool.addItem('minecraft:leather_horse_armor', 2)
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 12
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "minecraft:chests/village/village_butcher",
						"weight": 5
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 4
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblock",
						"weight": 5
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 1
					})
				})
			}
			if (['stage_1'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio"
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "inventorypets:chests/pet_chest",
						"weight": 2
					})
					pool.addEmpty(80)
				})
				table.addPool(pool => {
					pool.rolls = [6, 9];
					//JUNK-DROPS
					pool.addItem('#minecraft:coals/coal', 3, [1, 3])
					pool.addItem('minecraft:cobweb', 2, [1, 3])
					pool.addItem('minecraft:bone', 3, [1, 3])
					pool.addItem('minecraft:rotten_flesh', 3, [1, 3])
					pool.addItem('minecraft:gunpowder', 3, [1, 3])
					pool.addItem('minecraft:string', 3, [1, 3])
					pool.addItem('minecraft:spider_eye', 6)
					pool.addItem('minecraft:fermented_spider_eye', 3)
					pool.addItem('xreliquary:zombie_heart', 2)
					pool.addItem('xreliquary:rib_bone', 2)
					pool.addItem('xreliquary:catalyzing_gland', 2)
					pool.addItem('xreliquary:chelicerae', 2)
					pool.addItem('xreliquary:slime_pearl', 2)
					pool.addItem('xreliquary:nebulous_heart', 1)
					pool.addItem('xreliquary:withered_rib', 1)
					pool.addItem('minecraft:ink_sac', 1, [1, 3])
					pool.addItem('minecraft:rabbit_hide', 2)
					pool.addItem('minecraft:phantom_membrane', 1, [2, 4])
					pool.addItem('minecraft:ender_pearl', 1, [1, 2])
					pool.addItem('forbidden_arcanus:ender_pearl_fragment', 2, [3, 6])
					
					//MISC
					pool.addItem('quark:gunpowder_sack', 1)
					pool.addItem('minecraft:tnt', 1, [1, 3])
					pool.addItem('minecraft:glass_bottle', 3, [1, 5])
					pool.addItem('minecraft:brick', 3, [3, 10])
					pool.addItem('minecraft:name_tag', 1)
					pool.addItem('minecraft:clock', 1)
					pool.addItem('minecraft:compass', 1)
					pool.addItem('minecraft:lead', 1)
					pool.addItem('minecraft:torch', 6, [5, 10])
					pool.addItem('tconstruct:glow_ball', 5, [5, 10])
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(10, true))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(45, true)).addCondition(entity_advancement('apotheosis:enchanting/30ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
					pool.addItem('minecraft:leather_horse_armor', 2)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycards",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyredstone",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblock",
						"weight": 4
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycarts",
							"weight": 1
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anypotion",
							"weight": 3
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							}]
					})
					
					//FOOD
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyfood",
							"weight": 2,
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
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 2,
									"max": 5
								}
							}]
					})
					//TOOLS
					pool.addItem('minecraft:shield', 2).addFunction(set_shield(0))
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor1",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools1",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear1",
							"weight": 2
					})
					
					//RESOURCES
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1
					})
				})
			}
			if (['stage_2'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio"
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "inventorypets:chests/pet_chest",
						"weight": 2
					})
					pool.addEmpty(75)
				})
				table.addPool(pool => {
					pool.rolls = [6, 9];
					//JUNK-DROPS
					pool.addItem('#minecraft:coals/coal', 3, [1, 3])
					pool.addItem('minecraft:cobweb', 2, [1, 3])
					pool.addItem('minecraft:bone', 3, [1, 3])
					pool.addItem('minecraft:rotten_flesh', 3, [1, 3])
					pool.addItem('minecraft:gunpowder', 3, [1, 3])
					pool.addItem('minecraft:string', 3, [1, 3])
					pool.addItem('minecraft:spider_eye', 6)
					pool.addItem('minecraft:fermented_spider_eye', 3)
					pool.addItem('xreliquary:zombie_heart', 2)
					pool.addItem('xreliquary:rib_bone', 2)
					pool.addItem('xreliquary:catalyzing_gland', 2)
					pool.addItem('xreliquary:chelicerae', 2)
					pool.addItem('xreliquary:slime_pearl', 2)
					pool.addItem('xreliquary:nebulous_heart', 1)
					pool.addItem('xreliquary:withered_rib', 1)
					pool.addItem('minecraft:ink_sac', 1, [1, 3])
					pool.addItem('minecraft:rabbit_hide', 2)
					pool.addItem('minecraft:phantom_membrane', 1, [2, 4])
					pool.addItem('minecraft:ender_pearl', 1, [1, 2])
					pool.addItem('forbidden_arcanus:ender_pearl_fragment', 2, [3, 6])
					
					//MISC
					pool.addItem('quark:gunpowder_sack', 1)
					pool.addItem('minecraft:tnt', 1, [1, 3])
					pool.addItem('minecraft:glass_bottle', 3, [1, 5])
					pool.addItem('minecraft:brick', 3, [3, 10])
					pool.addItem('minecraft:name_tag', 1)
					pool.addItem('minecraft:clock', 1)
					pool.addItem('minecraft:compass', 1)
					pool.addItem('minecraft:lead', 1)
					pool.addItem('minecraft:torch', 6, [5, 10])
					pool.addItem('tconstruct:glow_ball', 5, [5, 10])
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(20, true))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(45, true)).addCondition(entity_advancement('apotheosis:enchanting/30ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
					pool.addItem('minecraft:golden_horse_armor', 1)
					pool.addItem('minecraft:iron_horse_armor', 1)
					pool.addItem('minecraft:leather_horse_armor', 2)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycards",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyredstone",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblock",
						"weight": 4
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycarts",
							"weight": 1
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anypotion",
							"weight": 3
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							}]
					})
					
					//FOOD
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyfood",
							"weight": 2,
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
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 2,
									"max": 5
								}
							}]
					})
					//TOOLS
					pool.addItem('minecraft:shield', 2).addFunction(set_shield(1))
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor2",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools2",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear1",
							"weight": 2
					})
					
					//RESOURCES
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1
					})
				})
			}
			if (['stage_3'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio"
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "inventorypets:chests/pet_chest",
						"weight": 2
					})
					pool.addEmpty(70)
				})
				table.addPool(pool => {
					pool.rolls = [6, 9];
					//JUNK-DROPS
					pool.addItem('#minecraft:coals/coal', 3, [1, 3])
					pool.addItem('minecraft:cobweb', 2, [1, 3])
					pool.addItem('minecraft:bone', 3, [1, 3])
					pool.addItem('minecraft:rotten_flesh', 3, [1, 3])
					pool.addItem('minecraft:gunpowder', 3, [1, 3])
					pool.addItem('minecraft:string', 3, [1, 3])
					pool.addItem('minecraft:spider_eye', 6)
					pool.addItem('minecraft:fermented_spider_eye', 3)
					pool.addItem('xreliquary:zombie_heart', 2)
					pool.addItem('xreliquary:rib_bone', 2)
					pool.addItem('xreliquary:catalyzing_gland', 2)
					pool.addItem('xreliquary:chelicerae', 2)
					pool.addItem('xreliquary:slime_pearl', 2)
					pool.addItem('xreliquary:nebulous_heart', 1)
					pool.addItem('xreliquary:withered_rib', 1)
					pool.addItem('minecraft:ink_sac', 1, [1, 3])
					pool.addItem('minecraft:rabbit_hide', 2)
					pool.addItem('minecraft:phantom_membrane', 1, [2, 4])
					pool.addItem('minecraft:ender_pearl', 1, [1, 2])
					pool.addItem('forbidden_arcanus:ender_pearl_fragment', 2, [3, 6])
					
					//MISC
					pool.addItem('quark:gunpowder_sack', 1)
					pool.addItem('minecraft:tnt', 1, [1, 3])
					pool.addItem('minecraft:glass_bottle', 3, [1, 5])
					pool.addItem('minecraft:brick', 3, [3, 10])
					pool.addItem('minecraft:name_tag', 1)
					pool.addItem('minecraft:clock', 1)
					pool.addItem('minecraft:compass', 1)
					pool.addItem('minecraft:lead', 1)
					pool.addItem('minecraft:torch', 6, [5, 10])
					pool.addItem('tconstruct:glow_ball', 5, [5, 10])
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(30, true))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(45, true)).addCondition(entity_advancement('apotheosis:enchanting/30ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
					pool.addItem('minecraft:golden_horse_armor', 1)
					pool.addItem('minecraft:iron_horse_armor', 1)
					pool.addItem('minecraft:leather_horse_armor', 2)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycards",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyredstone",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblock",
						"weight": 4
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycarts",
							"weight": 1
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anypotion",
							"weight": 3
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							}]
					})
					
					//FOOD
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyfood",
							"weight": 2,
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
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 2,
									"max": 5
								}
							}]
					})
					//TOOLS
					pool.addItem('minecraft:shield', 2).addFunction(set_shield(2))
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor3",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools3",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear2",
							"weight": 2
					})
					
					//RESOURCES
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1
					})
				})
			}
			if (['stage_4'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio"
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "inventorypets:chests/pet_chest",
						"weight": 2
					})
					pool.addEmpty(65)
				})
				table.addPool(pool => {
					pool.rolls = [6, 9];
					//JUNK-DROPS
					pool.addItem('#minecraft:coals/coal', 3, [1, 3])
					pool.addItem('minecraft:cobweb', 2, [1, 3])
					pool.addItem('minecraft:bone', 3, [1, 3])
					pool.addItem('minecraft:rotten_flesh', 3, [1, 3])
					pool.addItem('minecraft:gunpowder', 3, [1, 3])
					pool.addItem('minecraft:string', 3, [1, 3])
					pool.addItem('minecraft:spider_eye', 6)
					pool.addItem('minecraft:fermented_spider_eye', 3)
					pool.addItem('xreliquary:zombie_heart', 2)
					pool.addItem('xreliquary:rib_bone', 2)
					pool.addItem('xreliquary:catalyzing_gland', 2)
					pool.addItem('xreliquary:chelicerae', 2)
					pool.addItem('xreliquary:slime_pearl', 2)
					pool.addItem('xreliquary:nebulous_heart', 1)
					pool.addItem('xreliquary:withered_rib', 1)
					pool.addItem('minecraft:ink_sac', 1, [1, 3])
					pool.addItem('minecraft:rabbit_hide', 2)
					pool.addItem('minecraft:phantom_membrane', 1, [2, 4])
					pool.addItem('minecraft:ender_pearl', 1, [1, 2])
					pool.addItem('forbidden_arcanus:ender_pearl_fragment', 2, [3, 6])
					
					//MISC
					pool.addItem('quark:gunpowder_sack', 1)
					pool.addItem('minecraft:tnt', 1, [1, 3])
					pool.addItem('minecraft:glass_bottle', 3, [1, 5])
					pool.addItem('minecraft:brick', 3, [3, 10])
					pool.addItem('minecraft:name_tag', 1)
					pool.addItem('minecraft:clock', 1)
					pool.addItem('minecraft:compass', 1)
					pool.addItem('minecraft:lead', 1)
					pool.addItem('minecraft:torch', 6, [5, 10])
					pool.addItem('tconstruct:glow_ball', 5, [5, 10])
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(40, true))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
					pool.addItem('minecraft:diamond_horse_armor', 1)
					pool.addItem('minecraft:iron_horse_armor', 1)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycards",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyredstone",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblock",
						"weight": 4
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycarts",
							"weight": 1
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anypotion",
							"weight": 3
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							}]
					})
					
					//FOOD
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyfood",
							"weight": 2,
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
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 2,
									"max": 5
								}
							}]
					})
					//TOOLS
					pool.addItem('minecraft:shield', 2).addFunction(set_shield(3))
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor4",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools4",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear2",
							"weight": 2
					})
					
					//RESOURCES
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1
					})
				})
			}
			if (['stage_5'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio"
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "inventorypets:chests/pet_chest",
						"weight": 2
					})
					pool.addEmpty(60)
				})
				table.addPool(pool => {
					pool.rolls = [6, 9];
					//JUNK-DROPS
					pool.addItem('#minecraft:coals/coal', 3, [1, 3])
					pool.addItem('minecraft:cobweb', 2, [1, 3])
					pool.addItem('minecraft:bone', 3, [1, 3])
					pool.addItem('minecraft:rotten_flesh', 3, [1, 3])
					pool.addItem('minecraft:gunpowder', 3, [1, 3])
					pool.addItem('minecraft:string', 3, [1, 3])
					pool.addItem('minecraft:spider_eye', 6)
					pool.addItem('minecraft:fermented_spider_eye', 3)
					pool.addItem('xreliquary:zombie_heart', 2)
					pool.addItem('xreliquary:rib_bone', 2)
					pool.addItem('xreliquary:catalyzing_gland', 2)
					pool.addItem('xreliquary:chelicerae', 2)
					pool.addItem('xreliquary:slime_pearl', 2)
					pool.addItem('xreliquary:nebulous_heart', 1)
					pool.addItem('xreliquary:withered_rib', 1)
					pool.addItem('minecraft:ink_sac', 1, [1, 3])
					pool.addItem('minecraft:rabbit_hide', 2)
					pool.addItem('minecraft:phantom_membrane', 1, [2, 4])
					pool.addItem('minecraft:ender_pearl', 1, [1, 2])
					pool.addItem('forbidden_arcanus:ender_pearl_fragment', 2, [3, 6])
					
					//MISC
					pool.addItem('quark:gunpowder_sack', 1)
					pool.addItem('minecraft:tnt', 1, [1, 3])
					pool.addItem('minecraft:glass_bottle', 3, [1, 5])
					pool.addItem('minecraft:brick', 3, [3, 10])
					pool.addItem('minecraft:name_tag', 1)
					pool.addItem('minecraft:clock', 1)
					pool.addItem('minecraft:compass', 1)
					pool.addItem('minecraft:lead', 1)
					pool.addItem('minecraft:torch', 6, [5, 10])
					pool.addItem('tconstruct:glow_ball', 5, [5, 10])
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(50, true))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
					pool.addItem('minecraft:diamond_horse_armor', 1)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anystews",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycards",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyredstone",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblock",
						"weight": 4
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anycarts",
							"weight": 1
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anypotion",
							"weight": 3
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							}]
					})
					
					//FOOD
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyfood",
							"weight": 2,
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
							"name": "kubejs:chests/loot_randomizer/anycrops",
							"weight": 1,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 2,
									"max": 5
								}
							}]
					})
					//TOOLS
					pool.addItem('minecraft:shield', 2).addFunction(set_shield(4))
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor5",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools5",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear3",
							"weight": 2
					})
					
					//RESOURCES
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1
					})
				})
			}
			if (['treasure'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio"
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "inventorypets:chests/pet_chest",
						"weight": 2
					})
					pool.addEmpty(70)
				})
				table.addPool(pool => {
					pool.rolls = [7, 8];
					//JUNK-DROPS
					pool.addItem('minecraft:experience_bottle', 2, [8, 32])
					pool.addItem('minecraft:paper', 2, [3, 6])
					pool.addItem('minecraft:bone', 2, [4, 6])
					pool.addItem('minecraft:rotten_flesh', 2, [4, 6])
					pool.addItem('minecraft:gunpowder', 3, [1, 3])
					pool.addItem('minecraft:string', 3, [1, 3])
					pool.addItem('xreliquary:zombie_heart', 2)
					pool.addItem('xreliquary:rib_bone', 2)
					pool.addItem('xreliquary:catalyzing_gland', 2)
					pool.addItem('xreliquary:chelicerae', 2)
					pool.addItem('xreliquary:slime_pearl', 2)
					pool.addItem('xreliquary:nebulous_heart', 1)
					pool.addItem('xreliquary:withered_rib', 1)
					
					//MISC
					pool.addItem('quark:gunpowder_sack', 1)
					pool.addItem('minecraft:glass_bottle', 3, [1, 5])
					pool.addItem('minecraft:brick', 3, [3, 10])
					pool.addItem('minecraft:book', 4).addFunction(enchant_levels(25, true))
					pool.addItem('minecraft:book', 4).addFunction(enchant_levels(60, true)).addCondition(entity_advancement('apotheosis:enchanting/45ench'))
					pool.addItem('minecraft:book', 4).addFunction(enchant_levels(80, true)).addCondition(entity_advancement('apotheosis:enchanting/60ench'))
					pool.addItem('minecraft:book', 4).addFunction(enchant_levels(100, true)).addCondition(entity_advancement('apotheosis:enchanting/80ench'))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anypotion",
							"weight": 5
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyapple",
							"weight": 3,
							"functions": [{
								"function": "minecraft:set_count",
								"count": {
									"min": 1,
									"max": 1
								}
							}]
					})

					//TOOLS
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor3",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/anytools/anytools3",
							"weight": 2
					})
					pool.addEntry({
							"type": "minecraft:loot_table",
							"name": "kubejs:chests/loot_randomizer/affixgear2",
							"weight": 2
					})
					
					//RESOURCES
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 6
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 3
					})
				})
			}
		})
	}
})