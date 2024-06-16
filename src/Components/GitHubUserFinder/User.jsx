import React from 'react'

export default function User({data}) {
  const {avatar_url,followers,following,public_repos,url,name,login}=data
  return (
    
    <div className='user'>
      {data.length>0? <> <img src={avatar_url} alt={'user'} />
      <h3>
        {name}
      </h3>
      <p>
        {login}
      </p>
      <p>
        followers:
        {followers} 
      </p>
    <p>  public repositories :
        {public_repos}</p>
      


    <a href={`https://github.com/${login}`}>{name || login}</a>
  </>  :'user name not found'}
      </div>
  )
}
