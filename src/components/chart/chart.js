import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/charts';
import { Col, Row, Tabs } from 'antd';
import { Pie } from '@ant-design/plots';
import Annual from '../annual/annual';

const { TabPane } = Tabs;

const Dashboard = () => {
    const data = [
        {
          type: 'Nike',
          value: 27,
        },
        {
          type: 'Hoka',
          value: 25,
        },
        {
          type: 'World Balance',
          value: 18,
        },
        {
          type: 'Adidas',
          value: 15,
        },
      
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
      };

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Tabs defaultActiveKey="1" onChange={onChange}>
                <TabPane tab="Quarter Report" key="1">
                    <Row justify="center" align="middle" style={{ height: "80vh" }}>
                        <Col span={24}>
                            <h3>January - March</h3>
                            <Pie {...config} />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Annual Report" key="2">
                <Row justify="center" align="middle" style={{ height: "80vh" }}>
                        <Col span={24}>
                            <Annual />
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Dashboard;