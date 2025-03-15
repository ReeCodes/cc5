onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anystews', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			pool.addItem('minecraft:suspicious_stew', 1).addFunction(set_multiple_stew_effects)
			pool.addItem('minecraft:suspicious_stew', 5).addFunction(set_stew([
				{
					type: 'minecraft:jump_boost',
					minD: 7.0,
					maxD: 10.0
				},
				{
					type: 'minecraft:night_vision',
					minD: 7.0,
					maxD: 10.0
				},
				{
					type: 'mana-and-artifice:repair',
					minD: 7.0,
					maxD: 10.0
				},
				{
					type: 'minecraft:blindness',
					minD: 5.0,
					maxD: 7.0
				},
				{
					type: 'minecraft:poison',
					minD: 10.0,
					maxD: 20.0
				},
				{
					type: 'minecraft:weakness',
					minD: 6.0,
					maxD: 8.0
				},
				{
					type: 'carrierbees:tumble',
					minD: 2.0,
					maxD: 6.0
				},
				{
					type: 'carrierbees:stumble',
					minD: 2.0,
					maxD: 6.0
				},
				{
					type: 'carrierbees:jumble',
					minD: 2.0,
					maxD: 6.0
				},
				{
					type: 'carrierbees:fumble',
					minD: 2.0,
					maxD: 6.0
				},
				{
					type: 'carrierbees:crumble',
					minD: 2.0,
					maxD: 6.0
				},
				{
					type: 'immersiveengineering:sticky',
					minD: 6.0,
					maxD: 10.0
				}
			]))
		})
	})
})