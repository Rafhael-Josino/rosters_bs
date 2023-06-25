import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_AWS_API });

export const getTable = async (TableName: string) => {
  try {
    const res = await API.get('test-access-ddb', { params: { TableName } });
    return res.data;
  } catch(err: any) {
    console.log("Error at getting table", TableName);
    return err;
  }
}

export const getWarriors = async (warband: string) => {
  try {
    const res = await API.get('DDB-Warriors-Handler', { params: { warband } });
    return res.data;
  } catch(err: any) {
    console.log("Error at getting warriors from", warband);
    return err;
  }
}