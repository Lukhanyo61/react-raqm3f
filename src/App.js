import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
         
<nav class="navbar navbar-expand-lg navbar-default bg-default">
   
    <div class="container-fluid">
      
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
  
     
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        
        <a class="navbar-brand  mt-2 mt-lg-0" href="#">
          <img
          class="nav-logo"
            src="logo-pink.png"
            height="75"
            alt="MDB Logo"
            loading="lazy"
          />
        </a>
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a  class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="beneficiaries.html">Beneficiaries</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
         
        </ul>
  
      </div>
     
  
 
      <div class="d-flex align-items-center">
        
       
  
       
      
        <div class="dropdown">
          <a
            class="dropdown-toggle d-flex align-items-center hidden-arrow"
            href="#"
            id="navbarDropdownMenuAvatar"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            <img
             
              src="https://zamfoundation.co.za/wp-content/uploads/2021/04/image-removebg-preview-2.jpg"
              class="rounded-circle"
              height="45"
              alt="Black and White Portrait of a Man"
              loading="lazy"
            />
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdownMenuAvatar"
            type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal"
          >
           
            <li>
              <a type="button" class=" btn " data-mdb-toggle="modal" data-mdb-target="#exampleModal"  class="dropdown-item" href="/admin/startbootstrap-sb-admin-2-gh-pages/index.html">Admin</a>
            </li>
  
          </ul>
        </div>
      </div>
      
    </div>
   
  </nav>






<div id="carouselBasicExample" class="carousel slide carousel-fade" data-mdb-ride="carousel">
    
    <div class="carousel-indicators">
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-mdb-target="#carouselBasicExample"
        data-mdb-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
 
    <div class="carousel-inner">
   
      <div class="carousel-item active">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp" class="d-block w-100" alt="Sunset Over the City"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div>
      </div>
  
      
      <div class="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp" class="d-block w-100" alt="Canyon at Nigh"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
  
      
      <div class="carousel-item">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp" class="d-block w-100" alt="Cliff Above a Stormy Sea"/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </div>
      </div>
    </div>

  
   
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselBasicExample" data-mdb-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>


 

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Administration Login</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
     
          <div class="form-outline mb-4">
            <input type="email" id="form1Example1" class="form-control" />
            <label class="form-label" for="form1Example1">Email address</label>
          </div>
        
        
          <div class="form-outline mb-4">
            <input type="password" id="form1Example2" class="form-control" />
            <label class="form-label" for="form1Example2">Password</label>
          </div>
        
          
          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                <label class="form-check-label" for="form1Example3"> Remember me </label>
              </div>
            </div>
        
            <div class="col">
           
              <a href="/admin/startbootstrap-sb-admin-2-gh-pages/forgot-password.html">Forgot password?</a>
            </div>
          </div>
        
        
          <a href="/admin/startbootstrap-sb-admin-2-gh-pages/index.html">
          <button href="/admin/startbootstrap-sb-admin-2-gh-pages/index.html"  class="btn btn-primary btn-block">Sign in</button></a>
        </form>
      </div>
     
    </div>
  </div>
</div>

<h1 id="pay"  class="text-center">Paying it Forward</h1>
  <div  class="container what">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div class="card  ">
            <div class="card-body">
              <h5 class="card-title">What we do</h5>
              <p class="card-text">
                We provide access to learner's and driver's license training for youths from disadvantaged communities in order to enhance their chances of employment.
              </p>
          
          
            </div>
          </div>
      </div>
  
      <div  class="col-lg-4 col-md-6">
        <div class="card forWho  ">
            <div class="card-body">
              <h5 class="card-title">For Who</h5>
              <p class="card-text">
                The foundation focuses on young people who are 25 years and younger, who either have matric or are in the process of obtaining one.
              </p>
          
          
            </div>
          </div>
      </div>
  
      <div class="col-lg-4 col-md-6">
        <div class="card ourVision  ">
            <div class="card-body">
              <h5 class="card-title">Our Vision</h5>
              <p class="card-text">
               
Our Vision:
To assist in the development of young people from disadvantaged backgrounds by providing access to necessary skills, development and promote education.
              </p>
          
          
            </div>
          </div>
      </div>
    </div>
  </div>



  
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-12">
        <div class="card ourMission ">
            <div class="card-body">
              <h5 class="card-title">Our Mission</h5>
              <p class="card-text">
               

