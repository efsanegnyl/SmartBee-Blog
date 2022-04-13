import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  RiFacebookLine,
  RiInstagramLine,
  RiTwitterLine,
  RiSearchLine
} from "react-icons/ri";

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
      <header>
        <div className="bg-black text-white flexEnd mb-2">
          <button type="submit" className="btn btn-link">
            Abone Ol
          </button>
          <div className="p-2">
            <ul className="flexEnd container">
              <a href=""  className="px-2">
                  <li className="p-2 btnSocial	" >
                    <RiFacebookLine/>
                  </li>
              </a>
              <a href="" className="px-2">
                <li className="p-2 btnSocial" >
                  <RiInstagramLine/>
                </li>
              </a>
              <a href="" className="px-2">
                <li className="p-2 btnSocial" >
                  <RiTwitterLine/>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center   container">
          <div className="md:w-2/12">
            <a href="/">
              <img src="https://via.placeholder.com/300x200" alt="" width="100%" />
            </a>
          </div>
          <div>
            <button className="btn btn-primary mr-2">
              Giriş Yap
            </button>
            <button className="btn text-bermuda-200 ">
              Kayıt Ol
            </button>
          </div>
        </div>
        <nav className="container">
          <ul>
            <li><a href="#"> Kategori</a></li>
            <li><a href="#"> Kategori</a></li>
            <li><a href="#"> Kategori</a></li>
            <li><a href="#">Kategori</a></li>
            <li><a href="#">Kategori</a></li>
          </ul>


          <div className="search-box">
            <button className="btn-search flex justify-center items-center" >
                <RiSearchLine/>
            </button>
            <input type="text" className="input-search" placeholder="Type to Search..."/>
          </div>
        </nav>

      </header>

  );
}

export default Header;
