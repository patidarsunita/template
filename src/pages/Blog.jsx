import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const BlogPage = ({ blog }) => {
    return (
        <div>
            {blog.length < 1 ? (
                <div className="container">
                    <br /><br /><br /><br /><br />
                    <center>
                        <img src="/static/img/bg-img/404.png" alt="" />
                        <h1><b>OPPS!</b> We Couldn’t Find The Blogs</h1>
                        <p>Uh... So it looks like there aren't any blogs available yet.</p>
                        <h2><Link to="index">Bring me back Home</Link></h2>
                    </center>
                </div>
            ) : (
                <div>
                    {/* ##### Breadcumb Area Start ##### */}
                    <div className="breadcumb_area breadcumb-style-two bg-img"
                        style={{ backgroundImage: `url(/static/img/bg-img/breadcumb2.jpg)` }}>
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div className="col-12">
                                    <div className="page-title text-center">
                                        <h2>Welcome to our Blogging Page</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ##### Breadcumb Area End ##### */}

                    {/* ##### Blog Wrapper Area Start ##### */}
                    <div className="blog-wrapper section-padding-80">
                        <div className="container">
                            <div className="row">
                                {blog.map(b => (
                                    <div key={b.blog_id} className="col-12 col-lg-6">
                                        <div className="single-blog-area mb-50">
                                            <img src={`/media/${b.image}`} alt="" />
                                            <div className="post-title">
                                                <Link to={`/blog/${b.blog_id}`}>{b.title}</Link>
                                            </div>
                                            <div className="hover-content">
                                                <div className="hover-post-title">
                                                    <Link to={`/blog/${b.blog_id}`}>{b.title}</Link>
                                                </div>
                                                <p>{b.short_description}</p>
                                                <Link to={`/blog/${b.blog_id}`}>Continue reading <i className="fa fa-angle-right"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ##### Blog Wrapper Area End ##### */}
                </div>
            )}
        </div>
    );
};

export default BlogPage;
