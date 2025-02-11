import React from "react";

const Home = () => {
  return (
    <section id="home" className="home">
      <h2>Welcome to My Portfolio</h2>
      <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Kunal_Kumar_Budhwara.jpg/640px-Kunal_Kumar_Budhwara.jpg" 
                alt="Profile" 
                style={{ width: '150px', height: '150px', borderRadius: '50%' }} 
            />
      <p>Hi, I'm Kunal Kumar - A Web Developer.</p>
    </section>
  );
};

export default Home;
