export const createReview = (review, success) => {
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: review,
    success
  });
};

export const fetchReviews = (spotId, success) => {
  $.ajax({
    method: "GET",
    url: "api/reviews",
    data: { spotId },
    success,
    error: () => console.log("error in fetchreviews in review api util")
  });
};
