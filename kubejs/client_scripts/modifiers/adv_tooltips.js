let titleCase = (s) => {
	let a = s.split(" ");
	a.forEach((word, index) => {
		a[index] = word.charAt(0).toUpperCase() + word.slice(1);
	})
	return a.join(" ");
}

function romanize(num) {
	var lookup = {
			XL: 40,
			X: 10,
			IX: 9,
			V: 5,
			IV: 4,
			I: 1
		},
		roman = '',
		i;
	for (i in lookup) {
		while (num >= lookup[i]) {
			roman += i;
			num -= lookup[i];
		}
	}
	return roman;
}

onEvent('item.tooltip', tooltip => {

	let boxTooltips = [{
			id: 'kubejs:affixgear1',
			rarity: '§7 Common',
			drops: '\u18B2 Drops §d1 of 4 §fLoot Types',
			textLines: [
				'§f\u18C1 §aBlock Fiasco',
				'§f\u18C1 §aSprouting Seeds',
				'§f\u18C1 §aFarmer\'s Share',
				'§f\u18C1 §aGift Of Sagittarius'
			]
		},
		{
			id: 'kubejs:affixgear2',
			rarity: '§a Uncommon',
			drops: '\u18B2 Drops §d1 of 7 §fLoot Types',
			textLines: [
				'§f\u18C1 §aBlock Fiasco',
				'§f\u18C1 §aGift Of Sagittarius',
				'§f\u18C1 §aGlazed Apples',
				'§f\u18C1 §aHomecooked Stews',
				'§f\u18C1 §aCard Collection',
				'§f\u18C1 §aLiber Magicae',
				'§f\u18C1 §aFisher\'s Catch'

			]
		},
		{
			id: 'kubejs:affixgear3',
			rarity: '§9 Rare',
			drops: '\u18B2 Drops §d2 of 6 §fLoot Types',
			textLines: [
				'§f\u18C1 §aHomecooked Stews',
				'§f\u18C1 §aTrove Of Relics',
				'§f\u18C1 §aLiber Magicae',
				'§f\u18C1 §aCard Collection',
				'§f\u18C1 §aRed Dust Lust',
				'§f\u18C1 §aClutter Of Blocks'
			]
		},
		{
			id: 'kubejs:affixgear4',
			rarity: '§5 Epic',
			drops: '\u18B2 Drops §d3 of 7 §fLoot Types',
			textLines: [
				'§f\u18C1 §aWroughtly Handcrafted',
				'§f\u18C1 §aTrove Of Relics',
				'§f\u18C1 §aDungeoneer\'s Treasure',
				'§f\u18C1 §aCard Collection',
				'§f\u18C1 §aRed Dust Lust',
				'§f\u18C1 §aMoving Forward'
			]
		},
		{
			id: 'kubejs:affixgear5',
			rarity: '§6 Mythic',
			drops: '\u18B2 Drops §d3 of 6 §fLoot Types',
			textLines: [
				'§f\u18C1 §aCreator\'s Palette',
				'§f\u18C1 §aEngineer\'s Delight',
				'§f\u18C1 §aCard Collection',
				'§f\u18C1 §aFactory-Ready',
				'§f\u18C1 §aMoving Forward',
				'§f\u18C1 §aPet Circus'
			]
		},
		{
			id: 'kubejs:affixgear6',
			rarity: '§4 Ancient',
			drops: '\u18B2 Drops §d3 of 5 §fLoot Types',
			textLines: [
				'§f\u18C1 §aEndbound',
				'§f\u18C1 §aEngineer\'s Delight',
				'§f\u18C1 §aFactory-Ready',
				'§f\u18C1 §aMoving Forward',
				'§f\u18C1 §aPet Circus'
			]
		},
		{
			id: 'kubejs:box_of_food'
		},
		{
			id: 'kubejs:druidic_box'
		},
		{
			id: 'kubejs:floral_box'
		}
	];

	for (let i = 0; i < boxTooltips.length; i++) {
		let b = boxTooltips[i];

		tooltip.addAdvanced(b.id, (item, advanced, text) => {
			if (!tooltip.isShift()) {
				if (b.rarity && b.drops) {
					text.add(1, [Text.of(b.rarity)])
					text.add(2, [Text.of(b.drops)])
					text.add(3, [Text.of('§f\u18C3 §aHold Shift')])
				} else {
					text.add(1, [Text.of('§f\u18C3 §aHold Shift')])
				}
			} else {
				text.add(1, [Text.of('\u18B2 §eEach §aLevel of Luck §egrants \u18B0§a+2% §echance for an extra roll')])
				text.add(2, [Text.of('\u18B2 §eMax Possible Extra Rolls: \u18B0§a+3')])
				if (b.textLines) {
					text.add(3, [Text.of('\u18CD §nContents:')])
					for (let j = 0; j < b.textLines.length; j++) {
						text.add(4 + j, [b.textLines[j]]);
					}
				} else {
					if (!['kubejs:box_of_food'].includes(b.id)) {
						text.add(3, [Text.of('§2§oThe more knowledge, the more you will be granted.')])
					}
				}
			}
		})
	}

	for (let i = 0; i < global.armorSets.length; i++) {
		let b = global.armorSets[i];
		['head', 'chestplate', 'leggings', 'boots', 'partial'].forEach((piece) => {
			tooltip.addAdvanced(b[piece], (item, advanced, text) => {
				if (!tooltip.isShift()) {
					if (!b.partial) {
						text.add(1, [Text.of('\u18B2 §7Full Armor Set Effects')])
					} else {
						text.add(1, [Text.of('\u18B2 §7Partial Armor Effect')])
					}
					text.add(2, [Text.of('§f\u18C3 §aHold Shift')])
				} else {
					text.add(1, [Text.of('\u18CD §nEffects:')])
					for (let j = 0; j < b.effects.length; j++) {
						let effects = b.effects[j]
						text.add(2 + j, [Text.of(`§f\u18C1 §e${titleCase(effects.effect.split(':')[1].replace(/_/g, ' '))} §6${romanize(effects.amp+1)}`)])
					}
				}
			})
		})
	}

	Ingredient.of(['#kubejs:geodes']).stacks.forEach(g => {
		tooltip.addAdvanced(g, (item, advanced, text) => {
			if (!tooltip.isShift()) {
				text.add(1, [Text.of('§f\u18C3 §aHold Shift')])
			} else {
				text.add(1, [Text.of('Has a 0.8% chance of dropping when mining any type of ore.').gray()])
				text.add(2, [Text.of('Each Level of Fortune increases the chance by ').gray().append(Text.of('\u18B0+0.8%').green())])
				text.add(3, [Text.of('Has a rare chance to drop from geode\'s by Tetra').gray()])
			}
		})
	})

	tooltip.addAdvanced('kubejs:dust_size_down', (item, advanced, text) => {
		if (!tooltip.isShift()) {
			text.add(1, [Text.of('§oUse on your own risk.').color('#c4a9fc')])
			text.add(2, [Text.of('§f\u18C3 §aHold Shift')])
		} else {
			text.add(1, [Text.of('Makes the user shrink').gray()])
			text.add(2, [Text.of('Shift+\u18B9 to reset size').gray()])
		}
	})

	tooltip.addAdvanced('kubejs:dust_size_up', (item, advanced, text) => {
		if (!tooltip.isShift()) {
			text.add(1, [Text.of('§oUse on your own risk.').color('#c4a9fc')])
			text.add(2, [Text.of('§f\u18C3 §aHold Shift')])
		} else {
			text.add(1, [Text.of('Makes the user expand').gray()])
			text.add(2, [Text.of('Shift+\u18B9 to reset size').gray()])
		}
	})
})