onEvent('recipes', event => {

	let fusion_crafting = (inputs, catalyst, tier, energy, result, id) => {
		event.recipes.draconicevolution.fusion_crafting({
			ingredients: inputs.map(r => Item.of(r).toJson()),
			catalyst: Item.of(catalyst).toJson(),
			tier: tier,
			total_energy: energy,
			result: Item.of(result).toJson()
		}).id('draconicevolution:fusion_crafting/' + id)
	}

	//OTHER
	fusion_crafting([
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block',
		'emendatusenigmatica:dimensional_block'
	], 'kubejs:unstable_endershard', 'WYVERN', 16000000, 'kubejs:extremely_unstable_endershard', 'extremely_unstable_ender_shard')

	fusion_crafting([
		'naturesaura:sky_ingot',
		'naturesaura:sky_ingot',
		'draconicevolution:chaotic_core',
		'ftbic:antimatter',
		'kubejs:rainbow_gem',
		'rats:biplane_wing',
		'mythicbotany:alfsteel_armor_upgrade',
		(Item.of('botania:flight_tiara').ignoreNBT()),
		'naturesaura:sky_ingot',
		'naturesaura:sky_ingot'
	], 'magicfeather:magicfeather', 'CHAOTIC', 248000000, 'losttrinkets:magical_feathers', 'magical_feathers')

	fusion_crafting([
		'minecraft:nether_star',
		'omnis:vexwart'
	], 'bountifulbaubles:broken_black_dragon_scale', 'DRACONIUM', 1000000, 'bountifulbaubles:black_dragon_scale', 'black_dragon_scale')

	fusion_crafting([
		Item.of('immersiveengineering:capacitor_lv').ignoreNBT(),
		'botania:divining_rod',
		'naturesaura:netherite_finder',
		'ftbic:advanced_circuit'
	], '#forge:plates/invar', 'DRACONIUM', 500000, 'scannable:scanner', 'scanner')

	fusion_crafting([
		'#forge:workbench',
		'#forge:workbench',
		'draconicevolution:draconium_core',
		'draconicevolution:draconium_core',
		'#forge:storage_blocks/draconium',
		'#forge:storage_blocks/draconium',
		'ironfurnaces:iron_furnace',
		'ironfurnaces:iron_furnace',
		'ironfurnaces:iron_furnace',
		'ironfurnaces:iron_furnace'
	], 'ironchest:diamond_chest', 'DRACONIUM', 2000000, 'draconicevolution:draconium_chest', 'draconium_chest')

	fusion_crafting([
		'#forge:rods/diamond',
		'#forge:rods/diamond',
		'#forge:rods/diamond',
		'#forge:rods/diamond',
		'#forge:storage_blocks/draconium_awakened',
		'kubejs:luminescent_core',
		'draconicevolution:wyvern_core',
		'draconicevolution:wyvern_core'
	], 'draconicevolution:wyvern_crafting_injector', 'WYVERN', 256000, 'draconicevolution:awakened_crafting_injector', 'awakened_crafting_injector')

	fusion_crafting([
		'#forge:ingots/invar',
		'#forge:ingots/invar',
		'minecraft:diamond_sword',
		'minecraft:diamond_sword',
		'create:propeller',
		'draconicevolution:draconium_core',
		'#forge:ingots/invar',
		'#forge:ingots/invar'
	], 'minecraft:skeleton_skull', 'DRACONIUM', 32000, 'draconicevolution:grinder', 'grinder')

	var removedItems = ['bountifulbaubles:black_dragon_scale', 'draconicevolution:draconium_chest', 'draconicevolution:grinder'];

	removedItems.forEach(r => {
		event.remove({
			output: r
		})
	})
})