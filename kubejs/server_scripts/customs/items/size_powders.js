const pehkuiStages = {
	'-3': {
		'pehkui:base': 0.05,
		'pehkui:drops': 4,
		'pehkui:motion': 1.5,
		'pehkui:step_height': 0.5,
		'pehkui:view_bobbing': 2,
		'pehkui:reach': 2,
		'pehkui:third_person': 2
	},
	'-2': {
		'pehkui:base': 0.25,
		'pehkui:drops': 3,
		'pehkui:motion': 1.25,
		'pehkui:step_height': 1,
		'pehkui:view_bobbing': 2,
		'pehkui:reach': 2,
		'pehkui:third_person': 2
	},
	'-1': {
		'pehkui:base': 0.5,
		'pehkui:drops': 2,
		'pehkui:motion': 1.125,
		'pehkui:step_height': 1.5,
		'pehkui:view_bobbing': 1,
		'pehkui:reach': 2,
		'pehkui:third_person': 2
	},
	'0': {
		'pehkui:base': 1,
		'pehkui:drops': 1,
		'pehkui:motion': 1,
		'pehkui:step_height': 1,
		'pehkui:view_bobbing': 1,
		'pehkui:reach': 1,
		'pehkui:third_person': 1
	},
	'1': {
		'pehkui:base': 2,
		'pehkui:drops': 0.5,
		'pehkui:motion': 1,
		'pehkui:step_height': 1,
		'pehkui:view_bobbing': 1,
		'pehkui:reach': 0.75,
		'pehkui:third_person': 0.875
	},
	'2': {
		'pehkui:base': 4,
		'pehkui:drops': 0.25,
		'pehkui:motion': 0.75,
		'pehkui:step_height': 1,
		'pehkui:view_bobbing': 1,
		'pehkui:reach': 0.8,
		'pehkui:third_person': 0.75
	},
	'3': {
		'pehkui:base': 8,
		'pehkui:drops': 0.125,
		'pehkui:motion': 0.625,
		'pehkui:step_height': 1,
		'pehkui:view_bobbing': 1,
		'pehkui:reach': 0.85,
		'pehkui:third_person': 0.625
	}
}

var sizeUP = 'kubejs:dust_size_up'
var sizeDOWN = 'kubejs:dust_size_down'

let pehkuiJumpBoost = {
	'-3': 4.5,
	'-2': 2.0,
	'-1': 1.5
}

function setPehkuiStage(event, entity, item, transition) {
	if (event.item.id == item) {
		if (entity.persistentData.pehkuiStage == undefined) {
			entity.persistentData.pehkuiStage = 0
		}
		if ((entity.persistentData.pehkuiStage > -3 || transition > 0) && (entity.persistentData.pehkuiStage < 3 || transition < 0) && !entity.isCrouching()) {
			entity.persistentData.pehkuiStage += transition
			event.player.damageHeldItem(event.hand, 1, item => event.player.give(Item.of('minecraft:bowl')))
			let pS = pehkuiStages[Math.floor(entity.persistentData.pehkuiStage).toString()]
			for (let element in pS) {
				event.server.runCommandSilent(`scale set ${element} ${pS[element]} ${entity.id}`)
			}
			event.player.playSound('occultism:poof')
			event.player.addItemCooldown(item, 12)
			event.cancel()
		}
	}
}

function resetSize(event, player, item) {
	if (event.item.id == item) {
		if (player.persistentData.pehkuiStage != 0 && player.isCrouching() && player.isOnGround()) {
			player.damageHeldItem(event.hand, 1, item => event.player.give(Item.of('minecraft:bowl')))
			event.server.runCommandSilent(`scale reset ${player.id}`);
			player.persistentData.pehkuiStage = 0
			player.playSound('additional_lights:fire_ignition_l')
			event.cancel()
		}
	}
}

onEvent('item.right_click', event => {
	setPehkuiStage(event, event.player, Item.of(sizeDOWN), -1)
	setPehkuiStage(event, event.player, Item.of(sizeUP), 1)
	
	resetSize(event, event.player, Item.of(sizeUP))
	resetSize(event, event.player, Item.of(sizeDOWN))
});

onEvent('item.entity_interact', event => {
	setPehkuiStage(event, event.target, Item.of(sizeDOWN), -1)
	setPehkuiStage(event, event.target, Item.of(sizeUP), 1)
});

onEvent('player.tick', event => {
if (event.player.ticksExisted % 4 == 0) {
	if (event.player.persistentData.pehkuiStage != undefined) {
		const pehkuiStageInt = Math.floor(event.player.persistentData.pehkuiStage);

		if (pehkuiStageInt < 0 && event.player.isCrouching() && event.player.isOnGround() && event.player.data.tempJumpHeight == 1) {
			event.player.data.tempJumpHeight = pehkuiJumpBoost[pehkuiStageInt];
			event.server.runCommandSilent(`scale set pehkui:jump_height ${event.player.data.tempJumpHeight} ${event.player.id}`);
			event.server.runCommandSilent(`scale set pehkui:jump_height ${event.player.data.tempJumpHeight} ${event.player.id}`);
		} else if (pehkuiStageInt < 0 && !event.player.isCrouching() && event.player.data.tempJumpHeight != 1) {
			event.player.data.tempJumpHeight = 1;
			event.server.runCommandSilent(`scale set pehkui:jump_height 1 ${event.player.id}`);
		}
		if (event.player.isHoldingInAnyHand(Item.of(sizeDOWN).ignoreNBT()) || event.player.isHoldingInAnyHand(Item.of(sizeUP).ignoreNBT())) {
			event.player.setStatusMessage(Text.of(`Current Scale: ${pehkuiStages[pehkuiStageInt]['pehkui:base']}x`).gold());
		}
	}
}
});