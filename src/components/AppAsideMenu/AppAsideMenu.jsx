import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu, Typography } from 'antd'
import { FileAddOutlined, HomeOutlined } from '@ant-design/icons'
import logoUDO from '../../assets/LogoUDO.png'
import { LogoContainer } from './AppAsideMenu.styles'

//Construction of menu items in array
//{ key, icon, children, label, disabled, type}
//key must be preceded by slash because coresponding to routes path
const menuItems = [
    {
        key: '/',
        label: 'Główna',
        icon: <HomeOutlined />,
    },
    {
        key: '/dodawanie',
        icon: <FileAddOutlined />,
        label: 'Dodawanie',
    },
]

export const AppAsideMenu = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [current, setCurrent] = useState(location.pathname)
    const { Sider } = Layout
    const { Text } = Typography

    useEffect(() => {
        setCurrent(location.pathname)
    }, [location.pathname])

    const navigateTo = (e) => {
        setCurrent(e.key)
        navigate(e.key)
    }

    return (
        <Sider
            width={260}
            style={{
                background: '#001529',
                height: '100vh',
                position: 'fixed',
                left: 0,
                bottom: 0,
            }}
        >
            <LogoContainer>
                <a href="/">
                    <img src={logoUDO} />
                </a>
                <Text
                    type="secondary"
                    style={{
                        color: 'white',
                        fontSize: '1.8rem',
                        fontFamily: 'Lexend Peta, sans-serif',
                    }}
                >
                    UDO{' '}
                </Text>
            </LogoContainer>
            <Menu
                mode="inline"
                onClick={navigateTo}
                selectedKeys={[current]}
                theme="dark"
                style={{
                    height: '100%',
                    padding: '10px',
                }}
                items={menuItems}
            />
        </Sider>
    )
}