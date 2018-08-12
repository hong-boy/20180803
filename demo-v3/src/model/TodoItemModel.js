let ID_COUNTER = 0;

/**
 * TodoItemModel - 数据模型
 */
export default class TodoItemModel {
    constructor(label, done=false){
        this.id = ID_COUNTER++;
        this.label = label;
        this.done = done;
    }
}