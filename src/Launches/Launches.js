import React, { useEffect, useState } from "react";
import Header from "../home/Header";
import { SettingOutlined,EditOutlined,EllipsisOutlined} from '@ant-design/icons';
import axios from "axios";
import { Modal } from 'antd'
import { Button, Card, Divider } from "antd";
//import { ArrowRightOutlined } from "@ant-design/icons";
import launches from "../../src/Launches.jpg";
import cap from "../../src/cap.jpg";
import roc from "../../src/roc.webp";
const { Meta } = Card;

function Launches() {
  const [capsules, setcapsules] = useState([]);
  const [limit, setlimit] = useState(4);
  const [offset, setoffset] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ModelDetail,setModelDetail]=useState({})

  const ShowModelDetail=(capsulesdetail)=>{
    console.log(capsulesdetail)
    setModelDetail(capsulesdetail)
    setIsModalOpen(true)
  }
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches?id=true&limit=${limit}&offset=${offset}`
      )
      .then((res) => setcapsules(res.data));
  }, []);
  return (
    <>
      <Header />
      <div class="row">
      {capsules.map((ele) => {
        return (
          <>
            
                    <div className="col text-center ">
                      <Card
                        hoverable
                        style={{
                          width: "80%",
                        }}
                        className="card"
                        cover={
                          <img
                            alt="example"
                            src={ele.links.mission_patch}
                            className="imgheight"/>
                        }
                        actions={[
                            <SettingOutlined key="setting" />,
                            <EditOutlined key="edit" />,
                            <Button
                            type="primary"
                            className="primary"
                            size="small"
                            onClick={()=>ShowModelDetail(ele)}
                            // onClick={()=>navigation("rocket")}
                          >
                            Details!
                          </Button>
                          ]}
                      >
                        <Meta
                          title={ele.ship_name}
                          description={ele.home_port}
                        />
                        <Divider className="divv" />
                        {/* <Button
                          type="primary"
                          className="primary"
                          //   onClick={()=>navigation("rocket")}
                        >
                          Click me! <ArrowRightOutlined />
                        </Button> */}
                      </Card>
                    </div>
                 
             
          </>
        );
      })}
      <Modal title="SpaceX" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <p>Country : {ModelDetail?.second_stage}</p>
       <hr/>
       <p>Engine Layout :{ModelDetail.engines?.layout}</p>
       <hr/>
       <p>Engine Propellantn : {ModelDetail.engines?.propellant_1}</p>
       <hr/>
       <p>Engine Type :{ModelDetail.engines?.type}</p>
       <hr/>
       <p>Engine Version :{ModelDetail.engines?.version}</p>
       <hr/>
       <p>Stages :{ModelDetail.stages}</p>
       <hr/>
       <p>First Flight :{ModelDetail.first_flight}</p>
       <hr/>
       <p>Cost Per Launch :{ModelDetail.cost_per_launch}</p>
       <hr/>
      </Modal>
      </div>
    </>
  );
}

export default Launches;