To provide a vehicle through which young people from disadvantaged backgrounds can be assisted to acquire skills that are necessary for employment seeking.
              </p>
          
          
            </div>
          </div>
      </div>
  
      <div class="col-lg-4 col-md-6">
        <div id="card5"  class="card ourObjective">
            <div class="card-body">
              <h5 class="card-title">Our Objective</h5>
              <p class="card-text">
           

To provide disadvantaged youths access towards obtaining their learners and drivers
              </p>
          
          
            </div>
          </div>
      </div>
  
      <div class="col-lg-4 col-md-6">
        <div  class="card">
            
          </div>
      </div>
    </div>
  </div>


  <div class="container">
    
    <div class="row">

	<div class="four col-md-3">
		<div class="counter-box colored">
		
			<span class="counter">2147</span>
			<p>Happy Customers</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
			
			<span class="counter">3275</span>
			<p>Registered Members</p>
		</div>
	</div>
	<div class="four col-md-3">
		<div class="counter-box">
		
			<span class="counter">289</span>
			<p>Available Products</p>
		</div>
	</div>
	<div  class="four col-md-3">
		<div class="counter-box">
			
			<span class="counter">1563</span>
			<p>Saved Trees</p>
		</div>
	</div>
  </div>	
</div>


  <div  class="container card5">
    <div class="card mb-3"  >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://zamfoundation.co.za/wp-content/uploads/2021/03/Congra.jpg"
              alt="Trendy Pants and Shoes"
              class="img-fluid rounded-start"
            />
          </div>
          <div  class="col-md-8">
            <div  id="zam-body"  class="card-body">
              <h2  data-text="CSS" class="card-title"><span>Our latest star!</span></h2>
              <p sty class="card-text">
                The foundation congratulates Noloyiso Madolo, 2019 beneficiary, on obtaining her code 10 drivers license. Her story is inspirational because after obtaining her learners license thru ZAM Foundation she didn’t sit around waiting for a handout. Instead she hustled and managed to pay for her own driving lessons. Against all odds she made it. A true story of self-reliance. No handouts, just hand ups. Well done Noloyiso.
              </p>
             
            </div>
            
               
              </div>
          </div>
        </div>
      </div>

  
  <div  class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-4 col-xs-12">
          <div class="single_footer">
            <h4>Company</h4>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="beneficiaries.html">Beneficiaries</a></li>
              <li><a href="contact.html">Contacts</a></li>

            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Page Link</h4>
            <ul>
              <li><a href="#pay">Paying it forward</a></li>
              <li><a href="#">Simply dummy text</a></li>
              <li><a href="#">The printing and typesetting </a></li>
              <li><a href="#">Standard dummy text</a></li>
              <li><a href="#">Type specimen book</a></li>
            </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-4 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Subscribe today</h4>
            <div class="signup_form">
              <form action="#" class="subscribe">
                <input type="text" class="subscribe__input" placeholder="Enter Email Address"/>
                <button type="button" class="subscribe__btn"><i class="#"><svg xmlns="http://www.w3.org/2000/svg"
                      width="24" height="24" viewBox="0 0 24 24">
                      <path fill="#0F0844"
                        d="m20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42l10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001l-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15l4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z" />
                    </svg></i></button>
              </form>
            </div>
          </div>
          <div class="social_profile">
            <ul>
              <li><a href="#"><i class="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path fill="white"
                        d="M13 10h3v3h-3v7h-3v-7H7v-3h3V8.745c0-1.189.374-2.691 1.118-3.512C11.862 4.41 12.791 4 13.904 4H16v3h-2.1c-.498 0-.9.402-.9.899V10z" />
                    </svg></i></a></li>
              <li><a href="#"><i class="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 24 24">
                      <path fill="white"
                        d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" />
                    </svg></i></a></li>
              <li><a href="#"><i class="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                      viewBox="0 0 256 256">
                      <path fill="white"
                        d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM192 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z" />
                    </svg></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12">
          <p class="copyright">Copyright © 2015 <a href="#">Codetelligent</a>.</p>
        </div>
      </div>
    </div>
  </div>
 
    
 
  
    </div>
  );
}
