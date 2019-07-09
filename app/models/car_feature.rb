# == Schema Information
#
# Table name: car_features
#
#  id         :bigint           not null, primary key
#  feature_id :integer          not null
#  car_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# class CarFeature < ApplicationRecord

#   belongs_to :car,
#     foreign_key: :car_id,
#     class_name: :Car

#   belongs_to :feature,
#     foreign_key: :feature_id,
#     class_name: :Feature

# end
