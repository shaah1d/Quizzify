import React from 'react'

function About() {
  return (
<div class="bg-base-200 py-10">
  <div class="max-w-4xl mx-auto px-6 md:px-12">
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-primary">About Us</h1>
      <p class="text-lg text-base-content mt-4">
        Welcome to <span class="text-secondary font-semibold">Quizzify</span>, where your curiosity meets endless possibilities! We specialize in creating fun and interactive quizzes that not only entertain but also expand your knowledge.
      </p>
    </div>
    
    <div class="space-y-8">
      <section>
        <h2 class="text-2xl font-semibold text-primary">Our Mission</h2>
        <p class="text-base-content mt-2">
          Our quizzes span a variety of topics, ensuring there's something for everyone—from pop culture enthusiasts to history buffs, and everyone in between.
        </p>
        <p class="text-base-content mt-2">
          At Quizzify, we leverage the power of the <a href='https://opentdb.com/' class="font-semibold text-secondary">Open Trivia Database</a> to deliver an ever-expanding selection of questions. This means our quizzes are always fresh, relevant, and challenging, giving you a unique experience each time you visit.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-primary">Why Quizzify?</h2>
        <p class="text-base-content mt-2">
          Whether you're looking to test your knowledge, challenge your friends, or simply pass the time, Quizzify offers a platform where learning is fun and engaging.
        </p>
        <p class="text-base-content mt-2">
          We believe that trivia should be more than just a game; it should be a journey of discovery. That's why we've designed Quizzify to be intuitive and user-friendly, allowing you to dive straight into the action without any hassle.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-primary">Meet the Developer</h2>
        <p class="text-base-content mt-2">
          Quizzify was created by a passionate <span class="font-semibold text-secondary">18-year-old developer</span> with a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js). With a deep interest in web development and design, the developer is constantly exploring new technologies, such as DaisyUI, to enhance the look and feel of this project.
        </p>
        <p class="text-base-content mt-2">
          Quizzify is a product of both skill and passion, combining technical expertise with a love for trivia.
        </p>
      </section>

      <section>
        <h2 class="text-2xl font-semibold text-primary">Connect with Us</h2>
        <p class="text-base-content mt-2">
          We’re excited to share our journey with you! Follow us on our social media channels to stay updated with the latest quizzes, features, and news:
        </p>
        <div class="mt-4 space-x-4">
          <a href="https://github.com/shaah1d" class="text-secondary hover:text-secondary-focus font-semibold">GitHub</a>
          <a href="https://x.com/shaah1d" class="text-secondary hover:text-secondary-focus font-semibold">Twitter</a>
          <a href="mailto:writetoshaahid@gmail.com" class="text-secondary hover:text-secondary-focus font-semibold">Email</a>
        </div>
      </section>
    </div>

    <div class="text-center mt-10">
      <p class="text-base-content">
        Thank you for choosing <span class="text-secondary font-semibold">Quizzify</span>. Happy quizzing!
      </p>
    </div>
  </div>
</div>

       
  )
}

export default About