import axios from 'axios';
import { MiddleEarthOperativeType } from '../utils/types';

const API = axios.create({ baseURL: process.env.REACT_APP_AWS_API });

export const getTable = async (TableName: string) => {
  try {
    const res = await API.get('test-access-ddb', { params: { TableName } });
    return res.data;
  } catch(err: any) {
    console.log("Error at getting table", TableName);
    return [];
  }
}

export const getWarriors = async (warband: string) => {
  try {
    const res = await API.get('DDB-Warriors-Handler', { params: { warband } });
    return res.data;
  } catch(err: any) {
    console.log("Error at getting warriors from", warband);
    return [];
  }
}

export const updateWarrior = async (warrior: MiddleEarthOperativeType) => {
  try {
    const res = await API.put('DDB-Warriors-Handler', {
      test: warrior
    });
    console.log(res);
  } catch(err: any) {
    console.log("Error at updating warrior");
  }
}