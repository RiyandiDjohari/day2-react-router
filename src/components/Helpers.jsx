import React from "react";
import Layout from "./Layout";
import { helpersItems } from "../constants";

const Helpers = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col gap-6 items-center justify-center my-12">
          <h2 className="text-3xl font-bold">Pilih Topik Sesuai Kendalamu</h2>
          <div className="flex flex-col lg:flex-row gap-4">
            {helpersItems.map((item) => (
              <div key={item.id} className="max-w-[300px] rounded-lg border border-[#DEDEDE] p-4 flex flex-wrap flex-col justify-between gap-4">
                <div className="flex gap-4 items-center">
                  <img src="/vite.svg" alt="image" />
                  <h4 className="font-semibold">{item.title}</h4>
                </div>
                <ul>
                  {item.features.map((feature,index) => (
                    <li key={feature + index} className="text-sm mb-2 cursor-pointer">{feature}</li>
                  ))}
                </ul>
                <button className="w-fit py-1 px-2 bg-white rounded border border-secondary text-secondary hover:text-white hover:bg-secondary hover:border-transparent">Lihat Semua Artikel</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Helpers;
