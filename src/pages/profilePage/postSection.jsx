import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { LikeOutlined, ShareAltOutlined } from '@ant-design/icons';
class PostSection extends Component {
	state = {};
	render() {
		return (
			<div>
				<Row>
					<Col span={4} />
					<Col span={12} style={{ width: '100%', height: 'auto', border: '0.5px solid gray' }}>
						<Row>
							<Col span={12} style={{ height: '70px', display: 'inline-flex', alignItems: 'center' }}>
								<div
									style={{
										height: '50px',
										width: '50px',
										border: '1px solid',
										borderRadius: '100%',
										marginLeft: '25px'
									}}
								/>
								<span style={{ marginLeft: '1rem', fontSize: '16px', fontWeight: 'bold' }}>
									Azeem Aleem
								</span>
							</Col>
							<Col span={12}>
								<i className='fas fa-ellipsis-h' />
							</Col>
						</Row>
						<Row>
							<Col span={24} style={{ overflow: 'hidden' }}>
								<img src='images/horse-running.jpg' width='100%' />
								<LikeOutlined style={{ color: '#2295FF', fontSize: '24px', margin: '20px' }} />
								<ShareAltOutlined style={{ color: '#2295FF', fontSize: '24px' }} />
								<p style={{ marginLeft: '20px' }}>16 mint ago</p>
							</Col>
						</Row>
					</Col>
					{/* <Col span={1} /> */}
					<Col span={8}>
						<Col span={20}>
							<h1 style={{ fontSize: '20px', marginLeft: '10px' }}>Suggestion For You </h1>
							<div className='d-flex justify-content-around align-items-center'>
								<img
									src='images/horse-running.jpg'
									style={{ width: '40px', height: '40px', borderRadius: '50%' }}
								/>
								<div>
									<h1 style={{ fontSize: '12px' }}>azeemaleem1005</h1>
									<p style={{ fontSize: '12px' }}>Follow by Rehan Arslan Ali + 1 more</p>
								</div>
								<p style={{ color: '#2295FF' }}>Add Friends</p>
							</div>

							<div className='d-flex justify-content-around align-items-center'>
								<img
									src='images/horse-running.jpg'
									style={{ width: '40px', height: '40px', borderRadius: '50%' }}
								/>
								<div>
									<h1 style={{ fontSize: '12px' }}>azeemaleem1005</h1>
									<p style={{ fontSize: '12px' }}>Follow by Rehan Arslan Ali + 1 more</p>
								</div>
								<p style={{ color: '#2295FF' }}>Add Friends</p>
							</div>

							<div className='d-flex justify-content-around align-items-center'>
								<img
									src='images/horse-running.jpg'
									style={{ width: '40px', height: '40px', borderRadius: '50%' }}
								/>
								<div>
									<h1 style={{ fontSize: '12px' }}>azeemaleem1005</h1>
									<p style={{ fontSize: '12px' }}>Follow by Rehan Arslan Ali + 1 more</p>
								</div>
								<p style={{ color: '#2295FF' }}>Add Friends</p>
							</div>

							<div className='d-flex justify-content-around align-items-center'>
								<img
									src='images/horse-running.jpg'
									style={{ width: '40px', height: '40px', borderRadius: '50%' }}
								/>
								<div>
									<h1 style={{ fontSize: '12px' }}>azeemaleem1005</h1>
									<p style={{ fontSize: '12px' }}>Follow by Rehan Arslan Ali + 1 more</p>
								</div>
								<p style={{ color: '#2295FF' }}>Add Friends</p>
							</div>

							<div className='d-flex justify-content-around align-items-center'>
								<img
									src='images/horse-running.jpg'
									style={{ width: '40px', height: '40px', borderRadius: '50%' }}
								/>
								<div>
									<h1 style={{ fontSize: '12px' }}>azeemaleem1005</h1>
									<p style={{ fontSize: '12px' }}>Follow by Rehan Arslan Ali + 1 more</p>
								</div>
								<p style={{ color: '#2295FF' }}>Add Friends</p>
							</div>
						</Col>
					</Col>
				</Row>
			</div>
		);
	}
}

export default PostSection;
