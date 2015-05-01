json.array!(@fortunes) do |fortune|
  json.extract! fortune, :id, :quotation, :source
  json.url fortune_url(fortune, format: :json)
end
