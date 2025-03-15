onEvent('recipes', event => {

let be_infusion = (input, catalysts, result, time, id) => {
  event.recipes.betterendforge.infusion({
	input: Ingredient.of(input).toJson(),
    catalysts: catalysts.map(function(inputs) {	return { item: Item.of(inputs.item), index: inputs.index } }),
	output: result,
	time: time
  }).id('betterendforge:infusion/'+id)
}
	//apo_tomes
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: 'ars_nouveau:mythical_clay', index: 2}, 
	{item: 'quark:cactus_paste', index: 4}, 
	{item: 'ars_nouveau:mythical_clay', index: 6}
	],
	'apotheosis:null_book', 150, 'null_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: 'mana-and-artifice:vinteum_block', index: 2}, 
	{item: Item.of('minecraft:chainmail_helmet').ignoreNBT(), index: 4}, 
	{item: 'mana-and-artifice:vinteum_block', index: 6}
	],
	'apotheosis:armor_head_book', 150, 'armor_head_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: 'mana-and-artifice:vinteum_block', index: 2}, 
	{item: Item.of('minecraft:chainmail_chestplate').ignoreNBT(), index: 4}, 
	{item: 'mana-and-artifice:vinteum_block', index: 6}
	],
	'apotheosis:armor_chest_book', 150, 'armor_chest_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: 'mana-and-artifice:vinteum_block', index: 2}, 
	{item: Item.of('minecraft:chainmail_leggings').ignoreNBT(), index: 4}, 
	{item: 'mana-and-artifice:vinteum_block', index: 6}
	],
	'apotheosis:armor_legs_book', 150, 'armor_legs_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: 'mana-and-artifice:vinteum_block', index: 2}, 
	{item: Item.of('minecraft:chainmail_boots').ignoreNBT(), index: 4}, 
	{item: 'mana-and-artifice:vinteum_block', index: 6}
	],
	'apotheosis:armor_feet_book', 150, 'armor_feet_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: '#forge:storage_blocks/lapis', index: 2}, 
	{item: 'betterendforge:thallasium_sword_blade', index: 4}, 
	{item: '#forge:storage_blocks/lapis', index: 6}
	],
	'apotheosis:weapon_book', 150, 'weapon_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: '#forge:storage_blocks/lapis', index: 2}, 
	{item: 'betterendforge:thallasium_pickaxe_head', index: 4}, 
	{item: '#forge:storage_blocks/lapis', index: 6}
	],
	'apotheosis:digger_book', 150, 'digger_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: '#forge:storage_blocks/lapis', index: 2}, 
	{item: 'aquaculture:iron_hook', index: 4}, 
	{item: '#forge:storage_blocks/lapis', index: 6}
	],
	'apotheosis:fishing_rod_book', 150, 'fishing_rod_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: '#forge:storage_blocks/lapis', index: 2}, 
	{item: 'botania:mana_string', index: 4}, 
	{item: '#forge:storage_blocks/lapis', index: 6}
	],
	'apotheosis:bow_book', 150, 'bow_book');
	
	be_infusion(Item.of('minecraft:enchanted_book').ignoreNBT(), [
	{item: 'betterendforge:enchanted_petal', index: 0}, 
	{item: 'ars_nouveau:mythical_clay', index: 2}, 
	{item: Item.of('minecraft:anvil').ignoreNBT(), index: 4}, 
	{item: 'ars_nouveau:mythical_clay', index: 6}
	],
	'apotheosis:scrap_tome', 150, 'scrap_tome');

	//rarity_shards
	be_infusion('quark:lime_rune', [
	{item: 'bountifulbaubles:spectral_silt', index: 0}, 
	{item: 'apotheosis:common_shard', index: 2}, 
	{item: 'apotheosis:common_shard', index: 4}, 
	{item: 'apotheosis:common_shard', index: 6}
	],
	'apotheosis:uncommon_shard', 200, 'uncommon_shard');
	
	be_infusion('quark:blue_rune', [
	{item: 'bountifulbaubles:spectral_silt', index: 0}, 
	{item: 'apotheosis:uncommon_shard', index: 2}, 
	{item: 'apotheosis:uncommon_shard', index: 4}, 
	{item: 'apotheosis:uncommon_shard', index: 6}
	],
	'apotheosis:rare_shard', 200, 'rare_shard');
	
	be_infusion('quark:pink_rune', [
	{item: 'bountifulbaubles:spectral_silt', index: 0}, 
	{item: 'apotheosis:rare_shard', index: 2}, 
	{item: 'apotheosis:rare_shard', index: 4}, 
	{item: 'apotheosis:rare_shard', index: 6}
	],
	'apotheosis:epic_shard', 200, 'epic_shard');
	
	be_infusion('quark:orange_rune', [
	{item: 'bountifulbaubles:spectral_silt', index: 0}, 
	{item: 'apotheosis:epic_shard', index: 2}, 
	{item: 'apotheosis:epic_shard', index: 4}, 
	{item: 'apotheosis:epic_shard', index: 6}
	],
	'apotheosis:mythic_shard', 300, 'mythic_shard');
	
	be_infusion('quark:rainbow_rune', [
	{item: 'apotheosis:mythic_shard', index: 0}, 
	{item: 'enigmaticlegacy:astral_dust', index: 1}, 
	{item: 'apotheosis:mythic_shard', index: 2}, 
	{item: 'enigmaticlegacy:astral_dust', index: 3},
	{item: 'apotheosis:mythic_shard', index: 4}, 
	{item: 'enigmaticlegacy:astral_dust', index: 5},
	{item: 'apotheosis:mythic_shard', index: 6},
	{item: 'enigmaticlegacy:astral_dust', index: 7}
	],
	'apotheosis:ancient_shard', 400, 'ancient_shard');

	let hardCodedItems = [
		'apotheosis:null_book',
		'apotheosis:armor_head_book',
		'apotheosis:armor_chest_book', 
		'apotheosis:armor_legs_book', 
		'apotheosis:armor_feet_book', 
		'apotheosis:weapon_book', 
		'apotheosis:digger_book', 
		'apotheosis:fishing_rod_book', 
		'apotheosis:bow_book', 
		'apotheosis:scrap_tome'
	];
	
	hardCodedItems.forEach((r) => {
		event.shaped(r, [
			'   ',
			' A ',
			'   '
		], {
			A: Item.of('minecraft:barrier', "{display:{Name:'{\"text\":\"Use the Infusion recipe\"}'}}")
		}).id(r)
	});
})