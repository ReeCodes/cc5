onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/more_gems', table => {
		table.addPool(pool => {
			pool.rolls = 1
			Ingredient.of([
				'#forge:gems/diamond',
				'#forge:gems/emerald',
				'#forge:gems/lapis',
				'#forge:gems/aquamarine',
				'#forge:gems/moonstone',
				'#forge:gems/sapphire',
				'#forge:gems/amethyst',
				'#forge:gems/quartz',
				'#forge:gems/mana',
				'#forge:gems/xpetrified_ore'
			]).stacks.forEach(stack => {
				pool.addEntry({
					"type": "minecraft:item",
					"functions": [{
						"function": "minecraft:set_count",
						"count": {
							"min": 3.0,
							"max": 6.0,
							"type": "minecraft:uniform"
						}
					}],
					"name": stack.id
				})
			})
		})
	})
})