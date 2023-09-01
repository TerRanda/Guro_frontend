import React from 'react'
import { Link } from 'react-router-dom';
function Home({data}) {
  console.log('home: ', data);
  const totalCount = data?.response?.body?.totalCount;
  // console.log('totalCount= ', totalCount);

  return (
    <div className="home">
        <h1>home</h1>
        {
          // data && <p>{totalCount}</p>
          data && data.response.body.items.map((item) => {
            return(
              <>
              <p key={item.id}>{item.districtName}</p>
              <Link to={`detail/${item.id}`}></Link>
              </>
            )
          })
        }
    </div>
  )
}

export default Home