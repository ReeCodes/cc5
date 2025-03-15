function shuffleArray(array) {
	const newArray = array.slice();
	for (let i = newArray.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[newArray[i], newArray[j]] = [newArray[j], newArray[i]];
	}
	return newArray;
}

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

function getNewRandomOrder(array, count) {
    let shuffledArray = [];
    let tempArray = array.slice();

    for (let i = 0; i < count; i++) {
        let randomIndex = getRandomIndex(tempArray.length);
        shuffledArray.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
    }

    return shuffledArray;
}

function applyOffers(event, level, trader, offerData) {
	let entities = event.server.getEntities();
	entities.forEach(entity => {
		if (entity.type == 'farlanders:farlander' && trader == 'farlanders:farlander' && entity.getFullNBT().Level == level) {
				let l = entity.getFullNBT().Level;
				l1 = (l + (l - 2)) || 0;
				l2 = (l1 + 1);
			if (entity.persistentData.fLevel == undefined) {
				entity.persistentData.fLevel = level - 1
			}
				let UUID = entity.getFullNBT().UUID;
			if (entity.persistentData.fLevel == level - 1 && entity.persistentData.fLevel < 4 && entity.getFullNBT().Xp <= 150) {
				let [offer1, offer2] = getNewRandomOrder(offerData, 2);
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[${l1}] set value {buy:{id:"${offer1.buy}",Count:${offer1.buyC}b}, sell:{id:"${offer1.sell}",Count:${offer1.sellC}b}, maxUses:${offer1.maxUses}, xp:${offer1.xp}}`)
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[${l2}] set value {buy:{id:"${offer2.buy}",Count:${offer2.buyC}b}, sell:{id:"${offer2.sell}",Count:${offer2.sellC}b}, maxUses:${offer2.maxUses}, xp:${offer2.xp}}`)
				entity.persistentData.fLevel = level
				return
			} else if (entity.persistentData.fLevel == 3 && l == 4) {
				let shuffledOffers = getNewRandomOrder(offerData, 1);
				let offer3 = shuffledOffers[0];
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[6] set value {buy:{id:"${offer3.buy}",Count:${offer3.buyC}b}, sell:{id:"${offer3.sell}",Count:${offer3.sellC}b}, maxUses:${offer3.maxUses}, xp:${offer3.xp}}`)
				entity.persistentData.fLevel = level
				return
			} else if (entity.persistentData.fLevel == 4 && l == 5) {
				let [offer1, offer2] = getNewRandomOrder(offerData, 2);
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[7] set value {buy:{id:"${offer1.buy}",Count:${offer1.buyC}b}, sell:{id:"${offer1.sell}",Count:${offer1.sellC}b}, maxUses:${offer1.maxUses}, xp:${offer1.xp}}`)
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[8] set value {buy:{id:"${offer2.buy}",Count:${offer2.buyC}b}, sell:{id:"${offer2.sell}",Count:${offer2.sellC}b}, maxUses:${offer2.maxUses}, xp:${offer2.xp}}`)
				entity.persistentData.fLevel = 6
				return
			}
		} else if (entity.type == 'farlanders:elder_farlander' && trader == 'farlanders:elder_farlander' && entity.getFullNBT().Level == level) {
				let l = entity.getFullNBT().Level;
				l1 = (l + (l - 2)) || 0;
				l2 = (l1 + 1);
			if (entity.persistentData.fLevel == undefined) {
				entity.persistentData.fLevel = level - 1
			}
				let UUID = entity.getFullNBT().UUID;
			if (entity.persistentData.fLevel == level - 1 && entity.persistentData.fLevel < 4 && entity.getFullNBT().Xp <= 150) {
				let [offer1, offer2] = getNewRandomOrder(offerData, 2);
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[${l1}] set value {buy:{id:"${offer1.buy}",Count:${offer1.buyC}b}, sell:{id:"${offer1.sell}",Count:${offer1.sellC}b}, maxUses:${offer1.maxUses}, xp:${offer1.xp}}`)
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[${l2}] set value {buy:{id:"${offer2.buy}",Count:${offer2.buyC}b}, sell:{id:"${offer2.sell}",Count:${offer2.sellC}b}, maxUses:${offer2.maxUses}, xp:${offer2.xp}}`)
				entity.persistentData.fLevel = level
				return
			} else if (entity.persistentData.fLevel == 3 && l == 4) {
				let shuffledOffers = getNewRandomOrder(offerData, 1);
				let offer3 = shuffledOffers[0];
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[6] set value {buy:{id:"${offer3.buy}",Count:${offer3.buyC}b}, sell:{id:"${offer3.sell}",Count:${offer3.sellC}b}, maxUses:${offer3.maxUses}, xp:${offer3.xp}}`)
				entity.persistentData.fLevel = level
				return
			} else if (entity.persistentData.fLevel == 4 && l == 5) {
				let [offer1, offer2] = getNewRandomOrder(offerData, 2);
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[7] set value {buy:{id:"${offer1.buy}",Count:${offer1.buyC}b}, sell:{id:"${offer1.sell}",Count:${offer1.sellC}b}, maxUses:${offer1.maxUses}, xp:${offer1.xp}}`)
				event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${UUID}},limit=1] Offers.Recipes[8] set value {buy:{id:"${offer2.buy}",Count:${offer2.buyC}b}, sell:{id:"${offer2.sell}",Count:${offer2.sellC}b}, maxUses:${offer2.maxUses}, xp:${offer2.xp}}`)
				entity.persistentData.fLevel = 6
				return
			}
		} else if (entity.type == 'farlanders:wanderer') {
			if (entity.persistentData.fLevel == undefined) {
				entity.persistentData.fLevel = level - 1
			}
				let wUUID = entity.getFullNBT().UUID;
			if (entity.persistentData.fLevel == 0) {
				let wOffers = getNewRandomOrder(wandererTrades, 5);
				for (let i = 0; i < 5; i++) {
					let offer = wOffers[i];
					let index = i;
					event.server.runCommandSilent(`data modify entity @e[nbt={UUID:${wUUID}},limit=1] Offers.Recipes[${index}] set value {buy:{id:"${offer.buy}",Count:${offer.buyC}b}, sell:{id:"${offer.sell}",Count:${offer.sellC}b}, maxUses:${offer.maxUses}, xp:${offer.xp}}`)
				}
				entity.persistentData.fLevel = level
				return
			}
		}
	})
}

