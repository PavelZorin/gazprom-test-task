import React from 'react'
import { Table } from 'antd';
import style from '../ContextTable/contextTableStyle.module.css'
import { dataAnalytics, columnsAnalytics, namesCatalog, namesAnalytics, dataCatalog, columnsCatalog } from '../../data/data'

function ContextTable({ visibleComponents, type }) {

  return (
    <>
      {
        type === 'analitics' &&
        <>
          <div className={style.header_text_table}><span>{namesAnalytics[visibleComponents]}</span></div>
          <Table
            scroll={{ y: 500 }}
            pagination={false}
            bordered="true"
            columns={columnsAnalytics[visibleComponents]}
            dataSource={dataAnalytics[visibleComponents]}
            size="middle" />
        </>
      }
      {
        type === 'catalog' &&
        <>
          <div className={style.header_text_table}><span>{namesCatalog[visibleComponents]}</span></div>
          <Table
            scroll={{ y: 500 }}
            pagination={false}
            bordered="true"
            columns={columnsCatalog[visibleComponents]}
            dataSource={dataCatalog[visibleComponents]}
            size="middle" />
        </>
      }
    </>
  )
}

export default ContextTable
