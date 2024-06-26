import React, { useState } from "react";

function App() {
  const initialItems = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Learn Tailwind CSS" },
    { id: 3, task: "Build a Todo List" },
  ];

  const [todos, setTodos] = useState(initialItems);
  const [inputValue, setInputValue] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [inputEdit, setInputEdit] = useState("");
  const [editVisible, setEditVisible] = useState(false);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onInputSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const onAdd = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: todos.length + 1,
        task: inputValue,
      };
      setTodos([...todos, newItem]);
      setInputValue("");
    }
  };

  const onDelete = (id) => {
    const updatedItems = todos.filter((item) => item.id !== id);
    setTodos(updatedItems);
  };

  const onUpdate = (id) => {
    setEditVisible(id);
    const itemToEdit = todos.find((item) => item.id === id);
    setInputEdit(itemToEdit.task);
  };

  const onSaveUpdate = (id) => {
    const updatedItems = todos.map((item) =>
      item.id === id ? { ...item, task: inputEdit } : item
    );
    setTodos(updatedItems);
    setEditVisible(null);
    setInputEdit("");
  };

  const onSearch = () => {
    const filteredItems = initialItems.filter((item) =>
      item.task.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setTodos(filteredItems);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <div className="mb-4">
        <input
          type="text"
          value={inputSearch}
          onChange={onInputSearch}
          placeholder="Search..."
          className="flex-1 px-3 py-2 border rounded-l-lg "
        />
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={inputValue}
          onChange={onInputChange}
          placeholder="Enter todo..."
          className="flex-1 px-3 py-2 border rounded-l-lg "
        />
        <button
          onClick={onAdd}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <table className="   bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Task</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id} className="">
              <td className="py-2 px-4 border-b">{todo.id}</td>
              <td className="py-2 px-4 border-b">
                {editVisible === todo.id ? (
                  <input
                    type="text"
                    value={inputEdit}
                    onChange={(e) => setInputEdit(e.target.value)}
                    className="px-3 py-2 border"
                  />
                ) : (
                  todo.task
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editVisible === todo.id ? (
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 mr-2"
                    onClick={() => onSaveUpdate(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 mr-2"
                    onClick={() => onUpdate(todo.id)}
                  >
                    Update
                  </button>
                )}
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
                  onClick={() => onDelete(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
