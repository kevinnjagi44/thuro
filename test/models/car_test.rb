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

require 'test_helper'

class CarTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
