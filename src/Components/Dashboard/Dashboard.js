import React, { useEffect, useState } from 'react';
import { Layout,Input,Space ,Image,Select,Typography,Card,Row, Col,Divider,Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import JSONPretty from 'react-json-prettify';
import {atomOneLight} from 'react-json-prettify/dist/themes';
import CustomHeader from '../Panel/header';
import CustomFooter from '../Panel/footer';
import SideBar from '../Dashboard/sideDashboard';
const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;
const { Title,Text } = Typography;

const customTheme = {
    ...atomOneLight,
    value: {
        ...atomOneLight.value,
        string: (value) => value === 'foo' ? 'red': 'green',
    },
};

const response = [{'express':[{'title':'express1/server.js/app.get',
            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
            'code':{
                name: ' express',
                age: 20,
                admin: true,
                member: null,
                permissions: ['read', 'write', 'edit'],
            }},
        {'title':'express2/server.js/app.get',
            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
            'code':{
                name: 'express2',
                age: 20,
                admin: true,
                member: null,
                permissions: ['read', 'write', 'edit'],
            }},{'title':'express3/server.js/app.get',
            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
            'code':{
                name: 'express3',
                age: 20,
                admin: true,
                member: null,
                permissions: ['read', 'write', 'edit'],
            }}]}, {'react':[
                            {'title':'react1/server.js/app.get',
                            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                             'code':{
                                 name: 'John react',
                                 age: 20,
                                 admin: true,
                                 member: null,
                                 permissions: ['read', 'write', 'edit'],
                             }},
                            {'title':'react2/server.js/app.get',
                                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                                'code':{
                                    name: 'John react2',
                                    age: 20,
                                    admin: true,
                                    member: null,
                                    permissions: ['read', 'write', 'edit'],
                                }},
                            {'title':'react3/server.js/app.get',
            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
            'code':{
                name: 'John react3',
                age: 20,
                admin: true,
                member: null,
                permissions: ['read', 'write', 'edit'],
            }}
                                 ]
                    }, {'vue':[
            {'title':'vue1/server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'code snippet1',
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }},
            {'title':'server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'code snippet2',
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }},
            {'title':'server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'code snippet3',
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }}
        ]}, {'angular':[
            {'title':'angular/server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'John Doe11',
                    age: 201,
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }},
            {'title':'angular/server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'John Doe22',
                    age: 220,
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }},
            {'title':'angular/server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'John Doe33',
                    age: 203,
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }}
        ]}, {'backbone':[
            {'title':'backbone/server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'John Doe76',
                    age: 260,
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }},
            {'title':'backbone56/server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'John Doe65',
                    age: 2065,
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }},
            {'title':'backbone/server.js/app.get',
                'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
                'code':{
                    name: 'John Doe566',
                    age: 2056,
                    admin: true,
                    member: null,
                    permissions: ['read', 'write', 'edit'],
                }}
        ]}];

const Dashboard = () => {

    const [ torender, setTorender ] = useState(
        [ {'title':'react1/server.js/app.get',
        'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
        'code':{
            name: 'John react',
            age: 20,
            admin: true,
            member: null,
            permissions: ['read', 'write', 'edit'],
        }}, {'title':'react2/server.js/app.get',
            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
            'code':{
                name: 'John react2',
                age: 20,
                admin: true,
                member: null,
                permissions: ['read', 'write', 'edit'],
            }}, {'title':'react3/server.js/app.get',
            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
            'code':{
                name: 'John react3',
                age: 20,
                admin: true,
                member: null,
                permissions: ['read', 'write', 'edit'],
            }}]);
    const [tomodalrender,setTomodalrender] = useState({'title':'react1/server.js/app.get',
        'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
        'code':{
            name: 'John react',
            age: 20,
            admin: true,
            member: null,
            permissions: ['read', 'write', 'edit'],
        }});
    const [choosenTopic, setChoosenTopic] = useState(['react']);
    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal(data,data1){
        setIsModalVisible(true);
        setTomodalrender(data)
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function handleChange(value) {
        setChoosenTopic(value);
        let temp=[];
        response.map((data,index)=>{
            if(value.includes((Object.keys(data)[0]))){
                temp = [...temp].concat((Object.values(data)[0]));
            }
        });
        setTorender(temp);
    }

    const options = [{ value: 'express' }, { value: 'react' }, { value: 'vue' }, { value: 'angular' },{ value: 'ember' },{ value: 'backbone' }];

    return(
            <Layout>
                <CustomHeader response={response} Alloptions={options}  callback={handleChange}/>
                <Layout style={{background:'#F3F4F6', width:'100%'}}>
                    <Row>
                        <Col span={16} style={{ marginTop:'10%',marginLeft:'1%',marginRight:'2%'}}>
                            <Title  type="secondary" >{(choosenTopic[0] !== undefined)?"How to use "+choosenTopic[0]:"welcome to codata"}</Title>
                            <Title level={5}>Best JavaScript code snippets using </Title>
                            {torender.map((each)=>{
                                let temp=[];
                                temp.push(
                                    <Card title={<p onClick={()=>showModal(each)}>{each.title}</p>} extra={<a href={each.link}>github link</a>} style={{ width: '100%' }}>
                                            <JSONPretty json={each.code} theme={customTheme} padding={4} />
                                    </Card>
                                );
                                temp.push(<br/>);
                                return temp;
                            })}
                        </Col>
                        <Col span={6} style={{marginTop:'17%'}}>
                           <SideBar/>
                        </Col>
                    </Row>
                    <Modal title={tomodalrender.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <JSONPretty json={tomodalrender.code} theme={customTheme} padding={4} />
                    </Modal>
                </Layout>
               <CustomFooter/>
            </Layout>
    )
};

export default Dashboard;