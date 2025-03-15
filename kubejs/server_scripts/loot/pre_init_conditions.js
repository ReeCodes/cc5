// priority: 300

const condition_location = (predicates) => {
	let predicateList = [];

	for (let i = 0; i < predicates.length; i++) {
		let predicateType = predicates[i].predicateType;
		let ids = predicates[i].ids;
		let predicatesOfType = [];

		if (predicateType === 'biome') {
			predicatesOfType = ids.map(id => ({
				"biome": id
			}));
		} else if (predicateType === 'feature') {
			predicatesOfType = ids.map(id => ({
				"feature": id
			}));
		} else if (predicateType === 'dimension') {
			predicatesOfType = ids.map(id => ({
				"dimension": id
			}));
		}

		predicateList = predicateList.concat(predicatesOfType);
	}

	return {
		"condition": "minecraft:alternative",
		"terms": predicateList.map(predicate => ({
			"condition": "minecraft:location_check",
			"predicate": predicate
		}))
	}
}

function entity_advancement(adv) {
  let entity_advancements = {
    "condition": "minecraft:entity_properties",
    "entity": "this",
    "predicate": {
      "type": "minecraft:player",
      "player": {
        "advancements": {}
      }
    }
  }

  entity_advancements.predicate.player.advancements[adv] = true;

  return entity_advancements;
}