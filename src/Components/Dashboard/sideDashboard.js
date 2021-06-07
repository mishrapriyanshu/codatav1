import {Card, Col, Divider, Typography} from "antd";
import React from "react";
const { Text } = Typography;
const SideBar = (props) => {

    return (
        <>
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
        </>
    )
};
export default SideBar;