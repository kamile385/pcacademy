import React from 'react';
import CountUp from 'react-countup';

export default function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row content">
        <div className="col-sm-12">
          <div align="center">
            <div className="well">
              <h4>Dashboard</h4>

              <textarea
                rows="3"
                cols="90"
                placeholder="Leave a note"
                style={{ background: 'white', width: '100%' }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="well">
                <h4>Students</h4>
                <CountUp start={0} end={15} duration={3} useEasing />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="well">
                <h4>Teachers</h4>
                <CountUp start={0} end={4} duration={3} useEasing />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="well">
                <h4>Programs</h4>
                <CountUp start={0} end={10} duration={3} useEasing />
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-sm-4">
              <div className="well" />
            </div>
            <div className="col-sm-4">
              <div className="well">
                <p>Text</p>
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="well">
                <p>Text</p>
                <p>Text</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-8">
              <div className="well">
                <p>Text</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="well">
                <p>Text</p>
              </div>
            </div> 
          </div> */}
        </div>
      </div>
    </div>
  );
}
