<template>
  <div class="home">
    <header class="header-wrapper">
      <div class="container">
        <div class="sidebar-top-logo d-flex align-items-center justify-content-between">
          <h1>
            <a href="#">
              S<span>A</span>
            </a>
          </h1>
          <div class="menu-bars d-flex align-items-center flex-column justify-content-between">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>

    <div class="responsive-sidebar position-fixed flex-column justify-content-between">
      <i class="la la-times close-responsive-sidebar"></i>
      <ul class="sidebar-menu">
        <li>
          <a href="#home"><i class="la la-home"></i> Home</a>
        </li>
        <li>
          <a href="#about"><i class="la la-user"></i> About</a>
        </li>
        <li>
          <a href="#contact"><i class="la la-envelope"></i> Contact</a>
        </li>
      </ul>
      <p class="copyright text-center">Copyright &copy; 2022</p>
    </div>

    <main class="personal-website-main">
      <aside class="personal-sidebar-area flex-column justify-content-between">
        <div class="sidebar-top-logo text-center">
          <h1>
            <a href="#">
              S<span>A</span>
            </a>
          </h1>
        </div>

        <ul class="sidebar-menu">
          <li>
            <a href="#home"><i class="la la-home"></i> Home</a>
          </li>
          <li>
            <a href="#about"><i class="la la-user"></i> About</a>
          </li>
          <li>
            <a href="#contact"><i class="la la-envelope"></i> Contact</a>
          </li>
        </ul>
        <p class="copyright text-center">Copyright &copy; 2022</p>
      </aside>

      <div class="personal-content-area">
        <section class="home-section text-center" id="home">
          <div id="particles-js"></div>
          <div class="home-content">
            <div class="me-img">
              <img :src="require('@/assets/imgs/me.png')" alt="">
              <span class="me-img-shapes position-absolute">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
            </div>
            <h1>Suheb <span>Ahmed</span></h1>
            <h2>I'm a <span class="typed"></span></h2>
          </div>
          <a href="#about" class="go-to-btn go-to-about">
            <i class="la la-angle-down"></i>
          </a>
        </section>

        <section class="about-section" id="about">
          <div class="container">
            <div class="section-heading">
              <h1>About <span>Me</span></h1>
              <p>Main information's about me</p>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div class="about-img text-right">
                  <img :src="require('@/assets/imgs/me-2.png')" alt="">
                  <span class="shape1"></span>
                </div>
              </div>
              <div class="col-md-1"></div>
              <div class="col-md-7">
                <div class="about-content">
                  <h1>I'm Suheb Ahmed and <span class="typed"></span></h1>
                  <p>Hi! My name is <strong>Suheb Ahmed</strong>. I am a student. Basically, I made tiktok video.</p>
                  <ul class="d-flex flex-wrap">
                    <li><span>Birthday</span> 11.10.1998</li>
                    <li><span>Age:</span> 24</li>
                    <li><span>City:</span> Sylhet, Bangladesh</li>
                    <li><span>Study:</span> Class 10</li>
                    <li><span>Mail:</span> <a href="mailto:suhebahmed818@gmail.com">suhebahmed818@gmail.com</a></li>
                    <li><span>Phone:</span> +8801760496641</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>

        <section class="contact-form-section" id="contact">
          <div class="container">
            <div class="section-heading">
              <h1>Contact <span>Me</span></h1>
              <p>Get in touch with me</p>
            </div>
            <div class="row">
              <div class="col-md-5">
                <div class="contact-form-infos">
                  <h1>Get in Touch</h1>
                  <ul>
                    <li>
                      <span>Address: </span>Sylhet - Modina Market, Bangladesh
                    </li>
                    <li>
                      <span>Email: </span><a href="mailto:suhebahmed818@gmail.com">suhebahmed818@gmail.com</a>
                    </li>
                    <li>
                      <span>Phone: </span>+8801760496641
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-7">
                <div class="contact-form">
<!--                  <?php echo do_shortcode( get_theme_mod( 'contact_form_shortcode' ) ); ?>-->
                  <form>
                      <div class="input-group">
                          <label for="name">Name</label>
                          <input type="text" id="name">
                      </div>
                      <div class="input-group">
                          <label for="email">Email</label>
                          <input type="text" id="email">
                      </div>
                      <div class="input-group">
                          <label for="subject">Subject</label>
                          <input type="text" id="subject">
                      </div>
                      <div class="input-group">
                          <label for="message">Message</label>
                          <textarea name="message" id="message" cols="30" rows="10"></textarea>
                      </div>
                      <button class="theme-btn send-message" type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <a href="#home" class="back-to-top">
      <i class="la la-angle-up"></i>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>
