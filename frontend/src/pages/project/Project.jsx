import React, { useEffect } from 'react';
import './Project.css';
import Headings from '../../component/Headings/Headings';
import MyWork from '../../component/MyWork/MyWork';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading, SetPortfolioData } from '../../redux/createSlice';
import axios from 'axios';

function Project() {
  const dispatch = useDispatch();
  const { portfolioData, loading } = useSelector((state) => state.root);

  const getPortfolioData = async () => {
    try {
      dispatch(ShowLoading()); // Show loading before API call
      const response = await axios.get("https://portfolio-render-uvwf.onrender.com/api/getData"); // Replace with localhost link if testing locally
      dispatch(SetPortfolioData(response.data.projects)); // Assuming portfolioData contains a "projects" array
    } catch (error) {
      console.error("Error fetching portfolio data:", error); // Log the error for debugging
    } finally {
      dispatch(HideLoading()); // Ensure loading is hidden after API call completes
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <div className='projects'>
      <Headings title="Project I" span="Made" />
      <p></p>
      {loading && ( // Display loading state
        <div className="spinner-container">
          <div className="spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      )}
      <div className="project-container">
        {portfolioData && // Ensure portfolioData exists before mapping
          portfolioData.map((project, index) => (
            <MyWork
              key={index}
              title={project.title} // Corrected the spelling of "tittle" to "title"
              img={project.img}
              disc={project.disc}
              url={project.url}
            />
          ))}
      </div>
    </div>
  );
}

export default Project;
