import { InputNumber, Form, Select, Radio, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import React from "react";
import "antd/dist/antd.css";
import "./components.css";
const { Option } = Select;

type SetProps = {
  id: number;
  removeSet: (key: number) => void;
};

const Set: React.FC<SetProps> = ({ id, removeSet }) => {
  return (
    <div className="set-Div">
      <div className="set-Div_inputs">
        <Form.Item
          name={[id, "exer"]}
          label="Select Exercise"
          required
          rules={[
            {
              required: true
            }
          ]}>
          <Select size="large" placeholder="exercise" style={{ width: 120 }}>
            <Option value="sit-up">sit-up</Option>
            <Option value="push-up">push-up</Option>
            <Option value="squat">squat</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name={[id, "reps"]}
          label="Nº of repetitions"
          required
          rules={[
            {
              required: true
            }
          ]}>
          <InputNumber size="large" placeholder="Reps" min={1} max={30} style={{ width: 120 }} />
        </Form.Item>

        <Form.Item
          name={[id, "rest"]}
          label="Rest time"
          required
          rules={[
            {
              required: true
            }
          ]}>
          <Radio.Group size="large">
            <Radio.Button value={0}>0 min</Radio.Button>
            <Radio.Button value={1}>1 min</Radio.Button>
            <Radio.Button value={3}>3 min</Radio.Button>
            <Radio.Button value={5}>5 min</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </div>

      <Button className="round_button" onClick={() => removeSet(id)}>
        <CloseOutlined />
      </Button>
    </div>
  );
};

export default Set;
