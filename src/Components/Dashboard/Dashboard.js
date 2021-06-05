import React, { useEffect, useState } from 'react';
import { Layout,Input,Space ,Image,Select,Typography,Card,Row, Col,Divider,Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import JSONPretty from 'react-json-prettify';
import {atomOneLight} from 'react-json-prettify/dist/themes';
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
            }}, {'title':'express2/server.js/app.get',
            'link':'https://github.com/andygillis/react-component-sandbox/blob/683ab1d4794abeac56d385c6213f8ac0c6510637/server.js#L16',
            'code':{
                name: 'express2',
                age: 20,
                admin: true,
                member: null,
                permissions: ['read', 'write', 'edit'],
            }}, {'title':'express3/server.js/app.get',
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

    const [ torender, setTorender ] = useState([ {'title':'react1/server.js/app.get',
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
        value.map(each=>{
            response.map((data)=>{
                if(data[each]){
                    data[each].map(single=>{
                        temp.push(single)
                    })

                }
            });
        });
        setTorender(temp);
    }
    const options = [{ value: 'express' }, { value: 'react' }, { value: 'vue' }, { value: 'angular' },{ value: 'ember' },{ value: 'backbone' }];

    return(
        <>
            <Layout>
                <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' , background:'#FFFFFF' ,lineHeight:'0px',paddingTop:'5px'}} >
                    <Space align='center' direction='horizontal' >
                        <Image
                            width={200}
                            height={50}
                            preview={false}
                            src="https://d3ftmdkezac6rp.cloudfront.net/code/javascript/public/images/logo.b81d20edb7ae4d8ff43b886ae5cde1dd.svg"
                        />
                        <Select
                            suffixIcon={<UserOutlined />}
                            mode="multiple"
                            size="large"
                            style={{ width: '500px'}}
                            placeholder="Search"
                            defaultValue={choosenTopic}
                            onChange={handleChange}
                            optionLabelProp="label"
                            options={options}
                        >
                        </Select>
                    </Space>
                </Header>
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
                            <Card title="JSDoc" style={{ width: '100%' }}>
                                <p>Fast, unopinionated, minimalist web framework</p>
                            </Card>
                            <br/>
                            <Card title="Most used express functions" style={{ width: '100%' }}>
                                <a href={'*'}> Express.listen<br/></a>
                                <Text type="secondary">Listen for connections.</Text>
                                <br/>
                                <Divider />
                                <a href={'*'}> Router.get ,</a>
                                <a href={'*'}> Express.listen ,</a>
                                <a href={'*'}> Express.listen </a>



                            </Card>
                            <br/>
                            <Card title="Popular in JavaScript" style={{ width: '100%' }}>
                                <a href={'*'}> node-fetch<br/></a>
                                <Text type="secondary">A light-weight module that brings window.fetch to node.js</Text>
                                <br/>
                                <br/>
                                <a href={'*'}> node-fetch<br/></a>
                                <Text type="secondary">A light-weight module that brings window.fetch to node.js</Text>
                                <br/>
                                <br/><a href={'*'}> node-fetch<br/></a>
                                <Text type="secondary">A light-weight module that brings window.fetch to node.js</Text>
                                <br/>
                                <br/><a href={'*'}> node-fetch<br/></a>
                                <Text type="secondary">A light-weight module that brings window.fetch to node.js</Text>
                                <br/>
                                <br/>
                            </Card>
                            <br/>
                            <Card title="Most used express functions" style={{ width: '100%' }}>
                                <a href={'*'}> test</a>
                            </Card>
                        </Col>
                    </Row>
                    <Modal title={tomodalrender.title} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <JSONPretty json={tomodalrender.code} theme={customTheme} padding={4} />
                    </Modal>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
       </>
    )
};

export default Dashboard;