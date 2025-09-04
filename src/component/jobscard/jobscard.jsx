import { useEffect, useState } from 'react';
import './jobscard.css';
import { useDispatch } from 'react-redux';
import { onAdd } from '../../action/action';

const JobCard = ({ jobItem }) => {
  const {
    jobTitle,
    companyName,
    jobGeo,
    jobType,
    jobLevel,
    salaryMin,
    salaryMax,
    salaryCurrency,
    salaryPeriod,
    url,
  } = jobItem;


  const dispatch = useDispatch();


  const salaryText = salaryMin && salaryMax
    ? `${salaryCurrency} ${salaryMin / 1000}K - ${salaryMax / 1000}K / ${salaryPeriod}`
    : 'Salary not disclosed';


  return (
    <div className="job-card">
      <div className="job-card-header">
        <img
          src='/jobi.svg'
          className="job-logo"
        />
        <button onClick={()=>{dispatch(onAdd(jobItem))}} className="save-btn">♡ Save</button>
      </div>

      <div className="job-title">{jobTitle}</div>

      <div className="job-meta">
        <span>📍 {jobGeo || 'Remote'}</span>
        <span>💼 {jobType?.[0] || 'N/A'}</span>
        <span>🧭 {jobLevel || 'Any'}</span>
      </div>

      <div className="company-name">{companyName}</div>
      <div className="salary">{salaryText}</div>

      <div className="card-divider" />

      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="apply-btn">Apply</button>
      </a>
    </div>
  )
}

export default JobCard;