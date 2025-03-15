onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anycreateparts', table => {
		table.addPool(pool => {
			pool.rolls = [3, 5];
			Ingredient.of([
				'#create:crushed_ores',
				'create:andesite_alloy',
				'create:blaze_cake',
				'create:rose_quartz',
			]).filter(Ingredient.of([
				'create:crushed_osmium_ore',
				'emendatusenigmatica:potassium_nitrate_crushed',
				'emendatusenigmatica:ruby_crushed',
				'emendatusenigmatica:charged_certus_quartz_crushed',
				'emendatusenigmatica:fluorite_crushed',
				'emendatusenigmatica:peridot_crushed',
				'emendatusenigmatica:certus_quartz_crushed',
				'emendatusenigmatica:cinnabar_crushed',
				'emendatusenigmatica:apatite_crushed',
				'emendatusenigmatica:thallasium_crushed'
			]).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 8.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
		table.addPool(pool => {
			pool.rolls = [2, 4];
			Ingredient.of([
				'create:andesite_casing',
				'create:copper_valve_handle',
				'create:piston_extension_pole',
				'create:linear_chassis',
				'create:cogwheel',
				'create:large_cogwheel',
				'create:shaft',
				'create:wooden_bracket',
				'create:belt_connector',
				'create:electron_tube',
				'#create:seats'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"weight": 55,
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 1.0,
							"max": 2.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
			pool.addEntry({
				"type": "minecraft:item",
				"weight": 20,
				"functions": [{
					"function": "minecraft:set_damage",
					"damage": {
						"min": 0.45,
						"max": 0.75
					}
				}],
				"name": 'create:super_glue'
			})
		})
	})
})