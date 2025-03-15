onEvent('chest.loot_tables', event => {
	event.addChest('kubejs:loot_randomizer/anyredstone', table => {
		table.addPool(pool => {
			pool.rolls = 1;
			Ingredient.of([
				'darkutils:shielded_redstone',
				'darkutils:redstone_randomizer',
				'create:redstone_contact',
				'minecraft:redstone_lamp',
				'minecraft:comparator',
				'minecraft:repeater',
				'quark:redstone_randomizer',
				'rsgauges:glass_vertical_bar_gauge',
				'rsgauges:rustic_semaphore',
				'rsgauges:industrial_green_led',
				'rsgauges:industrial_analog_horizontal_gauge',
				'rsgauges:industrial_tube_gauge',
				'rsgauges:industrial_small_digital_gauge',
				'rsgauges:industrial_vertical_bar_gauge',
				'rsgauges:industrial_analog_angular_gauge',
				'create:adjustable_pulse_repeater',
				'create:adjustable_repeater',
				'create:pulse_repeater',
				'createaddition:redstone_relay',
				'rftoolsutility:redstone_transmitter',
				'rftoolsutility:redstone_receiver',
				'quark:redstone_inductor',
				'minecraft:target',
				'minecraft:observer',
				'minecraft:dropper',
				'minecraft:tripwire_hook',
				'minecraft:note_block',
				'minecraft:dispenser',
				'create:analog_lever',
				'create:powered_toggle_latch',
				'create:powered_latch',
				'botania:animated_torch',
				'buildersaddition:entity_detector',
				'signbutton:acacia_sign_button',
				'inspirations:collector',
				'supplementaries:wind_vane',
				'supplementaries:crank',
				'charm:redstone_sand'
			]).stacks.forEach(stack => {
				pool.addItem(stack.id, 1, [1, 2])
			})
		})
		table.addPool(pool => {
			pool.rolls = [1, 2];
			Ingredient.of([
				'supplementaries:cog_block',
				'#forge:dusts/redstone'
			]).stacks.forEach(stack => {
				pool.addItem(stack.id, 4, [1, 6])
			})
			pool.addItem('#forge:storage_blocks/redstone', 1, [1, 2])
			pool.addItem('minecraft:redstone_torch', 2, [3, 6])
		})
	})
})