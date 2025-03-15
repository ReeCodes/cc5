let lt_totw = [
	'tower/regular/tower_chest',
	'tower/ocean/ocean_tower_chest'
];

onEvent('chest.loot_tables', event => {
	for (let i of lt_totw) {
		event.addChest('towers_of_the_wild:' + i, table => {
					//CURIO_STORM
					table.addPool(pool => {
						pool.rolls = 1;
						pool.addItem('artifacts:shock_pendant', 1)
						pool.addItem('artifacts:umbrella', 1)
						pool.addItem('artifacts:cloud_in_a_bottle', 1)
						pool.addItem('relics:rune_of_lightning', 1)
						
						pool.addItem('relics:slime_heart', 2)
						pool.addItem('relics:rune_of_moon', 2)
						pool.addItem('relics:rune_of_air', 2)
						pool.addEmpty(40)
					})
			if (['tower/regular/tower_chest'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [4, 8];
					pool.addItem('minecraft:feather', 15, [1, 4])
					pool.addItem('minecraft:compass', 5)
					pool.addItem('minecraft:ender_pearl', 8)
					pool.addItem('forbidden_arcanus:ender_pearl_fragment', 10, [1, 4])
					pool.addItem('quark:bottled_cloud', 12, [1, 2])
					pool.addItem('supplementaries:feather_block', 6)
					pool.addItem('minecraft:book', 3).addFunction(enchant_levels(30, true))
					pool.addItem('naturesaura:sky_ingot', 5).addCondition(entity_advancement('naturesaura:offering'))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 15
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('forbidden_arcanus:orb_of_temporary_flight', 1)
				})
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addItem('kubejs:delight_builder', 1)
					pool.addItem(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 1)
					pool.addItem('kubejs:anointed_contract', 1)
					pool.addItem('waystones:warp_scroll', 3)
					pool.addItem('minecraft:map', 3)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/affixgear1",
						"weight": 1
					})
				})
			}
			if (['tower/ocean/ocean_tower_chest'].includes(i)) {
				table.addPool(pool => {
					pool.rolls = [4, 8];
					pool.addItem('minecraft:heart_of_the_sea', 2)
					pool.addItem('minecraft:sea_pickle', 11, [1, 4])
					pool.addItem('minecraft:compass', 5)
					pool.addItem('minecraft:ender_pearl', 8)
					pool.addItem('forbidden_arcanus:ender_pearl_fragment', 10, [1, 4])
					pool.addItem('minecraft:kelp', 15, [1, 4])
					pool.addItem('minecraft:sea_lantern', 6)
					pool.addItem('jellyfishing:kelp_shake', 10)
					pool.addItem('minecraft:book', 3).addFunction(enchant_levels(30, true))
					pool.addItem('#botania:runes/water', 5).addCondition(entity_advancement('botania:main/rune_pickup'))
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_gems",
						"weight": 10
					})
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/more_metals",
						"weight": 15
					})
				})
				table.addPool(pool => {
					pool.rolls = 1;
					pool.addItem('forbidden_arcanus:orb_of_temporary_flight', 1)
				})
				table.addPool(pool => {
					pool.rolls = [1, 2];
					pool.addItem('kubejs:delight_builder', 1)
					pool.addItem(Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 1)
					pool.addItem('kubejs:anointed_contract', 1)
					pool.addItem('waystones:warp_scroll', 3)
					pool.addItem('minecraft:map', 3)
					pool.addEntry({
						"type": "minecraft:loot_table",
						"name": "kubejs:chests/loot_randomizer/affixgear1",
						"weight": 1
					})
				})
			}
		})
	}
})