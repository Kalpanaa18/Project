import React from 'react';
import './ComponentTwo.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentTwo = () => {
  return (
    <div>
     <div class="box">
     <div class="container">
  <div class="row row-cols-2 row-cols-lg-3">
    <div class="row-sm-2">Column</div>
    <div class="col">Column</div>
    <div class="col"><img src="..." class="img-fluid" alt="..."></img></div>
    <div class="col"><img src="..." class="img-fluid" alt="..."></img></div>
    <div class="col"><img src="..." class="img-fluid" alt="..."></img></div>
    <div class="col"><img src="..." class="img-fluid" alt="..."></img></div>
    
  </div>
</div>
     </div>
    </div>
  );
}

export default ComponentTwo;
