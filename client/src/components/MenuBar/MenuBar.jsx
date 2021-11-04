import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import {
  BarChartOutlined,
  FileOutlined,
  CopyOutlined,
} from '@ant-design/icons';
import style from './style.module.css'
import ContextTable from '../ContextTable/ContextTable';

const { SubMenu } = Menu;

const { Content, Sider } = Layout;

function MenuBar() {

  const [collapsed, setCollapse] = useState(false)
  const [visibleComponents, setVisibleComponents] = useState(0)
  const [type, setType] = useState(null)

  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false)
  const [isCatalogOpen, setIsCatalogOpen] = useState(false)

  function onCollapse() {
    setCollapse(!collapsed)
  }

  function handleTypeChange(typeTheme, key) {
    if (typeTheme === 'analitics') {
      setType('analitics')
      setIsAnalyticsOpen(true)
      setIsCatalogOpen(false)
    }
    if (typeTheme === 'catalog') {
      setType('catalog')
      setIsCatalogOpen(true)
      setIsAnalyticsOpen(false)
    }

    setVisibleComponents(key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Sider
        theme="light"
        collapsible
        collapsed={collapsed}
        onCollapse={() => onCollapse()}
        collapsedWidth={150}
        width={300}
      >
        <div className={style.menu} >Меню</div>
        <hr>
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          className={isAnalyticsOpen || isCatalogOpen ? style.open : null} style={{ fontSize: 18 }}
        >
          <SubMenu
            key="sub1"
            title="Аналитика"
            icon={<BarChartOutlined />}
            onTitleClick={() => handleTypeChange('analitics', 0)}
            style={isAnalyticsOpen ? { order: 1 } : { order: 2 }}
          >
            <Menu.Item key="1" onClick={() => handleTypeChange('analitics', 1)} icon={<FileOutlined />}>Журнал останова оборудования</Menu.Item>
            <Menu.Item key="2" onClick={() => handleTypeChange('analitics', 2)} icon={<FileOutlined />}>Наработка компрессоров</Menu.Item>
            <Menu.Item key="3" onClick={() => handleTypeChange('analitics', 3)} icon={<FileOutlined />}>Наработка газопроводов</Menu.Item>
            <Menu.Item key="4" onClick={() => handleTypeChange('analitics', 4)} icon={<FileOutlined />}>Коэффициент экплуатации</Menu.Item>
            <Menu.Item key="5" onClick={() => handleTypeChange('analitics', 5)} icon={<FileOutlined />}>История</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title="Каталоги"
            icon={<CopyOutlined />}
            onTitleClick={() => handleTypeChange('catalog', 0)}
            style={isCatalogOpen ? { order: 1, marginTop: 50 } : { order: 2 }}
          >
            <Menu.Item key="6" onClick={() => handleTypeChange('catalog', 6)} icon={<FileOutlined />}>Каталог 1</Menu.Item>
            <Menu.Item key="7" onClick={() => handleTypeChange('catalog', 7)} icon={<FileOutlined />}>Каталог 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <ContextTable visibleComponents={visibleComponents} type={type} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MenuBar
