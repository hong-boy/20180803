let GLOBAL_ITEM_ID = 0;

/**
 * 定义TodoItem数据模型
 */
export default class TodoItemModel {
    constructor(label='', done=false){
        this.id = GLOBAL_ITEM_ID++; // id
        this.done = done; // 是否完成
        this.label = label; // 标题
    }
    /**
     * 添加待办
     * @param {String} label 标题 
     * @param {Boolean} done 是否完成 
     */
    static addTodo(label, done){
        return new TodoItemModel(label, done);
    }
}