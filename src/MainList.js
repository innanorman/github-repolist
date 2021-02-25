import React from 'react';
import moment from 'moment'

const MainList = ({data, title, user}) => {
  return (
    <div>
      <h4>{title} <span className="user-title">{user}</span></h4>
      {data.map((list, key) => (
        <div className="repo-list" key={key}>
          <div className="detail-side">
            <div className="repo-name">
              {list.name}
            </div>
            <div className="language">
              <span className="bullet-lang"/> {list.language} 
            </div>
            <div className="created-date">
              <span className="text-label">created:</span>
              {moment(list.created_at).format('MMMM Do YYYY, h:mm:ss a')}
            </div>
          </div>
        </div>
      ))}
      
    </div>
  )
}

export default MainList
