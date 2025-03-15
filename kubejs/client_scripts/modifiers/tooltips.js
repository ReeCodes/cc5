onEvent('jei.information', event => {
	event.add('akashictome:tome', ['Put this book into your crafting grid with any info-book to help keep things organized.', 'Right click to select the book. Punch to reset and pick another one.'])
	event.add('alexsmobs:mimicream', 'Surround any tool with 8 Mimicream in a crafting table to get a copy of it including it\'s enchants. Has a slight twist.')
});


onEvent('item.tooltip', tooltip => {
	//beehemoth_friendship
	tooltip.add('/buzzier_bees:honey_wand/', [Text.of('Can be used to display your Beehemoth\'s Friendship Level').gray()])

	//GEODES
	tooltip.add('kubejs:curdled_geode', [Text.of('Sanguineous Ore Meat').yellow()])
	tooltip.add('kubejs:varicose_geode', [Text.of('Hypotensive Clutter').yellow()])
	tooltip.add('kubejs:opulent_geode', [Text.of('Lavish Foundings').yellow()])
	tooltip.add('kubejs:primordial_geode', [Text.of('Primal-Oredial').yellow()])
	tooltip.add('kubejs:volatile_geode', [Text.of('Everchanging Aggregate').yellow()])
	tooltip.add('kubejs:decrepit_geode', [Text.of('Decayed Mass').yellow()])
	tooltip.add('kubejs:blighted_geode', [Text.of('Withering Away').yellow()])
	tooltip.add('kubejs:tarnished_geode', [Text.of('Oxidized Over Time').yellow()])
	tooltip.add('kubejs:writhed_geode', [Text.of('Twisted Xyloid').yellow()])

	tooltip.add('randomite:randomite_ore', [Text.of('Drops all possible ores').yellow()])

	tooltip.add('forbidden_arcanus:eternal_stella', [Text.of('Obtained through end cities or wandering traders').yellow()])

	tooltip.add('kubejs:uninspiring_rainbow_block', [Text.of('Used to make the Reanimated Rainbow Block').yellow()])
	tooltip.add('kubejs:reanimated_rainbow_block', [Text.of('Used as a Generation Catalyst to make Randomite Ore').yellow()])

	tooltip.add('/botania:spell_cloth/', [Text.of('Removes Enchantments including Curses').gray(), Text.of('Used in a crafting table').gray()])

	tooltip.add('botania:world_seed', [Text.of('Teleports you to the world\'s spawn').gray()])

	tooltip.add('/chisel:iron_chisel/', [Text.of('Can only be found in Villages').green()])
	tooltip.add('/chiselsandbits:chisel_iron/', [Text.of('Can only be found in Villages').green()])

	//barrels
	let barrelslots = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§f${slots} Slots`])

	barrelslots('copper', 5 * 9)
	barrelslots('iron', 6 * 9)
	barrelslots('silver', 8 * 9)
	barrelslots('gold', 9 * 9)
	barrelslots('diamond', 9 * 12)
	barrelslots('obsidian', 'Blastproof + ' + 9 * 12)
	barrelslots('crystal', 9 * 12)
	barrelslots('netherite', 'Blastproof + ' + 9 * 15)

	//chests
	let chestslots = (id, slots) => tooltip.add("ironchest:" + id + "_chest", [`§f${slots} Slots`])

	chestslots('copper', 5 * 9)
	chestslots('iron', 6 * 9)
	chestslots('silver', 8 * 9)
	chestslots('gold', 9 * 9)
	chestslots('diamond', 9 * 12)
	chestslots('obsidian', 'Blastproof + ' + 9 * 12)
	chestslots('crystal', 9 * 12)

	//disabled

	let disabledItems = [
		'naturesaura:chunk_loader',
		'securitycraft:inventory_scanner',
		'rats:rat_upgrade_lumberjack',
		'darkutils:ender_hopper',
		'moreminecarts:chunk_loader',
		'moreminecarts:minecart_with_chunk_loader'
	];

	disabledItems.forEach(i => tooltip.add(i, Text.of('Disabled!').red()))
});