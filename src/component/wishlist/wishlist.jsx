import './wishlist.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { onRemove } from '../../action/action';

const WishList = () => {
  const savedJob = useSelector(state => state.changeCart);
  const dispatch = useDispatch();

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1>Saved Jobs</h1>
        <Link to="/" className="back-home-btn">← Back to Job Listings</Link>
      </div>

      {savedJob.length === 0 ? (
        <p className="empty-message">You haven’t saved any jobs yet. Start exploring and save your favorites!</p>
      ) : (
        <div className="wishlist-grid">
          {savedJob.map(job => (
            <div className="wishlist-card" key={job.id}>
              <div className="wishlist-card-header">
                <h2>{job.jobTitle}</h2>
                <button
                  className="remove-btn"
                  onClick={() => dispatch(onRemove(job.id))}
                >
                  ✕
                </button>
              </div>
              <p className="company">{job.companyName}</p>
              <p className="location">📍 {job.jobGeo || 'Remote'}</p>
              <p className="job-level">🧭 {job.jobLevel || 'Any Level'}</p>

              <a
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="apply-btn"
              >
                View & Apply →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishList;