# == Schema Information
#
# Table name: rentals
#
#  id         :bigint           not null, primary key
#  renter_id  :integer          not null
#  car_id     :integer          not null
#  start_date :datetime         not null
#  end_date   :datetime         not null
#  status     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rental < ApplicationRecord

  STATUSES = ['approved', 'denied', 'pending']

  validates :renter_id, :car_id, :start_date, :end_date, :status, presence: true
  validates :status, inclusion: STATUSES

  belongs_to :renter,
    foreign_key: :renter_id,
    class_name: :User

  belongs_to :car,
    foreign_key: :car_id,
    class_name: :Car

end
