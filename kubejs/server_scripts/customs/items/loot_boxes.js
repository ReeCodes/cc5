let randomize = (a) => {
	return a[Math.floor(Math.random() * a.length)];
}

function pickLoot(event, lootItem, lootSound, lootPath, lootAmount, lootParticles) {
	lootParticles = lootParticles || null;
	if (event.item.id == lootItem) {
		event.player.addItemCooldown(Item.of(lootItem), 20)
		if (lootParticles !== null) {
			event.server.runCommandSilent(`execute as ${event.player.name} run particle ${lootParticles} ${event.player.x} ${event.player.y} ${event.player.z} 1 2 1 4 100`);
		}
		event.player.playSound(lootSound)
		let player_luck = event.server.runCommandSilent(`attribute ${event.player.name} minecraft:generic.luck get`)
		player_luck = player_luck * 0.02;
		if (Math.random() < player_luck) {
			lootAmount++;
		}
		if (player_luck > 1.00) {
			lootAmount++;
		}
		if (player_luck > 2.00) {
			lootAmount++;
		}
		for (let i = 0; i < lootAmount; i++) {
			event.server.runCommandSilent(`execute as ${event.player.name} in ${event.player.world.dimension} run loot spawn ${event.player.x} ${event.player.y} ${event.player.z} loot ${randomize(lootPath)}`);
		}
		if (!event.player.isCreativeMode()) {
			event.item.setCount(event.item.getCount() - 1)
		}
	}
}

let lootCommon = [
	'kubejs:chests/loot_randomizer/anyblock',
	'kubejs:chests/loot_randomizer/anyseeds',
	'kubejs:chests/loot_randomizer/anycrops',
	'kubejs:chests/loot_randomizer/anyarrows'
];

let lootUncommon = [
	'kubejs:chests/loot_randomizer/anyblock',
	'kubejs:chests/loot_randomizer/anyarrows',
	'kubejs:chests/loot_randomizer/anyapple',
	'kubejs:chests/loot_randomizer/anystews',
	'kubejs:chests/loot_randomizer/anycards',
	'twilightforest:entities/death_tome_books',
	'kubejs:chests/loot_randomizer/anyfishes'
];

let lootRare = [
	'kubejs:chests/loot_randomizer/anyrares_curio',
	'kubejs:chests/loot_randomizer/anystews',
	'twilightforest:entities/death_tome_books',
	'kubejs:chests/loot_randomizer/anycards',
	'kubejs:chests/loot_randomizer/anyredstone',
	'kubejs:blocks/lootblock_builder'
];

let lootEpic = [
	'kubejs:chests/loot_randomizer/affixgear2',
	'kubejs:chests/loot_randomizer/anyrares_curio',
	'minecraft:chests/simple_dungeon',
	'twilightforest:entities/death_tome_books',
	'kubejs:chests/loot_randomizer/anycards',
	'kubejs:chests/loot_randomizer/anyredstone',
	'kubejs:chests/loot_randomizer/anylogistics'
];

let lootMythic = [
	'kubejs:chests/loot_randomizer/anycreateparts',
	'kubejs:chests/loot_randomizer/anyengineer',
	'kubejs:chests/loot_randomizer/anycards',
	'kubejs:chests/loot_randomizer/anyindustrial',
	'kubejs:chests/loot_randomizer/anylogistics',
	'inventorypets:chests/pet_chest'
];

let lootAncient = [
	'minecraft:chests/end_city_treasure',
	'kubejs:chests/loot_randomizer/anyengineer',
	'kubejs:chests/loot_randomizer/anyindustrial',
	'kubejs:chests/loot_randomizer/anylogistics',
	'inventorypets:chests/pet_chest'
];

let food = ['kubejs:chests/loot_randomizer/anyfood'];

let lootDruidic = ['kubejs:chests/loot_randomizer/druidic_loot'];
let lootFloral = ['kubejs:chests/loot_randomizer/floral_loot'];

let foodBoxSound = ['infernalexp:entity.blindsight.death', 'infernalexp:entity.voline.hurt', 'infernalexp:entity.cerobeetle.hurt', 'infernalexp:entity.warpbeetle.hurt'];

onEvent('item.right_click', event => {
	pickLoot(event, 'kubejs:affixgear1', 'charm:bookshelf_open', lootCommon, 1)
	pickLoot(event, 'kubejs:affixgear2', 'charm:bookshelf_open', lootUncommon, 1)
	pickLoot(event, 'kubejs:affixgear3', 'charm:bookshelf_open', lootRare, 2)
	pickLoot(event, 'kubejs:affixgear4', 'charm:bookshelf_open', lootEpic, 2)
	pickLoot(event, 'kubejs:affixgear5', 'charm:bookshelf_open', lootMythic, 3)
	pickLoot(event, 'kubejs:affixgear6', 'charm:bookshelf_open', lootAncient, 3)

	pickLoot(event, 'kubejs:box_of_food', randomize(foodBoxSound), food, 1)

	pickLoot(event, 'kubejs:druidic_box', 'malum:tyrving_crush', lootDruidic, 1, 'betterendforge:tenanea_petal')
	pickLoot(event, 'kubejs:floral_box', 'infernalexp:entity.glowsilk_moth.death', lootFloral, 1, 'autumnity:falling_maple_leaf')
})