let lt_fa = [
	'ender_dragon',
	'simple_dungeon',
	'squid',
	'end_city_treasure',
	'abandoned_mineshaft'
];

onEvent('generic.loot_tables', event => {
	for (let i of lt_fa) {
		event.addGeneric('forbidden_arcanus:inject/' + i, table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
	}
})