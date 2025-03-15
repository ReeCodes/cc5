let fa_json = {
  "add_loot": "forbidden_arcanus:blocks/additions/spawner_additions",
  "conditions": [
	{
	  "condition": "minecraft:random_chance",
	  "chance": 0.15
	},
    {
      "condition": "minecraft:inverted",
      "term": {
        "condition": "minecraft:match_tool",
        "predicate": {
          "enchantments": [
            {
              "enchantment": "minecraft:silk_touch"
            },
			{
              "enchantment": "charm:acquisition"
            }
          ]
        }
      }
    },
    {
      "condition": "forge:loot_table_id",
      "loot_table_id": "minecraft:blocks/spawner"
    }
  ],
  "type": "valhelsia_core:append_loot"
}

let bl_entities = [
    'minecraft:wither',
    'minecraft:elder_guardian',
    'minecraft:ender_dragon',
	'botania:doppleganger'
  ];

let qc_entity_blacklist = {};
qc_entity_blacklist[`replace`] = false
qc_entity_blacklist[`values`] = bl_entities

onEvent('server.datapack.first', event => {
		event.addJson(`forbidden_arcanus:loot_modifiers/spawner_additions.json`, fa_json)
		event.addJson(`forbidden_arcanus:tags/entity_types/quantum_catcher_blacklisted.json`, qc_entity_blacklist)
})