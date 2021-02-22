import React from 'react';
import { Table,Typography} from 'antd';

function Edit () { 

  const datasource=[
    {
      key:'1',
      type:'Future Plans',
      title:'Health is important',
      content:'As a reminder, the final exam will be Saturday August 3rd from 1:00 PM to 4:00 PM in the Scotiabank Auditorium (Aud-1) in the Marion McCain Building. ',
      date:'2018-10-10'
    },

    {
      key:'2',
      type:'Study Abroad',
      title:'Health is important',
      content:'As a reminder, the final exam will be Saturday August 3rd from 1:00 PM to 4:00 PM in the Scotiabank Auditorium (Aud-1) in the Marion McCain Building. ',
      date:'2018-10-10'
    },

  ];

  const columns=[
    {
      title:'Type',
      dataIndex:'type',
      key:'type',
      width:'15%',
      ellipsis:true,
    },
    {
      title:'Title',
      dataIndex:'title',
      key:'title',
      width:'15%',
      ellipsis:true,
    },
    {
      title:'Content',
      dataIndex:'content',
      key:'content',
      width:'30%',
      ellipsis:true,
    },
    {
      title:'Date',
      dataIndex:'date',
      key:'date',
      width:'15%',
      ellipsis:true,
    },
    {
      title:'Operation',
      dataIndex:'operation',
      render:()=>{
        return(
          <span>
            <Typography.Link >
                Edit
            </Typography.Link>
          </span>
        )
      }

    }
  ]

  return (
      <div>
          <Table dataSource={datasource} columns={columns} bordered />
      </div>
      
      
  )
 }

 export default Edit;