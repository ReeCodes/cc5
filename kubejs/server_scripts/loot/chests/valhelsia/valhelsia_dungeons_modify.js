let lt_valhelsia = [
	'castle',
	'castle_ruin',
	'desert_house',
	'forge',
	'player_house',
	'spawner_dungeon',
	'treasure',
	'witch_hut'
];
/*
onEvent('chest.loot_tables', event => {
	for (let i of lt_valhelsia) {
		event.addChest('valhelsia_structures:' + i, table => {

			table.addPool(pool => {
				pool.rolls = [4, 7]
				
				pool.addItem('minecraft:leather_horse_armor', 20, [1, 1])
				pool.addItem('minecraft:golden_horse_armor', 15, [1, 1])
				pool.addItem('minecraft:iron_horse_armor', 13, [1, 1])
				pool.addItem('minecraft:diamond_horse_armor', 5, [1, 1])
				pool.addItem('minecraft:saddle', 15, [1, 1])

				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/anyapple",
					"weight": 30
				})
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/anyarrows",
					"weight": 25
				})
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/anyfood",
					"weight": 20
				})
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/anycreateparts",
					"weight": 25
				})
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/anyredstone",
					"weight": 25
				})
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/more_metals",
					"weight": 20
				})
				pool.addEntry({
					"type": "minecraft:loot_table",
					"name": "kubejs:chests/loot_randomizer/more_gems",
					"weight": 15
				})
			})
		})
	}
})
*/