/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import React, { Component } from 'react';
import Animate from 'rc-animate';
import { Checkbox } from 'antd';

import './List.scss';

export default class List extends Component {
  getSelectedItemsNumber = items => {
    let checkedNum = 0;
    items.forEach(item => {
      if (item.checked) {
        checkedNum += 1;
      }
    });
    return checkedNum;
  };

  render() {
    const { data, name, onSelectAll, onItemSelect } = this.props;
    let checkedNumber = 0;
    let totalNumber = 0;
    if (data && data.items) {
      checkedNumber = this.getSelectedItemsNumber(data.items);
      totalNumber = data.items.length;
    }
    return (
      <div className="listWrapper">
        <div className="header">
          <Checkbox
            className="selectAll"
            checked={data.checkedAll}
            indeterminate={data.indeterminate}
            onChange={() => onSelectAll(data)}
          />
          <span>
            {checkedNumber}/{totalNumber}项
          </span>
          <span className="checkName">{name}</span>
        </div>
        <div>
          <Animate className="content" component="ul" transitionLeave={false}>
            {data &&
              data.items &&
              data.items.map(item => (
                <li
                  className="li"
                  key={item.key}
                  item={item}
                  checked={item.Checkboxchecked}
                  onClick={() => onItemSelect(data, item)}
                >
                  <Checkbox
                    checked={item.checked}
                    className="item"
                    onChange={this.checkboxClick}
                  />
                  <span>{item.title}</span>
                </li>
              ))}
          </Animate>
        </div>
      </div>
    );
  }
}
