/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import "../App.css"
import MetaData from './layouts/MetaData'
const Home = () => {
  return (
    <Fragment>
        <MetaData title={"Buy Best Products Online"}/>
       <h1 id="products_heading">Latest Products</h1>
       <section id="products" className="container mt-5">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="https://m.media-amazon.com/images/I/617NtexaW2L._AC_UY218_.jpg"
              alt='media'
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">128GB Solid Storage Memory card - SanDisk Ultra</a>
              </h5>
              <div className="ratings mt-auto">
                <div className="rating-outer">
                  <div className="rating-inner"></div>
                </div>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$45.67</p>
              <a href="#" id="view_btn" className="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href=""
                  >Wyze Cam 1080p HD Indoor Wireless Smart Home Camera Wyze Cam 1080p HD Indoor Wireless Smart Home Camera</a
                >
              </h5>
              <div className="ratings mt-auto">
               <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$965.67</p>
              <a href="#" id="view_btn" className="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="https://m.media-amazon.com/images/I/813oF-FY01L._AC_UY218_.jpg"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href=""
                  >Fujifilm Instax Mini Instant Film Twin Pack (White)</a
                >
              </h5>
              <div className="ratings mt-auto">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$125.57</p>
              <a href="#" id="view_btn" className="btn btn-block">View Details</a>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UY218_.jpg"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <a href="">AmazonBasics High-Speed HDMI Cable</a>
              </h5>
              <div className="ratings mt-auto">
               <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
                <i className="fa fa-star-o"></i>
                <span id="no_of_reviews">(5 Reviews)</span>
              </div>
              <p className="card-text">$75.56</p>

              <a type="button" href="#" id="view_btn" className="btn btn-block">View Details</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Fragment>
    
  )
}

export default Home
