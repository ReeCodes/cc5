onForgeEvent("net.minecraftforge.event.entity.living.PotionEvent$PotionAddedEvent", event => {
    let completeQuestWhenActiveEffect = (effectName, questID) => {
    if(!event.entity.asKJS().isPlayer()) return;
        let player = event.entity.asKJS()
        let effectInstance = event.getPotionEffect()
        let pEffect = effectInstance.func_76453_d()
        if (pEffect == effectName) {
            player.data.ftbquests.addProgress(questID, 1)
        }
    }
    
    //QUESTS: EFFECT-CHECK
    completeQuestWhenActiveEffect("effect.occultism.third_eye", '133068A434E5C0F2');
});