onEvent('chest.loot_tables', event => {
event.addChest('kubejs:loot_randomizer/anyfishes', table => {
table.addPool(pool => {
    pool.rolls = 3
	Ingredient.of(['#minecraft:fishes']).filter(Ingredient.of(['@betterendforge', '@blueskies']).not()).stacks.forEach(stack => {
            pool.addEntry({
              "type": "minecraft:item",
			  "functions": [
            {
              "function": "minecraft:set_count",
              "count": {
                "min": 2.0,
                "max": 7.0,
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