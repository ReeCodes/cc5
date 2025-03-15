// priority: 100

onEvent('item.tags', event => {
	
	//FOOD-TAGS
	event.add('forge:icecreams', ['#neapolitan:ice_cream', '/peculiars:.+ice_cream/']);
	event.add('forge:soups', ['minecraft:beetroot_soup', 'inspirations:potato_soup', 'autumnity:foul_soup', '/pamhc2foodcore:.+soup.+/', '/farmersdelight:.+_soup/']);
	event.add('forge:stews', ['minecraft:mushroom_stew', 'minecraft:rabbit_stew', 'rootsclassic:rooty_stew', '/pamhc2foodcore:.+stew.+/', '/farmersdelight:.+_stew/']);
	event.add('chisel:redstone', '#forge:storage_blocks/redstone');
	event.add('forcecraft:baconator_food', ['farmersdelight:cooked_bacon', 'pamhc2foodcore:chocolatebaconitem', 'pamhc2foodextended:maplecandiedbaconitem', 'tconstruct:bacon']);
	event.add('forge:chocolatebar', 'create:bar_of_chocolate');
	
	//CHISEL
	event.add('chisel:emerald', '#forge:storage_blocks/emerald');
	event.add('chisel:redstone', '#forge:storage_blocks/redstone');
	event.add('chisel:coal', '#forge:storage_blocks/coal');
	event.add('chisel:charcoal', '#forge:storage_blocks/charcoal');
	event.add('chisel:metals/aluminum', '#forge:storage_blocks/aluminum');
	event.add('chisel:metals/bronze', '#forge:storage_blocks/bronze');
	
	//TC
	event.add('minecraft:logs', ['tropicraft:mahogany_log', 'tropicraft:palm_log', 'tropicraft:red_mangrove_log', 'tropicraft:light_mangrove_log', 'tropicraft:black_mangrove_log', 'tropicraft:stripped_mangrove_log']);
	event.add('minecraft:logs_that_burn', ['tropicraft:mahogany_log', 'tropicraft:palm_log', 'tropicraft:red_mangrove_log', 'tropicraft:light_mangrove_log', 'tropicraft:black_mangrove_log', 'tropicraft:stripped_mangrove_log']);
	event.add('minecraft:planks', ['tropicraft:mahogany_planks', 'tropicraft:palm_planks', 'tropicraft:mangrove_planks']);
	
	//BM
	event.add('bloodmagic:offering/colossal', ['twilightforest:giant_cobblestone', 'twilightforest:giant_log', 'twilightforest:giant_leaves', 'twilightforest:giant_obsidian']);
	
	//MISC	
	event.add('kubejs:geodes', '/kubejs:.+_geode/');
	
	event.add('refinedstorage:silicon', 'emendatusenigmatica:silicon_gem');

	event.add('forge:chests', 'iceandfire:ghost_chest');
	event.add('forge:chests/wooden', 'iceandfire:ghost_chest');

	event.add('forge:bones/wither', 'tconstruct:necrotic_bone');
	
	event.add('forge:dusts/obsidian', 'create:powdered_obsidian');
	
	event.add('forge:workbench', '/mctb:.+/');
	event.add('forge:workbenches', '/mctb:.+/');
	event.add('forge:workbenches/oak', '/mctb:.+/');
	
	event.add('bagofyurting:blacklist', ['globalxp:xp_block', '/rsrequestify:.+/', '/refinedstorage:.+/', '/extrastorage:block.+/', '/extrastorage:.+crafter$/', 'astralsorcery:rock_collector_crystal']);
	
	event.add('forge:crops/lemon', 'tropicraft:lemon');
	event.add('forge:fruits/lemon', 'tropicraft:lemon');
	
	event.add('forge:crops/grapefruit', 'tropicraft:grapefruit');
	event.add('forge:fruits/grapefruit', 'tropicraft:grapefruit');
	
	event.add('forge:crops/lime', 'tropicraft:lime');
	event.add('forge:fruits/lime', 'tropicraft:lime');
	
	event.add('forge:crops/orange', 'tropicraft:orange');
	event.add('forge:fruits/orange', 'tropicraft:orange');
	
	event.add('forge:crops/coconut', 'tropicraft:coconut_chunk');
	
	event.add('forge:fruits/pineapple', 'tropicraft:pineapple_cubes');
	
	event.add('kubejs:loot_bags', '/kubejs:affixgear.+/');
	
	event.add('forge:barrels/wooden', '/crumbs:.+_barrel/');
	event.add('forge:barrels', '/crumbs:.+_barrel/');
	
	event.add('forge:wires', 'ftbic:enderium_wire');
	event.add('forge:wires/enderium', 'ftbic:enderium_wire');
	
	//REMOVE - BLOCKS
	
	event.remove('forge:stone', 'quark:myalite');
	event.remove('forge:stone', 'quark:polished_myalite');
	
	//REMOVE - ITEMS
	
	event.remove('forge:slimeballs', 'myrtrees:latex');
	
	event.remove('forge:plastic', 'rats:raw_plastic');
	
	event.removeAllTagsFrom('refinedstorage:silicon');
	
	event.removeAllTagsFrom(['iceandfire:witherbone', 'bhc:wither_bone']);
	
	event.remove('forge:chests/wooden', ['minecraft:chest', 'minecraft:trapped_chest']);
	event.remove('forge:chests', ['minecraft:chest', 'minecraft:trapped_chest']);
	event.remove('forge:barrels/wooden', 'minecraft:barrel');
	event.remove('forge:barrels', 'minecraft:barrel');
	
	//RODS
	event.remove('forge:rods', [
	//IP
	'immersiveposts:stick_copper', 'immersiveposts:stick_gold', 'immersiveposts:stick_uranium', 'immersiveposts:stick_electrum', 'immersiveposts:stick_constantan', 'immersiveposts:stick_nickel', 'immersiveposts:stick_silver', 'immersiveposts:stick_lead',
	//CA
	'createaddition:gold_rod', 'createaddition:copper_rod', 'createaddition:iron_rod', 'createaddition:brass_rod',
	//BA
	'buildersaddition:iron_rod',
	//IE
	'immersiveengineering:stick_iron', 'immersiveengineering:stick_steel', 'immersiveengineering:stick_aluminum'
	]);
	event.remove('forge:rods/all_metal', [
	//IP
	'immersiveposts:stick_copper', 'immersiveposts:stick_gold', 'immersiveposts:stick_uranium', 'immersiveposts:stick_electrum', 'immersiveposts:stick_constantan', 'immersiveposts:stick_nickel', 'immersiveposts:stick_silver', 'immersiveposts:stick_lead',
	//CA
	'createaddition:gold_rod', 'createaddition:copper_rod', 'createaddition:iron_rod', 'createaddition:brass_rod',
	//BA
	'buildersaddition:iron_rod',
	//IE
	'immersiveengineering:stick_iron', 'immersiveengineering:stick_steel', 'immersiveengineering:stick_aluminum'
	]);
	event.remove('forge:rods/copper', ['immersiveposts:stick_copper', 'createaddition:copper_rod']);
	event.remove('forge:rods/gold', ['immersiveposts:stick_gold', 'createaddition:gold_rod']);
	event.remove('forge:rods/iron', ['immersiveengineering:stick_iron', 'buildersaddition:iron_rod', 'createaddition:iron_rod']);
	event.remove('forge:rods/uranium', ['immersiveposts:stick_uranium']);
	event.remove('forge:rods/electrum', ['immersiveposts:stick_electrum']);
	event.remove('forge:rods/constantan', ['immersiveposts:stick_constantan']);
	event.remove('forge:rods/nickel', ['immersiveposts:stick_nickel']);
	event.remove('forge:rods/silver', ['immersiveposts:stick_silver']);
	event.remove('forge:rods/lead', ['immersiveposts:stick_lead']);
	event.remove('forge:rods/brass', ['createaddition:brass_rod']);
	event.remove('forge:rods/steel', ['immersiveengineering:stick_steel']);
	event.remove('forge:rods/aluminum', ['immersiveengineering:stick_aluminum']);
	
	//WIRES
	event.remove('forge:wires', ['createaddition:copper_wire']);
	event.remove('forge:wires/copper', ['createaddition:copper_wire']);
	
	//GEARS
	event.remove('forge:gears/iron', 'titanium:iron_gear');
	event.remove('forge:gears/gold', 'titanium:gold_gear');
	event.remove('forge:gears/diamond', 'titanium:diamond_gear');
	
	//PLATES
	event.remove('forge:plates', [
	'create:copper_sheet', 
	'immersiveengineering:plate_copper', 
	'create:iron_sheet', 
	'immersiveengineering:plate_iron',
	'create:golden_sheet', 
	'immersiveengineering:plate_gold',
	'create:brass_sheet', 
	'createaddition:zinc_sheet', 
	'immersiveengineering:plate_aluminum', 
	'immersiveengineering:plate_silver', 
	'immersiveengineering:plate_nickel', 
	'immersiveengineering:plate_lead', 
	'immersiveengineering:plate_steel', 
	'immersiveengineering:plate_electrum', 
	'immersiveengineering:plate_constantan', 
	'immersiveengineering:plate_uranium'
	]);
	event.remove('forge:plates/copper', ['create:copper_sheet', 'immersiveengineering:plate_copper']);
	event.remove('forge:plates/iron', ['create:iron_sheet', 'immersiveengineering:plate_iron']);
	event.remove('forge:plates/gold', ['create:golden_sheet', 'immersiveengineering:plate_gold']);
	event.remove('forge:plates/brass', ['create:brass_sheet']);
	event.remove('forge:plates/zinc', ['createaddition:zinc_sheet']);
	event.remove('forge:plates/aluminum', ['immersiveengineering:plate_aluminum']);
	event.remove('forge:plates/silver', ['immersiveengineering:plate_silver']);
	event.remove('forge:plates/nickel', ['immersiveengineering:plate_nickel']);
	event.remove('forge:plates/uranium', ['immersiveengineering:plate_uranium']);
	event.remove('forge:plates/lead', ['immersiveengineering:plate_lead']);
	event.remove('forge:plates/steel', ['immersiveengineering:plate_steel']);
	event.remove('forge:plates/electrum', ['immersiveengineering:plate_electrum']);
	event.remove('forge:plates/constantan', ['immersiveengineering:plate_constantan']);
	
})

