import React from "react";
import Layout from "./Layout";
import { helpersItems, mediaItems } from "../constants";

const Media = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <div className="my-8">
          <div className="text-center lg:text-start mb-8">
          <h2 className="text-3xl font-bold">Media</h2>
          <p>Informasi seputar padi UMKM</p>
          </div>
          <div className="flex flex-col justify-center items-center lg:justify-start lg:flex-row gap-6">
            {mediaItems.map((item) => (
              <div key={item.id} className="max-w-[320px] rounded-lg flex flex-wrap flex-col justify-between gap-4">
                <div className="flex gap-4 items-center justify-center px-4 py-12 w-full bg-primary rounded-lg">
                  <img src="/vite.svg" alt="image" className="h-[180px]"/>
                </div>
                <div className="text-justify">
                  <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                  <p className="text-sm font-semibold">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Media;
