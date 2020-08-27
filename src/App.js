import React, { useState } from 'react';
import routes from './router.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu } from 'antd'
import { HeartTwoTone } from '@ant-design/icons';
import Home from './pages/home'
import './App.css'
import './common/styles/layout.css'
const { Header, Content, Footer } = Layout;

function App() {
  const [current, setCurrent] = useState('home')
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="webSiteName" onClick={() => window.location.href = window.location.origin}><HeartTwoTone twoToneColor="#eb2f96" />小站图库<HeartTwoTone twoToneColor="#eb2f96" /></div>
          <Menu mode="horizontal" theme="dark" defaultSelectedKeys={[window.location.pathname.split('/')[1] || 'home']}>
            <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
            {routes.map(route => (
              <Menu.Item key={route.key}><Link to={route.path}>{route.name}</Link></Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content>
          <div className="site-layout-content">
            <Switch>
              <Route exact path='/'><Home /></Route>
              {routes.map(route => (
                <Route
                  key={route.key}
                  path={route.path}
                  render={() => <route.component {...route} />}
                />
              ))}
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <div>
            <span className="mgr10">小站图库</span>
            <span className="mgr10">免费使用</span>
            <span className="mgr10">注明来源</span>
            <span className="mgr10">感谢理解</span>
          </div>
          <div>©深圳市一猪科技有限公司</div>
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
