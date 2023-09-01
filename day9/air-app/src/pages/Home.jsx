import React from 'react'

function Home({data}) {

    console.log(data);
    const totalCount = data?.response?.body?.totalCount;
    console.log(totalCount);

  return (
    <>
      <div>Home
        {data && <p>{totalCount}</p>}
      </div>
    </>
  )
}

export default Home