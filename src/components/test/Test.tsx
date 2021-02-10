import { Box, Button, Container } from '@material-ui/core'
import React from 'react'

const Test = () => {
    return (
        <div>
            <Container>
                Test page
                <Box m={1} color="success.main" bgcolor="info.main">
                    Текст
                    <Button>Кнопка</Button>
                </Box>
            </Container>
        </div>
    )
}

export default Test
