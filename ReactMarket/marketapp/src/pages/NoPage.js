import React from 'react'

const NoPage = () => {
  return (
<main className="main-content">
  <section className="page-not-found-area">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 m-auto">
          <div className="error-content text-center">
            <h1>We Are Sorry, Page Not Found</h1>
            <p>Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist. Check the Url you entered for any mistakes and try again. <a href="index.html">Back to Homepage</a> </p>

          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default NoPage