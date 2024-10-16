"use client";

import React, { useState, useEffect } from "react";
import FormatContent from "../../../components/FormatContent";
import { getAboutStudioContent, getDescriptionContent } from "../../../lib/api";
import SidebarMain from "../../../components/sidebar/SidebarMain";

const AboutPageContent = () => {
  const [description, setDescription] = useState([]);
  const [content, setContentStudio] = useState([]);
  const [mission, setMission] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutPageData = async () => {
      try {
        const descriptionContent = await getDescriptionContent();
        setDescription(descriptionContent);

        const aboutStudioContent = await getAboutStudioContent();
        setContentStudio(aboutStudioContent);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchAboutPageData();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error fetching data</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-12">
      {/* MAIN CONTENT */}
      <div className="col-span-12 md:col-span-8">
        <h2 className="font-extrabold text-7xl pb-16 md:text-9xl">
          Sobre Creatyum
        </h2>

        <p className="text-2xl mb-8">{description}</p>

        <FormatContent blocks={content} />
      </div>

      {/* SIDEBAR */}
      <div className="col-span-12 mt-8 md:col-span-4 md:mt-0">
        <div>
          <SidebarMain />
        </div>
      </div>
    </div>
  );
};

export default AboutPageContent;
