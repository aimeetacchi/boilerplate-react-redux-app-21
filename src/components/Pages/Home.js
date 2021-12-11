import React, { useEffect } from 'react'
import { getData } from '../../actions/example'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const data = useSelector((state) => state.example.data);
  const loading = useSelector((state) => state.example.loading)
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch call action getData -
    dispatch(getData())
      
  // eslint-disable-next-line  
  }, [])

  if(loading) return <div className="text-center">Loading...</div>

  return (
    <div className="home container text-center">
        <h1>Boilerplate React App </h1>
        <p>Boilerplate React Application with React-Redux, Example API request getting posts.</p>

        {
          data && data.map((item) => (
            <div className="example-post" key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))
        }
    </div>
  )
}

export default Home
