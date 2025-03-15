let an_json = {
	"replace": true
}

onEvent('server.datapack.first', event => {
		event.addJson(`ars_nouveau:loot_modifiers/dungeon_loot.json`, an_json)
})