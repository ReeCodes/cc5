onEvent('recipes', event => {


let na_offering = (input, start_item, output, id) => {
  event.recipes.naturesaura.offering({
    input: Ingredient.of(input).toJson(),
	start_item: Ingredient.of(start_item).toJson(),
	output: Item.of(output).toResultJson()
  }).id('naturesaura:offering/'+id)
}

na_offering('ars_nouveau:blank_parchment', 'naturesaura:calling_spirit', 'kubejs:anointed_contract', 'anointed_contract')

});