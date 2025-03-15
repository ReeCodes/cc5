let aa_modifiers = [
	'pick_on_a_stick_mineshaft',
	'sinking_shipwreck'
];

let aa_json = {
	"type": "empty"
}


onEvent('server.datapack.first', event => {
	for (let i of aa_modifiers) {
		event.addJson(`adventureapparatus:loot_modifiers/${i}.json`, aa_json)
	}
})