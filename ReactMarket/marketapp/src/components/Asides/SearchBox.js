import React from 'react'

const SearchBox = () => {
  return (
<aside className="search-box-wrapper">
  <div className="search-box-content-inner">
    <div className="search-box-form-wrap">
      <div className="search-note">
        <p>Start typing and press Enter to search</p>
      </div>
      <form action="#" method="post">
        <div className="search-form position-relative">
          <input type="search" className="form-control" placeholder="Search" id="search-input" />
          <button className="search-button"><i className="icon-magnifier" /></button>
        </div>
      </form>
    </div>
  </div>
  <button className="search-close"><i className="icon-close" /></button>
</aside>

  )
}

export default SearchBox