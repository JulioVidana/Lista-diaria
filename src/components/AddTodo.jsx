import React, { useState } from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid';


const AddTodo = ({ addItem }) => {
    const [content, setContent] = useState('')
    const toast = useToast()
    const handleSubmit = e => {
        e.preventDefault()

        if (!content) {
            toast({
                title: "No data",
                status: "error",
                duration: 2000,
                isClosable: false,
            })
            return
        }

        const todo = {
            id: nanoid(),
            body: content,
            isComplete: false
        }
        addItem(todo)
        setContent('')
    }


    return (
        <form onSubmit={handleSubmit}>

            <HStack mt="8" >
                <Input
                    variant="filled"
                    placeholder="Nueva tarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    colorScheme="pink"
                    px="8"
                    type="submit"
                >
                    Agregar
                </Button>
            </HStack>
        </form>

    )
}

export default AddTodo
