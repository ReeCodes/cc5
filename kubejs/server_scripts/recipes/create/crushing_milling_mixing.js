onEvent('recipes', event => {

	//MIXING

	event.recipes.create.mixing(Item.of('forbidden_arcanus:mundabitur_dust', 2), [
		'minecraft:phantom_membrane',
		'minecraft:blaze_powder',
		'#forge:dusts/arcane_crystal',
		'2x biomesoplenty:nether_crystal'
	]).id('create:mixing/mundabitur_dust')

	event.recipes.create.mixing(Item.of('forbidden_arcanus:corrupti_dust', 2), [
		'#forge:dusts/obsidian',
		'#forge:dusts/arcane_crystal',
		'#bloodmagic:dusts/corrupted'
	]).id('create:mixing/corrupti_dust')

	event.recipes.create.mixing(Item.of('#forge:dusts/hellforged', 1), [
		'2x #bloodmagic:dusts/corrupted',
		'#forge:dusts/thallasium',
		'#forge:dusts/diamond'
	]).id('create:mixing/hellforged_dust')

	event.recipes.create.mixing(Item.of('waystones:warp_dust', 1), [
		'#forge:dusts/dimensional',
		'#forge:dusts/enderium',
		'#forge:dusts/lapis'
	]).id('create:mixing/warp_dust')

	event.recipes.create.mixing(Item.of('woot:si_dust', 2), [
		'create:cinder_flour',
		'#forge:dusts/iron',
		'#forge:dusts/lead',
		'forbidden_arcanus:corrupti_dust'
	]).id('create:mixing/si_dust')
	
	event.recipes.create.mixing(Item.of('forbidden_arcanus:obsidian_with_iron', 2), [
		'#forge:dusts/obsidian',
		['#forge:nuggets/iron', 'dustrial_decor:rusty_iron_nugget'],
		'minecraft:crying_obsidian'
	]).id('create:mixing/obsidian_with_iron')
	
	event.recipes.create.mixing(Item.of('ftbic:mixed_metal_blend', 3), [
		'#forge:dusts/aluminum',
		'#forge:dusts/lead', 
		'#forge:dusts/bronze'
	]).id('create:mixing/mixed_metal_blend')

	//CRUSHING
	
	event.recipes.create.crushing([
		Item.of('#forge:gems/mana').withChance(0.167)
	], 'betterendforge:umbrella_tree_cluster').id('create:crushing/umbrella_tree_cluster')
	
	event.recipes.create.crushing([
		Item.of('betterendforge:crystal_shards').withChance(0.33),
		Item.of('betterendforge:crystal_shards')
	], 'betterendforge:aurora_crystal').id('create:crushing/aurora_crystal')

	//occultism

	event.recipes.create.crushing([
		Item.of('3x occultism:crushed_end_stone')
	], 'minecraft:end_stone').id('create:crushing/end_stone')

	//misc
	event.recipes.create.crushing([
		Item.of('minecraft:prismarine_shard').withChance(0.5),
		Item.of('minecraft:prismarine_crystals').withChance(0.1)
	], 'minecraft:prismarine').id('create:crushing/prismarine')

	event.recipes.create.crushing([
		Item.of('minecraft:prismarine_shard').withChance(0.5),
		Item.of('minecraft:prismarine_crystals').withChance(0.1)
	], 'minecraft:prismarine_bricks').id('create:crushing/prismarine_bricks')

	event.recipes.create.crushing([
		Item.of('minecraft:prismarine_shard').withChance(0.5),
		Item.of('minecraft:black_dye').withChance(0.05)
	], 'minecraft:dark_prismarine').id('create:crushing/dark_prismarine')

	event.recipes.create.crushing([
		Item.of('4x minecraft:diamond'),
		Item.of('2x minecraft:diamond').withChance(0.2)
	], 'quark:diamond_heart').id('create:crushing/diamond_heart')
	
	//MANUSCRIPTS
	event.recipes.create.crushing([
		Item.of('#forge:dusts/wood')
	], 'iceandfire:manuscript').id('create:crushing/manuscript_to_sawdust')

	//BUFFLON SEATS

	event.recipes.create.crushing([
		'pandoras_creatures:bufflon_hide',
		Item.of('#forge:dusts/wood', 3),
		Item.of('#forge:dusts/wood').withChance(0.5),
		'minecraft:string',
		Item.of('minecraft:string').withChance(0.5),
		Item.of('quark:ravager_hide').withChance(0.05)
	], 'pandoras_creatures:bufflon_saddle')

	event.recipes.create.crushing([
		Item.of('pandoras_creatures:bufflon_hide', 2),
		Item.of('minecraft:iron_ingot', 2),
		Item.of('minecraft:iron_nugget', 4).withChance(0.25),
		Item.of('#forge:dusts/wood', 3),
		'minecraft:string',
		Item.of('minecraft:string').withChance(0.5),
		Item.of('quark:ravager_hide').withChance(0.05)
	], 'pandoras_creatures:bufflon_player_seats')

	event.recipes.create.crushing([
		Item.of('minecraft:iron_ingot', 4),
		Item.of('minecraft:iron_ingot', 2).withChance(0.5),
		Item.of('minecraft:iron_nugget', 4).withChance(0.25),
		Item.of('#forge:dusts/wood', 3),
		Item.of('#forge:dusts/wood').withChance(0.5),
		'minecraft:string',
		Item.of('minecraft:string').withChance(0.5)
	], 'pandoras_creatures:bufflon_large_storage')

	event.recipes.create.crushing([
		'pandoras_creatures:bufflon_hide',
		Item.of('minecraft:iron_ingot', 4),
		Item.of('minecraft:iron_nugget', 4).withChance(0.25),
		Item.of('#forge:dusts/wood', 3),
		'minecraft:string',
		Item.of('minecraft:string').withChance(0.5),
		Item.of('quark:ravager_hide').withChance(0.05)
	], 'pandoras_creatures:bufflon_small_storage')

	//MILLING
	
	//MANUSCRIPTS
	event.recipes.create.milling([
		Item.of('#forge:dusts/wood')
	], 'iceandfire:manuscript').id('create:milling/manuscript_to_sawdust')

	//SPLASHING
	event.recipes.createSplashing([
		'dustrial_decor:rusty_sheet_metal'
	], 'dustrial_decor:sheet_metal').id('create:splashing/sheet_metal')
	
	event.recipes.createSplashing([
		Item.of('betterendforge:ender_shard').withChance(0.25),
		Item.of('#forge:dusts/draconium').withChance(0.12),
		Item.of('enigmaticlegacy:astral_dust').withChance(0.04),
		Item.of('enigmaticlegacy:etherium_ore').withChance(0.01)
	], 'betterendforge:endstone_dust').id('create:splashing/endstone_dust')
});