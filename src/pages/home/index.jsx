import React, { useState, useEffect } from 'react'
import { Heading } from '@chakra-ui/react'
import TodoList from '../../components/TodoList'
import AddTodo from '../../components/AddTodo'
import { IconButton, VStack, useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from 'react-icons/fa'

const inicial = [
    {
        id: 1,
        body: 'terminar trabajo',
        isComplete: false
    },
    {
        id: 2,
        body: 'Descanzar',
        isComplete: true
    }
]

const Home = () => {
    const [lista, setLista] = useState(
        () => JSON.parse(localStorage.getItem('tareas')) || []
    )

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(lista))
    }, [lista])

    const addItem = (item) => {
        setLista([...lista, item].sort((a, b) => a.isComplete - b.isComplete))
    }

    const deleteItem = (id) => {
        const newLista = lista.filter(todo => {
            return todo.id !== id
        })
        setLista(newLista)
    }

    const checkItem = (id) => {
        const cambiaCheck = lista.map(todos => todos.id === id ? {
            ...todos,
            isComplete: !todos.isComplete
        } : todos)

        setLista(cambiaCheck.sort((a, b) => a.isComplete - b.isComplete))

    }

    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <VStack p={4}>
                <IconButton
                    icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                    size="lg"
                    variant="outline"
                    isRound
                    alignSelf="flex-end"
                    onClick={toggleColorMode}
                />

                <Heading
                    mb="8"
                    fontWeight="extrabold"
                    size="2xl"
                    bgGradient="linear(to-l, #7928CA, #FF0080)"
                    bgClip="text"
                >
                    TAREAS PENDIENTES
                </Heading>
                <TodoList
                    lista={lista}
                    deleteItem={deleteItem}
                    checkItem={checkItem}
                />
                <AddTodo addItem={addItem} />
            </VStack>
        </>
    )
}

export default Home
