import React from 'react'

const Id = async ({params}) => {

    let {id} = await params

    console.log(id);

  return (
    <div>
ID WILL SHOW HERE
    </div>
  )
}

export default Id