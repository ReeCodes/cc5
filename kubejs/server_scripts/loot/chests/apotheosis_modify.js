onEvent('generic.loot_tables', event => {
	event.modify('apotheosis:tome_tower', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('kubejs:purifying_rune', 1, [1, 2])
		})
	})
})