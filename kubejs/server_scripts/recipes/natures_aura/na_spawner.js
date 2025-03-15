onEvent('recipes', event => {

let na_spawning = (inputs, entity_name, aura_amount, time, id) => {
  event.recipes.naturesaura.animal_spawner({
    ingredients: inputs.map(r => Item.of(r).toJson()),
	entity: entity_name,
	aura: aura_amount,
	time: time
  }).id('naturesaura/animal_spawner/'+id)
}

na_spawning(['naturesaura:birth_spirit', 'rats:plague_essence', 'rats:rat_skull', '#forge:storage_blocks/emerald'], 'rats:plague_doctor', 75000, 80, 'plague_doctor')

na_spawning(['naturesaura:birth_spirit', '#forge:storage_blocks/copper', '#forge:pumpkins/carved'], 'whatareyouvotingfor:copper_golem', 35000, 60, 'copper_golem')

na_spawning(['naturesaura:birth_spirit', 'minecraft:stone', 'quark:diamond_heart'], 'quark:stoneling', 35000, 60, 'stoneling')

});