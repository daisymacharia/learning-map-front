import * as types from '../actions/actionTypes';

export interface IResourceProps {
  saveResource: any;
  dispatch: any;
  toggle: () => void;
}

export interface IResourceState {
  active: boolean;
  description: string;
  error: boolean;
  label: string;
  tags: string[];
  title: string;
  url: '';
}

export interface ICreateResourceSuccess {
  type: string;
  resource: {
    description: string;
    tags: string[];
    title: string;
    url: string[];
  };
}
