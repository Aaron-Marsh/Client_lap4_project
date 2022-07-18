import React, { useEffect } from "react";

export function HomeRandom() {
  useEffect(() => {}, []);

  return (
    <div className="home-random">
      <div className="book">
        <div className="gap"></div>
        <div className="pages">
          <div className="page">
            <div className="test-page"></div>
          </div>
          <div className="page">
            <div className="test-page"></div>
          </div>
          <div className="page">
            <div className="test-page"></div>
          </div>
          <div className="page">
            <div className="test-page"></div>
          </div>
          <div className="page">
            <div className="test-page"></div>
          </div>
          <div className="page">
            <div className="test-page"></div>
          </div>
        </div>
        <div className="flips">
          <div className="flip flip1">
            1
            <div className="flip flip2">
              2
              <div className="flip flip3">
                3
                <div className="flip flip4">
                  4
                  <div className="flip flip5">
                    5
                    <div className="flip flip6">
                      6<div className="flip flip7"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
