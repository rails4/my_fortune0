class Fortune < ActiveRecord::Base

  validates :quotation, length: {
    minimum: 8,
    maximum: 256
  }
  validates :source, presence: true

  def self.to_csv
    CSV.generate do |csv|
      csv << column_names
      all.each do |fortune|
        csv << fortune.attributes.values_at(*column_names)
      end
    end
  end

end
