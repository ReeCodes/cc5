onEvent('recipes', event => {

	event.shapeless('environmental:cattail_thatch', [
		['byg:cattail', 'biomesoplenty:cattail'],
		['byg:cattail', 'biomesoplenty:cattail'],
		['byg:cattail', 'biomesoplenty:cattail'],
		['byg:cattail', 'biomesoplenty:cattail']
	]).id('minecraft:shapeless/thatch_from_cattail')
	
	event.shapeless('3x bountifulbaubles:ender_dragon_scale', ['minecraft:dragon_head', 'forbidden_arcanus:mystical_dagger']).id('minecraft:shapeless/ender_dragon_scales')

	event.shapeless('kubejs:dust_size_down', ['minecraft:bowl', 'rootsclassic:old_root', 'tconstruct:earth_slime_crystal', 'naturesaura:gold_powder']).id('minecraft:shapeless/dust_size_down')
	event.shapeless('kubejs:dust_size_up', ['minecraft:bowl', 'rootsclassic:verdant_sprig', 'tconstruct:sky_slime_crystal', 'naturesaura:gold_powder']).id('minecraft:shapeless/dust_size_up')

	event.shapeless('kubejs:unstable_endershard', ['druidcraft:moonstone', 'charm:endermite_powder', ['mysticalworld:young_pearl', 'forbidden_arcanus:ender_pearl_fragment'], 'druidcraft:amber']).id('minecraft:shapeless/unstable_endershard')

	event.shapeless('industrialforegoing:plastic', ['pneumaticcraft:plastic', 'pneumaticcraft:plastic', 'pneumaticcraft:plastic']).id('minecraft:shapeless/pneumatic_plastic')

	event.shapeless('eidolon:pewter_blend', ['#forge:ingots/platinum', '#forge:ingots/lead']).id('minecraft:shapeless/pewter_blend')

	event.shapeless('resourcefulbees:wax', 'charm:beeswax').id('minecraft:shapeless/beeswax_conversion')

	event.shapeless('3x minecraft:leather', 'cnb:yeti_hide').id('minecraft:shapeless/leather_from_yeti_hide')

	event.shapeless('quark:oak_chest', '#forge:chests/wooden').id('minecraft:shapeless/chest_conversion')
	
	event.shapeless('4x tropicraft:mangrove_planks', [['tropicraft:red_mangrove_log', 'tropicraft:light_mangrove_log', 'tropicraft:black_mangrove_log', 'tropicraft:stripped_mangrove_log']]).id('tropicraft:mangrove_planks')

	event.shapeless('crumbs:oak_barrel', [
		['#forge:barrels/wooden', '#charm:barrels', '/crumbs:.+_barrel/']
	]).id('minecraft:shapeless/barrel_conversion')

	event.shapeless('minecraft:crafting_table', [
		['#forge:workbenches', '#forge:workbench', '/betterendforge:.+_crafting_table/']
	]).id('minecraft:shapeless/bench_conversion')

	event.shapeless('4x upgrade_aquatic:driftwood_planks', 'aquaculture:driftwood').id('minecraft:shapeless/driftwood_planks')

	event.shapeless('tropicraft:pina_colada', ['#forge:fruits/pineapple', '#forge:crops/coconut', 'tropicraft:bamboo_mug']).id('minecraft:shapeless/tropicraft_pc')

	event.shapeless('mysticalworld:nautilus_horn', ['minecraft:flint', 'minecraft:nautilus_shell'])

	//barrels
	event.shapeless('metalbarrels:wood_to_copper', 'metalbarrels:copper_barrel').id('minecraft:shapeless/wood_to_copper')
	event.shapeless('metalbarrels:copper_to_iron', 'metalbarrels:iron_barrel').id('minecraft:shapeless/copper_to_iron')
	event.shapeless('metalbarrels:iron_to_silver', 'metalbarrels:silver_barrel').id('minecraft:shapeless/iron_to_silver')
	event.shapeless('metalbarrels:silver_to_gold', 'metalbarrels:gold_barrel').id('minecraft:shapeless/silver_to_gold')
	event.shapeless('metalbarrels:gold_to_diamond', 'metalbarrels:diamond_barrel').id('minecraft:shapeless/gold_to_diamond')
	event.shapeless('metalbarrels:diamond_to_obsidian', 'metalbarrels:obsidian_barrel').id('minecraft:shapeless/diamond_to_obsidian')
	event.shapeless('metalbarrels:diamond_to_crystal', 'metalbarrels:crystal_barrel').id('minecraft:shapeless/diamond_to_crystal')

	//tallows
	event.shapeless('quark:tallow', 'eidolon:tallow').id('minecraft:shapeless/eidolon_tallow_conversion')
	event.shapeless('quark:tallow', 'occultism:tallow').id('minecraft:shapeless/occultism_tallow_conversion')

	//silt
	event.shapeless('bountifulbaubles:spectral_silt', ['bountifulbaubles:disintegration_tablet', 'bountifulbaubles:bezoar'])
	event.shapeless('bountifulbaubles:spectral_silt', ['bountifulbaubles:disintegration_tablet', ['#artifacts:artifacts']])
	event.shapeless('bountifulbaubles:spectral_silt', ['bountifulbaubles:disintegration_tablet', ['/statues:.+_statue/']])
	event.shapeless('bountifulbaubles:spectral_silt', ['bountifulbaubles:disintegration_tablet', [Ingredient.of(['@relics']).filter(Ingredient.of([
		'/relics:.+_ingot/',
		'/relics:chalk/',
		'relics:flaming_amber_geode',
		'relics:flaming_amber_dust',
		'relics:chrysolite',
		'/relics:rune.+/',
		'relics:blank_rune',
		'/relics:.+scrap/',
		'relics:pedestal',
		'relics:runic_altar',
		'relics:runic_anvil',
		'/relics:runic_hammer/',
		'relics:coal_parchment',
		'relics:relic_contract',
		'relics:bloody_feather',
		'relics:bloody_lectern'
	]).not())]])
	
	event.shapeless('bountifulbaubles:spectral_silt', ['bountifulbaubles:disintegration_tablet', [Ingredient.of(['@enigmaticlegacy']).filter(Ingredient.of([
		'#curios:spellstone',
		'#curios:ring',
		'#curios:scroll',
		'#curios:charm'
	]))]])

	//old_stuff conversion
	event.shapeless('#forge:gems/sapphire', 'iceandfire:sapphire_gem')
	event.shapeless('#forge:ores/sapphire', 'iceandfire:sapphire_ore')
	event.shapeless('#forge:storage_blocks/sapphire', 'iceandfire:sapphire_block')

	event.shapeless('#forge:ingots/copper', 'iceandfire:copper_ingot')
	event.shapeless('#forge:nuggets/copper', 'iceandfire:copper_nugget')

	event.shapeless('#forge:ores/copper', 'iceandfire:copper_ore')
	event.shapeless('#forge:ores/copper', 'create:copper_ore')

	event.shapeless('#forge:ingots/silver', 'iceandfire:silver_ingot')
	event.shapeless('#forge:nuggets/silver', 'iceandfire:silver_nugget')
	event.shapeless('#forge:ores/silver', 'iceandfire:silver_ore')

	event.shapeless('#forge:ingots/platinum', 'wyrmroost:platinum_ingot')
	event.shapeless('9x #forge:ingots/platinum', 'wyrmroost:platinum_block')
	event.shapeless('#forge:ores/platinum', 'wyrmroost:platinum_ore')

	event.shapeless('#forge:ingots/lead', 'eidolon:lead_ingot')
	event.shapeless('eidolon:lead_ingot', '#forge:ingots/lead')
	event.shapeless('#forge:nuggets/lead', 'eidolon:lead_nugget')
	event.shapeless('9x #forge:ingots/lead', 'eidolon:lead_block')

	let metals = ['copper', 'electrum', 'aluminum', 'steel', 'lead', 'iron', 'gold', 'enderium'];
	metals.forEach(m => {
		event.shapeless('#forge:wires/' + m, ['#forge:plates/' + m, Item.of('immersiveengineering:wirecutter').ignoreNBT()]).id('minecraft:shapeless/wires' + m)
	})
});