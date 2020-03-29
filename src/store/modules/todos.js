const state = {
  todos: []
}
const getters = {
  allTodos :state => state.todos
}
const mutations = {
  setTodos: (state,todos) => (state.todos = todos),
  newTodo: (state,todo) => state.todos.unshift(todo),
  removeTodo: (state,id) => state.todos = state.todos.filter(todo => todo.id !== id),
  updataTodo: (state,upTodo) => {
    const index = state.todos.findIndex(todo => todo.id === upTodo.id)
    if(index !== -1) {
      // state.todos[index].id = upTodo.id
      // state.todos[index].title = upTodo.title
      // state.todos[index].completed = upTodo.completed
      state.todos.splice(index, 1, upTodo);  // splice(下标,长度,内容)
    }
  }
}
const actions = {
  async fetchTodos({commit}) {
    const response = await axios.get('http://jsonplaceholder.typicode.com/todos');
    commit('setTodos',response.data)
  },
  async addTodo({commit},title) {
    const response = await axios.post('http://jsonplaceholder.typicode.com/todos', {
      title,completed: false
    })
    commit("newTodo",response.data)
  },
  async deleteTodo({commit},id) {
    await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`);
    commit("removeTodo",id)
  },
  async filterTodos({commit},count) {
    const response = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${count}`);
    commit("setTodos",response.data)
  },
  async updataTodo({commit},upTodo) {
    const response = await axios.put(`http://jsonplaceholder.typicode.com/todos/${upTodo.id}`,upTodo);
    commit("updataTodo", response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
