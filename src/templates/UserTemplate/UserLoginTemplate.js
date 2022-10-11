import { Layout } from "antd";
import React, { Fragment, useState, useEffect } from "react";
import { Route } from "react-router-dom";
const { Sider, Content } = Layout;
export const UserLoginTemplate = (props) => {
  let { Component, ...restRoute } = props;
  const [{ width, height }, setSize] = useState({
    width: Math.round(window.innerWidth),
    height: Math.round(window.innerHeight),
  });

  useEffect(() => {
    window.onresize = () => {
      setSize({
        width: Math.round(window.innerWidth),
        height: Math.round(window.innerHeight),
      });
    };
  }, []);
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Layout>
              {/* <Sider
                width={width / 2}
                style={{
                  height: height,
                  backgroundImage: `url(https://picsum.photos/${Math.round(
                    width / 2
                  )}/${Math.round(height)})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
              ></Sider> */}
              <Sider
                width={width / 2}
                style={{ height: height, backgroundSize: "100%" }}
              >
                <section className="h-screen">
                  <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                      <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                          className="w-full"
                          alt="loginImage"
                        />
                      </div>
                    </div>
                  </div>
                </section>
              </Sider>
              <Content>
                <Component {...propsRoute} />
              </Content>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
