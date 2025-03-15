onEvent('recipes', event => {

	let na_ritual = (inputs, sapling, result, time, id) => {
		event.recipes.naturesaura.tree_ritual({
			ingredients: inputs.map(r => Ingredient.of(r).toJson()),
			sapling: Item.of(sapling).toJson(),
			output: Ingredient.of(result).toResultJson(),
			time: time
		}).id('naturesaura:tree_ritual/' + id)
	}

	na_ritual([
			'forbidden_arcanus:arcane_crystal_dust',
			'botania:world_seed',
			'botania:vine_ball',
			'botania:keep_ivy',
			'xreliquary:fertile_essence',
			'eidolon:warped_sprouts',
			'rootsclassic:verdant_sprig',
			'botania:overgrowth_seed'
		], 'twilightforest:hollow_oak_sapling',
		'enigmaticlegacy:infinimeal',
		2000,
		'infinimeal')
		
	na_ritual([
			'botania:black_petal_block',
			'botania:black_petal_block',
			'botania:black_petal_block',
			'botania:black_petal_block',
			'xreliquary:glowing_water',
			'minecraft:wither_rose',
			'botania:black_lotus',
			'naturesaura:end_flower'
		], 'byg:withering_oak_sapling',
		'botania:blacker_lotus',
		400,
		'blacker_lotus')
		
	na_ritual([
			'naturesaura:token_joy',
			'/minecraft:(player|zombie)_head/',
			'statues:statue_core',
			'minecraft:clay'
		], 'minecraft:acacia_sapling',
		'statues:player_statue',
		200,
		'player_statue')
		
		//myf
		na_ritual([
			'forbidden_arcanus:dark_soul',
			'naturesaura:token_rage',
			'naturesaura:token_terror',
			'bloodmagic:largebloodstonebrick'
		], 'biomesoplenty:dead_sapling',
		'meetyourfight:devils_ante',
		1000,
		'devils_ante')
		
		na_ritual([
			'forbidden_arcanus:dark_soul',
			'naturesaura:token_rage',
			'naturesaura:token_terror',
			'minecraft:bell'
		], 'biomesoplenty:dead_sapling',
		'meetyourfight:haunted_bell',
		1000,
		'haunted_bell')
		
		na_ritual([
			'forbidden_arcanus:dark_soul',
			'naturesaura:token_rage',
			'naturesaura:token_terror',
			'aquaculture:fish_bones'
		], 'biomesoplenty:dead_sapling',
		'meetyourfight:fossil_bait',
		1000,
		'fossil_bait')
		
		na_ritual([
			'#forge:ingots/arcane_gold',
			'naturesaura:tainted_gold',
			'malum:hallowed_gold_ingot',
			'naturesaura:gold_powder'
		], 'malum:runewood_sapling',
		'forbidden_arcanus:arcane_gold_ingot',
		250,
		'refined_arcane_gold_ingot')
});