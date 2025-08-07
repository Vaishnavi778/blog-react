import React from 'react';
import './Home.css';

function Home() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>
          Welcome to <span className="brand">BlogMe</span>
        </h1>
        <p>Your space to write, read, and share thoughts with the world.</p>
      </header>

      <nav className="home-nav">
        <a href="#" onClick={() => scrollToSection('top')}>Home</a>
        <a href="#" onClick={() => scrollToSection('myblogs')}>My Blogs</a>
        <a href="#" onClick={() => scrollToSection('create')}>Create Blog</a>
        <a href="#" onClick={() => scrollToSection('profile')}>Profile</a>
        <a href="#" onClick={() => scrollToSection('about')}>About</a>
        <a href="#">Logout</a>
      </nav>

      <section className="home-main" id="top">
        <div className="intro-card">
          <h2>Start Writing Today</h2>
          <p>
            BlogMe gives you a powerful editor and a clean platform to publish
            your ideas. Express yourself, engage your readers, and grow your
            audience.
          </p>
          <button className="start-btn" onClick={() => scrollToSection('create')}>
            Create Your First Blog
          </button>
        </div>

        <div className="features">
          <div className="feature-card">
            <h3>Easy Editor</h3>
            <p>Write effortlessly with our distraction-free editor.</p>
          </div>
          <div className="feature-card">
            <h3>Connect & Share</h3>
            <p>Share your posts with the world instantly.</p>
          </div>
          <div className="feature-card">
            <h3>Grow Audience</h3>
            <p>Get insights and grow your community of readers.</p>
          </div>
        </div>

        {/* My Blogs Section */}
        <section id="myblogs" className="section-block">
          <h2>My Blogs</h2>
          <p>You haven’t written any blogs yet. Start sharing your thoughts!</p>
          <div className="blog-card">
            <h3>Sample Blog Title</h3>
            <p>This is a sample blog content preview. Click "Read More" to explore.</p>
            <button className="read-more-btn">Read More</button>
          </div>
        </section>

        {/* Create Blog Section */}
        <section id="create" className="section-block">
          <h2>Create Blog</h2>
          <form className="create-form">
            <input type="text" placeholder="Blog Title" />
            <textarea rows="5" placeholder="Write your blog content here..."></textarea>
            <button type="submit" className="start-btn">Publish</button>
          </form>
        </section>

    
        <section id="profile" className="section-block">
          <h2> My Profile</h2>
          <p><strong>Name:</strong>Vaishnavi</p>
          <p><strong>Email:</strong> vaishnavi56347@.com</p>
          <p><strong>Member since:</strong> Jan 2025</p>
        </section>
      </section>

      <footer id="about" className="home-footer">
        <h3>About BlogMe</h3>
        <p>
          BlogMe is your go-to platform for sharing thoughts, reading inspiring
          blogs, and connecting with like-minded individuals. Whether you're a
          seasoned writer or just getting started, BlogMe welcomes you!
        </p>
        <p>&copy; 2025 BlogMe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
