import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);  // Optional rating
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate feedback
    if (feedback.trim() === '') {
      formErrors.feedback = 'Feedback is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Feedback:", feedback);
      console.log("Rating:", rating || 'No rating given');

      // Clear form fields
      setFeedback('');
      setRating(0);
      setErrors({});
    }
  };

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <form onSubmit={onSubmitHandler} className='w-full min-h-[80vh] flex items-center'>
      <div className='flex flex-col p-8 text-sm min-w-full shadow-lg rounded-lg item-start sm:w-96 m-auto text-zinc-900 gap-3'>

        <div className='w-full'>
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            className='border border-zinc-300 rounded p-2 w-full mt-1'
            id="feedback"
            rows="5"
            onChange={(e) => setFeedback(e.target.value)}
            value={feedback}
            required
          />
          {errors.feedback && <p className="text-red-500 text-sm">{errors.feedback}</p>}
        </div>

        <div className='w-full'>
          <label>Rate Us (optional):</label>
          <div className='flex gap-2 mt-2'>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRating(star)}
                className={`cursor-pointer text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-400'}`}
              >
                ★
              </span>
            ))}
          </div>
          {rating > 0 && <p className="text-sm mt-1">You rated us {rating} star{rating > 1 ? 's' : ''}</p>}
        </div>

        <button className='w-[100px]  bg-green-200 rounded-md py-2 px-5 mt-5'>Submit</button>
      </div>
    </form>
  );
};

export default FeedbackForm;
