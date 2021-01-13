import React from 'react';
import './landing.css';
import { CDBBtn } from 'cdbreact';

const Landing = () => {
  return (
    <section className="page-head d-flex align-items-center text-right text-white">
      <img alt="landing" src="/landing.png" className="image" />
      <div className="page-info">
        <p className="page-title font-weight-bold ml-auto">
          Creativity is but skin deep
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
        </p>
        <CDBBtn
          flat
          style={{ background: '#8080ff', border: '2px #8080ff solid' }}
        >
          Start Now
        </CDBBtn>
      </div>
    </section>
  );
};

export default Landing;
