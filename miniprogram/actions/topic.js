import ACTIONS from '../const/ActionTypes/index.js'

//评论
export const actionCommentTopic = (topicId, comment) => {
    return {
        type: ACTIONS.TOPIC_ACTIONS.COMMENT_TOPIC,
        topicId,
        comment
    }
}
// 点赞
export const actionHitTopic = ( topicId, who ) => {

    return {
        type: ACTIONS.TOPIC_ACTIONS.HIT_TOPIC,
        topicId,
        who
    }

}
