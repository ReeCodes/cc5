let lt_stoneholm = [
	'armorer',
	'bedroom',
	'cartographer',
	'crypt',
	'fisherman',
	'fletcher',
	'forbidden_knowledge',
	'library',
	'llama_stable',
	'miner',
	'nether_room',
	'weaponsmith'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_stoneholm) {
		event.addGeneric('stoneholm:' + i, table => {
			//OVERALL
			table.addPool(pool => {
				pool.rolls = 1;
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
				pool.addEmpty(20)
			})
			if (['armorer'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addItem('minecraft:obsidian', 1, [1, 4])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "minecraft:chests/village/village_armorer",
						"weight": 1
					})
				})
			}
			if (['bedroom'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 3];
					pool.addItem('#forge:nuggets/gold', 2, [1, 3])
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
						pool.addItem(item.id, 3)
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anycrops",
						"weight": 10,
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
								"max": 1
							}
						}]
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyfood",
						"weight": 5,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 1
							}
						}]
					})
				})
				table.addPool(pool => {
					pool.rolls = [0, 1];
					pool.addItem('#forge:gems/emerald', 1, [1, 2])
					pool.addItem('minecraft:book', 1, [1, 2])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools1",
						"weight": 2
					}).addFunction(set_dmg(0.1, 0.5))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyblock",
						"weight": 3,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 5
							}
						}]
					})
				})
			}
			if (['cartographer'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "minecraft:chests/village/village_cartographer"
					})
				})
			}
			if (['crypt'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 3];
					pool.addItem('minecraft:bone', 10, [1, 3])
					pool.addItem('minecraft:bone_meal', 10, [1, 3])
					pool.addItem('minecraft:shield', 5).addFunction(set_shield(1)).addFunction(set_dmg(0.1, 0.9))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools2",
						"weight": 5
					}).addFunction(set_dmg(0.1, 0.9))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyarrows",
						"weight": 5,
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
					pool.addItem('#forge:gems/emerald', 10, [1, 3])
					pool.addItem('minecraft:golden_horse_armor', 15)
					pool.addItem('minecraft:iron_horse_armor', 20)
					pool.addItem('minecraft:diamond_horse_armor', 10)
					pool.addItem('minecraft:name_tag', 20)
					Ingredient.of(['#minecraft:music_discs']).filter(Ingredient.of(['@minecraft'])).stacks.forEach(item => {
						pool.addItem(item, 5)
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools4",
						"weight": 5
					}).addFunction(set_dmg(0.1, 0.5))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyapple",
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
						"weight": 5
					})
				})
			}
			if (['fisherman'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "minecraft:chests/village/village_fisher"
					})
				})
			}
			if (['fletcher'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "minecraft:chests/village/village_fletcher"
					})
				})
			}
			if (['forbidden_knowledge'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 3];
					pool.addItem('minecraft:book', 10).addFunction(enchant_levels(20, true))
					pool.addItem('minecraft:book', 20).addFunction(enchant_levels(10, true))
					pool.addItem('minecraft:cobweb', 9, [2, 8])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_useables",
						"weight": 3
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anyrares_curio",
						"weight": 1
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/anytools/anytools3",
						"weight": 8
					}).addFunction(set_dmg(0.4, 0.7)).addFunction(enchant_levels(30, true))
				})
			}
			if (['library'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('minecraft:paper', 5, [1, 6])
					pool.addItem('minecraft:book', 5, [1, 2])
					pool.addItem('minecraft:book', 1).addFunction(enchant_levels(15, true))
				})
			}
			if (['llama_stable'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [2, 5];
					pool.addItem('minecraft:hay_block', 3, [1, 3])
					pool.addItem('quark:thatch', 4, [2, 6])
					pool.addItem('supplementaries:fodder', 3, [2, 6])
					pool.addItem('minecraft:lead', 1)
					Ingredient.of([
						'#forge:grain'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 5, [1, 6])
					})
				})
			}
			if (['miner'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 3];
					pool.addItem('minecraft:torch', 8, [1, 12])
					pool.addItem('tconstruct:glow_ball', 8, [1, 12])
					pool.addItem('tconstruct:efln_ball', 4, [2, 4])
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 1
					})
					Ingredient.of([
						'#lanterncolors:lanterns'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 8, [1, 6])
					})
					Ingredient.of([
						'#botania:orechid_ores/common'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 2, [1, 3])
					})
					Ingredient.of([
						'#botania:orechid_ores/uncommon'
					]).stacks.forEach(item => {
						pool.addItem(item.id, 1, [1, 3])
					})
					Ingredient.of([
						'#forge:cobblestone'
					]).filter(Ingredient.of([
						'@atum',
						'@blue_skies',
						'@undergarden',
						'byg:cobbled_ether_stone', 
						'minecraft:mossy_cobblestone', 
						'minecraft:infested_cobblestone'
					]).not()).stacks.forEach(item => {
						pool.addItem(item.id, 10, [1, 5])
					})
				})
			}
			if (['nether_room'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 3];
					pool.addItem('minecraft:netherrack', 4, [2, 7])
					pool.addItem('minecraft:obsidian', 2, [1, 3])
					pool.addItem('minecraft:crying_obsidian', 4, [2, 6])
					pool.addItem('minecraft:soul_sand', 4, [1, 5])
					pool.addItem('#forge:dusts/blaze', 3, [1, 3])
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('minecraft:crimson_fungus', 1, [1, 3])
					pool.addItem('minecraft:crimson_roots', 1, [1, 3])
					pool.addItem('minecraft:nether_wart', 1, [1, 3])
					pool.addItem('nethers_exoticism:jaboticaba', 1, [1, 3])
					pool.addItem('nethers_exoticism:pitaya', 1, [1, 3])
					pool.addItem('nethers_exoticism:ramboutan', 1, [1, 3])
				})
			}
			if (['weaponsmith'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "minecraft:chests/village/village_weaponsmith"
					})
				})
			}
		})
	}
})