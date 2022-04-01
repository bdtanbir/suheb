<template>
  <router-view/>
</template>

<style>

:root {
  --secondary_color: #041230;
  --primary_color: #E3872D;
  --white_color: #ffffff;
  --paragraph_color: #212529;
}

*, *:before,*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none !important;
}
html, body {
  scroll-behavior: smooth;
}
body {
  font-family: "Open Sans";
  font-size: 14px;
  line-height: 1.8;
  letter-spacing: 0.5px;
  word-wrap: break-word;
  font-weight: 400;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--paragraph_color);
}
.theme-btn {
  padding: 12px 35px;
  display: inline-block;
  background: var(--primary_color);
  color: #fff;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -ms-transition: .3s;
  -o-transition: .3s;
}
.theme-btn:hover {
  color: var(--white_color);
}
.theme-btn:before {
  content: '';
  width: 110%;
  height: 110%;
  background: var(--secondary_color);
  position: absolute;
  left: -22px;
  bottom: -20px;
  z-index: -1;
  transform-origin: left;
  transform: rotate(-74deg);
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -ms-transition: .3s;
  -o-transition: .3s;
}
.theme-btn:hover:before {
  transform: rotate(0);
  left: -5px;
  bottom: 0px;
}

li {
  list-style: none;
}

/* Typing Heading */
.typed::after {
  content: '|';
  display: inline;
  -webkit-animation: blink 0.7s infinite;
  -moz-animation: blink 0.7s infinite;
  animation: blink 0.7s infinite;
}
/*Removes cursor that comes with typed.js*/
.typed-cursor{
  opacity: 0;
  display: none;
}
/*Custom cursor animation*/
@keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@-webkit-keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}
@-moz-keyframes blink{
  0% { opacity:1; }
  50% { opacity:0; }
  100% { opacity:1; }
}

.back-to-top {
  display: none;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 99999999;
  background: var(--primary_color);
  color: var(--white_color);
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}
.back-to-top:hover {
  background: var(--secondary_color);
  color: var(--white_color);
}

/* Next Section button */
.go-to-btn {
  position: absolute;
  bottom: 40px;
  color: var(--white_color);
  font-size: 20px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
  animation: dowing_arw 1s infinite linear
}
.go-to-btn:hover {
  color: var(--primary_color);
}

/* Section Heading */
.section-heading {
  padding-left: 20px;
  border-left: 6px solid var(--primary_color);
  margin-bottom: 100px;
}
.section-heading h1 {
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: -.5px;
  line-height: 1;
  margin: 0;
}
.section-heading h1 span {
  font-weight: 600;
  color: var(--primary_color);
}
.section-heading p {
  margin: 0;
  font-size: 16px;
  font-family: "Montserrat";
}
.sidebar-top-logo h1 a {
  color: #fff;
  font-weight: 700;
}

.sidebar-top-logo h1 a span {
  color: var(--primary_color);
}

.sidebar-top-logo h1 {
  font-size: 65px;
}
.header-wrapper .sidebar-top-logo {
  padding: 0;
  border: none;
}
.header-wrapper .sidebar-top-logo h1 {
  margin: 0;
  font-size: 25px;
}


/* Header */
.header-wrapper {
  display: block;
  position: fixed;
  top: 0;
  z-index: 999999;
  width: 100%;
  padding: 15px 0;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -ms-transition: .3s;
  -o-transition: .3s;
}
.header-wrapper.active {
  background: var(--secondary_color);
}
.header-wrapper .menu-bars {
  width: 25px;
  height: 17px;
  position: relative;
  cursor: pointer;
}
.header-wrapper .menu-bars span {
  width: 100%;
  height: 1px;
  background: var(--white_color);
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -ms-transition: .3s;
  -o-transition: .3s;
}
.responsive-sidebar {
  right: -280px;
  top: 0;
  height: 100%;
  background: var(--secondary_color);
  width: 280px;
  z-index: 999999;
  display: flex;
  overflow: hidden;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -ms-transition: .3s;
  -o-transition: .3s;
}
.active-responsive-menu .responsive-sidebar {
  right: 0;
}
.close-responsive-sidebar {
  color: var(--secondary_color);
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
  padding: 5px 5px 0 0;
  cursor: pointer;
}
.close-responsive-sidebar:after {
  content: '';
  background: #fff;
  width: 84px;
  height: 39px;
  position: absolute;
  right: -13px;
  z-index: -1;
  top: -13px;
  transform-origin: bottom;
  transform: rotate(45deg);
}
.responsive-sidebar .sidebar-menu {
  margin-top: 50px;
}
.logo img {
  width: 50px;
}



