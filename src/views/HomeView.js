import React, { useState } from "react";
import Layout from "components/partials/layout";

import { RiTwitterLine } from "react-icons/ri";
import { FiGithub, FiInstagram } from "react-icons/fi";
function HomeView() {
  return (
    <Layout>
      <div>
        <section className="container">
          <div>
            <div >
              <div >
                <span>12/04/22 </span>
                <span>13:23</span>
              </div>
              <div>
                <img src="" alt=""/>
              </div>
              <div >
                <h1>BAŞLIK</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque consectetur consequuntur
                  cupiditate, deserunt dolores doloribus est eveniet fuga illo perferendis quasi quidem rerum sunt
                  tempore vel veritatis vitae, voluptate.</p>
                <div>
                  <p>23 Beğeni</p>
                  <p>17 Yorum</p>
                </div>
              </div>

            </div>
          </div>
          <div>
            <div>
              <h2>En yeniler</h2>
              <p>Makale</p><span>111 beğeni</span>
            </div>
            <div>
              <h2>En çok okunanlar</h2>
              <p>Makale</p><span>111 beğeni</span>
            </div>
          </div>
        </section>

      </div>

    </Layout>
  );
}

export default HomeView;
