import React from 'react'

const TeamMembers = () => {

let number = [0,1,2];

  return (
    <section className="team-area team-default-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section-title title-border-style text-center">
          <h2 className="title">Team Members</h2>
        </div>
      </div>
    </div>
    <div className="row">
      {
          number.map((i)=>
          <div className="col-md-4 col-lg-4 col-sm-6 mb-sm-30">
          <div className="team-member">
            <div className="thumb">
              <img src="assets/images/team/1.webp" alt="Image" width={390} height={450} />
              <div className="social-icons">
                <a href="#/"><i className="icon-social-facebook icons" /></a>
                <a href="#/"><i className="icon-social-twitter icons" /></a>
                <a href="#/"><i className="icon-social-instagram icons" /></a>
              </div>
            </div>
            <div className="content">
              <div className="member-info">
                <h4 className="name">Mela Nibon Rio</h4>
                <h6 className="designation">Manager</h6>
              </div>
            </div>
          </div>
        </div>

          )
      }
  
        {/* Dönecek kısım */}
    </div>
  </div>
</section>

  )
}

export default TeamMembers