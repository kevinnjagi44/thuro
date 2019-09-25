export const getPendingRentalRequests = (currentUserId, rentals) => {

  // debugger
 return (
   Object.values(rentals)
   .filter(rental => rental.owner_id === currentUserId && rental.status === "approved")
   .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
 )
};
