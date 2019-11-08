import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import List from './List';
import './MultiSelectList.css';

export default {
  title: 'MultiSelectList',
};

let data = {
  key: 'deviceTypes',
  checkedAll: true,
  indeterminate: false,
  items: [
    {key: 'CT', checked: true, title: 'CT'},
    {key: 'MR', checked: true, title: 'MR'},
    {key: 'CT1', checked: true, title: 'CT1'},
    {key: 'CT2', checked: true, title: 'CT2'},
    {key: 'CT3', checked: true, title: 'CT3'},
    {key: 'CT4', checked: true, title: 'CT4'}
  ],
}

const onSelectAll = (data) => {
  const checked = !data.checkedAll;
  data.checkedAll = checked;
  data.indeterminate = false;

  data.items = data.items.map(item => {
    item.checked = checked;
    return item;
  });
  this.setState({});
};

export const OneList = () => {
  return (
    <List
      data={data}
      name="检查设备类型"
      onSelectAll={() => onSelectAll(data)}

    />
  );
}

export const FourLists = () => {
  return (
    <div className='wrapper'>
      <List
        data={data}
        name="检查设备类型"
      />
      <List
        data={data}
        name="检查设备类型"
      />
      <List
        data={data}
        name="检查设备类型"
      />
      <List
        data={data}
        name="检查设备类型"
      />
    </div>
  );
}