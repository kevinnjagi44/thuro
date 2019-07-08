# == Schema Information
#
# Table name: cars
#
#  id           :bigint           not null, primary key
#  owner_id     :integer          not null
#  rate         :integer          not null
#  make         :string           not null
#  model        :string           not null
#  year         :integer          not null
#  color        :string           not null
#  transmission :string           not null
#  seats        :integer          not null
#  description  :text             not null
#  plate        :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip          :integer          not null
#  lat          :float            not null
#  lng          :float            not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Car < ApplicationRecord

  TRANSMISSION_TYPE = %w(automatic manual none).freeze

  COLORS = %w(black brown gray silver white red orange yellow gold purple blue green).freeze

  validates :rate, :make, :model, :year, :color, :transmission, :seats, :description, :plate, :address, :city, :state, :zip, :mpg, presence: true

  validates :transmission, inclusion: TRANSMISSION_TYPE, unless: -> { color.blank? }

  belongs_to :user,
    foreign_key: :owner_id, 
    class_name: :User

  has_many :features,
    through: :car_features,
    source: :feature

  has_one_attached :photo

  # def self.in_bounds(bounds)
  #   self.where("lat < ?", bounds[:northEast][:lat])
  #     .where("lat > ?", bounds[:southWest][:lat])
  #     .where("lng > ?", bounds[:southWest][:lng])
  #     .where("lng < ?", bounds[:northEast][:lng])
  # end

end
