
import React from 'react'

const NewsItem =(props)=> {
 
    let {title,description, imageUrl,newsUrl, author, date, source} = props;
    return (
      <div className="my-3">
       
       <div  className="card">
       <div style={{display:'flex',
          justifyContent :'flex-end',
          position:"absolute",
          right:'0'

          }}>
          <span className=" badge rounded-pill bg-danger" >
              {source}
            </span>
          </div>
  <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2024/01/31/1600x900/istock_1706723903031_1706723903267.jpg":imageUrl}  className = "card-img-top"alt="..."/>
  <div  className="card-body">
    <h5  className="card-title">{title}</h5>
  <p  className="card-text">{description}</p>
  <p className="card-text" style={{color:"red"}}><small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
    <a  rel = "noreferrer" href={newsUrl} target = "_blank"  className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }


export default NewsItem





// import { getByTitle } from '@testing-library/react'
// import React from 'react'
// import News from './News';

// const NewsItem =(props)=>{

 
//     let { title, description, imageUrl, newsUrl, author, date, source } = props;
//     return (
//       <div className="my-3">
//         <div className="card">
//           <div style={{display:'flex',
//           justifyContent :'flex-end',
//           position:"absolute",
//           right:'0'

//           }}>
//           <span className=" badge rounded-pill bg-danger" >
//               {source}
//             </span>
//           </div>
//           <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/prakash_singh_badal-sixteen_nine-sixteen_nine.jpg?" : imageUrl} className="card-img-top" alt="..." />
//           <div className="card-body">
//             <h5 className="card-title">{title} </h5> 
//             <p className="card-text" style={{color:"red"}}><small>By {!author ? "Undefinned" : author}on {new Date(date).toLocaleTimeString()}</small></p>
//             <p className="card-text">{description}...</p>
//             <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
//           </div>
//         </div>
//       </div>
//     )
//   }


// export default NewsItem