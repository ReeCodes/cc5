let lt_iaf = [
	'fire_dragon_roost',
	'ice_dragon_roost',
	'lightning_dragon_roost'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_iaf) {
		event.addGeneric('iceandfire:chest/' + i, table => {
			//OVERALL
			table.addPool(pool => {
				pool.rolls = [1, 4];
				pool.addItem('#forge:gems/diamond', 2, [1, 4])
				pool.addItem('minecraft:bone', 20, [1, 10])
				pool.addItem('minecraft:book', 10, [1, 2])
				pool.addItem('minecraft:chain', 20, [1, 2])
				pool.addItem('iceandfire:manuscript', 20, [1, 6])
				pool.addItem('minecraft:skeleton_skull', 3)
				pool.addItem('minecraft:cobweb', 15, [1, 6])
				pool.addItem('minecraft:experience_bottle', 1, [1, 5])
				pool.addItem('iceandfire:cannoli', 2)
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/anyrares_useables",
					"weight": 2
				})
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/affixgear2",
					"weight": 1
				})
				pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 5,
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 1,
								"max": 10
							}
						}]
					})
				if (['fire_dragon_roost'].includes(i)) {
					pool.addItem('#forge:gems/emerald', 3, [1, 4])
					pool.addItem('#forge:ingots/gold', 10, [1, 10])
					pool.addItem('#forge:nuggets/gold', 15, [1, 16])
					pool.addItem('minecraft:obsidian', 7, [1, 6])

					pool.addItem('minecraft:iron_helmet', 5).addFunction(function_enchant_r)
					pool.addItem('minecraft:iron_chestplate', 5).addFunction(function_enchant_r)
					pool.addItem('minecraft:iron_leggings', 5).addFunction(function_enchant_r)
					pool.addItem('minecraft:iron_boots', 5).addFunction(function_enchant_r)
				}
				if (['ice_dragon_roost'].includes(i)) {
					pool.addItem('#forge:gems/sapphire', 7, [1, 4])
					pool.addItem('#forge:ingots/silver', 10, [1, 10])
					pool.addItem('#forge:nuggets/silver', 15, [1, 16])
					pool.addItem('minecraft:packed_ice', 7, [1, 6])

					pool.addItem('mysticalworld:silver_helmet', 5).addFunction(function_enchant_r)
					pool.addItem('mysticalworld:silver_chestplate', 5).addFunction(function_enchant_r)
					pool.addItem('mysticalworld:silver_leggings', 5).addFunction(function_enchant_r)
					pool.addItem('mysticalworld:silver_boots', 5).addFunction(function_enchant_r)
				}
				if (['lightning_dragon_roost'].includes(i)) {
					pool.addItem('#forge:gems/amethyst', 7, [1, 4])
					pool.addItem('#forge:ingots/copper', 10, [1, 10])
					pool.addItem('#forge:nuggets/copper', 15, [1, 16])
					pool.addItem('iceandfire:crackled_gravel', 7, [1, 2])

					pool.addItem('mysticalworld:copper_helmet', 5).addFunction(function_enchant_r)
					pool.addItem('mysticalworld:copper_chestplate', 5).addFunction(function_enchant_r)
					pool.addItem('mysticalworld:copper_leggings', 5).addFunction(function_enchant_r)
					pool.addItem('mysticalworld:copper_boots', 5).addFunction(function_enchant_r)
				}
			})
		})
	}
})