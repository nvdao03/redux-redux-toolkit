import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../redux/store'
import type { TodoType } from '../../types/todo.type'
import { useState } from 'react'
import { addTodo, deleteTodo, updateTodo } from '../../redux/actions'

export default function Todos() {
  const todos = useSelector((state: RootState) => state.todos.todos)
  const dispatch = useDispatch()

  const [todoTitle, setTodoTitle] = useState<string>('')
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [idTodo, setIdTodo] = useState<number>(0)
  const [isSelectedId, setIsSelectedId] = useState<number | undefined>(undefined)

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      addTodo({
        id: idTodo,
        title: todoTitle
      })
    )
    setIdTodo((prev) => prev + 1)
    setTodoTitle('')
  }

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id))
  }

  const handleUpdateTodo = (id: number, todo: TodoType) => {
    dispatch(updateTodo({ id, todo }))
    setIsEdit(false)
    setIsSelectedId(undefined)
    setTodoTitle('')
  }

  return (
    <div className='flex flex-col items-center gap-4 mt-10'>
      <h1>Những công việc cần làm</h1>
      <form onSubmit={handleSubmitForm} className='flex gap-3 items-center'>
        <input
          value={todoTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodoTitle(e.target.value)}
          type='text'
          placeholder='Nhập công việc cần làm...'
          className='outline-none border-blue-300 border-solid border-2 p-2 rounded-lg'
        />
        <div className='flex gap-2 items-center'>
          <div className='flex gap-2 items-center'>
            <button
              onClick={() => {
                if (isEdit) {
                  handleUpdateTodo(isSelectedId as number, { id: isSelectedId as number, title: todoTitle })
                }
              }}
              type='button'
              className='text-white bg-[#1447E6] border border-solid rounded-lg border-transparent hover:bg-[#1447E6]-strong focus:ring-4 focus:ring-[#1447E6]-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'
            >
              {isEdit ? 'Cập nhật' : 'Thêm'}
            </button>
          </div>
        </div>
      </form>
      {todos.length > 0 &&
        todos.map((todo: TodoType) => (
          <div key={todo.id} className='flex items-center justify-center gap-3'>
            <div className='flex items-center gap-3'>
              <input
                type='checkbox'
                className='cursor-pointer p-2'
                checked={isSelectedId === todo.id}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setIsSelectedId(e.target.checked ? todo.id : undefined)
                }
              />
              <div className='flex items-center gap-3'>
                <span>{todo.id} :</span>
                <span>{todo.title}</span>
              </div>
              {isSelectedId === todo.id && (
                <>
                  <button
                    type='button'
                    onClick={() => {
                      setTodoTitle(todo.title)
                      setIsEdit(true)
                    }}
                    className='text-white bg-[#007A55] border border-solid rounded-lg border-transparent hover:bg-[#007A55]-strong focus:ring-4 focus:ring-[#007A55]-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'
                  >
                    Sửa
                  </button>
                  <button
                    type='button'
                    onClick={() => handleDeleteTodo(todo.id)}
                    className='text-white bg-[#C60036] border-solid rounded-lg border border-transparent hover:bg-[#C60036]-strong focus:ring-4 focus:ring-[#C60036]-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'
                  >
                    Xoá
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  )
}