let offersList1 = [{
		buy: 'farlanders:endumium_crystal',
		buyC: 6,
		sell: 'emendatusenigmatica:enderium_ingot',
		sellC: 2,
		maxUses: 12,
		xp: 4
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 24,
		sell: 'emendatusenigmatica:enderium_block',
		sellC: 1,
		maxUses: 5,
		xp: 7
	},
	{
		buy: 'tconstruct:ender_slime_crystal',
		buyC: 8,
		sell: 'farlanders:endumium_crystal',
		sellC: 4,
		maxUses: 12,
		xp: 6
	},
	{
		buy: 'resourcefulbees:ender_honeycomb',
		buyC: 6,
		sell: 'farlanders:endumium_crystal',
		sellC: 18,
		maxUses: 16,
		xp: 4
	},
	{
		buy: 'tconstruct:ender_congealed_slime',
		buyC: 8,
		sell: 'farlanders:endumium_crystal',
		sellC: 3,
		maxUses: 20,
		xp: 2
	}
];

let offersList2 = [{
		buy: 'farlanders:endumium_crystal',
		buyC: 9,
		sell: 'tconstruct:ender_cake',
		sellC: 2,
		maxUses: 12,
		xp: 3
	},
	{
		buy: 'quark:biotite',
		buyC: 12,
		sell: 'farlanders:endumium_crystal',
		sellC: 4,
		maxUses: 10,
		xp: 5
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 10,
		sell: 'alexsmobs:chorus_on_a_stick',
		sellC: 1,
		maxUses: 4,
		xp: 7
	},
	{
		buy: 'xreliquary:nebulous_heart',
		buyC: 2,
		sell: 'farlanders:endumium_crystal',
		sellC: 18,
		maxUses: 6,
		xp: 6
	}
];

