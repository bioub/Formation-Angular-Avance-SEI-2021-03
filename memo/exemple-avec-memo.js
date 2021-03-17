const memoizee = require('memoizee');

let todos = new Array(200000)
.fill({}).map((_, i) => ({ title: 'Item ' + i, completed: Math.random() > 0.5 ? true : false }));

// cette fonction doit être pure :
// - à des paramètres donnés, elle a toujours le même retour
// - pas de side-effect (console.log, requete ajax, storage)
// - ne modifie pas son paramètres d'entrée

function todosCompleted(todos) {
    return todos.filter((todo) => todo.completed);
}

const memoTodosCompleted = memoizee(todosCompleted);

console.time('todosCompleted');
console.log(memoTodosCompleted(todos).length + ' todos completed');
console.timeEnd('todosCompleted');

console.time('todosCompleted');
console.log(memoTodosCompleted(todos).length + ' todos completed');
console.timeEnd('todosCompleted');

console.time('todosCompleted');
console.log(memoTodosCompleted(todos).length + ' todos completed');
console.timeEnd('todosCompleted');

todos = [...todos, {title: 'New', completed: false}]

console.time('todosCompleted');
console.log(memoTodosCompleted(todos).length + ' todos completed');
console.timeEnd('todosCompleted');
