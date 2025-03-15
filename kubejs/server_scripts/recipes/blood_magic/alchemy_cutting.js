onEvent('recipes', event => {

	let alchemy_table = (inputs, output, syphon, ticks, level, id) => {
	  event.recipes.bloodmagic.alchemytable({
		input: inputs.map(r => Ingredient.of(r).toJson()),
		output: Item.of(output).toResultJson(),
		syphon: syphon,
		ticks: ticks,
		upgradeLevel: level
	  }).id('bloodmagic:alchemytable/'+id)
	}
	alchemy_table(['bloodmagic:demonslate', '#forge:ingots/hellforged', '#forge:ingots/nickel'], 'bloodmagic:crystalline_resonator', 400, 200, 3, 'crystalline_resonator')
	alchemy_table(['alexsmobs:lava_bottle', 'bloodmagic:reagentlava', 'xreliquary:infernal_claw', 'xreliquary:molten_core'], 'bloodmagic:lavacrystal', 400, 200, 3, 'lava_crystal')
	
	alchemy_table(['bloodmagic:reinforcedslate', '#mana-and-artifice:ingots/purified_vinteum', '#forge:ingots/nickel'], 'bloodmagic:primitive_crystalline_resonator', 400, 200, 2, 'primitive_crystalline_resonator')
	alchemy_table(['minecraft:gunpowder', 'minecraft:gunpowder', '#forge:dusts/coal_coke', 'bloodmagic:blankrune'], 'bloodmagic:primitive_explosive_cell', 400, 200, 2, 'primitive_explosive_cell')
})