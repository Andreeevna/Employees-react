import { LoginOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons'
import { Layout as AntLayout, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { Paths } from '../../paths'
import { CustomButton } from '../custom-button'
import styles from './index.module.css'

export const Header = () => {
	return (
		<AntLayout.Header className={styles.header}>
			<Space>
				<TeamOutlined className={styles.teamOutlined} />
				<Link to={Paths.home}>
					<CustomButton type='link'>
						<Typography.Title level={1}>Сотрудники</Typography.Title>
					</CustomButton>
				</Link>
			</Space>
			<Space>
				<Link to={Paths.register}>
					<CustomButton type='ghost' icon={<UserOutlined />}>
						Зарегистрироваться
					</CustomButton>
				</Link>
				<Link to={Paths.login}>
					<CustomButton type='ghost' icon={<LoginOutlined />}>
						Войти
					</CustomButton>
				</Link>
			</Space>
		</AntLayout.Header>
	)
}