/* Main */
.personal-website-main {
  height: 100vh;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
  -ms-transition: .3s;
  -o-transition: .3s;
}
.active-responsive-menu .header-wrapper,
.active-responsive-menu .personal-website-main {
  margin-right: 280px;
  margin-left: -280px;
}



/* Sidebar */
.personal-sidebar-area {
  background: var(--secondary_color);
  width: 300px;
  position: fixed;
  top: 0;
  height: 100%;
  display: none;
}
.sidebar-top-logo {
  padding: 40px 0;
  border-bottom: 1px solid rgb(255 255 255 / 10%);
}
.sidebar-menu {
  margin: 0;
  padding: 20px 30px 20px 40px;
  list-style: none;
}
.sidebar-menu li a {
  color: var(--white_color);
  font-size: 20px;
  text-transform: uppercase;
  padding: 8px 0 8px 15px;
  display: block;
  text-decoration: none;
  position: relative;
  transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}
.sidebar-menu li a:hover {
  color: var(--primary_color);
  padding-left: 40px;
  background: rgb(255 255 255 / 3%);
}
.sidebar-menu li a i {
  position: absolute;
  left: -13px;
  top: 6px;
  font-size: 40px;
  opacity: 0.05;
}
.sidebar-menu li a:before {
  content: '';
  width: 0;
  height: 2px;
  background: var(--primary_color);
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -1px;
  transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -webkit-transition: .3s;
  -o-transition: .3s;
}
.sidebar-menu li a:hover:before{
  width: 20px;
}
.copyright {
  color: var(--white_color);
  border-top: 1px solid rgb(255 255 255 / 10%);
  margin: 0;
  padding: 10px 0;
}



/* main content */
.personal-content-area {
  padding-left: 0;
}


