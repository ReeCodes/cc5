let randomize = (a) => {
	return a[Math.floor(Math.random() * a.length)];
}

let tippedArrows = [
	'minecraft:weakness',
	'atmospheric:worsening',
	'apotheosis:sundering',
	'apotheosis:fatigue',
	'buzzier_bees:unluck',
	'cyclic:wither',
	'cyclic:hunger',
	'undergarden:featherweight',
	'undergarden:brittleness'
];

let specialArrows = [
	'minecraft:spectral_arrow',
	'archers_paradox:frost_arrow',
	'archers_paradox:ender_arrow',
	'archers_paradox:phantasmal_arrow',
	'archers_paradox:quartz_arrow',
	'archers_paradox:shulker_arrow',
	'archers_paradox:slime_arrow',
	'apotheosis:obsidian_arrow',
	'archers_paradox:blaze_arrow'
];

onEvent('entity.spawned', event => {
	//CUSTOM SKELETON SPAWNS
	if (event.entity.type == 'specialmobs:skeleton' ||
		event.entity.type == 'specialmobs:bruteskeleton' ||
		event.entity.type == 'specialmobs:fireskeleton' ||
		event.entity.type == 'specialmobs:gatlingskeleton' ||
		event.entity.type == 'specialmobs:giantskeleton' ||
		event.entity.type == 'specialmobs:poisonskeleton' ||
		event.entity.type == 'specialmobs:sniperskeleton' ||
		event.entity.type == 'specialmobs:weatheredskeleton') {
		var r = Math.random();
		if (r < 0.1) {
			event.server.scheduleInTicks(1, cb => {
				let UUID = event.entity.getFullNBT().UUID;
				let arrowFormula = [
					`"${randomize(specialArrows)}",Count:1b`,
					`"minecraft:tipped_arrow",tag:{Potion:"${randomize(tippedArrows)}"},Count:1b`,
					`"minecraft:tipped_arrow",tag:{CustomPotionEffects:[{ShowIcon:1b,ShowParticles:1b,Duration:100,Id:${randomize(global.cptBad)}b,Amplifier:0b}]},Count:1b`
				];
				event.server.runCommandSilent(`execute as @e[nbt={UUID:${UUID}},limit=1] if data entity @s {HandItems:[{"id":"minecraft:bow"}]} run data modify entity @s HandItems[1] set value {id: ${randomize(arrowFormula)}}`);
			});
		}
	}
	//CUSTOM ZOMBIE SPAWNS
	else if	(event.entity.type == 'specialmobs:zombie' ||
		event.entity.type == 'specialmobs:firezombie' ||
		event.entity.type == 'specialmobs:fishingzombie' ||
		event.entity.type == 'specialmobs:frozenzombie' ||
		event.entity.type == 'specialmobs:giantzombie' ||
		event.entity.type == 'specialmobs:hungryzombie' ||
		event.entity.type == 'specialmobs:plaguezombie' ||
		event.entity.type == 'specialmobs:brutezombie') {
		let pumpkinHeads = Ingredient.of(['@omgourd', '#chipped:carved_pumpkin', '#chipped:jack_o_lantern']).itemIds.toArray()
		var r = Math.random();
		if (r < 0.05) {
			event.server.scheduleInTicks(1, cb => {
				let UUID = event.entity.getFullNBT().UUID;
				event.server.runCommandSilent(`execute as @e[nbt={UUID:${UUID}},limit=1] if data entity @s {ArmorItems:[{},{},{},{}]} run data modify entity @s ArmorItems[3] set value {id:"${randomize(pumpkinHeads)}",Count:1b}`);
			});
		} else return;
	}
})