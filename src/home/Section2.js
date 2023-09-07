import React from "react";
import { Button, Card, Divider } from "antd";
import {  ArrowRightOutlined,SettingOutlined,EditOutlined,EllipsisOutlined} from '@ant-design/icons';
import launches from "../../src/Launches.jpg";
import cap from "../../src/cap.jpg";
import roc from "../../src/roc.webp";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;


function Section2() {
  const navigation=useNavigate()
  return (
    <div className="section2">
      <h2 className="future"> Explore the future</h2>
      <div>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <Card
                hoverable
                style={{
                  width: "80%",
                }}
                className="card"
                cover={<img alt="example" src={roc} className="imgheight" />}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <Button
                  type="primary"
                  className="primary"
                  size="small"
                  onClick={()=>navigation("rocket")}
                >
                  Click me! 
                </Button>
                ]}
              
              >
                <Meta title="Rockets" description="Explore the cutting-edge fleet of SpaceX,from the Falcon 1 to the 
                powerful Starship,revloutionzing space travel." />
                 <Divider className="divv"/>
                 
                
              </Card>
            </div>
            <div className="col text-center">
              <Card
                hoverable
                style={{
                  width: "80%",
                }}
                className="card"
                cover={
                  <img alt="example" src={launches} className="imgheight" />
                }
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <Button
                  type="primary"
                  className="primary"
                  size="small"
                  onClick={()=>navigation("launches")}
                >
                  Click me! 
                </Button>
                ]}
              
              >
                <Meta title="Launches " description="Withness yhe thirilling historic launches,showcasing their 
                 in space technology and their journey towards interplanetary exploration " />
                 <Divider className="divv"/>
                
              </Card>
            </div>
            <div class="col text-center">
              <Card
                hoverable
                style={{
                  width: "80%",
                }}
                className="card"
                cover={<img alt="example" src={cap} className="imgheight" />}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <Button
                  type="primary"
                  className="primary"
                  size="small"
                  onClick={()=>navigation("capsules")}
                >
                  Click me! 
                </Button>
                ]}
              
              >
                <Meta title="Capsules" description="Dive into the innovative capsules developed by SapceX,including 
                Crew Dragon,designed to safely transport astronauts to and from orbit " />
                   <Divider className="divv"/>
                
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
