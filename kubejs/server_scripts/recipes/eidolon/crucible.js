onEvent('recipes', event => {

	let eid_crucible = (steps, result, id) => {
		event.recipes.eidolon.crucible({
			steps: [{
				ingredients: steps.map(r => Item.of(r).toJson())
			}],
			result: Item.of(result).toResultJson()
		}).id('eidolon:crucible/' + id)
	}
	
	eid_crucible(['minecraft:coal', 'eidolon:enchanted_ash'], '4x #forge:dusts/sulfur', 'sulfur')

	var removedItems = ['eidolon:sulfur'];
	removedItems.forEach(r => {
		event.remove({	output: r	})
	})
})

//FIX HARDCODED RECIPES
onEvent('server.datapack.first', event => {
	var empty_json = {
		"replace": true
	  }
	event.addJson('eidolon:recipes/sulfur.json', empty_json)
})