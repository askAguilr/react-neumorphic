import React from 'react';
import {
    ThemeProvider, createTheme,
    Toggle, Box, Button, RoundProgressBar, Circle, Select, Layout, Header, Footer, Content
} from "../";

export default {
    title: 'Layouts',
};

const theme1 = createTheme({
    primaryColor: '#009999',
    linearProgressBar:{
        color:"baseline"
    }
});

export const ToStorybook = () => {
    return (
        <ThemeProvider theme={theme1}>
            <Layout style={{height:'100vh'}}>
                <Header>
                    <Box>Header</Box>
                </Header>
                <Content>
                    <p>Content</p>
                </Content>
                <Footer>
                    Footer
                </Footer>
                <Content>
                    <p>Content</p>
                </Content>
            </Layout>
        </ThemeProvider>
    );
};

ToStorybook.story = {
    name: 'Default',
};
