json.partial! 'api/reviews/review' review: @review

json.fName "#{@review.user.fname}"