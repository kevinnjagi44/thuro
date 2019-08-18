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

require 'test_helper'

class CarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
