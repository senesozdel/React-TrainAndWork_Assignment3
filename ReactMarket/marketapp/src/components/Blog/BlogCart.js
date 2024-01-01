import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BlogCart = () => {

  const [blogs, setBlogs] = useState([])



  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/blogs");
      setBlogs(response.data)
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  useEffect(() => {
    fetchBlogs()
  }, [])



  return (
    <section className="blog-area blog-grid-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-content-area">
              <div className="row">
                {/* dönecek kısım dbden gelen blog verileriniL */}

                {/* {
                  blogs && blogs.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="singel-latest-blog">
                        <div className="articles-image">
                          <Link onClick={() => handleLinkScrollClick()} to={`/blog-detail/${item.slug}`}>
                            <img src={item.image} alt="" />
                          </Link>
                        </div>
                        <div className="aritcles-content">
                          <div className="author-name">
                            post by: <span style={{ color: '#c89979' }}> {item.author}</span> - {item.date}
                          </div>
                          <h4>
                            <Link onClick={() => handleLinkScrollClick()} to={`/blog-detail/${item.slug}`} className="articles-name">
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))
                } */}
                {
                  blogs && blogs.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                    <div className="post-item">
                      <div className="thumb">
                        <a href="blog-details.html"><img src={item.image} alt="Image" width={450} height={312} /></a>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="blog-details.html">{item.title}</a></h4>
                        <div className="meta">
                          <a className="post-date" href="blog.html"><i className="icon-calendar icons" /><span> {item.date}</span></a>
                          <a className="meta-author" href="blog.html">{item.author}</a>
                        </div>
                        <p>There are many variation of Lorem ipsum text of the printing and typesetting industry. Lorem Ipsum has been the...</p>
                        <a className="btn-theme" href="blog-details.html">Read More</a>
                      </div>
                    </div>
                  </div> ))
                }

       




              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogCart