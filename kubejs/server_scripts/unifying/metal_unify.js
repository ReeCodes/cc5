const ee_unused = [
	'osmium',
	'fluorite',
	'certus_quartz',
	'charged_certus_quartz',
	'bitumen',
	'cinnabar',
	'apatite',
	'potassium_nitrate',
	'ruby',
	'peridot',
	'fluix',
	'graphite',
	'cast_iron'
	];
	

onEvent('item.tags', event => {
	
    function add(tag, id) {
        event.get(tag).add(id);
    };

    function remove(tag, id) {
        event.get(tag).remove(id);
    };
	
	//NORMAL-ORCHID-RARITIES
	add('botania:orechid_ores/common', [
	'emendatusenigmatica:coal_ore', 
	'emendatusenigmatica:iron_ore', 
	'emendatusenigmatica:copper_ore', 
	'emendatusenigmatica:aluminum_ore', 
	'emendatusenigmatica:zinc_ore'
	]);
	
	add('botania:orechid_ores/uncommon', [
	'emendatusenigmatica:bitumen_ore', 
	'emendatusenigmatica:lead_ore', 
	'emendatusenigmatica:tin_ore', 
	'emendatusenigmatica:sulfur_ore', 
	'emendatusenigmatica:redstone_ore', 
	'emendatusenigmatica:lapis_ore', 
	'emendatusenigmatica:quartz_ore',
	'mana-and-artifice:vinteum_ore', 
	'forcecraft:power_ore', 
	'evilcraft:dark_ore', 
	'druidcraft:fiery_glass_ore'
	]);
	
	add('botania:orechid_ores/rare', [
	'emendatusenigmatica:nickel_ore', 
	'emendatusenigmatica:dimensional_ore', 
	'emendatusenigmatica:arcane_ore', 
	'emendatusenigmatica:gold_ore', 
	'emendatusenigmatica:silver_ore',
	'druidcraft:amber_ore', 
	'ob_core:platinum_ore', 
	'druidcraft:rockroot_ore', 
	'forbidden_arcanus:arcane_crystal_ore', 
	'mysticalworld:quicksilver_ore'
	]);
	
	add('botania:orechid_ores/epic', [
	'emendatusenigmatica:sapphire_ore', 
	'emendatusenigmatica:diamond_ore', 
	'emendatusenigmatica:emerald_ore', 
	'emendatusenigmatica:cobalt_ore',
	'forbidden_arcanus:xpetrified_ore', 
	'calemiutils:raritanium_ore', 
	'wyrmroost:blue_geode_ore', 
	'forbidden_arcanus:runestone', 
	'kubejs:fossilized_remains', 
	'druidcraft:moonstone_ore', 
	'iceandfire:amythest_ore'
	]);
	
	add('botania:orechid_ores/ultra_rare', [
	'emendatusenigmatica:iridium_ore', 
	'emendatusenigmatica:uranium_ore',
	'forbidden_arcanus:stella_arcanum',
	'draconicevolution:overworld_draconium_ore'
	]);
	
	//NETHER-ORCHID-RARITIES
	add('botania:orechid_ores_ignem/common', [
	'emendatusenigmatica:coal_netherrack_ore', 
	'emendatusenigmatica:iron_netherrack_ore', 
	'emendatusenigmatica:copper_netherrack_ore', 
	'emendatusenigmatica:aluminum_netherrack_ore', 
	'emendatusenigmatica:zinc_netherrack_ore',
	'cinderscapes:sulfur_quartz_ore', 
	'cinderscapes:rose_quartz_ore', 
	'cinderscapes:smoky_quartz_ore',
	'minecraft:glowstone',
	'minecraft:blackstone'
	]);
	
	add('botania:orechid_ores_ignem/uncommon', [
	'emendatusenigmatica:bitumen_netherrack_ore', 
	'emendatusenigmatica:lead_netherrack_ore', 
	'emendatusenigmatica:tin_netherrack_ore', 
	'emendatusenigmatica:sulfur_netherrack_ore', 
	'emendatusenigmatica:redstone_netherrack_ore', 
	'emendatusenigmatica:lapis_netherrack_ore', 
	'emendatusenigmatica:quartz_netherrack_ore',
	'byg:emeraldite_ore'
	]);
	
	add('botania:orechid_ores_ignem/rare', [
	'emendatusenigmatica:nickel_netherrack_ore', 
	'emendatusenigmatica:dimensional_netherrack_ore', 
	'emendatusenigmatica:arcane_netherrack_ore', 
	'emendatusenigmatica:gold_netherrack_ore', 
	'emendatusenigmatica:silver_netherrack_ore'
	]);
	
	add('botania:orechid_ores_ignem/epic', [
	'emendatusenigmatica:sapphire_netherrack_ore', 
	'emendatusenigmatica:diamond_netherrack_ore', 
	'emendatusenigmatica:emerald_netherrack_ore', 
	'emendatusenigmatica:cobalt_netherrack_ore',
	'wyrmroost:red_geode_ore'
	]);
	
	add('botania:orechid_ores_ignem/ultra_rare', [
	'emendatusenigmatica:iridium_netherrack_ore', 
	'emendatusenigmatica:uranium_netherrack_ore',
	'minecraft:ancient_debris'
	]);
	
	//ITEMS
	
	//ORES - REMOVE
	
	remove('forge:ores', [
	//cobalt
	'tconstruct:cobalt_ore',
	//copper
	'tconstruct:copper_ore', 'create:copper_ore', 'iceandfire:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper', 'mysticalworld:copper_ore',
	//silver
	'occultism:silver_ore', 'immersiveengineering:ore_silver', 'iceandfire:silver_ore', 'mysticalworld:silver_ore',
	//lead
	'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'mysticalworld:lead_ore',
	//tin
	'mysticalworld:tin_ore',
	//zinc
	'create:zinc_ore',
	//aluminum
	'immersiveengineering:ore_aluminum',
	//sapphire
	'mysticalworld:sapphire_ore', 'iceandfire:sapphire_ore',
	//nickel
	'immersiveengineering:ore_nickel', 
	//uranium
	'immersiveengineering:ore_uranium',
	//uranite
	'powah:uraninite_ore_poor', 'powah:uraninite_ore', 'powah:uraninite_ore_dense',
	//source
	'ars_nouveau:arcane_ore',
	//sulfur
	'cinderscapes:sulfur_ore',
	//dimensional
	'rftoolsbase:dimensionalshard_overworld',
	'rftoolsbase:dimensionalshard_nether',
	'rftoolsbase:dimensionalshard_end'
	]);
	remove('forge:ores/cobalt', ['tconstruct:cobalt_ore']);
	remove('forge:ores/copper', ['tconstruct:copper_ore', 'create:copper_ore', 'iceandfire:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper', 'mysticalworld:copper_ore']);
	remove('forge:ores/silver', ['occultism:silver_ore', 'immersiveengineering:ore_silver', 'iceandfire:silver_ore', 'mysticalworld:silver_ore']);
	remove('forge:ores/lead', ['eidolon:lead_ore', 'immersiveengineering:ore_lead', 'mysticalworld:lead_ore']);
	remove('forge:ores/tin', ['mysticalworld:tin_ore']);
	remove('forge:ores/zinc', ['create:zinc_ore']);
	remove('forge:ores/aluminum', ['immersiveengineering:ore_aluminum']);
	remove('forge:ores/sapphire', ['iceandfire:sapphire_ore', 'mysticalworld:sapphire_ore']);
	remove('forge:ores/nickel', 'immersiveengineering:ore_nickel');
	remove('forge:ores/uranium', 'immersiveengineering:ore_uranium');
	remove('forge:ores/uranite_poor', 'powah:uraninite_ore_poor');
	remove('forge:ores/uranite', 'powah:uraninite_ore');
	remove('forge:ores/uranite_dense', 'powah:uraninite_ore_dense');
	remove('forge:ores/mana', 'ars_nouveau:arcane_ore');
	remove('forge:ores/sulfur', 'cinderscapes:sulfur_ore');
	//cinderscapes_quartz
	remove('forge:ores/quartz', 'cinderscapes:smoky_quartz_ore');
	remove('forge:ores/quartz', 'cinderscapes:rose_quartz_ore');
	remove('forge:ores/quartz', 'cinderscapes:sulfur_quartz_ore');
	//raw_end_amber
	remove('forge:ores/amber', 'betterendforge:amber_ore');
	
	//ORES - ADD
	
	add('forge:ores', [
	//platinum
	'ob_core:platinum_ore', 'ob_core:platinum_raw',
	//power
	'forcecraft:power_ore', 
	//remains
	'kubejs:fossilized_remains'
	]);
	//special_platinum
	add('forge:ores/platinum', ['ob_core:platinum_ore', 'ob_core:platinum_raw']);
	add('forge:ores/quartz', ['byg:brimstone_nether_quartz_ore', 'byg:blue_nether_quartz_ore']);
	//missing
	add('forge:ores/amethyst', 'iceandfire:amythest_ore');
	add('forge:ores/dark_gem', 'evilcraft:dark_ore');
	add('forge:ores/rock_root', 'druidcraft:rockroot_ore');
	add('forge:ores/fiery_glass', 'druidcraft:fiery_glass_ore');
	add('forge:ores/raritanium', 'calemiutils:raritanium_ore');
	add('forge:ores/vinteum', 'mana-and-artifice:vinteum_ore');
	add('forge:ores/emeraldite', 'byg:emeraldite_ore');
	add('forge:ores/power', 'forcecraft:power_ore');
	add('forge:ores/remains', 'kubejs:fossilized_remains');
	//cinderscapes_quartz
	add('forge:ores/smokey_quartz', 'cinderscapes:smoky_quartz_ore');
	add('forge:ores/rose_quartz', 'cinderscapes:rose_quartz_ore');
	add('forge:ores/sulfur_quartz', 'cinderscapes:sulfur_quartz_ore');
	//raw_end_amber
	add('forge:ores/end_amber', 'betterendforge:amber_ore');
	
	//METALS/GEMS - REMOVE
	
	//GEMS
	
	remove('forge:gems', [
	//sapphire
	'iceandfire:sapphire_gem', 'mysticalworld:sapphire',
	//source
	'ars_nouveau:mana_gem'
	]);
	remove('forge:gems/sapphire', ['iceandfire:sapphire_gem', 'mysticalworld:sapphire']);
	remove('forge:gems/mana', 'ars_nouveau:mana_gem');
	//sulfur
	remove('forge:gems/sulfur', 'cinderscapes:sulfur');
	//bitumen
	remove('forge:bitumen', 'immersivepetroleum:bitumen');
	//cinderscapes_quartz
	remove('forge:gems/quartz', 'cinderscapes:smoky_quartz');
	remove('forge:gems/quartz', 'cinderscapes:rose_quartz');
	remove('forge:gems/quartz', 'cinderscapes:sulfur_quartz');
	
	event.removeAllTagsFrom('immersiveengineering:coal_coke');
	
    //INGOTS
	
	remove('forge:ingots', [
	//cobalt
	'tconstruct:cobalt_ingot',
	//copper
	'create:copper_ingot', 'occultism:copper_ingot', 'iceandfire:copper_ingot', 'immersiveengineering:ingot_copper', 'tconstruct:copper_ingot', 'mysticalworld:copper_ingot',
	//silver
	'occultism:silver_ingot', 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver', 'mysticalworld:silver_ingot',
	//lead
	'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'mysticalworld:lead_ingot',
	//tin
	'mysticalworld:tin_ingot',
	//aluminum
	'immersiveengineering:ingot_aluminum',
	//nickel
	'immersiveengineering:ingot_nickel',
	//uranium
	'immersiveengineering:ingot_uranium',
	//brass
	'create:brass_ingot',
	//zinc
	'create:zinc_ingot',
	//constantan
	'immersiveengineering:ingot_constantan',
	//electrum
	'immersiveengineering:ingot_electrum',
	//steel
	'immersiveengineering:ingot_steel',
	//platinum
	'wyrmroost:platinum_ingot'	
	]);
	remove('forge:ingots/cobalt', ['tconstruct:cobalt_ingot']);
	remove('forge:ingots/copper', ['create:copper_ingot', 'occultism:copper_ingot', 'iceandfire:copper_ingot', 'immersiveengineering:ingot_copper', 'tconstruct:copper_ingot', 'mysticalworld:copper_ingot']);
	remove('forge:ingots/silver', ['occultism:silver_ingot', 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver', 'mysticalworld:silver_ingot']);
	remove('forge:ingots/lead', ['eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'mysticalworld:lead_ingot']);
	remove('forge:ingots/tin', ['mysticalworld:tin_ingot']);
	remove('forge:ingots/aluminum', ['immersiveengineering:ingot_aluminum']);
	remove('forge:ingots/nickel', ['immersiveengineering:ingot_nickel']);
	remove('forge:ingots/uranium', ['immersiveengineering:ingot_uranium']);
	remove('forge:ingots/brass', ['create:brass_ingot']);
	remove('forge:ingots/zinc', ['create:zinc_ingot']);
	remove('forge:ingots/constantan', ['immersiveengineering:ingot_constantan']);
	remove('forge:ingots/electrum', ['immersiveengineering:ingot_electrum']);
	remove('forge:ingots/steel', ['immersiveengineering:ingot_steel']);
	remove('forge:ingots/platinum', ['wyrmroost:platinum_ingot']);
	remove('forge:ingots/arcane_gold', ['forbidden_arcanus:arcane_gold_ingot']);
	
	//create_ingots tag
	remove('create:create_ingots', ['create:zinc_ingot', 'create:brass_ingot', 'create:copper_ingot']);
	
	//NUGGETS
	
	remove('forge:nuggets', [
	//cobalt
	'tconstruct:cobalt_nugget',
	//copper
	'create:copper_nugget', 'occultism:copper_nugget', 'iceandfire:copper_nugget', 'immersiveengineering:nugget_copper', 'tconstruct:copper_nugget', 'mysticalworld:copper_nugget',
	//silver
	'occultism:silver_nugget', 'iceandfire:silver_nugget', 'immersiveengineering:nugget_silver', 'mysticalworld:silver_nugget',
	//lead
	'eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'mysticalworld:lead_nugget',
	//tin
	'mysticalworld:tin_nugget',
	//aluminum
	'immersiveengineering:nugget_aluminum',
	//nickel
	'immersiveengineering:nugget_nickel',
	//uranium
	'immersiveengineering:nugget_uranium',
	//brass
	'create:brass_nugget',
	//zinc
	'create:zinc_nugget',
	//constantan
	'immersiveengineering:nugget_constantan',
	//electrum
	'immersiveengineering:nugget_electrum',
	//steel
	'immersiveengineering:nugget_steel'
	]);
	remove('forge:nuggets/cobalt', ['tconstruct:cobalt_nugget']);
	remove('forge:nuggets/copper', ['create:copper_nugget', 'occultism:copper_nugget', 'iceandfire:copper_nugget', 'immersiveengineering:nugget_copper', 'tconstruct:copper_nugget', 'mysticalworld:copper_nugget']);
	remove('forge:nuggets/lead', ['eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'mysticalworld:lead_nugget']);
	remove('forge:nuggets/silver', ['occultism:silver_nugget', 'iceandfire:silver_nugget', 'immersiveengineering:nugget_silver', 'mysticalworld:silver_nugget']);
	remove('forge:nuggets/tin', ['mysticalworld:tin_nugget']);
	remove('forge:nuggets/aluminum', ['immersiveengineering:nugget_aluminum']);
	remove('forge:nuggets/nickel', ['immersiveengineering:nugget_nickel']);
	remove('forge:nuggets/uranium', ['immersiveengineering:nugget_uranium']);
	remove('forge:nuggets/brass', ['create:brass_nugget']);
	remove('forge:nuggets/zinc', ['create:zinc_nugget']);
	remove('forge:nuggets/constantan', ['immersiveengineering:nugget_constantan']);
	remove('forge:nuggets/electrum', ['immersiveengineering:nugget_electrum']);
	remove('forge:nuggets/steel', ['immersiveengineering:nugget_steel']);
	//missing
	remove('forge:nuggets/netherite', ['tconstruct:netherite_nugget']);
	
	//STORAGE_BLOCKS
	
	remove('forge:storage_blocks', [
	//cobalt
	'tconstruct:cobalt_block',
	//copper
	'create:copper_block', 'occultism:copper_block', 'iceandfire:copper_block', 'immersiveengineering:storage_copper', 'tconstruct:copper_block', 'mysticalworld:copper_block',
	//lead
	'eidolon:lead_block', 'immersiveengineering:storage_lead', 'mysticalworld:lead_block',
	//silver
	'occultism:silver_block', 'iceandfire:silver_block', 'immersiveengineering:storage_silver', 'mysticalworld:silver_block',
	//tin
	'mysticalworld:tin_block',
	//aluminum
	'immersiveengineering:storage_aluminum',
	//nickel
	'immersiveengineering:storage_nickel',
	//uranium
	'immersiveengineering:storage_uranium',
	//brass
	'create:brass_block',
	//zinc
	'create:zinc_block',
	//constantan
	'immersiveengineering:storage_constantan',
	//electrum
	'immersiveengineering:storage_electrum',
	//steel
	'immersiveengineering:storage_steel',
	//platinum
	'wyrmroost:platinum_block',
	//sapphire
	'iceandfire:sapphire_block', 'mysticalworld:sapphire_block',
	//source
	'ars_nouveau:mana_gem_block'
	]);
	remove('forge:storage_blocks/cobalt', ['tconstruct:cobalt_block']);
	remove('forge:storage_blocks/copper', ['create:copper_block', 'occultism:copper_block', 'iceandfire:copper_block', 'immersiveengineering:storage_copper', 'tconstruct:copper_block', 'mysticalworld:copper_block']);
	remove('forge:storage_blocks/lead', ['eidolon:lead_block', 'immersiveengineering:storage_lead', 'mysticalworld:lead_block']);
	remove('forge:storage_blocks/silver', ['occultism:silver_block', 'iceandfire:silver_block', 'immersiveengineering:storage_silver', 'mysticalworld:silver_block']);
	remove('forge:storage_blocks/tin', ['mysticalworld:tin_block']);
	remove('forge:storage_blocks/aluminum', ['immersiveengineering:storage_aluminum']);
	remove('forge:storage_blocks/nickel', ['immersiveengineering:storage_nickel']);
	remove('forge:storage_blocks/uranium', ['immersiveengineering:storage_uranium']);
	remove('forge:storage_blocks/brass', ['create:brass_block']);
	remove('forge:storage_blocks/zinc', ['create:zinc_block']);
	remove('forge:storage_blocks/constantan', ['immersiveengineering:storage_constantan']);
	remove('forge:storage_blocks/electrum', ['immersiveengineering:storage_electrum']);
	remove('forge:storage_blocks/steel', ['immersiveengineering:storage_steel']);
	remove('forge:storage_blocks/platinum', ['wyrmroost:platinum_block']);
	remove('forge:storage_blocks/sapphire', ['iceandfire:sapphire_block', 'mysticalworld:sapphire_block']);
	remove('forge:storage_blocks/mana', 'ars_nouveau:mana_gem_block');
	
	event.removeAllTagsFrom('immersiveengineering:coke');
	
	//DUSTS
	
	remove('forge:dusts', [
	//copper
	'immersiveengineering:dust_copper', 'occultism:copper_dust', 'mysticalworld:copper_dust',
	//lead
	'immersiveengineering:dust_lead', 'mysticalworld:lead_dust',
	//silver
	'immersiveengineering:dust_silver', 'occultism:silver_dust', 'mysticalworld:silver_dust',
	//tin
	'mysticalworld:tin_dust',
	//aluminum
	'immersiveengineering:dust_aluminum',
	//nickel
	'immersiveengineering:dust_nickel',
	//uranium
	'immersiveengineering:dust_uranium',
	//uranium
	'immersiveengineering:dust_steel',
	//iron
	'immersiveengineering:dust_iron', 'occultism:iron_dust', 'bloodmagic:ironsand', 'mysticalworld:iron_dust',
	//gold
	'immersiveengineering:dust_gold', 'occultism:gold_dust', 'bloodmagic:goldsand', 'mysticalworld:gold_dust',
	//obsidian
	'occultism:obsidian_dust', 'create:powdered_obsidian',
	//sulfur
	'bloodmagic:sulfur', 'immersiveengineering:dust_sulfur', 'eidolon:sulfur',
	//saltpeter
	'bloodmagic:saltpeter',
	//diamond
	'createaddition:diamond_grit',
	//dimensional
	'rftoolsbase:dimensionalshard'
	]);
	remove('forge:dusts/copper', ['immersiveengineering:dust_copper', 'occultism:copper_dust', 'mysticalworld:copper_dust']);
	remove('forge:dusts/lead', ['immersiveengineering:dust_lead', 'mysticalworld:lead_dust']);
	remove('forge:dusts/silver', ['immersiveengineering:dust_silver', 'occultism:silver_dust', 'mysticalworld:silver_dust']);
	remove('forge:dusts/tin', ['mysticalworld:tin_dust']);
	remove('forge:dusts/aluminum', ['immersiveengineering:dust_aluminum']);
	remove('forge:dusts/nickel', ['immersiveengineering:dust_nickel']);
	remove('forge:dusts/uranium', ['immersiveengineering:dust_uranium']);
	remove('forge:dusts/steel', ['immersiveengineering:dust_steel']);
	remove('forge:dusts/iron', ['immersiveengineering:dust_iron', 'occultism:iron_dust', 'bloodmagic:ironsand', 'mysticalworld:iron_dust']);
	remove('forge:dusts/gold', ['immersiveengineering:dust_gold', 'occultism:gold_dust', 'bloodmagic:goldsand', 'mysticalworld:gold_dust']);
	remove('forge:dusts/obsidian', ['occultism:obsidian_dust', 'create:powdered_obsidian']);
	remove('forge:dusts/sulfur', ['bloodmagic:sulfur', 'immersiveengineering:dust_sulfur', 'eidolon:sulfur']);
	remove('forge:dusts/saltpeter', ['bloodmagic:saltpeter']);
	remove('forge:dusts/diamond', ['createaddition:diamond_grit']);
	//coal
	remove('forge:dusts/coal', ['bloodmagic:coalsand']);
	//sawdust
	remove('forge:dusts/wood', ['immersiveengineering:dust_wood']);
	//dimensional
	remove('rftoolsbase:shards', ['rftoolsbase:dimensionalshard']);
	//coke_dust
	remove('forge:dusts/coal_coke', ['immersiveengineering:dust_coke']);
	
	
	//METALS/GEMS - ADD
	
	//INGOTS
	
	add('forge:ingots', [
	//platinum
	'ob_core:platinum_ingot'
	]);
	add('forge:ingots/platinum', 'ob_core:platinum_ingot');
	add('forge:ingots/refined_arcane_gold', 'forbidden_arcanus:arcane_gold_ingot');
	//vinteum
	add('forge:ingots/vinteum', 'mana-and-artifice:vinteum_ingot');
	
	//NUGGETS
	
	add('forge:nuggets', [
	//platinum
	'kubejs:platinum_nugget',
	//netherite
	'charm:netherite_nugget'
	]);
	add('forge:nuggets/platinum', 'kubejs:platinum_nugget');
	add('forge:nuggets/netherite', 'charm:netherite_nugget');
	
	//STORAGE_BLOCKS
	
	add('forge:storage_blocks', [
	//platinum
	'ob_core:platinum_block',
	//source
	'emendatusenigmatica:arcane_block'
	]);
	add('forge:storage_blocks/platinum', 'ob_core:platinum_block');
	add('forge:storage_blocks/mana', 'emendatusenigmatica:arcane_block');
	//thallasium
	add('forge:storage_blocks/thallasium', 'betterendforge:thallasium_block');
	
	//GEMS
	
	add('forge:gems', [
	'byg:raw_pendorite', 
	'druidcraft:rockroot', 
	'evilcraft:dark_gem', 
	'calemiutils:raritanium', 
	'forbidden_arcanus:xpetrified_orb', 
	'forbidden_arcanus:rune', 
	'forbidden_arcanus:dark_rune',
	'byg:emeraldite_shards',
	'betterendforge:ender_shard',
	'iceandfire:amythest_gem',
	'forcecraft:force_gem'
	]);
	add('forge:gems/pendorite', 'byg:raw_pendorite');
	add('forge:gems/fiery_glass', 'druidcraft:fiery_glass');
	add('forge:gems/rock_root', 'druidcraft:rockroot');
	add('forge:gems/dark_gem', 'evilcraft:dark_gem');
	add('forge:gems/raritanium', 'calemiutils:raritanium');
	add('forge:gems/xpetrified_ore', 'forbidden_arcanus:xpetrified_orb');
	add('forge:gems/runestone', 'forbidden_arcanus:rune');
	add('forge:gems/dark_runestone', 'forbidden_arcanus:dark_rune');
	add('forge:gems/emeraldite', 'byg:emeraldite_shards');
	add('forge:gems/ender', 'betterendforge:ender_shard');
	add('forge:gems/blazing_quartz', 'malum:blazing_quartz');
	//cinderscapes_quartz
	add('forge:gems/smoky_quartz', 'cinderscapes:smoky_quartz');
	add('forge:gems/rose_quartz', 'cinderscapes:rose_quartz');
	add('forge:gems/sulfur_quartz', 'cinderscapes:sulfur_quartz');
	
	//CRUSHED_ORES
	
	add('create:crushed_ores/iron', 'create:crushed_iron_ore');
	add('create:crushed_ores/gold', 'create:crushed_gold_ore');
	add('create:crushed_ores/copper', 'create:crushed_copper_ore');
	add('create:crushed_ores/zinc', 'create:crushed_zinc_ore');
	add('create:crushed_ores/brass', 'create:crushed_brass');
	add('create:crushed_ores/silver', 'create:crushed_silver_ore');
	add('create:crushed_ores/tin', 'create:crushed_tin_ore');
	add('create:crushed_ores/lead', 'create:crushed_lead_ore');
	add('create:crushed_ores/quicksilver', 'create:crushed_quicksilver_ore');
	add('create:crushed_ores/aluminum', 'create:crushed_aluminum_ore');
	add('create:crushed_ores/uranium', 'create:crushed_uranium_ore');
	add('create:crushed_ores/nickel', 'create:crushed_nickel_ore');
	add('create:crushed_ores/netherite_scrap', 'emendatusenigmatica:ancient_debris_crushed');
	add('create:crushed_ores/platinum', 'create:crushed_platinum_ore');
	add('create:crushed_ores/osmium', 'create:crushed_osmium_ore');
		
	//COALS
	//missing_coals
	add('minecraft:coals/coal', 'minecraft:coal');
	add('minecraft:coals/charcoal', 'minecraft:charcoal');
	add('minecraft:coals/lignite', 'byg:lignite');
	add('minecraft:coals/anthracite', 'byg:anthracite');
	
	//DUSTS
	//platinum
	add('forge:dusts', 'kubejs:platinum_dust');
	add('forge:dusts/platinum', 'kubejs:platinum_dust');
	//missing_gems
	add('forge:dusts/vinteum', 'mana-and-artifice:vinteum_dust');
	add('forge:dusts/dark_gem', 'evilcraft:dark_gem_crushed');
	//dimensional
	add('rftoolsbase:shards', 'emendatusenigmatica:dimensional_gem');
	
ee_unused.forEach(u => {
	event.removeAllTagsFrom([Ingredient.of('#forge:ores/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:dusts/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:chunks/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:gems/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:gears/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:plates/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:rods/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:clusters/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#create:crushed_ores/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#bloodmagic:fragments/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#bloodmagic:gravels/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:buckets/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:nuggets/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:storage_blocks/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:ingots/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:molten/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:molten_/'+u)])
})

})

onEvent('block.tags', event => {
	
    function add(tag, id) {
        event.get(tag).add(id);
    };

    function remove(tag, id) {
        event.get(tag).remove(id);
    };
	
	//NORMAL-ORCHID-RARITIES
	add('botania:orechid_ores/common', [
	'emendatusenigmatica:coal_ore', 
	'emendatusenigmatica:iron_ore', 
	'emendatusenigmatica:copper_ore', 
	'emendatusenigmatica:aluminum_ore', 
	'emendatusenigmatica:zinc_ore'
	]);
	
	add('botania:orechid_ores/uncommon', [
	'emendatusenigmatica:bitumen_ore', 
	'emendatusenigmatica:lead_ore', 
	'emendatusenigmatica:tin_ore', 
	'emendatusenigmatica:sulfur_ore', 
	'emendatusenigmatica:redstone_ore', 
	'emendatusenigmatica:lapis_ore', 
	'emendatusenigmatica:quartz_ore',
	'mana-and-artifice:vinteum_ore', 
	'forcecraft:power_ore', 
	'evilcraft:dark_ore', 
	'druidcraft:fiery_glass_ore'
	]);
	
	add('botania:orechid_ores/rare', [
	'emendatusenigmatica:nickel_ore', 
	'emendatusenigmatica:dimensional_ore', 
	'emendatusenigmatica:arcane_ore', 
	'emendatusenigmatica:gold_ore', 
	'emendatusenigmatica:silver_ore',
	'druidcraft:amber_ore', 
	'ob_core:platinum_ore', 
	'druidcraft:rockroot_ore', 
	'forbidden_arcanus:arcane_crystal_ore', 
	'mysticalworld:quicksilver_ore'
	]);
	
	add('botania:orechid_ores/epic', [
	'emendatusenigmatica:sapphire_ore', 
	'emendatusenigmatica:diamond_ore', 
	'emendatusenigmatica:emerald_ore', 
	'emendatusenigmatica:cobalt_ore',
	'forbidden_arcanus:xpetrified_ore', 
	'calemiutils:raritanium_ore', 
	'wyrmroost:blue_geode_ore', 
	'forbidden_arcanus:runestone', 
	'kubejs:fossilized_remains', 
	'druidcraft:moonstone_ore', 
	'iceandfire:amythest_ore'
	]);
	
	add('botania:orechid_ores/ultra_rare', [
	'emendatusenigmatica:iridium_ore', 
	'emendatusenigmatica:uranium_ore',
	'forbidden_arcanus:stella_arcanum',
	'draconicevolution:overworld_draconium_ore'
	]);
	
	//NETHER-ORCHID-RARITIES
	add('botania:orechid_ores_ignem/common', [
	'emendatusenigmatica:coal_netherrack_ore', 
	'emendatusenigmatica:iron_netherrack_ore', 
	'emendatusenigmatica:copper_netherrack_ore', 
	'emendatusenigmatica:aluminum_netherrack_ore', 
	'emendatusenigmatica:zinc_netherrack_ore',
	'cinderscapes:sulfur_quartz_ore', 
	'cinderscapes:rose_quartz_ore', 
	'cinderscapes:smoky_quartz_ore',
	'minecraft:glowstone',
	'minecraft:blackstone'
	]);
	
	add('botania:orechid_ores_ignem/uncommon', [
	'emendatusenigmatica:bitumen_netherrack_ore', 
	'emendatusenigmatica:lead_netherrack_ore', 
	'emendatusenigmatica:tin_netherrack_ore', 
	'emendatusenigmatica:sulfur_netherrack_ore', 
	'emendatusenigmatica:redstone_netherrack_ore', 
	'emendatusenigmatica:lapis_netherrack_ore', 
	'emendatusenigmatica:quartz_netherrack_ore',
	'byg:emeraldite_ore'
	]);
	
	add('botania:orechid_ores_ignem/rare', [
	'emendatusenigmatica:nickel_netherrack_ore', 
	'emendatusenigmatica:dimensional_netherrack_ore', 
	'emendatusenigmatica:arcane_netherrack_ore', 
	'emendatusenigmatica:gold_netherrack_ore', 
	'emendatusenigmatica:silver_netherrack_ore'
	]);
	
	add('botania:orechid_ores_ignem/epic', [
	'emendatusenigmatica:sapphire_netherrack_ore', 
	'emendatusenigmatica:diamond_netherrack_ore', 
	'emendatusenigmatica:emerald_netherrack_ore', 
	'emendatusenigmatica:cobalt_netherrack_ore',
	'wyrmroost:red_geode_ore'
	]);
	
	add('botania:orechid_ores_ignem/ultra_rare', [
	'emendatusenigmatica:iridium_netherrack_ore', 
	'emendatusenigmatica:uranium_netherrack_ore',
	'minecraft:ancient_debris'
	]);
	
	//BLOCKS
	
	//ORES - REMOVE
	
	remove('forge:ores', [
	//cobalt
	'tconstruct:cobalt_ore',
	//copper
	'tconstruct:copper_ore', 'create:copper_ore', 'iceandfire:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper', 'mysticalworld:copper_ore',
	//silver
	'occultism:silver_ore', 'immersiveengineering:ore_silver', 'iceandfire:silver_ore', 'mysticalworld:silver_ore',
	//lead
	'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'mysticalworld:lead_ore',
	//tin
	'mysticalworld:tin_ore',
	//zinc
	'create:zinc_ore',
	//aluminum
	'immersiveengineering:ore_aluminum',
	//sapphire
	'mysticalworld:sapphire_ore', 'iceandfire:sapphire_ore',
	//nickel
	'immersiveengineering:ore_nickel', 
	//uranium
	'immersiveengineering:ore_uranium',
	//uranite
	'powah:uraninite_ore_poor', 'powah:uraninite_ore', 'powah:uraninite_ore_dense',
	//source
	'ars_nouveau:arcane_ore',
	//sulfur
	'cinderscapes:sulfur_ore'
	]);
	remove('forge:ores/cobalt', ['tconstruct:cobalt_ore']);
	remove('forge:ores/copper', ['tconstruct:copper_ore', 'create:copper_ore', 'iceandfire:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper', 'mysticalworld:copper_ore']);
	remove('forge:ores/silver', ['occultism:silver_ore', 'immersiveengineering:ore_silver', 'iceandfire:silver_ore', 'mysticalworld:silver_ore']);
	remove('forge:ores/lead', ['eidolon:lead_ore', 'immersiveengineering:ore_lead', 'mysticalworld:lead_ore']);
	remove('forge:ores/tin', ['mysticalworld:tin_ore']);
	remove('forge:ores/zinc', ['create:zinc_ore']);
	remove('forge:ores/aluminum', ['immersiveengineering:ore_aluminum']);
	remove('forge:ores/sapphire', ['iceandfire:sapphire_ore', 'mysticalworld:sapphire_ore']);
	remove('forge:ores/nickel', 'immersiveengineering:ore_nickel');
	remove('forge:ores/uranium', 'immersiveengineering:ore_uranium');
	remove('forge:ores/uranite_poor', 'powah:uraninite_ore_poor');
	remove('forge:ores/uranite', 'powah:uraninite_ore');
	remove('forge:ores/uranite_dense', 'powah:uraninite_ore_dense');
	remove('forge:ores/mana', 'ars_nouveau:arcane_ore');
	remove('forge:ores/sulfur', 'cinderscapes:sulfur_ore');
	//cinderscapes_quartz
	remove('forge:ores/quartz', 'cinderscapes:smoky_quartz_ore');
	remove('forge:ores/quartz', 'cinderscapes:rose_quartz_ore');
	remove('forge:ores/quartz', 'cinderscapes:sulfur_quartz_ore');
	//raw_end_amber
	remove('forge:ores/amber', 'betterendforge:amber_ore');
	
	//ORES - ADD
	
	add('forge:ores', [
	//platinum
	'ob_core:platinum_ore',
	//power
	'forcecraft:power_ore', 
	//remains
	'kubejs:fossilized_remains'
	]);
	//special_platinum
	add('forge:ores/platinum', ['ob_core:platinum_ore']);
	add('forge:ores/quartz', ['byg:brimstone_nether_quartz_ore', 'byg:blue_nether_quartz_ore']);
	//missing
	add('forge:ores/amethyst', 'iceandfire:amythest_ore');
	add('forge:ores/dark_gem', 'evilcraft:dark_ore');
	add('forge:ores/rock_root', 'druidcraft:rockroot_ore');
	add('forge:ores/fiery_glass', 'druidcraft:fiery_glass_ore');
	add('forge:ores/raritanium', 'calemiutils:raritanium_ore');
	add('forge:ores/vinteum', 'mana-and-artifice:vinteum_ore');
	add('forge:ores/emeraldite', 'byg:emeraldite_ore');
	add('forge:ores/power', 'forcecraft:power_ore');
	add('forge:ores/remains', 'kubejs:fossilized_remains');
	//cinderscapes_quartz
	add('forge:ores/smokey_quartz', 'cinderscapes:smoky_quartz_ore');
	add('forge:ores/rose_quartz', 'cinderscapes:rose_quartz_ore');
	add('forge:ores/sulfur_quartz', 'cinderscapes:sulfur_quartz_ore');
	//raw_end_amber
	add('forge:ores/end_amber', 'betterendforge:amber_ore');
	
	//METAL/GEMS - REMOVE
	
	//STORAGE_BLOCKS
	
	remove('forge:storage_blocks', [
	//cobalt
	'tconstruct:cobalt_block',
	//copper
	'create:copper_block', 'occultism:copper_block', 'iceandfire:copper_block', 'immersiveengineering:storage_copper', 'tconstruct:copper_block', 'mysticalworld:copper_block',
	//lead
	'eidolon:lead_block', 'immersiveengineering:storage_lead', 'mysticalworld:lead_block',
	//silver
	'occultism:silver_block', 'iceandfire:silver_block', 'immersiveengineering:storage_silver', 'mysticalworld:silver_block',
	//tin
	'mysticalworld:tin_block',
	//aluminum
	'immersiveengineering:storage_aluminum',
	//nickel
	'immersiveengineering:storage_nickel',
	//uranium
	'immersiveengineering:storage_uranium',
	//brass
	'create:brass_block',
	//zinc
	'create:zinc_block',
	//constantan
	'immersiveengineering:storage_constantan',
	//electrum
	'immersiveengineering:storage_electrum',
	//steel
	'immersiveengineering:storage_steel',
	//platinum
	'wyrmroost:platinum_block',
	//sapphire
	'iceandfire:sapphire_block', 'mysticalworld:sapphire_block',
	//source
	'ars_nouveau:mana_gem_block'
	]);
	remove('forge:storage_blocks/cobalt', ['tconstruct:cobalt_block']);
	remove('forge:storage_blocks/copper', ['create:copper_block', 'occultism:copper_block', 'iceandfire:copper_block', 'immersiveengineering:storage_copper', 'tconstruct:copper_block', 'mysticalworld:copper_block']);
	remove('forge:storage_blocks/lead', ['eidolon:lead_block', 'immersiveengineering:storage_lead', 'mysticalworld:lead_block']);
	remove('forge:storage_blocks/silver', ['occultism:silver_block', 'iceandfire:silver_block', 'immersiveengineering:storage_silver', 'mysticalworld:silver_block']);
	remove('forge:storage_blocks/tin', ['mysticalworld:tin_block']);
	remove('forge:storage_blocks/aluminum', ['immersiveengineering:storage_aluminum']);
	remove('forge:storage_blocks/nickel', ['immersiveengineering:storage_nickel']);
	remove('forge:storage_blocks/uranium', ['immersiveengineering:storage_uranium']);
	remove('forge:storage_blocks/brass', ['create:brass_block']);
	remove('forge:storage_blocks/zinc', ['create:zinc_block']);
	remove('forge:storage_blocks/constantan', ['immersiveengineering:storage_constantan']);
	remove('forge:storage_blocks/electrum', ['immersiveengineering:storage_electrum']);
	remove('forge:storage_blocks/steel', ['immersiveengineering:storage_steel']);
	remove('forge:storage_blocks/platinum', ['wyrmroost:platinum_block']);
	//gems
	remove('forge:storage_blocks/sapphire', ['iceandfire:sapphire_block', 'mysticalworld:sapphire_block']);
	remove('forge:storage_blocks/mana', 'ars_nouveau:mana_gem_block');
	
	event.removeAllTagsFrom('immersiveengineering:coke');
	
	//METAL/GEMS - ADD
	
	//STORAGE_BLOCKS
	
	add('forge:storage_blocks', [
	//platinum
	'ob_core:platinum_block',
	//source
	'emendatusenigmatica:arcane_block'
	]);
	add('forge:storage_blocks/platinum', 'ob_core:platinum_block');
	add('forge:storage_blocks/mana', 'emendatusenigmatica:arcane_block');
	//missing
	add('forge:storage_blocks/thallasium', 'betterendforge:thallasium_block');
	
ee_unused.forEach(u => {
	event.removeAllTagsFrom([Ingredient.of('#forge:ores/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:storage_blocks/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:molten/'+u)])
	event.removeAllTagsFrom([Ingredient.of('#forge:molten_/'+u)])
})

})

//OUTPUT-INPUT REMOVAL

onEvent('recipes', event => {
	
let removals = [
	//ORES - REMOVE
	
	//cobalt
	'tconstruct:cobalt_ore',
	//copper
	'tconstruct:copper_ore', 'create:copper_ore', 'iceandfire:copper_ore', 'occultism:copper_ore', 'immersiveengineering:ore_copper', 'mysticalworld:copper_ore',
	//silver
	'occultism:silver_ore', 'immersiveengineering:ore_silver', 'iceandfire:silver_ore', 'mysticalworld:silver_ore',
	//lead
	'eidolon:lead_ore', 'immersiveengineering:ore_lead', 'mysticalworld:lead_ore',
	//tin
	'mysticalworld:tin_ore',
	//zinc
	'create:zinc_ore',
	//aluminum
	'immersiveengineering:ore_aluminum',
	//sapphire
	'mysticalworld:sapphire_ore', 'iceandfire:sapphire_ore',
	//nickel
	'immersiveengineering:ore_nickel', 
	//uranium
	'immersiveengineering:ore_uranium',
	//uranite
	'powah:uraninite_ore_poor', 'powah:uraninite_ore', 'powah:uraninite_ore_dense',
	//platinum
	'wyrmroost:platinum_ore',
	
	//METALS/GEMS - REMOVE
	
	//GEMS
	
	//sapphire
	'iceandfire:sapphire_gem', 'mysticalworld:sapphire',
	//source
	'ars_nouveau:mana_gem',
	
    //INGOTS
	
	//cobalt
	'tconstruct:cobalt_ingot',
	//copper
	'create:copper_ingot', 'occultism:copper_ingot', 'iceandfire:copper_ingot', 'immersiveengineering:ingot_copper', 'tconstruct:copper_ingot', 'mysticalworld:copper_ingot',
	//silver
	'occultism:silver_ingot', 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver', 'mysticalworld:silver_ingot',
	//lead
	'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'mysticalworld:lead_ingot',
	//tin
	'mysticalworld:tin_ingot',
	//aluminum
	'immersiveengineering:ingot_aluminum',
	//nickel
	'immersiveengineering:ingot_nickel',
	//uranium
	'immersiveengineering:ingot_uranium',
	//brass
	'create:brass_ingot',
	//zinc
	'create:zinc_ingot',
	//constantan
	'immersiveengineering:ingot_constantan',
	//electrum
	'immersiveengineering:ingot_electrum',
	//steel
	'immersiveengineering:ingot_steel',
	//platinum
	'wyrmroost:platinum_ingot',
	
	//NUGGETS
	
	//cobalt
	'tconstruct:cobalt_nugget',
	//copper
	'create:copper_nugget', 'occultism:copper_nugget', 'iceandfire:copper_nugget', 'immersiveengineering:nugget_copper', 'tconstruct:copper_nugget', 'mysticalworld:copper_nugget',
	//silver
	'occultism:silver_nugget', 'iceandfire:silver_nugget', 'immersiveengineering:nugget_silver', 'mysticalworld:silver_nugget',
	//lead
	'eidolon:lead_nugget', 'immersiveengineering:nugget_lead', 'mysticalworld:lead_nugget',
	//tin
	'mysticalworld:tin_nugget',
	//aluminum
	'immersiveengineering:nugget_aluminum',
	//nickel
	'immersiveengineering:nugget_nickel',
	//uranium
	'immersiveengineering:nugget_uranium',
	//brass
	'create:brass_nugget',
	//zinc
	'create:zinc_nugget',
	//constantan
	'immersiveengineering:nugget_constantan',
	//electrum
	'immersiveengineering:nugget_electrum',
	//steel
	'immersiveengineering:nugget_steel',
	//netherite
	'tconstruct:netherite_nugget',
	
	//STORAGE_BLOCKS
	
	//cobalt
	'tconstruct:cobalt_block',
	//copper
	'create:copper_block', 'occultism:copper_block', 'iceandfire:copper_block', 'immersiveengineering:storage_copper', 'tconstruct:copper_block', 'mysticalworld:copper_block',
	//lead
	'eidolon:lead_block', 'immersiveengineering:storage_lead', 'mysticalworld:lead_block',
	//silver
	'occultism:silver_block', 'iceandfire:silver_block', 'immersiveengineering:storage_silver', 'mysticalworld:silver_block',
	//tin
	'mysticalworld:tin_block',
	//aluminum
	'immersiveengineering:storage_aluminum',
	//nickel
	'immersiveengineering:storage_nickel',
	//uranium
	'immersiveengineering:storage_uranium',
	//brass
	'create:brass_block',
	//zinc
	'create:zinc_block',
	//constantan
	'immersiveengineering:storage_constantan',
	//electrum
	'immersiveengineering:storage_electrum',
	//steel
	'immersiveengineering:storage_steel',
	//platinum
	'wyrmroost:platinum_block',
	
	//GEMS
	
	//sapphire
	'iceandfire:sapphire_block', 'mysticalworld:sapphire_block',
	//source
	'ars_nouveau:mana_gem_block',
	
	//DUSTS
	
	//copper
	'immersiveengineering:dust_copper', 'occultism:copper_dust', 'mysticalworld:copper_dust',
	//lead
	'immersiveengineering:dust_lead', 'mysticalworld:lead_dust',
	//silver
	'immersiveengineering:dust_silver', 'occultism:silver_dust', 'mysticalworld:silver_dust',
	//tin
	'mysticalworld:tin_dust',
	//aluminum
	'immersiveengineering:dust_aluminum',
	//nickel
	'immersiveengineering:dust_nickel',
	//uranium
	'immersiveengineering:dust_uranium',
	//uranium
	'immersiveengineering:dust_steel',
	//iron
	'immersiveengineering:dust_iron', 'occultism:iron_dust', 'bloodmagic:ironsand', 'mysticalworld:iron_dust',
	//gold
	'immersiveengineering:dust_gold', 'occultism:gold_dust', 'bloodmagic:goldsand', 'mysticalworld:gold_dust',
	//obsidian
	'occultism:obsidian_dust', 'create:powdered_obsidian',
	//sulfur
	'bloodmagic:sulfur', 'immersiveengineering:dust_sulfur', 'eidolon:sulfur', 'cinderscapes:sulfur',
	//saltpeter
	'bloodmagic:saltpeter',
	//diamond
	'createaddition:diamond_grit',
	//EE_UNUSED
	'#mekanism:clumps',
	'#mekanism:crystals',
	'#mekanism:dirty_dusts',
	'#mekanism:shards'
];

ee_unused.forEach(u => {
	event.remove({ output: '#forge:ores/'+u })
	event.remove({ output: '#forge:dusts/'+u })
	event.remove({ output: '#forge:chunks/'+u })
	event.remove({ output: '#forge:gems/'+u })
	event.remove({ output: '#forge:gears/'+u })
	event.remove({ output: '#forge:plates/'+u })
	event.remove({ output: '#forge:rods/'+u })
	event.remove({ output: '#forge:clusters/'+u })
	event.remove({ output: '#create:crushed_ores/'+u })
	event.remove({ output: '#bloodmagic:fragments/'+u })
	event.remove({ output: '#bloodmagic:gravels/'+u })
	event.remove({ output: '#forge:buckets/'+u })
	event.remove({ output: '#forge:nuggets/'+u })
	event.remove({ output: '#forge:storage_blocks/'+u })
	event.remove({ output: '#forge:ingots/'+u })
	event.remove({ output: '#forge:molten/'+u })
	event.remove({ output: '#forge:molten_/'+u })
	
	event.remove({ input: '#forge:ores/'+u })
	event.remove({ input: '#forge:dusts/'+u })
	event.remove({ input: '#forge:chunks/'+u })
	event.remove({ input: '#forge:gems/'+u })
	event.remove({ input: '#forge:gears/'+u })
	event.remove({ input: '#forge:plates/'+u })
	event.remove({ input: '#forge:rods/'+u })
	event.remove({ input: '#forge:clusters/'+u })
	event.remove({ input: '#create:crushed_ores/'+u })
	event.remove({ input: '#bloodmagic:fragments/'+u })
	event.remove({ input: '#bloodmagic:gravels/'+u })
	event.remove({ input: '#forge:buckets/'+u })
	event.remove({ input: '#forge:nuggets/'+u })
	event.remove({ input: '#forge:storage_blocks/'+u })
	event.remove({ input: '#forge:ingots/'+u })
	event.remove({ input: '#forge:molten/'+u })
	event.remove({ input: '#forge:molten_/'+u })
})
	
removals.forEach(r => {
        event.remove({ output: r });
		event.remove({ input: r });
    })
});