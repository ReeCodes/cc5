onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyrails', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of([
			'/moreminecarts:.+rai.+/',
			'#minecraft:rails'
			]).filter(Ingredient.of([
				'minecraft:activator_rail',
				'/moreminecarts:.+signal.+/',
				'botania:ghost_rail', 
				'naturesaura:dimension_rail_nether', 
				'naturesaura:dimension_rail_end', 
				'naturesaura:dimension_rail_overworld', 
				'/moreminecarts:color_detector_rail_.+/',
				'/moreminecarts:color_detector_rail_.+/',
				'/moreminecarts:maglev.+/',
				'/moreminecarts:lightspeed.+/',
				'/moreminecarts:.+locking_.+/',
				'moreminecarts:piston_lifter_rail',
				'moreminecarts:arithmetic_rail',
				'/moreminecarts:.+rojector.+/',
				'securitycraft:track_mine'
			]).not()).stacks.forEach(stack => {
				pool.addItem(stack.id, 5, [4, 16])
			})
			Ingredient.of([
			'/moreminecarts:.+rai.+/',
			'#minecraft:rails'
			]).filter(Ingredient.of([
				'/moreminecarts:color_detector_rail_.+/',
				'/moreminecarts:maglev.+/',
				'/moreminecarts:lightspeed.+/',
				'/moreminecarts:.+locking_.+/',
				'moreminecarts:piston_lifter_rail',
				'moreminecarts:arithmetic_rail',
				'/moreminecarts:.+rojector.+/',
				'securitycraft:track_mine'
			])).stacks.forEach(stack => {
				pool.addItem(stack.id, 1, [1, 2])
			})
		})
	})
})