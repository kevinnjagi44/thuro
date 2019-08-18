# == Schema Information
#
# Table name: cars
#
#  id                :bigint           not null, primary key
#  owner_id          :integer          not null
#  rate              :integer          not null
#  make              :string           not null
#  model             :string           not null
#  year              :integer          not null
#  color             :string           not null
#  transmission      :string           not null
#  seats             :integer          not null
#  description       :text             not null
#  plate             :string           not null
#  address           :string           not null
#  city              :string           not null
#  state             :string           not null
#  zip               :integer          not null
#  lat               :float            not null
#  lng               :float            not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  mpg               :integer
#  awd               :boolean          default(FALSE), not null
#  audio_input       :boolean          default(FALSE), not null
#  bike_rack         :boolean          default(FALSE), not null
#  bluetooth         :boolean          default(FALSE), not null
#  child_seat        :boolean          default(FALSE), not null
#  convertible       :boolean          default(FALSE), not null
#  gps               :boolean          default(FALSE), not null
#  heated_seats      :boolean          default(FALSE), not null
#  longterm_car      :boolean          default(FALSE), not null
#  pet_friendly      :boolean          default(FALSE), not null
#  ski_rack          :boolean          default(FALSE), not null
#  snow_tires_chains :boolean          default(FALSE), not null
#  sunroof           :boolean          default(FALSE), not null
#  toll_pass         :boolean          default(FALSE), not null
#  usb_input         :boolean          default(FALSE), not null
#  doors             :integer
#

class Car < ApplicationRecord

  TRANSMISSION_TYPE = %w(automatic manual none).freeze

  COLORS = %w(black brown gray silver white red orange yellow gold purple blue green).freeze

  validates :rate, :make, :model, :year, :color, :transmission, :seats, :description, :plate, :address, :city, :state, :zip, :doors, presence: true

  validates :awd, :audio_input, :bike_rack, :bluetooth, :child_seat, :convertible, :gps, :heated_seats, :longterm_car, :pet_friendly, :ski_rack, :snow_tires_chains, :sunroof, :toll_pass, :usb_input, inclusion: [true, false]

  validates :transmission, inclusion: TRANSMISSION_TYPE, unless: -> { transmission.blank? }

  # validates :color, inclusion: COLORS 

  belongs_to :user,
    foreign_key: :owner_id, 
    class_name: :User

  has_many :rentals,
    foreign_key: :car_id,
    class_name: :Rental

  has_many :reviews,
    foreign_key: :car_id,
    class_name: :Review

  # has_many :features,
  #   through: :car_features,
  #   source: :feature

  has_many_attached :photos
  
  # has_one_attached :photo

  # def self.in_bounds(bounds)
  #   self.where("lat < ?", bounds[:northEast][:lat])
  #     .where("lat > ?", bounds[:southWest][:lat])
  #     .where("lng > ?", bounds[:southWest][:lng])
  #     .where("lng < ?", bounds[:northEast][:lng])
  # end

end

