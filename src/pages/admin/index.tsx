import {
    HomeOutlined,
    PictureOutlined ,
    BlockOutlined,
    CoffeeOutlined ,
    CommentOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import CommentsComponent from "components/pages/CommentsComponent";
import CoversComponent from "components/pages/CoversComponent";
import PlacesComponent from "components/pages/PlacesComponent";
import RoomComponent from "components/pages/RoomsComponent";
import ServicesComponent from "components/pages/ServicesComponent";
import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

function Admin () {
  const [collapsed, setCollapsed] = useState(false);
  const [page, setPage] = useState(<PlacesComponent/>);


  const menus = [
    {
        name:"Places",
        icon:HomeOutlined,
        page:PlacesComponent
    },
    {
        name:"Covers",
        icon:PictureOutlined,
        page: CoversComponent
    },
    {
        name:"Rooms",
        icon:BlockOutlined,
        page: RoomComponent
    },
    {
        name:"Services",
        icon:CoffeeOutlined,
        page: ServicesComponent
    },
    {
        name:"Comments",
        icon:CommentOutlined,
        page: CommentsComponent
    }

  ]

  return (
    <Layout style={{ position: "fixed", width: "100vw", height: "100vh" }}>
      <Sider
      className="pt-[25px]"
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
            <div className="flex flex-row justify-center"><img src={"/static/icons/" + "logo.png"} className="w-[150px]" /></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["menuItem0"]}
          style={{fontSize:20}}
          items={menus.map(
            (item, index) => ({
              key: String("menuItem"+index),
              icon: React.createElement(item.icon, {style: {fontSize: 20,}}),
              label: item.name,
              onClick:()=>{setPage(item.page)}
            })
          )}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background justify-start flex flex-row"
          style={{
            padding: 0,
            paddingLeft:10,
            alignContent: "start"
          }}
        >
          <div
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? <MenuUnfoldOutlined style={{color:"white", fontSize:20}}/> : <MenuFoldOutlined style={{color:"white", fontSize:20}}/>}
          </div>
        </Header>
        <Content
          style={{
            margin: "0",
            overflow: "scroll"
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            {page}
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: "center"
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
}
export default Admin;
