import React, { useEffect, useState } from 'react';
import { Layout,Input,Space ,Image,Select,Typography,Card,Row, Col,Divider,Modal, Button} from 'antd';
import 'antd/dist/antd.css';
import '../../index.css';

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;
const { Option } = Select;

const CustomHeader=(props)=>{
    const [allOptions,setAllOptions] = useState(props.Alloptions);
    const [response, setResponse] = useState(props.response);
    const [choosenTopic, setChoosenTopic] = useState(['react']);
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
    useEffect( () => {
    }, [props.callback]);

    function HandleChange(value) {
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
        props.callback(value);
        setTorender(temp);

    }

    return(
        <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' , background:'#FFFFFF' ,lineHeight:'0px',paddingTop:'5px'}} >
        <Space align='center' direction='horizontal' >
            <Image
                width={200}
                height={50}
                preview={false}
                src="https://d3ftmdkezac6rp.cloudfront.net/code/javascript/public/images/logo.b81d20edb7ae4d8ff43b886ae5cde1dd.svg"
            />
            <Select
                mode="multiple"
                size="large"
                style={{ width: '500px'}}
                placeholder="Search"
                defaultValue={choosenTopic}
                onChange={HandleChange}
                optionLabelProp="label"
                options={allOptions}
            >
            </Select>
        </Space>
    </Header>);
};
export default CustomHeader;