let offersList3 = [{
		buy: 'minecraft:end_rod',
		buyC: 6,
		sell: 'farlanders:endumium_crystal',
		sellC: 8,
		maxUses: 14,
		xp: 10
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 16,
		sell: 'minecraft:ender_chest',
		sellC: 1,
		maxUses: 10,
		xp: 12
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 10,
		sell: 'largemeals:chorus_fruit_popsicle',
		sellC: 5,
		maxUses: 22,
		xp: 8
	}
];

let offersList4 = [{
		buy: 'farlanders:endumium_crystal',
		buyC: 14,
		sell: 'integrateddynamics:crystalized_chorus_block',
		sellC: 2,
		maxUses: 8,
		xp: 15
	},
	{
		buy: 'minecraft:popped_chorus_fruit',
		buyC: 12,
		sell: 'farlanders:endumium_crystal',
		sellC: 8,
		maxUses: 14,
		xp: 18
	},
	{
		buy: 'minecraft:end_crystal',
		buyC: 1,
		sell: 'farlanders:endumium_crystal',
		sellC: 10,
		maxUses: 5,
		xp: 20
	}
];

let offersList5 = [{
		buy: 'charm:endermite_powder',
		buyC: 2,
		sell: 'farlanders:endumium_crystal',
		sellC: 12,
		maxUses: 10,
		xp: 15
	},
	{
		buy: 'betterendforge:terminite_block',
		buyC: 4,
		sell: 'farlanders:endumium_crystal',
		sellC: 24,
		maxUses: 8,
		xp: 10
	},
	{
		buy: 'betterendforge:thallasium_block',
		buyC: 2,
		sell: 'farlanders:endumium_crystal',
		sellC: 16,
		maxUses: 12,
		xp: 8
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 15,
		sell: 'byg:raw_pendorite',
		sellC: 2,
		maxUses: 8,
		xp: 8
	}
];

let wandererTrades = [{
		buy: 'farlanders:endumium_crystal',
		buyC: 6,
		sell: 'farlanders:titan_hide',
		sellC: 1,
		maxUses: 12,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 20,
		sell: 'farlanders:ender_horn',
		sellC: 1,
		maxUses: 4,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 14,
		sell: 'minecraft:ender_eye',
		sellC: 2,
		maxUses: 3,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 32,
		sell: 'kubejs:unstable_endershard',
		sellC: 1,
		maxUses: 6,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 24,
		sell: 'tconstruct:enderman_head',
		sellC: 1,
		maxUses: 4,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 64,
		sell: 'enigmaticlegacy:mending_mixture',
		sellC: 1,
		maxUses: 8,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 48,
		sell: 'cyclic:ender_pearl_reuse',
		sellC: 1,
		maxUses: 3,
		xp: 1
	},
	{
		buy: 'statues:enderman_statue',
		buyC: 1,
		sell: 'farlanders:endumium_crystal',
		sellC: 64,
		maxUses: 1,
		xp: 1
	},
	{
		buy: 'minecraft:ender_pearl',
		buyC: 2,
		sell: 'farlanders:endumium_crystal',
		sellC: 3,
		maxUses: 24,
		xp: 1
	},
	{
		buy: 'botania:ender_air_bottle',
		buyC: 4,
		sell: 'farlanders:endumium_crystal',
		sellC: 32,
		maxUses: 8,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 64,
		sell: 'forbidden_arcanus:eternal_stella',
		sellC: 1,
		maxUses: 1,
		xp: 1
	}
];

