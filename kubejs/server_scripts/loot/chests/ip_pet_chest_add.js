onEvent('server.datapack.first', event => {
	event.addJson('inventorypets:loot_tables/chests/pet_chest.json', {})
})

onEvent('chest.loot_tables', event => {
	event.addChest('inventorypets:pet_chest', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of([
				'#inventorypets:all_pets'
			]).filter(Ingredient.of([
				'/inventorypets:pet_bed/',
				'/inventorypets:pet_cloud/',
				'/inventorypets:pet_illuminati/',
				'/inventorypets:pet_grave/',
				'/inventorypets:pet_dubstep/',
				'/inventorypets:pet_met.+/'
			]).not()).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"name": stack.id
				})
			})

			table.addPool(pool => {
				pool.rolls = [4, 7];
				Ingredient.of([
					'inventorypets:nugget_diamond',
					'inventorypets:nugget_obsidian',
					'inventorypets:nugget_coal',
					'inventorypets:nugget_lapis',
					'inventorypets:nugget_ender',
					'inventorypets:nugget_emerald',
					'minecraft:quartz',
					'minecraft:coal'
				]).stacks.forEach(stack => {
					pool.addEntry({
						"type": "minecraft:item",
						"functions": [{
							"function": "minecraft:set_count",
							"count": {
								"min": 3.0,
								"max": 7.0,
								"type": "minecraft:uniform"
							}
						}],
						"name": stack.id
					})
				})
			})
		})
	})
})