let lt_villages = [
	'minecraft:village/village_butcher',
	'minecraft:village/village_fletcher',
	'minecraft:village/village_armorer',
	'minecraft:village/village_cartographer',
	'minecraft:village/village_desert_house',
	'minecraft:village/village_snowy_house',
	'minecraft:village/village_fisher',
	'minecraft:village/village_mason',
	'minecraft:village/village_tannery',
	'minecraft:village/village_plains_house',
	'minecraft:village/village_savanna_house',
	'minecraft:village/village_shepherd',
	'minecraft:village/village_taiga_house',
	'minecraft:village/village_temple',
	'minecraft:village/village_toolsmith',
	'minecraft:village/village_weaponsmith',
	'environmental:village/village_carpenter',
	'immersiveengineering:engineers_house'
];

onEvent('chest.loot_tables', event => {
	for (let i of lt_villages) {
		event.addChest(i, table => {
			//OVERALL
			table.addPool(pool => {
				pool.rolls = 1;
				pool.addItem('kubejs:delight_builder', 1)
				pool.addEmpty(10)
			})
			if (['immersiveengineering:engineers_house'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 4;
					pool.addItem('#forge:rods/treated_wood', 20, [2, 7])
					pool.addItem('#forge:rods/steel', 6, [1, 4])
					pool.addItem('#forge:rods/iron', 10, [1, 4])
					pool.addItem('#forge:rods/aluminum', 10, [1, 4])
					pool.addItem('#forge:rods/nickel', 8, [1, 4])
					pool.addItem('#forge:rods/gold', 9, [1, 4])
					pool.addItem('#forge:rods/copper', 10, [1, 4])
					pool.addItem('#forge:rods/silver', 9, [1, 4])
					pool.addItem('#forge:rods/lead', 10, [1, 4])
					pool.addItem('#forge:rods/tin', 10, [1, 4])
					pool.addItem('#forge:rods/bronze', 7, [1, 4])
					pool.addItem('#forge:rods/brass', 6, [1, 4])
					pool.addItem('#forge:rods/zinc', 9, [1, 4])
					pool.addItem('immersiveengineering:hemp_fabric', 10, [1, 3])
					pool.addItem('#forge:gems/coal_coke', 10, [1, 3])
					pool.addItem('#forge:dusts/coal_coke', 8, [1, 3])
					pool.addItem('immersiveengineering:component_iron', 8, [1, 2])
					pool.addItem('immersiveengineering:component_steel', 5)
					pool.addItem('#forge:ingots/iron', 10, [1, 4])
					pool.addItem('#forge:ingots/aluminum', 10, [1, 4])
					pool.addItem('#forge:nuggets/nickel', 7, [1, 9])
					pool.addItem('#forge:nuggets/silver', 7, [1, 9])
					pool.addItem('#forge:nuggets/lead', 9, [1, 9])
					pool.addItem('#forge:ingots/tin', 7, [1, 4])
					pool.addItem('#forge:ingots/bronze', 6, [1, 3])
					pool.addItem('#forge:ingots/zinc', 9, [1, 4])
					pool.addEntry({
						"type": "minecraft:item",
						"name": "immersiveengineering:blueprint",
						"weight": 4,
						"functions": [{
								"function": "minecraft:set_nbt",
								"tag": "{blueprint:\"bullet\"}"
							},
							{
								"function": "immersiveengineering:secret_bluprintz",
								"conditions": [{
									"condition": "minecraft:random_chance",
									"chance": 0.125
								}]
							}
						]
					})
					pool.addEntry({
						"type": "minecraft:item",
						"name": "immersiveengineering:blueprint",
						"weight": 4,
						"functions": [{
								"function": "minecraft:set_nbt",
								"tag": "{blueprint:\"specialBullet\"}"
							},
							{
								"function": "immersiveengineering:secret_bluprintz",
								"conditions": [{
									"condition": "minecraft:random_chance",
									"chance": 0.125
								}]
							}
						]
					})
					pool.addEntry({
						"type": "minecraft:item",
						"name": "immersiveengineering:blueprint",
						"weight": 4,
						"functions": [{
								"function": "minecraft:set_nbt",
								"tag": "{blueprint:\"electrode\"}"
							},
							{
								"function": "immersiveengineering:secret_bluprintz",
								"conditions": [{
									"condition": "minecraft:random_chance",
									"chance": 0.125
								}]
							}
						]
					})
				})
			}
			if (['minecraft:village/village_toolsmith'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/diamond', 1, [1, 3])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 7,
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
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 2
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools2",
						"weight": 5
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 1,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 1
							}
						}]
					})
				})
			}
			if (['minecraft:village/village_weaponsmith'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [3, 8];
					pool.addItem('#forge:gems/diamond', 13, [1, 3])
					pool.addItem('minecraft:obsidian', 15, [3, 7])
					pool.addItem('minecraft:diamond_horse_armor', 11)
					pool.addItem('minecraft:golden_horse_armor', 11)
					pool.addItem('minecraft:iron_horse_armor', 11)
					pool.addItem('minecraft:saddle', 13)
					Ingredient.of([
						'#minecraft:saplings'
					]).filter(Ingredient.of([
						'@autumnity',
						'@atmospheric',
						'@minecraft',
						'@byg',
						'@biomesoplenty',
						'@environmental',
						'@abundance',
						'@bayou_blues'
					])).stacks.forEach(item => {
						pool.addItem(item.id, 1, [2, 7])
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyapple",
						"weight": 1,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 2
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 10,
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
						"name": "kubejs:chests/loot_randomizer/affixgear2",
						"weight": 5
					})
				})
			}
			if (['minecraft:village/village_temple'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [3, 8];
					pool.addItem('#forge:gems/emerald', 1, [1, 4])
					pool.addItem('#forge:dusts/redstone', 2, [1, 4])
					pool.addItem('minecraft:rotten_flesh', 7, [1, 4])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 1,
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
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 2
							}
						}]
					})
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
				})
			}
			if (['minecraft:village/village_taiga_house'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [3, 8];
					pool.addItem('#forge:gems/emerald', 2, [1, 4])
					pool.addItem('minecraft:pumpkin_seeds', 5, [1, 5])
					pool.addItem('minecraft:fern', 2)
					pool.addItem('minecraft:large_fern', 2)
					pool.addItem('minecraft:sweet_berries', 5, [1, 7])
					pool.addItem('minecraft:spruce_log', 10, [1, 5])
					pool.addItem('minecraft:spruce_sign', 1)
					pool.addItem('minecraft:spruce_sapling', 5, [1, 5])
					Ingredient.of([
						'@omgourd',
						'#chipped:carved_pumpkin',
						'#chipped:jack_o_lantern'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 1)
					})
					Ingredient.of([
						'minecraft:pumpkin_pie',
						'pamhc2foodcore:pumpkinbreaditem',
						'pamhc2foodcore:pumpkincupcakeitem',
						'pamhc2foodcore:pumpkincheesecakeitem',
						'pamhc2foodcore:pumpkinmuffinitem',
						'pamhc2foodcore:pumpkinyogurtitem',
						'pamhc2foodcore:pumpkinsoupitem',
						'pamhc2foodextended:pumpkinoatsconesitem',
						'pamhc2foodextended:pumpkinspicelatteitem',
						'farmersdelight:pumpkin_slice',
						'farmersdelight:pumpkin_soup',
						'farmersdelight:stuffed_pumpkin_block',
						'farmersdelight:stuffed_pumpkin',
						'seasonals:roasted_pumpkin',
						'seasonals:pumpkin_feast',
						'seasonals:pumpkin_ice_cream',
						'seasonals:pumpkin_milkshake',
						'seasonals:pumpkin_cake',
						'seasonals:chocolate_pumpkin_muffin'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 1)
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyseeds",
						"weight": 10,
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
			if (['minecraft:village/village_shepherd'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1)
					pool.addItem('minecraft:shears', 10, [1, 2])
					pool.addItem('minecraft:white_wool', 6, [1, 8])
					Ingredient.of([
						'#forge:grain'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 10, [1, 7])
					})
					Ingredient.of([
						'#quark:quilted_wools',
						'/minecraft:.+_wool/'
					]).filter(Ingredient.of([
						'minecraft:white_wool'
					]).not()).stacks.forEach(item => {
						pool.addItem(item.id, 3, [1, 3])
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 2,
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
			if (['minecraft:village/village_savanna_house'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [3, 8];
					pool.addItem('#forge:gems/emerald', 2, [1, 4])
					pool.addItem('minecraft:acacia_sapling', 10, [1, 2])
					pool.addItem('minecraft:bucket', 1)
					pool.addItem('minecraft:grass', 5)
					pool.addItem('minecraft:tall_grass', 5)
					Ingredient.of([
						'#forge:grain'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 10, [1, 7])
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyseeds",
						"weight": 10,
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
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 2,
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
			if (['minecraft:village/village_plains_house'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [3, 8];
					pool.addItem('#forge:gems/emerald', 10, [1, 4])
					pool.addItem('minecraft:feather', 5)
					pool.addItem('minecraft:book', 5)
					pool.addItem('minecraft:oak_sapling', 25, [1, 2])
					pool.addItem('biomesoplenty:flowering_oak_sapling', 15, [1, 2])
					pool.addItem('minecraft:apple', 50, [1, 5])
					Ingredient.of([
						'#minecraft:flowers'
					]).filter(Ingredient.of([
						'@autumnity',
						'@atmospheric',
						'@minecraft',
						'@byg',
						'@biomesoplenty',
						'@environmental',
						'@abundance',
						'@bayou_blues'
					])).filter(Ingredient.of([
						'/.+flowering.+/'
					]).not()).stacks.forEach(item => {
						pool.addItem(item.id, 2)
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycrops",
						"weight": 50,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 7
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 10,
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
			if (['minecraft:village/village_tannery'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1, [1, 4])
					pool.addItem('minecraft:saddle', 2)
					pool.addItem('minecraft:leather', 4, [1, 3])
					pool.addItem('quark:bonded_leather', 1)
					pool.addItem('minecraft:leather_horse_armor', 2)
					pool.addItem('betterlands:bighorn_hide', 1)
					pool.addItem('minecraft:rabbit_hide', 1, [1, 2])
					pool.addItem('pandoras_creatures:bufflon_hide', 1)
					pool.addItem('cnb:yeti_hide', 1)
					pool.addItem('quark:ravager_hide', 1)
					Ingredient.of(['/.+helmet/', '/.+chestplate/', '/.+leggings/', '/.+boots/']).filter(Ingredient.of(['/minecraft:leather.+/'])).stacks.forEach(item => {
						pool.addItem(item, 2)
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 2,
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
			if (['environmental:village/village_carpenter'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 3)
					pool.addItem('minecraft:apple', 13, [1, 4])
					pool.addItem('minecraft:stick', 15, [1, 3])
					Ingredient.of([
						'pamhc2foodcore:applepieitem',
						'pamhc2foodcore:applejuiceitem',
						'pamhc2foodcore:applesmoothieitem',
						'pamhc2foodcore:applejellyitem',
						'pamhc2foodcore:applejellytoastitem',
						'pamhc2foodcore:applesauceitem',
						'pamhc2foodcore:caramelappleitem',
						'pamhc2foodextended:applecideritem',
						'pamhc2foodextended:applejellysandwichitem'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 1, [1, 3])
					})
					Ingredient.of([
						'/supplementaries:hanging_sign_.+/',
						'/supplementaries:sign_post_.+/'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 1)
					})

					Ingredient.of([
						'#minecraft:logs_that_burn'
					]).filter(Ingredient.of([
						'/.+beam$/',
						'/.+wood$/',
						'/.+stem$/'
					]).not()).filter(Ingredient.of([
						'@autumnity',
						'@atmospheric',
						'@minecraft',
						'@byg',
						'@biomesoplenty',
						'@environmental',
						'@abundance',
						'@bayou_blues'
					])).stacks.forEach(item => {
						pool.addItem(item.id, 1, [1, 3])
					})
					Ingredient.of([
						'#minecraft:saplings'
					]).filter(Ingredient.of([
						'@autumnity',
						'@atmospheric',
						'@minecraft',
						'@byg',
						'@biomesoplenty',
						'@environmental',
						'@abundance',
						'@bayou_blues'
					])).stacks.forEach(item => {
						pool.addItem(item.id, 1, [1, 2])
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
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
				table.addPool(pool => {
					pool.rolls = 1;
					Ingredient.of([
						'#minecraft:logs_that_burn'
					]).filter(Ingredient.of([
						'/.+beam$/', '/.+wood$/'
					]).not()).filter(Ingredient.of([
						'@autumnity',
						'@atmospheric',
						'@minecraft',
						'@byg',
						'@biomesoplenty',
						'@environmental',
						'@abundance',
						'@bayou_blues'
					])).stacks.forEach(item => {
						pool.addItem(item.id, 1)
					})
				})
			}
			if (['minecraft:village/village_mason'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1)
					pool.addItem('supplementaries:statue', 4)
					pool.addItem('supplementaries:flower_box', 4)
					pool.addItem('supplementaries:planter', 4)
					Ingredient.of([
						'/supplementaries:daub.+/'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 10, [4, 8])
					})
					Ingredient.of([
						'#forge:dyes'
					]).filter(Ingredient.of(['@minecraft'])).stacks.forEach(item => {
						pool.addItem(item.id, 1, [1, 2])
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblocks",
						"weight": 8
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfairylight",
						"weight": 6,
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
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 3,
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
			if (['minecraft:village/village_fisher'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1)
					pool.addItem('minecraft:water_bucket', 2)
					pool.addItem('aquaculture:iron_hook', 1)
					pool.addItem('aquaculture:gold_hook', 1)
					pool.addItem('aquaculture:light_hook', 1)
					pool.addItem('aquaculture:heavy_hook', 1)
					pool.addItem('aquaculture:double_hook', 1)
					pool.addItem('aquaculture:redstone_hook', 1)
					pool.addItem('aquaculture:note_hook', 1)
					pool.addItem('minecraft:fishing_rod', 2).addFunction(function_enchant_r).addFunction(set_dmg(0.2, 0.5))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyseeds",
						"weight": 3,
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
						"name": "kubejs:chests/loot_randomizer/anyfishes",
						"weight": 2,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 3
							}
						}]
					})
				})
			}
			if (['minecraft:village/village_snowy_house'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('relics:squire_bag', 1)
					pool.addItem('relics:horse_flute', 1)
					pool.addItem('relics:ice_breaker', 1)
					pool.addItem('relics:ice_skates', 1)

					pool.addItem('relics:rune_of_cold', 2)
					pool.addItem('relics:rune_of_love', 2)
					pool.addEmpty(60)
				})
				table.addPool(pool => {
					pool.rolls = [3, 8];
					pool.addItem('#forge:gems/emerald', 1, [1, 3])
					pool.addItem('neapolitan:ice_cubes', 10, [1, 4])
					pool.addItem('minecraft:snow_block', 4)
					pool.addItem('minecraft:blue_ice', 1)
					pool.addItem('#minecraft:coals/coal', 6, [1, 3])
					pool.addItem('#minecraft:coals/charcoal', 6, [1, 3])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 2,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 2
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycrops",
						"weight": 4,
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
						"name": "kubejs:chests/loot_randomizer/anyseeds",
						"weight": 10,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 5
							}
						}]
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('#forge:icecream/icecream', 1)
					pool.addItem('#forge:stews', 1)
					pool.addItem('#forge:soups', 1)
				})
			}
			if (['minecraft:village/village_desert_house'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('relics:squire_bag', 1)
					pool.addItem('relics:horse_flute', 1)

					pool.addItem('relics:rune_of_sun', 2)
					pool.addItem('relics:rune_of_love', 2)
					pool.addEmpty(60)
				})
				table.addPool(pool => {
					pool.rolls = [3, 8];
					pool.addItem('#forge:gems/emerald', 1, [1, 3])
					pool.addItem('minecraft:cactus', 10, [1, 4])
					pool.addItem('minecraft:book', 1)
					pool.addItem('minecraft:dead_bush', 2, [1, 3])
					pool.addItem('minecraft:clay_ball', 1)
					pool.addItem('atmospheric:aloe_leaves', 6, [1, 4])
					pool.addItem('atmospheric:aloe_bundle', 1)
					pool.addItem('atmospheric:aloe_gel_bottle', 4)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyseeds",
						"weight": 2,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 3
							}
						}]
					})
					Ingredient.of([
						'#forge:grain'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 10, [1, 7])
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					Ingredient.of([
						'peculiars:aloe_ice_cream',
						'peculiars:aloe_milkshake',
						'peculiars:aloe_jelly_slice',
						'peculiars:aloe_berry_smoothie',
						'peculiars:aloe_cake',
						'abnormals_delight:passion_aloe_nectar'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 1)
					})
				})
			}
			if (['minecraft:village/village_cartographer'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1)
					pool.addItem('minecraft:map', 10, [1, 3])
					pool.addItem('charm:atlas', 1)
					pool.addItem('minecraft:paper', 15, [1, 5])
					pool.addItem('minecraft:compass', 5)
					pool.addEntry({
						"name": "minecraft:map",
						"type": "minecraft:item",
						"weight": 1,
						"functions": [{
							"function": "minecraft:exploration_map",
							"destination": "repurposed_structures:bastion_underground",
							"decoration": "banner_gray",
							"zoom": 2,
							"skip_existing_chunks": false
						}]
					})
				})
			}
			if (['minecraft:village/village_armorer'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 2,
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
						"name": "kubejs:chests/loot_randomizer/anyarmor/anyarmor2",
						"weight": 1
					})
				})
			}
			if (!['minecraft:village/village_butcher', 'minecraft:village/village_fletcher', 'minecraft:village/village_desert_house', 'minecraft:village/village_snowy_house'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('relics:squire_bag', 1)
					pool.addItem('relics:horse_flute', 1)

					pool.addItem('relics:rune_of_love', 2)
					pool.addEmpty(60)
				})
			}
			if (['minecraft:village/village_butcher'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('relics:squire_bag', 1)
					pool.addItem('relics:horse_flute', 1)
					pool.addItem('relics:hunter_belt', 1)
					pool.addItem('relics:lucky_horseshoe', 1)

					pool.addItem('relics:rune_of_love', 2)
					pool.addEmpty(60)
				})
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1)
					pool.addItem('#minecraft:coals/coal', 6, [1, 3])
					pool.addItem('#minecraft:coals/charcoal', 6, [1, 3])
					Ingredient.of([
						'farmersdelight:mutton_chops',
						'farmersdelight:cooked_mutton_chops',
						'farmersdelight:bacon',
						'farmersdelight:cooked_bacon',
						'minecraft:beef',
						'minecraft:cooked_beef',
						'farmersdelight:minced_beef',
						'farmersdelight:beef_patty',
						'farmersdelight:ham',
						'farmersdelight:smoked_ham',
						'farmersdelight:chicken_cuts',
						'farmersdelight:cooked_chicken_cuts',
						'pandoras_creatures:bufflon_beef',
						'pandoras_creatures:bufflon_beef_cooked',
						'neapolitan:cooked_mint_chops',
						'neapolitan:mint_chops'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 2, [1, 3])
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('farmersdelight:flint_knife', 3).addFunction(set_dmg(0.8, 1.0))
					pool.addItem('farmersdelight:iron_knife', 1).addFunction(set_dmg(0.8, 1.0))
					pool.addEmpty(5)
				})
			}
			if (['minecraft:village/village_fletcher'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('relics:squire_bag', 1)
					pool.addItem('relics:horse_flute', 1)
					pool.addItem('relics:arrow_quiver', 1)

					pool.addItem('relics:rune_of_love', 2)
					pool.addEmpty(60)
				})
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('#forge:gems/emerald', 1)
					pool.addItem('minecraft:feather', 6, [1, 3])
					pool.addItem('minecraft:flint', 6, [1, 3])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 3
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('minecraft:crossbow', 1).addFunction(set_dmg(0.8, 1.0))
					pool.addItem('minecraft:bow', 1).addFunction(set_dmg(0.8, 1.0))
				})
			}
		})
	}
})