class Fortune < ActiveRecord::Base
  validates :quotation, length: {
    minimum: 8,
    maximum: 256
  }
  validates :source, presence: true
end
