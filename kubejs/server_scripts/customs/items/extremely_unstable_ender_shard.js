function randomCoords(max) {
	return Math.floor(Math.random() * max);
}

function random(ary) {
	return ary[Math.floor(Math.random() * ary.length)];
}

let dimensionNames = [
	'the_bumblezone:the_bumblezone',
	'undergarden:undergarden',
	'javd:void',
	'minecraft:the_nether',
	'rats:ratlantis',
	'mythicbotany:alfheim',
	'twilightforest:twilightforest',
	'atum:atum',
	'tropicraft:tropics',
	'blue_skies:everbright',
	'blue_skies:everdawn'
];

onEvent('item.right_click', event => {
	if (event.item.id == 'kubejs:extremely_unstable_endershard') {
		event.player.addItemCooldown(Item.of('kubejs:extremely_unstable_endershard'), 900)
		event.player.playSound('blue_skies:entity.alchemist.prepare_regen');
		event.player.playSound('minecraft:block.glass.break');
		event.server.runCommandSilent(`effect give ${event.player.name} champions:paralysis 7 0 true`);
		event.server.schedule(5500, cb => {
			event.player.playSound('gateways:gate_warp');
			event.server.runCommandSilent(`execute as ${event.player.name} in ${random(dimensionNames)} run tp ${randomCoords(50000)} ${randomCoords(200)} ${randomCoords(50000)}`);
			event.server.tell([text.yellow(event.entity.toString()), ' used an ', text.lightPurple('Extremely Unstable Ender Shard')])
		})
		if (!event.player.isCreativeMode()) {
			event.item.setCount(event.item.getCount() - 1)
		}
	}
})