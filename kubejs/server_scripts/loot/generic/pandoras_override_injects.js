let lt_pandoras = [
	'bufflon_desert_pyramid',
	'bufflon_end_city',
	'bufflon_jungle_temple',
	'bufflon_nether_bridge',
	'bufflon_simple_dungeon'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_pandoras) {
		event.addGeneric('pandoras_creatures:injections/' + i, table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
	}
})