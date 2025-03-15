onEvent('generic.loot_tables', event => {
	event.addGeneric('pneumaticcraft:inject/simple_dungeon_loot', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
})