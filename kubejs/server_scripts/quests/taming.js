onEvent("item.entity_interact", event => {
    
    let entity = event.target;
    let player = event.player;
	
	let quest_taming = (entity_name, quest_id) => {
	if(entity.type == entity_name && entity.minecraftEntity.func_152114_e && entity.minecraftEntity.func_152114_e(player.minecraftEntity)) {
		  event.player.data.ftbquests.addProgress(quest_id, 1)
		}
	}
	
	quest_taming('minecraft:wolf', '24824D9AC554240B');
	quest_taming('mysticalworld:beetle', '6A7E05EF75E17649');
	quest_taming('mysticalworld:lava_cat', '000B3B6372F658FE');
	quest_taming('mysticalworld:silver_fox', '40519063041DCB83');
	quest_taming('whatareyouvotingfor:glare', '5DDF002023EE9ADF');
	quest_taming('whatareyouvotingfor:allay', '6026C3C50B561E86');
	quest_taming('alexsmobs:elephant', '5B5C3ABD261408F1');
	quest_taming('minecraft:cat', '5CABA7D64C572224');
	quest_taming('alexsmobs:capuchin_monkey', '20286C2B470499CB');
})