/*  Section Home  */
.home-section {
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url(./assets/imgs/bg.jpg);
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  position: relative;
  z-index: 1;
  padding: 180px 0;
}
.home-section:before {
  content: '';
  background-color: rgba(7,23,55,.8);
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
}
.home-content h1 {
  font-family: "Montserrat";
  text-transform: uppercase;
  color: var(--white_color);
  font-size: 34px;
  font-weight: 300;
}
.home-content h1 span {
  font-weight: 500;
  color: var(--primary_color);
}
.home-content h2 {
  color: #fff;
  font-size: 16px;
  font-family: "Montserrat";
  font-weight: 300;
}
.home-content h2 span {
  font-weight: 500;
}
.home-content .me-img {
  width: 184px;
  height: 184px;
  position: relative;
  border-radius: 100%;
  margin: auto auto 38px auto;
}
.home-content .me-img:after,
.home-content .me-img:before {
  /* content: ''; */
  width: 70%;
  height: 70%;
  border-radius: 10px;
  border: 10px solid var(--primary_color);
  opacity: 0.3;
  position: absolute;
  right: 0;
  top: -20px;
  z-index: -1;
  animation: rotating 11s infinite linear
}
.home-content .me-img:after {
  background: var(--white_color);
  border: none;
  right: auto;
  left: 15px;
  top: auto;
  bottom: -19px;
  width: 60%;
  height: 60%;
  opacity: 0.1;
  animation: rotating2 11s infinite linear;
  border-radius: 40px 20px 30px 25px;
}
.home-content .me-img img {
  border-radius: 100%;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 0 10px rgb(255 255 255 / 20%);
}
.me-img-shapes {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.me-img-shapes span {
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 1px;
  background: #fff;
  transform-origin: left;
  transform: rotate(45deg);
  animation: lineshapeop 1s infinite linear;
}
.me-img-shapes span:nth-child(2) {
  left: auto;
  right: 0;
  transform-origin: right;
  transform: rotate(-45deg);
  animation: lineshapeop2 1s infinite linear;
}
.me-img-shapes span:nth-child(3) {
  top: auto;
  bottom: 0;
  transform-origin: left;
  transform: rotate(-45deg);
  animation: lineshapeop3 1s infinite linear;
}
.me-img-shapes span:nth-child(4) {
  left: auto;
  right: 0;
  top: auto;
  bottom: 0;
  transform-origin: right;
  transform: rotate(45deg);
  animation: lineshapeop4 1s infinite linear;
}
#particles-js {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}


/* About Section */
.about-section {
  padding-top: 100px;
  overflow: hidden;
  padding-bottom: 90px;
}
.about-img {
  position: relative;
}
.about-img:before {
  content: '';
  width: 90%;
  height: 100%;
  border: 10px solid rgb(4 18 48 / 5%);
  position: absolute;
  left: 15px;
  z-index: -1;
  top: 30px;
  border-radius: 8px;
}
.about-img img {
  width: 100%;
  max-width: 90%;
}
.about-img:after {
  content: '';
  border: 6px solid #fff;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
}
.about-img .shape1 {
  width: 55px;
  height: 55px;
  position: absolute;
  background: linear-gradient(45deg, #2609ff, #e3872d);
  border-radius: 50%;
  right: -20px;
  top: -20px;
  box-shadow: 0 0 20px #aaaaaa;
}
.about-content {
  margin-top: 60px;
}
.about-content h1 {
  font-size: 24px;
  line-height: 1;
  margin-bottom: 18px;
}
.about-content h1 span {
  color: var(--primary_color);
  font-weight: 600;
}
.about-content p {
  margin: 0 0 15px 0;
}
.about-content p strong {
  color: var(--primary_color);
}
.about-content ul {
  margin: 0 0 18px 0;
}
.about-content ul li {
  width: 100%;
  margin: 0px 0px 10px 0px;
}
.about-content ul li span {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 13px;
  color: #000;
  min-width: 85px;
  display: inline-block;
}
.about-content ul li a {
  color: var(--paragraph_color);
}
.about-content ul li a:hover {
  color: var(--primary_color);
}
.about-content .about-btns {
  flex-direction: column;
  align-items: flex-start;
}
.about-content .about-btns a + a {
  margin-left: 0;
  margin-top: 10px;
}

/* Skills */
.about-skills-area {
  background: #f6f7fd;
  margin-top: 100px;
  padding-top: 90px;
  padding-bottom: 90px;
}
.skill-lists li {
  position: relative;
  margin-bottom: 20px;
}
.skill-lists li .title {
  display: inline-block;
  font-size: 13px;
  line-height: 1;
  font-weight: 700;
}
.skill-lists li .percent {
  font-weight: 700;
}
.skill-lists li .title-and-percent {
  margin-bottom: 10px;
  line-height: 1;
}
.skill-lists li .skill-bar {
  width: 100%;
  position: relative;
  height: 5px;
  border-radius: 10px;
  background: #eaeaea;
}
.skill-lists li .skill-bar:before {
  content: '';
  height: 100%;
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  background: var(--primary_color)
}
.skill-lists li.wordpress .skill-bar:before {
  width: 70%;
}
.skill-lists li.css .skill-bar:before,
.skill-lists li.html .skill-bar:before {
  width: 95%;
}
.skill-lists li.javascript .skill-bar:before {
  width: 50%;
}



/* Portfolio */
.portfolio-section {
  padding-top: 100px;
  padding-bottom: 70px;
}
.portfolio-item {
  position: relative;
  margin-bottom: 30px;
  overflow: hidden;
}
.portfolio-item img {
  width: 100%;
}
.portfolio-filters-btn {
  margin-bottom: 30px;
}
.portfolio-filters-btn ul li + li {
  margin-left: 20px;
}
.portfolio-filters-btn ul li {
  font-weight: 700;
  font-family: "Montserrat";
  transition: .3s;
  -webkit-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  cursor: pointer;
  position: relative;
}
.portfolio-filters-btn ul li.active {
  color: var(--primary_color);
  padding-left: 15px;
}
.portfolio-filters-btn ul li:before {
  content: '';
  height: 2px;
  width: 0;
  position: absolute;
  left: 0;
  background: var(--primary_color);
  top: 50%;
  margin-top: -1px;
  transition: .3s;
  -webkit-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
}
.portfolio-filters-btn ul li.active:before {
  width: 10px;
}
.portfolio-item .portfolio-item-overlay {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgb(4 18 48 / 80%);
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  -webkit-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
}
.portfolio-item:hover .portfolio-item-overlay {
  opacity: 1;
  visibility: visible;
}
.portfolio-item .portfolio-item-overlay .portfolio-live-preview {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  text-align: center;
  color: var(--secondary_color);
  background: var(--white_color);
  border-radius: 50%;
  transition: .3s;
  -webkit-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
  transform: translateY(-100px);
  opacity: 0;
  visibility: hidden;
}
.portfolio-item:hover .portfolio-item-overlay .portfolio-live-preview {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}
.portfolio-item .portfolio-item-overlay .portfolio-live-preview:hover {
  background: var(--primary_color);
  color: var(--white_color);
}
.portfolio-item .portfolio-item-overlay h1 {
  font-size: 13px;
  color: #fff;
  margin: 10px 0 0 0;
  font-weight: 300;
  transform: translateY(100px);
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  -webkit-transition: .3s;
  -ms-transition: .3s;
  -moz-transition: .3s;
  -o-transition: .3s;
}
.portfolio-item .portfolio-item-overlay h1 span {
  font-weight: 600;
}
.portfolio-item:hover .portfolio-item-overlay h1 {
  transform: translateY(0);
  opacity: 1;
  visibility: visible;
}



/* Contact */
.contact-form-section {
  padding-top: 100px;
  padding-bottom: 100px;
  border-top: 1px solid rgba(7,23,55,.1);
}
.contact-form-infos h1 {
  font-weight: 500;
  font-family: "Montserrat";
  line-height: 1;
  position: relative;
  margin-bottom: 30px;
  font-size: 24px;
}
.contact-form-infos ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.contact-form-infos ul li a,
.contact-form-infos ul li {
  color: #333;
}
.contact-form-infos ul li + li {
  margin-top: 15px;
}
.contact-form-infos ul li span {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 13px;
  color: var(--secondary_color);
  min-width: 80px;
  display: inline-block;
}
.contact-form-infos ul li a:hover {
  color: var(--primary_color);
}
.contact-form {
  box-shadow: 0 0 40px rgb(4 18 48 / 15%);
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 30px;
  margin-top: 40px;
}
.contact-form .input-group {
  margin-bottom: 15px;
  display: block;
}
.contact-form p {
  margin: 0;
}
.contact-form .input-group label {
  font-weight: 600;
  font-family: "Montserrat";
  line-height: 21px;
  margin-bottom: 5px;
  display: block;
}
.contact-form .input-group textarea,
.contact-form .input-group input {
  display: block;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px 20px;
}
.contact-form .input-group textarea:focus,
.contact-form .input-group input:focus {
  outline: none;
  border-color: var(--primary_color);
  box-shadow: none;
}
.contact-form .input-group textarea {
  height: 100px;
}
.contact-form .send-message {
  border: none;
}





/* Keyframes */
@keyframes rotating {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotating2 {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}
@keyframes dowing_arw {
  0% {
    bottom: 40px;
    opacity: 1;
  }
  100% {
    bottom: 25px;
    opacity: 0;
  }
}


@keyframes lineshapeop {
  0% {
    left: 0;
    top: 0;
    opacity: 1;
  }
  100% {
    left: -30px;
    top: -30px;
    opacity: 0;
  }
}
@keyframes lineshapeop2 {
  0% {
    right: 0;
    top: 0;
    opacity: 1;
  }
  100% {
    right: -30px;
    top: -30px;
    opacity: 0;
  }
}
@keyframes lineshapeop3 {
  0% {
    left: 0;
    bottom: 0;
    opacity: 1;
  }
  100% {
    left: -30px;
    bottom: -30px;
    opacity: 0;
  }
}
@keyframes lineshapeop4 {
  0% {
    right: 0;
    bottom: 0;
    opacity: 1;
  }
  100% {
    right: -30px;
    bottom: -30px;
    opacity: 0;
  }
}


/* Media */
@media (min-width: 991px) {
  .personal-sidebar-area {
    display: flex;
  }
  .personal-content-area {
    padding-left: 300px;
  }
  .responsive-sidebar,
  .header-wrapper {
    display: none;
  }
  .portfolio-item .portfolio-item-overlay h1 {
    font-size: 22px;
  }
  .portfolio-item .portfolio-item-overlay .portfolio-live-preview {
    width: 50px;
    height: 50px;
    font-size: 22px;
    line-height: 50px;
  }
}
@media (min-width: 769px) {
  .home-section {
    height: 100vh;
    padding: 0;
  }
}
@media (min-width: 426px) {
  .section-heading h1,
  .home-content h1 {
    font-size: 50px;
  }
  .home-content h2 {
    font-size: 24px;
  }
  .section-heading {
    padding-left: 25px;
  }
  .about-img img {
    max-width: 300px;
  }
  .about-img:before {
    width: 300px;
    height: 327px;
  }
  .contact-form,
  .about-content {
    margin-top: 0;
  }
  .about-content ul li {
    width: 50%;
  }
  .portfolio-filters-btn ul li + li {
    margin-left: 40px;
  }
  .about-content .about-btns {
    flex-direction: row;
    align-items: center;
  }
  .about-content .about-btns a + a {
    margin-left: 20px;
    margin-top: 0;
  }
}
@media (max-width: 320px) {
  .section-heading p {
    font-size: 14px;
    line-height: 20px;
  }
}
</style>
