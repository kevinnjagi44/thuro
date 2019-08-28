json.partial! 'api/reviews/review' review: @review

json.fName "#{@review.author.fname}"