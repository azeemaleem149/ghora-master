import React, { Component } from 'react';
import { Row, Col, Tabs, Button, Input } from 'antd';
import UploadImage from '../editProfile/uploadImage/uploadImage';

const { TabPane } = Tabs;
function callback(key) {
	console.log(key);
}
const { TextArea } = Input;
const Demo = () => (
	<Tabs defaultActiveKey='1' onChange={callback}>
		<TabPane tab={<span>Post</span>} key='1'>
			<TextArea rows={4} placeholder='Write something...' />
			<div style={{ display: 'flex', justifyContent: 'flex-end', margin: '10px 0px 10px 10px' }}>
				<Button type='primary'>Post</Button>
			</div>
		</TabPane>
		<TabPane tab='Photo/Video' key='2'>
			<UploadImage />
			<div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
				<Button type='primary'>Post</Button>
			</div>
		</TabPane>
	</Tabs>
);
class UploadSection extends Component {
	state = {};
	render() {
		return (
			<div>
				<Row>
					<Col span={4} />
					<Col span={12}>
						<Demo />{' '}
					</Col>
					<Col span={1} />
					<Col span={7}>
						<div className='d-flex align-items-center' style={{ marginTop: '50px' }}>
							<img
								src='images/horse-running.jpg'
								style={{ width: '70px', height: '70px', borderRadius: '50%' }}
							/>
							<div style={{ marginLeft: '10px' }}>
								<h1 style={{ fontSize: '16px' }}>azeemaleem1005</h1>
								<p style={{ fontSize: '14px' }}>Azeem Aleem</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default UploadSection;
