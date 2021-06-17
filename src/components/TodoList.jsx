import React from 'react'
import {
    VStack,
    HStack,
    Text,
    IconButton,
    StackDivider,
    Spacer,
    Badge,
    Checkbox
} from '@chakra-ui/react'
import { FaTrash } from 'react-icons/fa'




const TodoList = ({ lista, deleteItem, checkItem }) => {

    if (!lista.length) {
        return (
            <Badge colorScheme='green' p='4' m='4' borderRadius='lg'>
                No hay pendientes!!!
            </Badge>
        )
    }

    return (
        <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            p='4'
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
            alignItems='stretch'
        >
            {
                lista.map(todo => (
                    <HStack key={todo.id}>
                        <Checkbox
                            isChecked={todo.isComplete}
                            onChange={() => checkItem(todo.id)}
                        />
                        <Text as={todo.isComplete && "del"}>{todo.body}</Text>
                        <Spacer />
                        <IconButton
                            icon={<FaTrash />}
                            isRound
                            onClick={() => deleteItem(todo.id)}
                        />
                    </HStack>
                ))
            }

        </VStack>
    )
}

export default TodoList
