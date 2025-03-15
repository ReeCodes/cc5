onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
		ores.blocks = [
			'randomite:randomite_ore',
			'wyrmroost:platinum_ore',
			'byg:blue_nether_gold_ore',
			'byg:blue_nether_quartz_ore',
			'byg:brimstone_nether_gold_ore',
			'byg:brimstone_nether_quartz_ore',
			'byg:cryptic_redstone_ore',
			'infernalexp:basalt_iron_ore',
			'nourished_end:end_iron_ore',
			'cinderscapes:sulfur_ore',
			'minecraft:iron_ore',
			'minecraft:gold_ore',
			'minecraft:coal_ore',
			'minecraft:nether_gold_ore',
			'minecraft:lapis_ore',
			'minecraft:diamond_ore',
			'minecraft:redstone_ore',
			'minecraft:emerald_ore',
			'minecraft:nether_quartz_ore',
			'tconstruct:cobalt_ore'
		]
	})
})