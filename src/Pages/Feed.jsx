import React, { useState } from 'react';
import "./Feed.css";
import { forumData } from "../Data/forumData";

export const Feed = () => {
  const [votes, setVotes] = useState({});
  const [selectedTags, setSelectedTags] = useState([]);

  const handleVote = (postId, type) => {
    const currentVotes = { ...votes };
    const currentVoteCount = currentVotes[postId] || 0;
    let newVoteCount = currentVoteCount;

    if (type === 'upvote') {
      newVoteCount += 1;
    } else if (type === 'downvote') {
      newVoteCount -= 1;
    }

    currentVotes[postId] = newVoteCount;
    setVotes(currentVotes);
  };

  const handleTagClick = (tag) => {
    const index = selectedTags.indexOf(tag);
    if (index === -1) {
      setSelectedTags([...selectedTags, tag]);
    } else {
      const updatedTags = selectedTags.filter((t) => t !== tag);
      setSelectedTags(updatedTags);
    }
  };

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      {forumData.posts.map((post) => (
        <div key={post.postId} className="post">
          <div className="post-header">
            <div className="post-user">
              <img src={post.picUrl} alt={post.username} />
              <div>
                <h3>{post.username}</h3>
                <p>{post.name}</p>
              </div>
            </div>
            <div className="vote-buttons">
              <button
                className="vote-button"
                onClick={() => handleVote(post.postId, 'upvote')}
              >
                Upvote
              </button>
              <button
                className="vote-button"
                onClick={() => handleVote(post.postId, 'downvote')}
              >
                Downvote
              </button>
            </div>
          </div>
          <div className="post-content">
            <p>{post.post}</p>
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className={selectedTags.includes(tag) ? 'selected' : ''}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p>{post.postDescription}</p>
          </div>
          <div className="vote-count">
            Votes: {votes[post.postId] || 0}
          </div>
          
        </div>
      ))}
    </div>
  );
};
