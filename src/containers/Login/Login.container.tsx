import React from 'react';
import {useState,useEffect} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import NuBox from '../../components/NeuUI/Box/Box';
import Button from '../../components/NeuUI/Button/Button';
import Toggle from '../../components/NeuUI/Toggle/Toggle';
import Circle from '../../components/NeuUI/Circle/Circle';
import { FiLogIn } from "react-icons/fi";
import Progress from "../../components/NeuUI/RoundProgressBar/RoundProgressBar";
import Select from "../../components/NeuUI/Select/Select";
import LinearProgressBar from "../../components/NeuUI/LinearProgressBar/LinearProgressBar";
const { Header, Content, Footer } = Layout;

export default (props:any) => {
    const [value,setValue] = useState(0);
    const [selectValue,setSelectValue] = useState('');
    useEffect(()=>{setInterval(()=>setValue(Math.round(Math.random()*100)),3000)}, []);
    return(
        <Layout style={{height:'100vh'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64, backgroundColor:'unset'}}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <NuBox style={{  padding: 24, minHeight: 380 ,display:'flex',flexDirection:"column"}}>Content
                    <Button><FiLogIn/>Buy now</Button>
                    <Toggle/>
                    <Progress value={value}>demo</Progress>
                    <Select value={selectValue} options={[
                        'Sunday',
                        'Monday',
                        'Tuesday',
                        'Wednesday',
                        'Thursday',
                        'Friday',
                        'Saturday'
                    ]} label="Days:" onChange={(e:any)=>setSelectValue(e)}/>
                    <LinearProgressBar value={value}/>
                    <Circle><img src="https://picsum.photos/200" alt=""/></Circle>

                </NuBox>
            </Content>
            <Footer style={{ textAlign: 'center' }}>iTexico ©{new Date().getFullYear()}</Footer>
        </Layout>
    );
}
