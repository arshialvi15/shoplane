
import React from 'react'
import {Routes, Route} from 'react-router-dom';

import MensClothing from './MensClothing/MensClothing';
import WomensClothing from './WomensClothing/WomensClothing';
import All from './All/All';
import Electronics from './Electronics/Electronics';
import Jewellery from './Jewellery/Jewellery';



function Feed() {
  return (
    <div>
      <Routes>
 <Route path="./All" element={<All />}></Route>
 <Route path="./Electronics" element={<Electronics />}></Route>
 <Route path="./Jewellery" element={<Jewellery />}></Route>
 <Route path="./MensClothing" element={<MensClothing />}></Route>
 <Route path="./WomensClothing" element={<WomensClothing />}></Route>
     
      </Routes>
    </div>
  )
}

export default Feed;
