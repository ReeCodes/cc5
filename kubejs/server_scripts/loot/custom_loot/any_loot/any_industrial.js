onEvent('chest.loot_tables', event => {
event.addChest('kubejs:loot_randomizer/anyindustrial', table => {
table.addPool(pool => {
    pool.rolls = 1
	Ingredient.of(['/industrialforegoing:mycelial_.+/', 'industrialforegoing:biofuel_generator', 'industrialforegoing:pitiful_generator']).stacks.forEach(stack => {
            pool.addEntry({
              "type": "minecraft:item",
			  "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 1.0,
                "max": 1.0,
                "type": "minecraft:uniform"
              }
            }
          ],
              "name": stack.id
            })
		})
	})
})
})