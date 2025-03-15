let orechidOres = [{
		tag: "botania:orechid_ores/common",
		weight: 670
	},
	{
		tag: "botania:orechid_ores/uncommon",
		weight: 220
	},
	{
		tag: "botania:orechid_ores/rare",
		weight: 196
	},
	{
		tag: "botania:orechid_ores/epic",
		weight: 16
	},
	{
		tag: "botania:orechid_ores/ultra_rare",
		weight: 2
	}
];

let orechidOresIgnem = [{
		tag: "botania:orechid_ores_ignem/common",
		weight: 670
	},
	{
		tag: "botania:orechid_ores_ignem/uncommon",
		weight: 220
	},
	{
		tag: "botania:orechid_ores_ignem/rare",
		weight: 196
	},
	{
		tag: "botania:orechid_ores_ignem/epic",
		weight: 38
	},
	{
		tag: "botania:orechid_ores_ignem/ultra_rare",
		weight: 2
	}
];

let orechidJson = {
	replace: true,
	values: orechidOres.map(ore => ({
		type: 'tag',
		tag: ore.tag,
		weight: ore.weight
	}))
};

let orechidIgnemJson = {
	replace: true,
	values: orechidOresIgnem.map(ore => ({
		type: 'tag',
		tag: ore.tag,
		weight: ore.weight
	}))
};

onEvent('server.datapack.first', event => {
	event.addJson('botania:orechid_ore_weights/orechid.json', orechidJson)
	event.addJson('botania:orechid_ore_weights/orechid_ignem.json', orechidIgnemJson)
})