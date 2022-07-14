import React, {useContext, useState, useEffect} from 'react'
import { store } from './Details'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

export const Technology = () => {
  // const [detail, setDetail] = useContext(store);
  const[data,setData]=useState([])
    useEffect(()=>{
        const url = "https://node-blog-app-backend.herokuapp.com/api/blogdata";
        fetch(url).then(res => res.json())
            .then(res => setData(res)  )
    },[])
  return (
    <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Technology</h1>
            <h1 style={{ margin: "20px 0px 20px 32%", display: "inline-block" }}>Top Posts</h1>

            <div className="main__container">
            <div className='rightbar'>
                  {
                    data.filter((article) =>{return article.category === "Technology"}).map((n)=>( <Card 

                      articleid={n.id}
                      imgUrl = {n.Image}
                      description={n.description.slice(0, 200)}
                      title={n.title}

                      />))
                  }
            </div>
            <div className="sidebar">
                    {
                        data.filter((article) => { return article.category === "Technology" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Technology