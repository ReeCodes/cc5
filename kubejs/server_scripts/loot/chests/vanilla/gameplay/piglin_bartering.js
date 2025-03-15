onEvent('generic.loot_tables', event => {
	event.modify('minecraft:gameplay/piglin_bartering', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('#forge:nuggets/brass', 15, [6, 12])
			pool.addItem('more_jellyfish:netherite_chunk', 2, [1, 3])
			pool.addItem('create:rose_quartz', 8, [3, 8])
			pool.addItem('#forge:gems/fiery_glass', 11, [3, 6])
			pool.addItem('#forge:dusts/mundabitur', 6, [1, 2])
			pool.addItem('naturesaura:fortress_finder', 1, [1, 1])
			pool.addItem('create:blaze_cake', 12, [2, 3])
			pool.addItem('create:cinder_flour', 16, [2, 6])
			pool.addItem('xreliquary:molten_core', 8, [1, 2])
			pool.addItem('bhc:yellow_heart', 1)
			pool.addItem('wstweaks:fragment', 3)
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/anyarrows",
				"weight": 3,
				"functions": [{
					"function": "minecraft:set_count",
					"count": {
						"min": 6,
						"max": 12
					}
				}]
			})
		})
	})
})