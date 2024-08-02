import React from 'react';
import { Button, Form, InputNumber } from 'antd';
import { fetchWeatherByCoordinates } from '../../redux/weatherSlice';
import { useAppDispatch } from '../../redux/hooks';


// TODO: This can be moved to a global file for validation messages

const validateMessages = {
  required: '${label} is required!',
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

type CoordinatesFormProps = {
  isLoading: boolean;
}

const CoordinatesForm: React.FC<CoordinatesFormProps> = ({isLoading}) => {
  
  const dispatch = useAppDispatch();

  const onFinish = async (values: {lat: number, lon: number}) => {
    const { lat, lon } = values;
      dispatch(fetchWeatherByCoordinates({lat: lat, lon: lon}));
  };

  return (
  
  <Form
    name="nest-messages"
    onFinish={onFinish}
    style={{ maxWidth: 600 }}
    validateMessages={validateMessages}
  >
    <Form.Item
      name="lat"
      label="Latitude"
      rules={[{ type: 'number', min: -90, max: 90, required: true }]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item
      name="lon"
      label="Longitude"
      rules={[{ type: 'number', min: -180, max: 180, required: true }]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit" disabled={isLoading} loading={isLoading}>
        Search
      </Button>
    </Form.Item>
  </Form>
)};

export default CoordinatesForm;
