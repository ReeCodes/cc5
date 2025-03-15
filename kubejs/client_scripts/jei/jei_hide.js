// priority: 750

onEvent('jei.hide.items', event => {

	var hideItems = [

		'titanium:gold_gear',
		'titanium:iron_gear',
		'titanium:diamond_gear',

		'powah:uraninite_ore_poor',
		'powah:uraninite_ore',
		'powah:uraninite_ore_dense',
		'powah:uraninite_raw_poor',
		'powah:uraninite_raw',
		'powah:uraninite_raw_dense',

		'@curios',

		'cyclic:biomass_bucket',
		'cyclic:honey_bucket',
		'cyclic:xpjuice_bucket',
		'cyclic:biomass',
		'cyclic:honey',
		'cyclic:xpjuice',
		'cyclic:gem_obsidian',
		'cyclic:gem_amber',

		'mob_grinding_utils:mob_swab_used',
		'mob_grinding_utils:gm_chicken_feed',

		//EE_UNUSED
		'#mekanism:clumps',
		'#mekanism:crystals',
		'#mekanism:dirty_dusts',
		'#mekanism:shards',

		//ORES - REMOVE

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
		'zycraft:aluminium_ore', 'immersiveengineering:ore_aluminum',
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

		//copper
		'create:copper_ingot', 'occultism:copper_ingot', 'iceandfire:copper_ingot', 'immersiveengineering:ingot_copper', 'tconstruct:copper_ingot', 'mysticalworld:copper_ingot',
		//silver
		'occultism:silver_ingot', 'iceandfire:silver_ingot', 'immersiveengineering:ingot_silver', 'mysticalworld:silver_ingot',
		//lead
		'eidolon:lead_ingot', 'immersiveengineering:ingot_lead', 'mysticalworld:lead_ingot',
		//tin
		'mysticalworld:tin_ingot',
		//aluminum
		'immersiveengineering:ingot_aluminum', 'zycraft:aluminium',
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

		//copper
		'create:copper_block', 'occultism:copper_block', 'iceandfire:copper_block', 'immersiveengineering:storage_copper', 'tconstruct:copper_block', 'mysticalworld:copper_block',
		//lead
		'eidolon:lead_block', 'immersiveengineering:storage_lead', 'mysticalworld:lead_block',
		//silver
		'occultism:silver_block', 'iceandfire:silver_block', 'immersiveengineering:storage_silver', 'mysticalworld:silver_block',
		//tin
		'mysticalworld:tin_block',
		//aluminum
		'immersiveengineering:storage_aluminum', 'zycraft:aluminium_block',
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
		'bloodmagic:sulfur', 'immersiveengineering:dust_sulfur',
		//saltpeter
		'bloodmagic:saltpeter',
		//diamond
		'createaddition:diamond_grit',
	];

	event.hide(hideItems)
	
	event.hide(global.disabledItems)

	var ee_unused = [
		'osmium',
		'fluorite',
		'certus_quartz',
		'charged_certus_quartz',
		'cinnabar',
		'apatite',
		'potassium_nitrate',
		'ruby',
		'peridot',
		'fluix',
		'graphite',
		'cast_iron'
	];

	ee_unused.forEach(u => {
		event.hide('#forge:ores/' + u)
		event.hide('#forge:dusts/' + u)
		event.hide('#forge:chunks/' + u)
		event.hide('#forge:gems/' + u)
		event.hide('#forge:gears/' + u)
		event.hide('#forge:plates/' + u)
		event.hide('#forge:rods/' + u)
		event.hide('#forge:clusters/' + u)
		event.hide('#create:crushed_ores/' + u)
		event.hide('#bloodmagic:fragments/' + u)
		event.hide('#bloodmagic:gravels/' + u)
		event.hide('#forge:buckets/' + u)
		event.hide('#forge:nuggets/' + u)
		event.hide('#forge:storage_blocks/' + u)
		event.hide('#forge:ingots/' + u)
		event.hide('#forge:molten/' + u)
		event.hide('#forge:molten_' + u)
	})
})