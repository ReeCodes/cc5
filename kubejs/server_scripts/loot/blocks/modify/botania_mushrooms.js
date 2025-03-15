onEvent('block.loot_tables', event => {
	Ingredient.of(['#botania:petals', '/extcaves:mushroom_.+/']).stacks.forEach(stack => {
		event.addBlock(stack.id, table => {
			table.addPool(pool => {
				pool.rolls = 1;
				pool.addEntry({
					"type": "minecraft:item",
					"conditions": [{
							"condition": "minecraft:random_chance",
							"chance": 0.5
						},
						{
							"condition": "minecraft:entity_properties",
							"entity": "this",
							"predicate": {
								"type": "minecraft:player"
							}
						}
					],
					"functions": [{
						"function": "minecraft:explosion_decay"
					}],
					"name": stack.id
				})
			})
		})
	})
})