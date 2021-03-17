const todos = new Array(200000)
.fill({}).map((_, i) => ({ title: 'Item ' + i, completed: Math.random() > 0.5 ? true : false }));


function todosCompleted(todos) {
    return todos.filter((todo) => todo.completed);
}

console.time('todosCompleted');
console.log(todosCompleted(todos).length + ' todos completed');
console.timeEnd('todosCompleted');

console.time('todosCompleted');
console.log(todosCompleted(todos).length + ' todos completed');
console.timeEnd('todosCompleted');

console.time('todosCompleted');
console.log(todosCompleted(todos).length + ' todos completed');
console.timeEnd('todosCompleted');