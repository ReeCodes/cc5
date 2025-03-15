onEvent('block.loot_tables', event => {
	event.addBlock('kubejs:fossilized_remains', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('ob_core:shining_bone', 1)
			pool.addItem('#forge:bones/wither', 4, [1, 2])
			pool.addItem('wstweaks:fragment', 3)
			pool.addItem('minecraft:skeleton_skull', 5)
			pool.addItem('kubejs:essence_cursed', 2)
			pool.addItem('kubejs:dreadful_contract', 4)
			pool.addItem('waystones:return_scroll', 4)
			pool.addItem('astralsorcery:nocturnal_powder', 2)
			pool.addEntry({
				"type": "minecraft:loot_table",
				"name": "kubejs:chests/loot_randomizer/anypotion",
				"weight": 3
			})
			pool.addEmpty(5)
		})
		table.addPool(pool => {
			pool.rolls = 1
			pool.addFunction(apply_bonus('minecraft:fortune', 1))
			pool.addItem('minecraft:bone', 7, [1, 2])
			pool.addItem('xreliquary:rib_bone', 2)
			pool.addItem('xreliquary:withered_rib', 1)
			pool.addItem('betterlands:lizard_bones', 2)
		})
	})
})