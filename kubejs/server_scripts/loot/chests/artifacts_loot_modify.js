onEvent('generic.loot_tables', event => {
	event.addGeneric('artifacts:artifact', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of(['@artifacts']).filter(Ingredient.of([
			'artifacts:mimic_spawn_egg',
			'artifacts:everlasting_beef',
			'artifacts:eternal_steak',
			'artifacts:novelty_drinking_hat'
			]).not()).stacks.forEach(stack => {
			pool.addItem(stack.id, 1)
			})
		})
	})
	event.addGeneric('artifacts:inject/entities/cow', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addEntry({
				"type": "empty"
			})
		})
	})
})