let ie_json = {
	"replace": true
}


onEvent('server.datapack.first', event => {
		event.addJson(`infernalexp:loot_modifiers/hoglin_loot_modifier.json`, ie_json)
})