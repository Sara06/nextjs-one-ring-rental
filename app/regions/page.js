"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

// Example region data
const regions = [
  { name: 'Sydney', location: 'New South Wales', imageUrl: 'http://placehold.it/760x670' },
  { name: 'Melbourne', location: 'Victoria', imageUrl: 'http://placehold.it/760x670' },
  { name: 'Brisbane', location: 'Queensland', imageUrl: 'http://placehold.it/760x670' },
  { name: 'Perth', location: 'Western Australia', imageUrl: 'http://placehold.it/760x670' },
  { name: 'Adelaide', location: 'South Australia', imageUrl: 'http://placehold.it/760x670' },
  { name: 'Hobart', location: 'Tasmania', imageUrl: 'http://placehold.it/760x670' },
];

const Regions = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Regions in Australia</h1>
              <div className="grid-style1 clearfix">
                {regions.map((region, index) => (
                  <div key={index} className="item col-md-4">
                    <div className="image">
                      <Link href={`/regions/${region.name.toLowerCase()}`}>
                        <h3>{region.name}</h3>
                        <span className="location">{region.location}</span>
                      </Link>
                      <Image
                        src={region.imageUrl}
                        alt={`${region.name} in ${region.location}`}
                        width={760}
                        height={300}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>&copy; 2024 One Ring Rentals. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Regions;