# == Schema Information
#
# Table name: features
#
#  id         :bigint           not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

# class Feature < ApplicationRecord

#   FEATURE_LIST = %w(awd audio_input bike_rack bluetooth child_seat convertible gps heated_seats longterm_car pet_friendly ski_rack snow_tires_chains sunroof toll_pass usb_input)

#   validates :type, inclusion: FEATURE_LIST, unless: -> { feature.blank? }

#   has_many :car_features,
#     foreign_key: :feature_id,
#     class_name: :CarFeature

#   has_many :cars,
#     through: :car_features,
#     source: :car

# end


