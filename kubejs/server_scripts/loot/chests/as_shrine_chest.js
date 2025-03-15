onEvent('generic.loot_tables', event => {
	event.addGeneric('astralsorcery:shrine_chest', table => {
		table.addPool(pool => {
			pool.rolls = [3, 5]
			pool.addItem('astralsorcery:constellation_paper', 18, [1, 1])
			pool.addItem('astralsorcery:aquamarine', 12, [3, 8])
			pool.addItem('#forge:dusts/glowstone', 8, [1, 3])
			pool.addItem('minecraft:ender_pearl', 2, [1, 1])
			pool.addItem('astralsorcery:nocturnal_powder', 5, [1, 1])
			pool.addItem('botania:world_seed', 2, [1, 1])
			pool.addItem('#forge:ingots/manasteel', 10, [1, 2])
			pool.addItem('#forge:nuggets/manasteel', 13, [3, 6])
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/more_gems",
				"weight": 3,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 1.0,
						"max": 2.0,
						"type": "minecraft:uniform"
					}
				}]
			})
		})
	})
})