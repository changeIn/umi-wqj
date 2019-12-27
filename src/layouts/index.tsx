import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import Header from '../components/layout/Header'
import MyContent from '../components/layout/Content'
import MySider from '../components/layout/Sider'
import MyMenu from '../components/layout/Menu'

import { connect } from 'dva';

// import styles from './index.css';
const { Sider } = Layout;

// const BasicLayout: React.FC = props => {
//   if(props.location.pathname == '/login'){
//     return <SimpleLayout>{ props.children }</SimpleLayout>
//   }

//   return (
//     <div className={styles.normal}>
//       <h1 className={styles.title}>KQJ umi!</h1>
//       {props.children}
//     </div>
//   );
// };

class BasicLayout extends React.Component {
  // state = {
  //   collapsed: false,
  // };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   })
  // }

  onCollapseChange = collapsed => {
    this.props.dispatch({
      type: 'app/handleCollapseChange',
      payload: { collapsed },
    })
  }

  handelMenuClick(element) {
    //路由到相关页面
    this.props.history.push(element.item.props.url)
  }

  render() {
    const { app, children } = this.props
    const {
      menus,
      theme, collapsed } = app
    const { handelMenuClick, onCollapseChange } = this
    const menuProps = {
      theme,
      menus,
      children,
      handelMenuClick,
      onCollapseChange,
    }

    return (
      <Layout>
        <MySider collapsed={collapsed}>
          <MyMenu {...menuProps} />
        </MySider>
        <Layout>
          <Header collapsed={collapsed} onCollapseChange={onCollapseChange} />

          <MyContent>
            {this.props.children}
          </MyContent>
        </Layout>
      </Layout>
    )
  }
}


export default connect((({ app }) => ({ app })))(BasicLayout)
