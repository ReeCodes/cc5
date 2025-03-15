onEvent('block.loot_tables', event => {
	event.addBlock('betterendforge:sulphur_crystal', table => {
		table.addPool(pool => {
			pool.rolls = 1
			Ingredient.of(['#forge:dusts/sulfur']).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
							"function": "minecraft:set_count",
							"conditions": [{
								"condition": "minecraft:block_state_property",
								"block": "betterendforge:sulphur_crystal",
								"properties": {
									"age": "3"
								}
							}],
							"count": {
								"min": 1.0,
								"max": 3.0,
								"type": "minecraft:uniform"
							}
						},
						{
							"function": "minecraft:apply_bonus",
							"enchantment": "minecraft:fortune",
							"formula": "minecraft:ore_drops"
						},
						{
							"function": "minecraft:explosion_decay"
						}
					],
					"name": stack.id
				})
			})
		})
	})
})