let elderList1 = [{
		buy: 'emendatusenigmatica:enderium_gear',
		buyC: 2,
		sell: 'farlanders:endumium_crystal',
		sellC: 13,
		maxUses: 15,
		xp: 2
	},
	{
		buy: 'betterendforge:flavolite',
		buyC: 32,
		sell: 'farlanders:endumium_crystal',
		sellC: 12,
		maxUses: 30,
		xp: 4
	},
	{
		buy: 'betterendforge:violecite',
		buyC: 24,
		sell: 'farlanders:endumium_crystal',
		sellC: 8,
		maxUses: 30,
		xp: 4
	},
	{
		buy: 'ftbic:enderium_wire',
		buyC: 6,
		sell: 'farlanders:endumium_crystal',
		sellC: 8,
		maxUses: 16,
		xp: 3
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 8,
		sell: 'enigmaticlegacy:recall_potion',
		sellC: 1,
		maxUses: 12,
		xp: 6
	}
];

let elderList2 = [{
		buy: 'endergetic:eumus_brick',
		buyC: 48,
		sell: 'farlanders:endumium_crystal',
		sellC: 18,
		maxUses: 10,
		xp: 6
	},
	{
		buy: 'betterendforge:crystal_shards',
		buyC: 8,
		sell: 'farlanders:endumium_crystal',
		sellC: 15,
		maxUses: 10,
		xp: 8
	},
	{
		buy: 'betterendforge:hydralux_petal',
		buyC: 4,
		sell: 'farlanders:endumium_crystal',
		sellC: 10,
		maxUses: 14,
		xp: 7
	},
	{
		buy: 'bloodmagic:reagentteleposition',
		buyC: 1,
		sell: 'farlanders:endumium_crystal',
		sellC: 12,
		maxUses: 8,
		xp: 9
	}
];

let elderList3 = [{
		buy: 'nourished_end:voidsteel_ingot',
		buyC: 3,
		sell: 'farlanders:endumium_crystal',
		sellC: 10,
		maxUses: 8,
		xp: 9
	},
	{
		buy: 'wyrmroost:purple_geode',
		buyC: 6,
		sell: 'farlanders:endumium_crystal',
		sellC: 10,
		maxUses: 10,
		xp: 5
	},
	{
		buy: 'envirocore:litherite_crystal',
		buyC: 1,
		sell: 'farlanders:endumium_crystal',
		sellC: 7,
		maxUses: 20,
		xp: 12
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 6,
		sell: 'quark:basalt',
		sellC: 8,
		maxUses: 16,
		xp: 11
	}
];

let elderList4 = [{
		buy: 'alexsmobs:capsid',
		buyC: 2,
		sell: 'farlanders:endumium_crystal',
		sellC: 10,
		maxUses: 15,
		xp: 15
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 18,
		sell: 'enderstorage:ender_chest',
		sellC: 1,
		maxUses: 5,
		xp: 20
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 14,
		sell: 'enderstorage:ender_tank',
		sellC: 1,
		maxUses: 7,
		xp: 20
	}
];

let elderList5 = [{
		buy: 'farlanders:endumium_crystal',
		buyC: 20,
		sell: 'betterendforge:respawn_obelisk',
		sellC: 1,
		maxUses: 8,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 20,
		sell: 'enigmaticlegacy:etherium_ore',
		sellC: 1,
		maxUses: 6,
		xp: 1
	},
	{
		buy: 'farlanders:endumium_crystal',
		buyC: 30,
		sell: 'enigmaticlegacy:astral_dust',
		sellC: 2,
		maxUses: 8,
		xp: 1
	}
];

onEvent('server.tick', event => {
	applyOffers(event, 2, 'farlanders:farlander', offersList2)
	applyOffers(event, 3, 'farlanders:farlander', offersList3)
	applyOffers(event, 4, 'farlanders:farlander', offersList4)
	applyOffers(event, 5, 'farlanders:farlander', offersList5)

	applyOffers(event, 2, 'farlanders:elder_farlander', elderList2)
	applyOffers(event, 3, 'farlanders:elder_farlander', elderList3)
	applyOffers(event, 4, 'farlanders:elder_farlander', elderList4)
	applyOffers(event, 5, 'farlanders:elder_farlander', elderList5)
})

onEvent('entity.spawned', event => {
	applyOffers(event, 1, 'farlanders:wanderer', wandererTrades)
	applyOffers(event, 1, 'farlanders:farlander', offersList1)
	applyOffers(event, 1, 'farlanders:elder_farlander', elderList1)
})