let lt_farmers_delight = [
	'fd_abandoned_mineshaft',
	'fd_bastion_hoglin_stable',
	'fd_pillager_outpost',
	'fd_ruined_portal',
	'fd_shipwreck_supply',
	'fd_simple_dungeon',
	'fd_village_butcher',
	'fd_village_desert_house',
	'fd_village_plains_house',
	'fd_village_savanna_house',
	'fd_village_snowy_house',
	'fd_village_taiga_house'
];

onEvent('chest.loot_tables', event => {
	for (let i of lt_farmers_delight) {
		event.addChest('farmersdelight:' + i, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.addEntry({
					"type": "empty"
				})
			})
		})
	}
})