onEvent('block.tags', event => {
	
	//REMOVE
	
	event.remove('forge:stone', 'quark:myalite');
	event.remove('forge:stone', 'quark:polished_myalite');
	
	event.remove('forge:chests/wooden', ['minecraft:chest', 'minecraft:trapped_chest']);
	event.remove('forge:chests', ['minecraft:chest', 'minecraft:trapped_chest']);
	event.remove('forge:barrels/wooden', 'minecraft:barrel');
	event.remove('forge:barrels', 'minecraft:barrel');
	
	//ADD
	
	//CHISEL
	event.add('chisel:emerald', '#forge:storage_blocks/emerald');
	event.add('chisel:redstone', '#forge:storage_blocks/redstone');
	event.add('chisel:coal', '#forge:storage_blocks/coal');
	event.add('chisel:charcoal', '#forge:storage_blocks/charcoal');
	event.add('chisel:metals/aluminum', '#forge:storage_blocks/aluminum');
	event.add('chisel:metals/bronze', '#forge:storage_blocks/bronze');
	
	//MISC
	event.add('minecraft:beacon_base_blocks', 'kubejs:reanimated_rainbow_block');
	event.add('minecraft:beacon_base_blocks', 'kubejs:uninspiring_rainbow_block');
	event.add('minecraft:beacon_base_blocks', 'farlanders:endumium_block');
	
	event.add('forge:chests', 'iceandfire:ghost_chest');
	event.add('forge:chests/wooden', 'iceandfire:ghost_chest');
	
	event.add('bagofyurting:blacklist', ['globalxp:xp_block', '/rsrequestify:.+/', '/refinedstorage:.+/', '/extrastorage:block.+/', '/extrastorage:.+crafter$/', 'astralsorcery:rock_collector_crystal']);
	
	event.add('forge:barrels/wooden', '/crumbs:.+_barrel/');
	event.add('forge:barrels', '/crumbs:.+_barrel/');
	event.add('forge:chests/trapped', 'minecraft:trapped_chest');
	
	//TC
	event.add('minecraft:logs', ['tropicraft:mahogany_log', 'tropicraft:palm_log', 'tropicraft:red_mangrove_log', 'tropicraft:light_mangrove_log', 'tropicraft:black_mangrove_log', 'tropicraft:stripped_mangrove_log']);
	event.add('minecraft:logs_that_burn', ['tropicraft:mahogany_log', 'tropicraft:palm_log', 'tropicraft:red_mangrove_log', 'tropicraft:light_mangrove_log', 'tropicraft:black_mangrove_log', 'tropicraft:stripped_mangrove_log']);
	event.add('minecraft:planks', ['tropicraft:mahogany_planks', 'tropicraft:palm_planks', 'tropicraft:mangrove_planks']);
})