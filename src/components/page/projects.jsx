import React from 'react'
import './projects.css'

function projects() {
  return (
    <div className='colorr'>
        <div class="album py-5 bg-body-tertiary">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
     
        <div class="col">
          <div class="card shadow-sm">
          <a href="#"><img src="../src/assets/project-01.png" className="img-fluid border project-image" /></a>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <a href="#"><img src="../src/assets/project-01.png" className="img-fluid border project-image" /></a>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <a href="#"><img src="../src/assets/project-01.png" className="img-fluid border project-image" /></a>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <a href="#"><img src="../src/assets/project-01.png" className="img-fluid border project-image" /></a>
          </div>
        </div>  

      </div>
    </div>
  </div>
    </div>
  )
}

export default projects